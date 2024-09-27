import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '../../styles/globalStyles'

const SearchEvents = ({navigation, route}:any) => {
  const {isFilter}: {isFilter:boolean} = route.params;
  console.log(isFilter)
  return (
    <View style={[globalStyles.container, {justifyContent:'center',alignItems:'center'}]}>
      <Text style={{color:'#000'}}>SearchEvents</Text>
    </View>
  )
}

export default SearchEvents