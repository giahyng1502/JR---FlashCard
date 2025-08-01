import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useAppTheme } from "../../hooks";
import HeaderComponent from "../../components/ui/header_component.tsx";
import Container from "../../components/ui/container.tsx";
import StudyList from "./study_list.tsx";
import {useVisitCounter} from "../../hooks/use_visit.ts";
import {useNavigation} from "@react-navigation/native";
import {MainNavigationProp, NameScreenProp} from "../../navigation";
import {showInterstitialAd} from "../../components/ads/Interstitia_ads.tsx";



const StudyUi = () => {
    const { counters, reset } = useVisitCounter();
    const { theme } = useAppTheme();
    const navigation = useNavigation<MainNavigationProp>();

    const handleAddScreen = () => {
        navigation.navigate(NameScreenProp.add_data);
    };


    useEffect(() => {
        const count = counters[NameScreenProp.add_data] || 0;
        if (count >= 3) {
            showInterstitialAd();
            reset(NameScreenProp.add_data);
        }
    }, [counters, reset]); // Theo dõi riêng count

    return (
        <Container>
            <HeaderComponent title={"Study"} isAdd handleAddScreen={handleAddScreen} />
            <StudyList />
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default StudyUi;
