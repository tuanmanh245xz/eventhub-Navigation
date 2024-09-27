import {View, Text, StyleProp, TextStyle} from 'react-native';
import React from 'react';
import {appColors} from '../constants/appColors';
import {fontFamilies} from '../constants/fontFamilies';
import {globalStyles} from '../styles/globalStyles';

interface Props {
  text: string;
  color?: string;
  size?: number;
  flex?: number;
  font?: string;
  styles?: StyleProp<TextStyle>;
  title?: boolean;
  numberOfline?: number;
}

const TextComponent = (props: Props) => {
  const {text, size, flex, font, color, styles, title,numberOfline} = props;

  return (
    <Text
      numberOfLines={numberOfline}
      style={[
        globalStyles.text,
        {
          color: color ?? appColors.text,
          flex: flex ?? 0,
          fontSize: size ?? title ? 24 : 15,
          fontFamily: font ?? title ? fontFamilies.bold : fontFamilies.regular,
        },
        styles,
      ]}>
      {text}
    </Text>
  );
};

export default TextComponent;
