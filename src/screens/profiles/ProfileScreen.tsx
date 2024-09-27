import { View, Text } from 'react-native'
import React from 'react'

const ProfileScreen = (props) => {
  console.log(props.usernameApi)
  return (
    <View>
      <Text style={{color:'#000'}}>{props.usernameApi}</Text>
    </View>
  )
}

export default ProfileScreen