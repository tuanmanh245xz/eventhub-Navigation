import React from 'react';
import { appInfo } from '../constants/appInfos';
import CardComponent from './CardComponent';
import TextComponent from './TextComponent';


interface Props {
    item: any;
    type: 'list' | 'card';
    onPress?: () => void;
  }

const EventItem = (props: Props) => {
    const {item, type, onPress} = props;
    return (
       <CardComponent styles={{width:appInfo.sizes.WIDTH *0.6,}} onPress={() => {}}>
        <TextComponent numberOfline={1} text='International Band Mu...' title styles={{fontSize:13}} />
       </CardComponent>
    )
}

export default EventItem