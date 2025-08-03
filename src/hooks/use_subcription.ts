import { useEffect, useState } from "react";
import Purchases from 'react-native-purchases';
import { Alert } from "react-native";

export const useSubscriptionPrices = () => {
    const [monthlyPrice, setMonthlyPrice] = useState<string>("49.000đ");
    const [monthlyIntroPrice, setMonthlyIntroPrice] = useState<string>("29.000đ");
    const [yearlyPrice, setYearlyPrice] = useState<string>("499.000đ");
    const [yearlyIntroPrice, setYearlyIntroPrice] = useState<string>("229.000đ");

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const getOffer = async () => {
            try {
                const offerings = await Purchases.getOfferings();
                const currentOffering = offerings.current;

                if (!currentOffering) {
                    throw new Error("Không có gói khả dụng tại thời điểm này.");
                }

                const monthlyPackage = currentOffering.availablePackages.find(
                    (p) => p.packageType === Purchases.PACKAGE_TYPE.MONTHLY
                );
                const yearlyPackage = currentOffering.availablePackages.find(
                    (p) => p.packageType === Purchases.PACKAGE_TYPE.ANNUAL
                );

                if (monthlyPackage) {
                    const price = monthlyPackage.product.priceString ?? "49.000đ";
                    const intro = monthlyPackage.product.introPrice?.priceString ?? price;

                    setMonthlyPrice(price);
                    setMonthlyIntroPrice(intro);
                }

                if (yearlyPackage) {
                    const price = yearlyPackage.product.priceString ?? "499.000đ";
                    const intro = yearlyPackage.product.introPrice?.priceString ?? price;

                    setYearlyPrice(price);
                    setYearlyIntroPrice(intro);
                }

                setError(null);
            } catch (err: any) {
                console.warn("Lỗi khi lấy giá subscriptions:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getOffer();
    }, []);

    const handleRestore = async () => {
        try {
            const result = await Purchases.restorePurchases();
            if (result?.entitlements?.active['premium']) {
                Alert.alert('✅ Phục hồi thành công', 'Chào mừng bạn trở lại Premium!');
            } else {
                Alert.alert('⚠️ Không tìm thấy gói đã mua');
            }
        } catch (error: any) {
            Alert.alert('❌ Lỗi', error.message || 'Không thể phục hồi.');
        }
    };

    return {
        monthlyPrice,
        monthlyIntroPrice,
        yearlyPrice,
        yearlyIntroPrice,
        loading,
        error,
        handleRestore,
    };
};
