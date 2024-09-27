import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AddSquare, Calendar, Location, User } from 'iconsax-react-native';
import React, { ReactNode } from 'react';
import { Platform } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { CircleComponent, TextComponent } from '../components/index';
import { appColors } from '../constants/appColors';
import { AddNewScreen } from '../screens';
import EventNavigator from './EventNavigator';
import ExploreNavigator from './ExploreNavigator';
import MapNavigator from './MapNavigator';
import ProfileNavigator from './ProfileNavigator';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarStyle: {
        height: Platform.OS === 'ios' ? 88 : 68,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appColors.white,
      },
      tabBarIcon: ({focused, color, size}) => {
        let icon: ReactNode;
        color = focused ? appColors.primary : appColors.gray;
        size = 20;
        switch (route.name) {
          case 'Explore':
            icon = <MaterialIcons name="explore" size={size} color={color} />;
            break;

          case 'Events':
            icon = <Calendar size={size} variant="Bold" color={color} />;
            break;
          case 'Map':
            icon = <Location size={size} variant="Bold" color={color} />;
            break;
          case 'Profile':
            icon = <User size={size} variant="Bold" color={color} />;
            break;

          case 'Add':
            icon = (
              <CircleComponent size={52} styles={{marginTop: Platform.OS === 'android' ? -50 : -60,}}>
                <AddSquare size={24} color={appColors.white} variant='Bold' />
              </CircleComponent>
              // <View style={[globalStyles.shadow,{
              //   width:52,
              //   height:52,
              //   borderRadius:100,
              //   backgroundColor:appColors.primary,
              //   justifyContent:'center',
              //   alignItems:'center',
              //   marginTop: Platform.OS === 'android' ? -50 : -60,
              // }]}>
              //   <AddSquare size={24} color={appColors.white} variant='Bold' />
              // </View>
            );
            break;
        }
        return icon;
      },
      tabBarIconStyle: {
        marginTop: 8,
      },
      tabBarLabel({focused}) {
        return route.name === 'Add' ? null : (
          <TextComponent
            text={route.name}
            flex={0}
            size={12}
            color={focused ? appColors.primary : appColors.gray}
            styles={{
              marginBottom: Platform.OS === 'android' ? 12 : 0,
            }}
          />
        );
      },
    })}
     >
      <Tab.Screen name="Explore" component={ExploreNavigator} options={{tabBarShowLabel:false}} />
      <Tab.Screen name="Events" component={EventNavigator} options={{tabBarShowLabel:false}} />
      <Tab.Screen name="Add" component={AddNewScreen} options={{tabBarShowLabel:false}} />
      <Tab.Screen name="Map" component={MapNavigator} options={{tabBarShowLabel:false}}/>
      <Tab.Screen name="Profile" component={ProfileNavigator}  options={{tabBarShowLabel:false}}/>
    </Tab.Navigator>
  );
};

export default TabNavigator;
