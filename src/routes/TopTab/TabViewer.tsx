import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView , SceneMap } from 'react-native-tab-view';
import Profile from '../../screens/Profile/Profile';
import Setting from '../../screens/Setting/Setting';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from '../BottomTab/BottomTabNavigator';


const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
  );
  
  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
  );
  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    //setting : Setting
  });
  
  export default function TabViewer() {
    const layout = useWindowDimensions();
  
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'first' },
      { key: 'second', title: 'second' },
      // {key:'three', title: "Chattter"}
    //{ key: 'setting', title: 'Setting' },

    ]);
  
    return (
        
      <TabView lazy
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        style={{backgroundColor:"brown"}}        
        
   
      />
    );
  }
  