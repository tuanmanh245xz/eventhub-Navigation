import { View, Text, StyleProp, ViewStyle, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyles } from '../styles/globalStyles';
import { appColors } from '../constants/appColors';


interface Props {
    onPress?: () => void;
    children: ReactNode;
    bgColor?: string;
    styles?: StyleProp<ViewStyle>;
    isShadow?: boolean;
    color?: string;
  }

const CardComponent = (props: Props) => {
    const {onPress,children,bgColor,styles,isShadow,color} = props;
    const styleShadow:any = [globalStyles.card,isShadow ?globalStyles.shadow : undefined,{bacgroundColor:color ?? appColors.white },styles];
  return (
    <TouchableOpacity style={styleShadow} onPress={onPress}>
     {children}
    </TouchableOpacity>
  )
}

export default CardComponent