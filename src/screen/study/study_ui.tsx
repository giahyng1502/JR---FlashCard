import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useAppTheme} from "../../hooks";
import HeaderComponent from "../../components/ui/header_component.tsx";
import Container from "../../components/ui/container.tsx";
import StudyList from "./study_list.tsx";

const StudyUi = () => {

    const {theme} = useAppTheme()

    return (
        <Container>
            <HeaderComponent title={"Study"} isAdd/>
            <StudyList/>
        </Container>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default StudyUi;
