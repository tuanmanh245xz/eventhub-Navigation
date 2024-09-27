import React from 'react';
import { appInfo } from '../constants/appInfos';
import CardComponent from './CardComponent';
import TextComponent from './TextComponent';
import { EventModel } from '../models/EventModel';
import AvatarGroup from './AvatarGroup';
import RowComponent from './RowComponent';
import { Location } from 'iconsax-react-native';
import { appColors } from '../constants/appColors';
import { ImageBackground, View } from 'react-native';
import  FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { globalStyles } from '../styles/globalStyles';

interface Props {
    item: EventModel;
    type: 'list' | 'card';
    onPress?: () => void;
  }

const EventItem = (props: Props) => {
    const {item, type, onPress} = props;
    console.log(item)
    return (
       <CardComponent isShadow styles={{width:appInfo.sizes.WIDTH *0.7, padding:10}} onPress={() => {}}>
        <ImageBackground style={{flex:1,marginBottom:12,height:131}} source={require('../assets/images/banner1.png')} imageStyle={{
            resizeMode:'cover',
           
            borderRadius:12,

        }}>
        <RowComponent justify='space-between' styles={{marginHorizontal:10, marginVertical:10}}>
        <CardComponent styles={[globalStyles.noPadding,]}>
            <TextComponent text='10' styles={{fontWeight:'bold'}} color='#F0635A' />
            <TextComponent text='JUNE'styles={{fontSize:12}} color='#F0635A'/>
        </CardComponent>
        <CardComponent styles={[globalStyles.noPadding]}>
            <FontAwesome6 name='bookmark' size={12} color={'#F0635A'} />
        </CardComponent>
        </RowComponent>
        </ImageBackground>
        <TextComponent numberOfline={1} text={item.title} title styles={{fontSize:13}} />
        <AvatarGroup/>
        <RowComponent>
            <Location size={12}  color={appColors.text1} variant='Bold'/>
            <View style={{marginRight:10}}></View>
            <TextComponent numberOfline={1} text={item.location.address} styles={{fontSize:12}} />
        </RowComponent>
       </CardComponent>
    )
}

export default EventItem