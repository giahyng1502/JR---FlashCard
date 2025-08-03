import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
import { useAppTheme } from '../hooks';
import TextComponent from '../components/ui/text_component.tsx';
import { darkenColor } from '../utils';
import { FONT_SIZE, MARGIN, PADDING, RADIUS } from '../styles';
import Purchases from 'react-native-purchases';
import { useSubscriptionPrices } from '../hooks/use_subcription.ts';
import { useTranslation } from 'react-i18next';

type Props = {
  onBackPress?: () => void;
};

const PremiumModal = ({ onBackPress }: Props) => {
  const { theme, themeMode } = useAppTheme();
  const background_color = darkenColor(themeMode, theme.background);
  const {
    monthlyPrice,
    monthlyIntroPrice,
    yearlyPrice,
    yearlyIntroPrice,
    handleRestore,
  } = useSubscriptionPrices();
  const { t } = useTranslation();

  const handlePurchase = async (type: 'monthly' | 'yearly') => {
    try {
      const offerings = await Purchases.getOfferings();
      const pkg = offerings?.current?.availablePackages.find((p) =>
          type === 'monthly'
              ? p.packageType === Purchases.PACKAGE_TYPE.MONTHLY
              : p.packageType === Purchases.PACKAGE_TYPE.ANNUAL
      );
      if (pkg) {
        const purchase = await Purchases.purchasePackage(pkg);
        if (purchase?.customerInfo?.entitlements.active.premium) {
          Alert.alert(t('premium.success_title'), t('premium.success_message'));
          onBackPress?.();
        }
      } else {
        Alert.alert(t('premium.not_found_title'), t('premium.not_found_message'));
      }
    } catch (error: any) {
      if (!error.userCancelled) {
        Alert.alert(t('premium.error_title'), error.message || t('premium.error_generic'));
      }
    }
  };

  const ternOfService = 'https://devpull.top/nihongo_mate/terms_of_service';
  const privacyPolicy = 'https://devpull.top/nihongo_mate/privacy-policy';

  const handleOpenWeb = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.warn(`Don't know how to open URL: ${url}`);
    }
  };

  const restorePress = () => {
    handleRestore();
    onBackPress?.();
  };

  return (
      <TouchableWithoutFeedback onPress={onBackPress}>
        <View style={styles.container}>
          <TouchableWithoutFeedback>
            <View style={[styles.modalBox, { backgroundColor: background_color }]}>
              <TextComponent style={[styles.title, { color: theme.textPrimary }]}>
                {t('premium.premium_title')}
              </TextComponent>

              <TextComponent style={[styles.description, { color: theme.textSecondary }]}>
                {t('premium.premium_description')}
              </TextComponent>

              {/* Monthly Plan */}
              <TouchableOpacity
                  style={[styles.buyBtn, { backgroundColor: theme.primary,borderWidth :2,borderColor : theme.activeColor }]}
                  onPress={() => handlePurchase('monthly')}
              >
                <View style={styles.row}>
                  <View style={styles.textContainer}>
                    <TextComponent bold size={FONT_SIZE.LG}>{t('premium.monthly_title')}</TextComponent>
                    <TextComponent>{t('premium.monthly_desc')}</TextComponent>
                  </View>
                  <View style={styles.priceTag}>
                    {monthlyIntroPrice && monthlyPrice && monthlyIntroPrice !== monthlyPrice ? (
                        <>
                          <TextComponent style={{ textDecorationLine: 'line-through', color: theme.textSecondary }}>
                            {monthlyPrice}
                          </TextComponent>
                          <TextComponent bold style={{ color: theme.textPrimary }}>
                            {monthlyIntroPrice}
                          </TextComponent>
                        </>
                    ) : (
                        <TextComponent bold style={{ color: theme.textPrimary }}>
                          {monthlyPrice || '—'}
                        </TextComponent>
                    )}
                  </View>
                </View>
              </TouchableOpacity>

              {/* Yearly Plan */}
              <TouchableOpacity
                  style={[styles.buyBtn, { backgroundColor: theme.primary,borderWidth :2,borderColor : theme.activeColor }]}
                  onPress={() => handlePurchase('yearly')}
              >
                <View style={styles.row}>
                  <View style={styles.textContainer}>
                    <TextComponent bold size={FONT_SIZE.LG}>
                      {t('premium.yearly_title')}
                    </TextComponent>
                    <TextComponent>
                      {t('premium.yearly_desc')}
                    </TextComponent>
                  </View>
                  <View style={styles.priceTag}>
                    {yearlyIntroPrice && yearlyPrice && yearlyIntroPrice !== yearlyPrice ? (
                        <>
                          <TextComponent style={{ textDecorationLine: 'line-through', color: theme.textSecondary }}>
                            {yearlyPrice}
                          </TextComponent>
                          <TextComponent bold style={{ color: theme.textPrimary }}>
                            {yearlyIntroPrice}
                          </TextComponent>
                        </>
                    ) : yearlyPrice && (
                        <TextComponent bold style={{ color: theme.textPrimary }}>
                          {yearlyPrice}
                        </TextComponent>
                    )}
                  </View>
                </View>
              </TouchableOpacity>

              <View style={{ height: PADDING.MD }} />
              <View style={styles.row}>
                <TouchableOpacity onPress={() => handleOpenWeb(privacyPolicy)} style={styles.cancelBtn}>
                  <TextComponent bold>{t('premium.privacy')}</TextComponent>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleOpenWeb(ternOfService)} style={styles.cancelBtn}>
                  <TextComponent bold>{t('premium.terms')}</TextComponent>
                </TouchableOpacity>

                <TouchableOpacity onPress={restorePress} style={styles.cancelBtn}>
                  <TextComponent bold>{t('premium.restore')}</TextComponent>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalBox: {
    width: '95%',
    borderRadius: RADIUS.LG,
    paddingHorizontal: PADDING.MD,
    paddingVertical: PADDING.LG,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    marginBottom: 24,
  },
  buyBtn: {
    borderRadius: RADIUS.LG,
    padding: 16,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
  },
  priceTag: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  cancelBtn: {
    paddingVertical: 8,
  },
});

export default PremiumModal;
