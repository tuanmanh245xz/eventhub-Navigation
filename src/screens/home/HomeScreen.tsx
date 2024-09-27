import {View, Text, Button, StatusBar, SafeAreaView, TouchableOpacity, Platform} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { globalStyles } from '../../styles/globalStyles';
import { appColors } from '../../constants/appColors';
import RowComponent from '../../components/RowComponent';
import { ArrowDown, HambergerMenu, Notification } from 'iconsax-react-native';
import TextComponent from '../../components/TextComponent';
import SpaceComponent from '../../components/SpaceComponent';
import { fontFamilies } from '../../constants/fontFamilies';
import CircleComponent from '../../components/CircleComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({navigation}:any) => {
  return (
    <View style={[globalStyles.container]}>
        <StatusBar barStyle={'light-content'} />
      
      <View style={{
        backgroundColor:appColors.primary,
        height:179,
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        paddingTop:Platform.OS  === 'android' ?StatusBar.currentHeight : 42,
        paddingHorizontal:20,
       }}>
        <SpaceComponent height={20} />
        <RowComponent>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <HambergerMenu size={24} color={appColors.white} />
          </TouchableOpacity>

        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <RowComponent>
            <TextComponent text='Current loca' color={appColors.white} styles={{fontSize:12}}/>
            <MaterialIcons name='arrow-drop-down'  size={18} color={appColors.white} />
          </RowComponent>
          <TextComponent text='New york . USA'  color={appColors.white} font={fontFamilies.medium} styles={{fontSize:12}}/>
        </View>
        <CircleComponent color='#5D56F3' size={36}>
          <View>
            <Notification size={18} color={appColors.white} />
            <View style={{
              backgroundColor: '#02E9FE',
              width: 10,
              height: 10,
              borderRadius: 4,
              borderWidth: 2,
              borderColor: '#524CE0',
              position: 'absolute',
              top: -2,
              right: -2,
            }}/>

        </View>
        </CircleComponent>
        </RowComponent>
       </View>
       <View style={{flex:1}}></View>
     
     
     
    </View>
  );
};

export default HomeScreen;
