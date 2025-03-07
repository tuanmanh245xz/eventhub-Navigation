import {View, Text, Button, StatusBar, SafeAreaView, TouchableOpacity, Platform} from 'react-native';
import React, { ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { globalStyles } from '../../styles/globalStyles';
import { appColors } from '../../constants/appColors';
import RowComponent from '../../components/RowComponent';
import { ArrowDown, HambergerMenu, Notification, SearchNormal1, Sort } from 'iconsax-react-native';
import TextComponent from '../../components/TextComponent';
import SpaceComponent from '../../components/SpaceComponent';
import { fontFamilies } from '../../constants/fontFamilies';
import CircleComponent from '../../components/CircleComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TagComponent from '../../components/TagComponent';
import CategoriesList from '../../components/CategoriesList';



const HomeScreen = ({navigation}:any) => {
  return (
    <View style={[globalStyles.container]}>
        <StatusBar barStyle={'light-content'} />
      
      <View style={{
        backgroundColor:appColors.primary,
        height: Platform.OS == 'android' ? 166 : 182,
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        paddingTop:Platform.OS  === 'android' ?StatusBar.currentHeight : 42,
       
       }}>
        <View style={{paddingHorizontal:16}}>
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
        <SpaceComponent height={20}/>
        <RowComponent >
          <RowComponent styles={{flex:1}} onPress={() => navigation.navigate('SearchEvents',{
            isFilter : false,
          })}>
            <SearchNormal1 variant='TwoTone' size={16} color={appColors.white}/>
            <View style={{
              width:1,
              backgroundColor:appColors.gray2,
              height:18,
              marginHorizontal:10,
            }}/>
            <TextComponent text='Search...' color={appColors.gray2} />
          </RowComponent>
            <TagComponent bgColor='#5D56F3' onPress ={() => navigation.navigate('SearchEvents',{
               isFilter : true,
            })} lable='Filters' icon={
              <CircleComponent size={20} color='#A29EF0'>
                  <Sort size={16} color='white' />
              </CircleComponent>
              
              }/>
        </RowComponent>
        <SpaceComponent height={20}/>
        </View>
       
        <View style={{marginBottom:-9}}/>
        <CategoriesList isFill/>
       </View>
       <View style={{flex:1}}></View>
     
     
     
    </View>
  );
};

export default HomeScreen;
