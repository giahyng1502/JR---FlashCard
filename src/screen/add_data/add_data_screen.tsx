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



const AddDataScreen = () => {
  const [backgroundColor, setBackgroundColor] = useState<CardColorName>("blue_ocean")
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [type, setType] = useState<Type>("vocabulary")
    const { increment} = useVisitCounter();

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
    const effectiveMode = getEffectiveThemeMode(themeMode);
    useEffect(() => {
        increment(NameScreenProp.add_data);
    }, []);
    const navigation = useNavigation<any>();
    const handleBack = () => {
        navigation.goBack();
    };

    const darken = effectiveMode === "dark" ? -15 : 15;
    return  (
      <Container>
        <HeaderComponent title={"Add List"} isBack/>
        <ScrollView showsVerticalScrollIndicator={false} style={{flex : 1}}>
        <TextComponent color={theme.textSecondary} selectable={false}>Example</TextComponent>
        <StudyItem item={item}/>
        <TextComponent selectable={false} size={FONT_SIZE.SM} color={theme.textSecondary}>Title</TextComponent>
        <InputComponent value={title} onChangeText={setTitle} placeholder="Study name (e.g. N5 Kanji)" />

        <TextComponent selectable={false} size={FONT_SIZE.SM} color={theme.textSecondary}>Description</TextComponent>
        <InputComponent value={description} onChangeText={setDescription} placeholder="E.g. 100 daily-use N5 words"  />
        <TextComponent selectable={false} size={FONT_SIZE.SM} color={theme.textSecondary}>Type</TextComponent>
        <SelectTypeStudent currentSelect={type} setCurrentSelect={setType}/>

        <TextComponent selectable={false} size={FONT_SIZE.SM} color={theme.textSecondary}>Colors</TextComponent>
            <ThemeSelectorStudy onSelectTheme={setBackgroundColor} />


        <TouchableOpacity style={[styles.button,{
          backgroundColor: tinycolor(theme.primary).darken(darken).toString(),
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
          <TextComponent bold>Let’s Go</TextComponent>
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
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default AddDataScreen;
