import React, { useEffect, useRef } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    LayoutChangeEvent,
    Animated,
} from 'react-native';
import { Type } from '../../models';
import { useAppTheme } from '../../hooks';
import { FONT_SIZE } from '../../styles';
import TextComponent from "../../components/ui/text_component.tsx";

const types: Type[] = ['kanji', 'vocabulary', 'grammar'];

type Props = {
    currentSelect: Type;
    setCurrentSelect: (val: Type) => void;
};

const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

const SelectTypeStudent = ({ currentSelect, setCurrentSelect }: Props) => {
    const { theme } = useAppTheme();
    const activeIndex = types.findIndex(t => t === currentSelect);
    const translateX = useRef(new Animated.Value(0)).current;
    const itemWidth = useRef(0);

    useEffect(() => {
        if (itemWidth.current > 0) {
            Animated.spring(translateX, {
                toValue: activeIndex * itemWidth.current,
                useNativeDriver: true,
                tension: 180,
                friction: 20,
            }).start();
        }
    }, [activeIndex]);

    const onLayout = (e: LayoutChangeEvent) => {
        const width = e.nativeEvent.layout.width / types.length;
        itemWidth.current = width;
        translateX.setValue(activeIndex * width); // Set initial position
    };

    return (
        <View
            style={[styles.wrapper, { backgroundColor: theme.secondary }]}
            onLayout={onLayout}
        >
            <Animated.View
                style={[
                    styles.slider,
                    {
                        width: `${100 / types.length}%`,
                        transform: [{ translateX }],
                        backgroundColor: theme.primary,
                    },
                ]}
            />
            {types.map((type, index) => {
                const isActive = type === currentSelect;
                return (
                    <TouchableOpacity
                        key={type}
                        style={styles.option}
                        onPress={() => setCurrentSelect(type)}
                        activeOpacity={0.8}
                    >
                        <TextComponent
                            bold={isActive}
                            style={{
                                fontSize: FONT_SIZE.MD,
                                color: isActive ? theme.activeColor : theme.textPrimary,
                            }}
                        >
                            {capitalize(type)}
                        </TextComponent>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        borderRadius: 12,
        overflow: 'hidden',
        position: 'relative',
        marginVertical: 8,
    },
    slider: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        borderRadius: 12,
        zIndex: 0,
        margin: 3,
        elevation: 4,
    },
    option: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        zIndex: 1,
    },
});

export default SelectTypeStudent;
