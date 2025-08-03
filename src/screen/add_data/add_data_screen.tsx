import React, {useEffect, useState} from 'react';
import Container from "../../components/ui/container.tsx";
import HeaderComponent from "../../components/ui/header_component.tsx";
import {ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import StudyItem from "../study/study_item.tsx";
import {Study, Type} from "../../models";
import TextComponent from "../../components/ui/text_component.tsx";
import {useAppTheme} from "../../hooks";
import InputComponent from "../../components/ui/input_component.tsx";
import {FONT_SIZE, MARGIN, RADIUS} from "../../styles";
import SelectTypeStudent from "./select_type.tsx";
import tinycolor from "tinycolor2";
import ThemeSelectorStudy, {getEffectiveThemeMode} from "./theme_selected.tsx";
import {CardColorName} from "../../theme";
import {useAddDataHook} from "./add_data_hook.ts";
import {BSON} from "realm";
import {NameScreenProp} from "../../navigation";
import {useVisitCounter} from "../../hooks/use_visit.ts";
import {NavigationContainerProps, useNavigation} from "@react-navigation/native";
import {darkenColor} from "../../utils";
import {useTranslation} from "react-i18next";



const AddDataScreen = () => {
  const [backgroundColor, setBackgroundColor] = useState<CardColorName>("blue_ocean")
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [type, setType] = useState<Type>("vocabulary")
    const { increment} = useVisitCounter();
    const { t } = useTranslation();
  const item = {
      _id: new BSON.ObjectId(),
    title: title ? title : "N5 Kanji - Basic Characters",
    description: description ? description : "Learn the basic kanji for JLPT N5 level.",
    createdAt: "2025-07-31T10:00:00Z",
    count: 0,
    type : type,
    background_name : backgroundColor,

  } as Study;

  const {addDataStudy} = useAddDataHook();

  const {theme,themeMode} = useAppTheme();

    useEffect(() => {
        increment(NameScreenProp.add_data);
    }, []);
    const navigation = useNavigation<any>();
    const handleBack = () => {
        navigation.goBack();
    };

    const background_color = darkenColor(themeMode,theme.primary);
    return  (
      <Container>
        <HeaderComponent title={"Add List"} isBack/>
        <ScrollView showsVerticalScrollIndicator={false} style={{flex : 1}}>
            <TextComponent size={FONT_SIZE.SM} color={theme.textSecondary}>{t('add_data.example')}</TextComponent>
        <StudyItem item={item}/>
            <TextComponent size={FONT_SIZE.SM} color={theme.textSecondary}>{t('add_data.title_label')}</TextComponent>
        <InputComponent value={title} onChangeText={setTitle}  placeholder={t('add_data.title_placeholder')}  />

        <TextComponent size={FONT_SIZE.SM} color={theme.textSecondary}>{t('add_data.description_label')}</TextComponent>
        <InputComponent value={description} onChangeText={setDescription} placeholder={t('add_data.description_placeholder')}  />
        <TextComponent size={FONT_SIZE.SM} color={theme.textSecondary}>{t('add_data.type_label')}</TextComponent>
        <SelectTypeStudent currentSelect={type} setCurrentSelect={setType}/>

        <TextComponent size={FONT_SIZE.SM} color={theme.textSecondary}>{t('add_data.color_label')}</TextComponent>
            <ThemeSelectorStudy onSelectTheme={setBackgroundColor} />


        <TouchableOpacity style={[styles.button,{
          backgroundColor: background_color,
        }]}
        onPress={()=>{
            addDataStudy({
                title,
                type,
                count : 0,
                background_name : backgroundColor,
                createdAt : new Date().toString(),
                description,
            })
            handleBack();
        }}
        >
          <TextComponent bold>{t('add_data.button_text')}</TextComponent>
        </TouchableOpacity>
        </ScrollView>

      </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height : 50,
    marginTop : MARGIN.MD,
    borderRadius : RADIUS.MD,
    elevation : 4
  },
});

export default AddDataScreen;
