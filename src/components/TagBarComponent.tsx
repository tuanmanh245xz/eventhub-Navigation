import { ArrowRight2 } from 'iconsax-react-native';
import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { appColors } from '../constants/appColors';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';

interface Props {
    title: string;
    onPress: () => void;
    styles?: StyleProp<TextStyle>;
  }

const TagBarComponent = (props:Props) => {
    const {title, onPress,styles} = props;
  return (
    <RowComponent styles={{marginBottom:30, paddingHorizontal:16}}>
        <TextComponent text={title} title styles={{fontSize:18}} flex={1}/>
        <RowComponent onPress={onPress}>
            <TextComponent text='See all' styles={{fontSize:14}} color={appColors.primary}/>
            <ArrowRight2 size={12} color={appColors.gray} variant='Bold'/>
        </RowComponent>
    </RowComponent>
  )
}

export default TagBarComponent