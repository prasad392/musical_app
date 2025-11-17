import { View, Text, StatusBar, StyleSheet, ScrollView, Platform, TouchableOpacity, Switch } from 'react-native';
import React, { useState } from 'react';
import Componentheader from '@/src/components/componentheader';
import { Ionicons } from '@expo/vector-icons';
import Userprofilemodal from '@/src/modals/settingsModals/userprofilemodal';
import MediaAccessmodal from '@/src/modals/settingsModals/mediaaccessnodals/mediaAccessmodal';

const Settings = () => {

  const [settingsClicks,setSettingsClicks] = useState({
    isnotify: true,
    isdark: true,
    useropen: false,
    medAccess: false,
  })
  return (
    <>
      <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1D1D1D" />
      <Componentheader headerText='Settings'/>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.userProfileBox}>
            <Text style={styles.ufText} >User Profile</Text>
            <TouchableOpacity
            onPress={()=>setSettingsClicks(prev=>({...prev,useropen: true}))}
            >
              <Text> <Ionicons name='chevron-forward' color={"#fff"} size={40}/> </Text>
            </TouchableOpacity>
        </View>

        {/* notification setting */}
        <View style={[styles.userProfileBox,{ marginVertical:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}]}>
            <Text style={styles.ufText}>Notifications</Text>
            <Switch
            value={settingsClicks.isnotify}
            onValueChange={()=>setSettingsClicks(prev=>({...prev,isnotify: !prev.isnotify}))}
            trackColor={{false:'#000',true:'#000'}}
            thumbColor={settingsClicks.isnotify?'#ffd60a':'#555'}
            style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
            />
        </View>

        {/* dark mode setting */}
        <View style={[styles.userProfileBox,{ marginVertical:0,borderTopLeftRadius:0,borderTopRightRadius:0}]}>
            <Text style={styles.ufText}>Dark Mode</Text>
            <Switch
            value={settingsClicks.isdark}
            onValueChange={()=>setSettingsClicks(prev=>({...prev,isdark: !prev.isdark}))}
            trackColor={{false:'#000',true:'#000'}}
            thumbColor={settingsClicks.isdark?'#ffd60a':'#555'}
            style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
            />
        </View>

        {/* media access setting */}
        <View style={[styles.userProfileBox,{marginBottom:10}]}>
            <Text style={styles.ufText} >Media Access</Text>
            <TouchableOpacity
            onPress={()=>setSettingsClicks(prev=>({...prev,medAccess: true}))}
            >
              <Text> <Ionicons name='chevron-forward' color={"#fff"} size={40}/> </Text>
            </TouchableOpacity>
        </View>

        <View style={[styles.userProfileBox,{marginTop:0,marginBottom:10}]}>
            <Text style={styles.ufText} >Change Password</Text>
            <TouchableOpacity
            >
              <Text> <Ionicons name='chevron-forward' color={"#fff"} size={40}/> </Text>
            </TouchableOpacity>
        </View>

        <View style={[styles.userProfileBox,{marginTop:0,marginBottom:10}]}>
            <Text style={styles.ufText} >Help <Ionicons name='help' size={24}/> </Text>
            <TouchableOpacity
            >
              <Text> <Ionicons name='chevron-forward' color={"#fff"} size={40}/> </Text>
            </TouchableOpacity>
        </View>

        {/* Share App setting */}
        <View style={[styles.userProfileBox,{marginTop:0,marginBottom:10}]}>
            <Text style={styles.ufText} >Share app</Text>
            <TouchableOpacity
            >
              <Text> <Ionicons name='chevron-forward' color={"#fff"} size={40}/> </Text>
            </TouchableOpacity>
        </View>

        <View style={[styles.userProfileBox,{marginTop:60,marginBottom:10}]}>
            <Text style={styles.ufText} >Log out</Text>
            <TouchableOpacity
            >
              <Text> <Ionicons name='log-out-outline' color={"#fff"} size={40}/> </Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </View>


    {/* Modals */}

    {/* user profile modal */}
    <View style={{display: settingsClicks.useropen ? 'flex' : 'none'}}>
      <Userprofilemodal 
      visible={settingsClicks.useropen}
      onClose={()=> setSettingsClicks(prev=>({...prev,useropen: false}))}
      />
    </View>

    {/* media access modal */}
    <View style={{display: settingsClicks.medAccess ? 'flex' : 'none'}}>
      <MediaAccessmodal
      visible={settingsClicks.medAccess}
      onClose={()=>setSettingsClicks(prev=>({...prev,medAccess: false}))}
      />
    </View>
    </>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D1D',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  userProfileBox:{
    backgroundColor:'#2d2d2d',
    marginHorizontal:'auto',
    marginVertical:20,
    width:'95%',
    height:80,
    borderRadius:12,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:15,
  },
  ufText:{
    color:'#fff',
    fontSize:24,
    fontWeight:300
  },

});

