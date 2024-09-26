import { Lock, Sms } from 'iconsax-react-native';
import React, { useState } from 'react';
import { Image, Switch } from 'react-native';
import { ButtonComponent, ContainerComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components/index';
import { appColors } from '../../constants/appColors';
import SocialLogin from './components/SocialLogin';

const LoginScreen = ({navigation}:any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setisRemember] = useState(true);

  return (
    <ContainerComponent isImageBackground isScroll>
      
     <SectionComponent styles={{
      justifyContent:'center',
      alignItems:'center',
      marginTop:75,
     }}>
      <TextComponent size={19} text='Sign In' styles={{marginBottom:20}}/>
      <Image  source={require('../../assets/images/text-logo.png')} style={{
        width:162,
        height:114,

      }}/>
     </SectionComponent>
     <SectionComponent>
      
     <InputComponent
        value={email}
        placeholder="Email"
        onChange={val => setEmail(val)}
        // isPassword
        allowClear
        affix={<Sms size={22} color={appColors.gray} />}
      />
      <InputComponent
        value={password}
        placeholder="Password"
        onChange={val => setPassword(val)}
        isPassword
        allowClear
        affix={<Lock size={22} color={appColors.gray} />}
      />
      <RowComponent justify='space-between'>
        <RowComponent onPress={() => setisRemember(!isRemember)}>
        <Switch  value={isRemember}
              onChange={() => setisRemember(!isRemember)} 
              trackColor={appColors.primary} thumbColor={appColors.white} />
          <TextComponent text='Remember me'/>
        </RowComponent>
        <ButtonComponent
            text="Forgot Password?"
            onPress={() => navigation.navigate('ForgotPassword')}
            type="text"
          />
      </RowComponent>
      
     </SectionComponent>
     <SectionComponent>
      <ButtonComponent text='SIGN IN' type='primary' onPress={() => navigation.navigate('HomeScreen')} />
     </SectionComponent>
     <SectionComponent >
      
        <SpaceComponent height={10}/>
     </SectionComponent>
     <SocialLogin />
     <SectionComponent>
      <RowComponent justify='center'>
        <TextComponent  text='Don’t have an account?'/>
        <ButtonComponent  type='link' text='Sign Up'  onPress={() => navigation.navigate('SignUpScreen')}/>
      </RowComponent>
     </SectionComponent>
    </ContainerComponent>
  );
};

export default LoginScreen;
