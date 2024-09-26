import { Lock, PasswordCheck, Sms, User } from 'iconsax-react-native';
import React, { useState } from 'react';
import { Image, Switch } from 'react-native';
import { ButtonComponent, ContainerComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components/index';
import { appColors } from '../../constants/appColors';
import SocialLogin from './components/SocialLogin';


const initValue = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};


const SignUpScreen = ({navigation}:any) => {
 
  const [values, setValues] = useState(initValue);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<any>();
  const [isDisable, setIsDisable] = useState(true);

  const handleChangeValue = (key: string, value: string) => {
    const data: any = {...values};

    data[`${key}`] = value;

    setValues(data);
  };

  return (
    <ContainerComponent isImageBackground isScroll back>
       <SectionComponent styles={{marginTop:40,marginHorizontal:20}}>
      <RowComponent >
        
        <ButtonComponent  type='link' text='Back'onPress={() => navigation.navigate('LoginScreen')}/>
      </RowComponent>
     </SectionComponent>
     <SectionComponent styles={{
      justifyContent:'center',
      alignItems:'center',
      marginTop:10,
     }}>
      <TextComponent size={19} text='Sign UP' styles={{marginBottom:20}}/>
     
     </SectionComponent>
     <SpaceComponent height={20} />
     <SectionComponent>
      
     <InputComponent
        value={values.username}
        placeholder="full Name"
        onChange={val => handleChangeValue('username',val)}
        // isPassword
        allowClear
        affix={<User size={22} color={appColors.gray} />}
      />
       <InputComponent
        value={values.email}
        placeholder="Email"
        onChange={val => handleChangeValue('email',val)}
        // isPassword
        allowClear
        affix={<Sms size={22} color={appColors.gray} />}
      />
     <InputComponent
        value={values.password}
        placeholder="Password"
        onChange={val => handleChangeValue('password',val)}
        // isPassword
        allowClear
        affix={<PasswordCheck size={22} color={appColors.gray} />}
      />
       <InputComponent
        value={values.confirmPassword}
        placeholder="confirmPassword"
        onChange={val => handleChangeValue('confirmPassword',val)}
        // isPassword
        allowClear
        affix={<PasswordCheck size={22} color={appColors.gray} />}
      />
      
     </SectionComponent>
     <SectionComponent>
      <ButtonComponent text='SIGN UP' type='primary' />
     </SectionComponent>
    
     <SocialLogin />
    
    </ContainerComponent>
  );
};

export default SignUpScreen;
