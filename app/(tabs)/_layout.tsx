import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function TabsLayout() {
  return (
    <Tabs
    screenOptions={{
        tabBarActiveTintColor:'#ffd60a',
        headerShown:false,
        tabBarStyle:{backgroundColor:'#413f3fff',height:60,borderTopWidth:0,padding:0},
        tabBarLabelStyle:{fontSize:16}
    }}
    >
        <Tabs.Screen
        name='home'
        options={{
            title:'Home',
            tabBarIcon:({color,focused}) => (
                <View
                style={[
                    styles.iconstyle,{borderTopColor: focused ? '#ffd60a' : 'transparent',}
                ]}
                >
                    <Ionicons name='home' size={28} color={color}/>
                </View>
            )
        }}
        />

        <Tabs.Screen
        name='course'
        options={{
            title:'Course',
            tabBarIcon: ({color,focused})=> (
                <View
                style={[
                    styles.iconstyle,{borderTopColor: focused ? '#ffd60a' : 'transparent',}
                ]}
                >
                    <Ionicons name='book' size={28} color={color}/>
                </View>
            )
        }}
        />

        <Tabs.Screen
        name='checkin'
        options={{
            title:'Check-in',
            tabBarIcon:({color,focused})=>(
                <View
                style={[
                    styles.iconstyle,{borderTopColor: focused ? '#ffd60a' : 'transparent',}
                ]}
                >
                    <Ionicons name='calendar' size={28} color={color}/>
                </View>
            )
        }}
        />

        <Tabs.Screen 
        name='chat'
        options={{
            title:'Chat',
            tabBarIcon:({color,focused})=>(
                <View
                style={[
                    styles.iconstyle,{borderTopColor: focused ? '#ffd60a' : 'transparent',}
                ]}
                >
                    <Ionicons name='chatbubble' size={28} color={color}/>
                </View>
            )
        }}
        />

        <Tabs.Screen
        name='settings'
        options={{
            title:'Settings',
            tabBarIcon: ({color,focused})=>(
                <View
                style={[
                    styles.iconstyle,{borderTopColor: focused ? '#ffd60a' : 'transparent',}
                ]}
                >
                    <Ionicons name='settings' size={28} color={color}/>
                </View>
            )
        }}
        />
    </Tabs>
  )
}

const styles = StyleSheet.create({
    iconstyle:{
        borderTopWidth:2, 
        height:40,
        width:60,
        alignItems:'center',
        justifyContent:'center'
    }
})