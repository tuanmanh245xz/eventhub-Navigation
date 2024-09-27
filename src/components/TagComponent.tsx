import {View, Text, ViewStyle, TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';
import {RowComponent, TextComponent} from '.';
import { StyleProp } from 'react-native';
import { appColors } from '../constants/appColors';
import { globalStyles } from '../styles/globalStyles';

interface Props {
  icon?: ReactNode;
  lable: string;
  color?: string;
  textColor?:string;
  bgColor?:string;
  styles?:StyleProp<ViewStyle>;
  onPress?: () => void;
}

const TagComponent = (props: Props) => {
  const {icon, color, bgColor, lable, styles,textColor,onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} 
        style={[
            globalStyles.row,
            globalStyles.tags,
            
            
            {
                backgroundColor: bgColor?bgColor : appColors.white,
            },
            styles,
        ]}
    >
        {icon && icon}
        <TextComponent 
        text={lable}
        styles={{marginLeft:icon ? 8 : 0}} 
        color={textColor ? textColor: bgColor ?  appColors.white: appColors.gray} />
    </TouchableOpacity>
  )
};

export default TagComponent;