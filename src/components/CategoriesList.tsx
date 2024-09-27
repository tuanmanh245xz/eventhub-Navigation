import { View, Text, FlatList } from 'react-native'
import React, { ReactNode } from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { appColors } from '../constants/appColors';
import TagComponent from './TagComponent';
import { globalStyles } from '../styles/globalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  isFill?: boolean;
}

interface Category {
  key: string;
  lable: string;
  icon: ReactNode;
  iconColor: string;
  Color:string,
}

const CategoriesList = (props: Props) => {
  const {isFill} = props;
 
  const categories: Category[] = [
    {
      key: 'sport',
      lable: 'Sport',
      icon: (<FontAwesome6
         name='basketball'
          size={16} 
          color={isFill ? appColors.white : '#F0635A'}/>
      ),
      Color: '#F0635A',
    },
    {
      key: 'music',
      lable: 'Music',
      icon: (<FontAwesome6
         name='music'
          size={16} 
          color={isFill ? appColors.white  : '#F59762'}/>
      ),
      Color: '#F59762',
    },
    {
      key: 'food',
      lable: 'food',
      icon: (<Ionicons
          name='fast-food'
           size={16}
          color={isFill ? appColors.white  : '#29D697'}/>
      ),
      Color: '#29D697',
    },
    {
      key: 'art',
      lable: 'Art',
      icon: (<FontAwesome6
         name='pen-ruler'
          size={16} 
          color={isFill ? appColors.white : '#46CDFB'}/>
      ),
      Color: '#46CDFB',
    },
  
  ];
 
  return (
   
    <FlatList
    style={{marginBottom:-16, paddingHorizontal:16}}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories} 
      renderItem={({item,index}) => 
      <TagComponent
      styles={[{minWidth:82,marginRight: index === categories.length - 1 ? 28:12 }]} 
      bgColor={isFill ? item.Color : appColors.white}
      onPress={() => {}} 
      icon={item.icon}
      lable={item.lable} />
    } />
  )
}

export default CategoriesList