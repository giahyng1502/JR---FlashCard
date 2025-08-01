import { Platform } from "react-native";

type PlatformKey = "android" | "ios";

type AdName =
    | "banner"
    | "interstitial_free_feature"
    | "native_list_vocab"
    | "open_app"
    | "rewarded_interstitial_lesson_complete";

type AdUnit = Record<PlatformKey, string>;

const isSupportedPlatform = (os: string): os is PlatformKey =>
    os === "ios" || os === "android";

const AdUnitIds: Record<AdName, AdUnit> = {
    banner: {
        android: "ca-app-pub-5898693170038678/6110226086",
        ios: "ca-app-pub-5898693170038678/6110226086",
    },
    interstitial_free_feature: {
        android: "ca-app-pub-5898693170038678/7834085888",
        ios: "ca-app-pub-5898693170038678/7834085888",
    },
    native_list_vocab: {
        android: "ca-app-pub-5898693170038678/5782637610",
        ios: "ca-app-pub-5898693170038678/5782637610",
    },
    open_app: {
        android: "ca-app-pub-5898693170038678/4086412567",
        ios: "ca-app-pub-5898693170038678/4086412567",
    },
    rewarded_interstitial_lesson_complete: {
        android: "ca-app-pub-5898693170038678/8628578210",
        ios: "ca-app-pub-5898693170038678/8628578210",
    },
};

export const getAdUnitId = (type: AdName): string | null => {
    const os = Platform.OS;

    if (!isSupportedPlatform(os)) {
        console.warn(`[AdMob] Unsupported platform: ${os}`);
        return null;
    }

    if (!(type in AdUnitIds)) {
        console.warn(`[AdMob] Invalid ad type: "${type}"`);
        return null;
    }

    const id = AdUnitIds[type as AdName]?.[os];

    if (!id) {
        console.warn(`[AdMob] Missing ad unit ID for "${type}" on "${os}"`);
        return null;
    }

    return id;
};
