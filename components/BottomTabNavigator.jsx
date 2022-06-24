
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { MainStack } from "../navigation/MainStack";
import { ListStackComp } from "../navigation/ListStack";
import { AboutView } from "../screens/AboutView";
import { PersonalView } from "../screens/PersonalView";

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';


MainviewTab = ({data}) => {
    return (
        <MainStack />
    )
}

ListviewTab = () => {
    return (
        <ListStackComp />
    )
}

PersonalviewTab = () => {
    return (
        <PersonalView />
    )
}


AboutviewTab = () => {
    return (
        <AboutView/>
    )
}

const Tab = createBottomTabNavigator()

export const BottomTabNavigator = ({data, listData, room}) => {
  return (
      <>
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#c9e5e0',
                tabBarInactiveTintColor: '#c9e5e0',
                tabBarActiveBackgroundColor: '#364e4d',
                tabBarInactiveBackgroundColor: 'transparent',
                tabBarItemStyle: {
                    borderRadius:200,
                    marginRight: 25,
                    marginLeft: 25,
                    marginBottom: 5,
                    marginTop: 5,
                },
                tabBarStyle: {
                    display: "flex",
                    backgroundColor: 'transparant',
                    borderTopColor: 'transparent',
                    position: 'absolute',
                    boxShadow: 'none',
                    shadowOpacity: 0,
                    elevation:  0,
                }
            }}
        >


            <Tab.Screen 
                name="Main" 
                // component={MainviewTab}
                children={() => <MainStack data={data} room={room}/>}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" size={size} color={color} />
                    )
            }} />


            <Tab.Screen 
                name="List" 
                // component={ListviewTab} 
                children={() => <ListStackComp listData={listData}/>}
                options={{
                    tabBarLabel: 'List',
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="ios-list" color={color} size={size} />
                )
            }} />

            <Tab.Screen name="Personal" component={PersonalviewTab} options={{
                tabBarLabel: 'Personal',
                tabBarIcon: ({ color, size }) => (
                    <Octicons name="person" size={size} color={color} />
                )
            }} />

            <Tab.Screen name="About" component={AboutviewTab} options={{
                tabBarLabel: 'About',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="information" color={color} size={size} />
                )
            }} />

        </Tab.Navigator>
    </>
  )
}