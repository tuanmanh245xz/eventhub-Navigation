import { View, Text, StyleProp, ViewStyle, TouchableHighlight, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyles } from '../styles/globalStyles';

interface Props {
    justify?:
      | 'center'
      | 'flex-start'
      | 'flex-end'
      | 'space-between'
      | 'space-around'
      | 'space-evenly'
      | undefined;
    styles?: StyleProp<ViewStyle>;
    children: ReactNode;
    onPress?: () => void;
  }
const RowComponent = (props : Props) => {
    const {styles, justify, children, onPress} = props;
    const localStyle = [globalStyles.row,{justifyContent:justify} ,styles]
  return onPress? <TouchableOpacity activeOpacity={1} onPress={onPress} style={localStyle} >{children}</TouchableOpacity> :(
    <View style={localStyle}>
     {children}
    </View>
  )
}

export default RowComponent