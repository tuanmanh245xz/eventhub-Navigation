import { View, Text, StyleSheet, Platform, StatusBar, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { appColors } from '../constants/appColors'
import RowComponent from './RowComponent'
import ButtonComponent from './ButtonComponent'
import TextComponent from './TextComponent'
import { globalStyles } from '../styles/globalStyles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SpaceComponent from './SpaceComponent'
import { Bookmark2, Calendar, Logout, Message2, MessageQuestion, Setting2, Sms, User } from 'iconsax-react-native'
const DrawerCustom = ({navigation}:any) => {
  const userAPi = true;
  const usernameApi = "Admin";

  const size = 20;
  const color = appColors.gray;
  const profileMenu = [
    {
      key: 'MyProfile',
      title: 'My Profile',
      icon: <User  size={size} color={color} />,
    },
    {
      key: 'Message',
      title: 'Message',
      icon: <Message2 size={size} color={color} />,
    },
    {
      key: 'Calendar',
      title: 'Calendar',
      icon: <Calendar size={size} color={color} />,
    },
    {
      key: 'Bookmark',
      title: 'Bookmark',
      icon: <Bookmark2 size={size} color={color} />,
    },
    {
      key: 'ContactUs',
      title: 'Contact Us',
      icon: <Sms size={size} color={color} />,
    },
    {
      key: 'Settings',
      title: 'Settings',
      icon: <Setting2 size={size} color={color} />,
    },
    {
      key: 'HelpAndFAQs',
      title: 'Help & FAQs',
      icon: <MessageQuestion size={size} color={color} />,
    },
    {
      key: 'SignOut',
      title: 'Sign Out',
      icon: <Logout size={size} color={color} />,
    },
  ];
  const handleSignOut = async () => {
    
  }
  return (
    <View style={[localStyles.container]}>
      <TouchableOpacity 
      onPress={() => {
        navigation.closeDrawer();
        navigation.navigate('Profile',{
          screen:'ProfileScreen',
          param: {}
        });
      }}>
        {userAPi ? 
      
          <Image source={require('../assets/images/user.png')} resizeMode='contain' style={localStyles.avatar}/>
    
        : <Image source={require('../assets/images/iconLogo.png')} />}
        {usernameApi ? <TextComponent text={usernameApi} /> : <TextComponent text='User'/>}
        {/* <TextComponent text='User' title /> */}
        </TouchableOpacity>
          <FlatList showsVerticalScrollIndicator={false} data={profileMenu} style={{flex:1, marginVertical:20}} renderItem={({item,index}) => 
            <TouchableOpacity onPress={ 
            item.key === 'SignOut' ? () => handleSignOut() : () =>{
              console.log(item.key);
              navigation.closeDrawer();
            }}>
            <RowComponent styles={[localStyles.listItem]}>
              {item.icon}
              <TextComponent text={item.title} styles={[localStyles.listItemText]} />
            </RowComponent>
            </TouchableOpacity>
          }/>
      <RowComponent justify='flex-start'>
        {/* <ButtonComponent textColor='#00F8FF' text='Upgrade Pro' color='#00F8FF33'  type='primary'/> */}
        <TouchableOpacity  style={[globalStyles.button,{backgroundColor:'#00F8FF33'}]}>
          <MaterialCommunityIcons  name='crown' size={20} color='#00F8FF'/>
          <SpaceComponent width={8} />
          <TextComponent text='Upgrade Pro' color='#00F8FF'/>
        </TouchableOpacity>
      </RowComponent>
    </View>
  )
}

export default DrawerCustom
const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingVertical: Platform.OS === 'android' ? StatusBar.currentHeight : 48,
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 100,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  listItem: {
    paddingVertical: 12,
    justifyContent: 'flex-start',
    alignItems:'center'
  },

  listItemText: {
    paddingLeft: 12,
    
    
  },
});