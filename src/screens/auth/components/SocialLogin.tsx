import { Facebook, Google } from 'iconsax-react-native';
import React from 'react';
import ButtonComponent from '../../../components/ButtonComponent';
import RowComponent from '../../../components/RowComponent';
import SectionComponent from '../../../components/SectionComponent';
import TextComponent from '../../../components/TextComponent';
import { appColors } from '../../../constants/appColors';
import SpaceComponent from '../../../components/SpaceComponent';


const SocialLogin = () => {
  return (
    <SectionComponent>
     <RowComponent justify='center'>
     <TextComponent text='or continue with' color={appColors.gray} />
     </RowComponent>
     <SpaceComponent height={10}/>
     <ButtonComponent
        type="primary"
        styles={{marginTop:5}}
        color={appColors.white}
        textColor={appColors.text}
        text="Login with Google"
       
        iconFlex="left"
        icon={<Google size={24} color={appColors.primary}/>}
      />
       <ButtonComponent
        type="primary"
        styles={{marginTop:5}}
        color={appColors.white}
        textColor={appColors.text}
        text="Login with Facebook"
       
        iconFlex="left"
        icon={<Facebook size={24} color={appColors.primary}/>}
      />
    </SectionComponent>
  )
}

export default SocialLogin