import { useEffect, useState } from "react";
import {
    NativeAd,
    NativeAdView,
    NativeAsset,
    NativeAssetType,
    NativeMediaView, TestIds,
} from "react-native-google-mobile-ads";
import { getAdUnitId } from "../../utils";
import { View, Image, TouchableOpacity } from "react-native";
import TextComponent from "../ui/text_component.tsx";
import { FONT_SIZE } from "../../styles";
import {useAppTheme} from "../../hooks";
import {getEffectiveThemeMode} from "../../screen/add_data/theme_selected.tsx";
import tinycolor from "tinycolor2";

export const NativeComponent = () => {
    const [nativeAd, setNativeAd] = useState<NativeAd>();
    const unitId = getAdUnitId("native_list_vocab");
    const {theme,themeMode} = useAppTheme();
    const effectiveMode = getEffectiveThemeMode(themeMode);
    const darken = effectiveMode === "dark" ? -15 : 15;
    useEffect(() => {
        NativeAd.createForAdRequest(TestIds.NATIVE, {
            requestNonPersonalizedAdsOnly: true,
            startVideoMuted: false,
        })
            .then(setNativeAd)
            .catch(console.error);

        return () => {
            nativeAd?.destroy?.(); // cleanup
        };
    }, []);

    if (!nativeAd) return null;

    const { mediaContent, icon } = nativeAd;

    return (
        <NativeAdView nativeAd={nativeAd} style={{ padding: 10, borderRadius: 10, backgroundColor: theme.primary }}>
            <TextComponent size={FONT_SIZE.SM}>Sponsored</TextComponent>

            <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 8 }}>
                {icon && (
                    <NativeAsset assetType={NativeAssetType.ICON}>
                        <Image source={{ uri: icon.url }} style={{ width: 40, height: 40, borderRadius: 8, marginRight: 8 }} />
                    </NativeAsset>
                )}

                <NativeAsset assetType={NativeAssetType.HEADLINE}>
                    <TextComponent bold size={FONT_SIZE.LG}>{nativeAd.headline}</TextComponent>
                </NativeAsset>
            </View>

            <NativeAsset assetType={NativeAssetType.BODY}>
                <TextComponent size={FONT_SIZE.MD}>{nativeAd.body}</TextComponent>
            </NativeAsset>

            {/* Media Content (Image or Video) */}
            {mediaContent && (
                <NativeMediaView
                    resizeMode="cover"
                    style={{
                        height: mediaContent.hasVideoContent ? 200 : 120,
                        borderRadius: 8,
                        marginVertical: 8,
                    }}
                />
            )}

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
                <NativeAsset assetType={NativeAssetType.ADVERTISER}>
                    <TextComponent size={FONT_SIZE.SM} color="gray">{nativeAd.advertiser || nativeAd.store}</TextComponent>
                </NativeAsset>

                <NativeAsset assetType={NativeAssetType.CALL_TO_ACTION}>
                    <TouchableOpacity style={{ backgroundColor: tinycolor(theme.primary).darken(darken).toString(), paddingVertical: 6, paddingHorizontal: 12, borderRadius: 6 }}>
                        <TextComponent color="white" bold>{nativeAd.callToAction}</TextComponent>
                    </TouchableOpacity>
                </NativeAsset>
            </View>
        </NativeAdView>
    );
};
