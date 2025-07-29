import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import { useAppTheme } from '../../hooks';
import { FONTS } from '../../styles';

type Props = TextProps & {
    size?: number;
    weight?: TextStyle['fontWeight'];
    color?: string;
    bold ?: boolean;
    align?: TextStyle['textAlign'];
};

const TextComponent: React.FC<Props> = ({
                                            children,
                                            style,
                                            size = 16,
                                            bold,
                                            color,
                                            align = 'left',
                                            ...rest
                                        }) => {
    const { theme } = useAppTheme();

    return (
        <Text
            selectable={true}
            {...rest}
            style={[
                {
                    fontSize: size,
                    fontFamily: bold ? FONTS.BOLD : FONTS.REGULAR,
                    color: color || theme.textPrimary,
                    textAlign: align,
                    lineHeight : size * 1.5,
                    flexWrap: 'wrap',
                },
                style,
            ]}
        >
            {children}
        </Text>
    );
};

export default React.memo(TextComponent);
