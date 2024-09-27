import { View, Text, StyleProp, ViewStyle, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyles } from '../styles/globalStyles';


interface Props {
    onPress: () => void;
    children: ReactNode;
    bgColor?: string;
    styles?: StyleProp<ViewStyle>;
  }

const CardComponent = (props: Props) => {
    const {onPress,children,bgColor,styles} = props;
  return (
    <TouchableOpacity style={[globalStyles.card,globalStyles.shadow,{},styles]} onPress={onPress}>
     {children}
    </TouchableOpacity>
  )
}

export default CardComponent