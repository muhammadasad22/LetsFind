import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import AllJobs from '../screens/AllJobs';
import Like from '../screens/Like';

const Tab = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        let iconName;
        if (route.name === 'Home') {
          iconName = isFocused ? 'home' : 'home-outline';
        } else if (route.name === 'Jobs') {
          iconName = isFocused ? 'briefcase' : 'briefcase-outline';
        } else if (route.name === 'Like') {
          iconName = isFocused ? 'heart' : 'heart-outline';
        }

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.tabButton,
              isFocused ? styles.tabButtonFocused : null,
            ]}>
            <Icon
              name={iconName}
              size={24}
              color={isFocused ? 'white' : '#B0B0B0'}
            />
            <Text
              style={{color: isFocused ? 'white' : '#B0B0B0', fontSize: 12}}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const AppBottomTab = () => {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Like" component={Like} />
      <Tab.Screen name="Jobs" component={AllJobs} />
    </Tab.Navigator>
  );
};

export default AppBottomTab;

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'black',
    borderRadius: 20,
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 15,
  },
  tabButtonFocused: {
    backgroundColor: '#3A3A3A',
  },
});
