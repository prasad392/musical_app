// app/index.tsx
import React, { useEffect, useState } from 'react';
import {Ionicons} from '@expo/vector-icons';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
  Animated,
  Dimensions,
} from 'react-native';
import * as Font from 'expo-font';
import { useRouter } from 'expo-router';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Index() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const router = useRouter();
  const translateX = new Animated.Value(0);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        VinaSans: require('../assets/fonts/VinaSans-Regular.ttf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) return null;

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: true }
  );
  const onHandlerStateChange = ({ nativeEvent }: any) => {
    if (nativeEvent.translationX > 150) {
      router.push('/login');
    } else {
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.splash}>
          <Image
            source={require('@/assets/splash/image 4.png')}
            style={styles.splashimg}
            resizeMode="cover"
          />
          <View style={styles.sudarshini}>
            <Text style={styles.sudarshinitxt}>SUDARSHINI ACADEMY</Text>
          </View>
          <View style={styles.celeb}>
            <Text style={styles.celebtxt}>
              Celebrate the Soul of <Text style={{ color: '#f4f812ff' }}>Music</Text>
            </Text>
          </View>
        </View>
        <View style={styles.splashbox}>
          <Text style={styles.splashtxt}>
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis.
          </Text>
        </View>
        <View style={styles.swipebox}>
          <PanGestureHandler
            onGestureEvent={onGestureEvent}
            onEnded={onHandlerStateChange}
          >
            <Animated.View style={[styles.box, { transform: [{ translateX }] }]}>
              <Text style={styles.text}><Ionicons name="arrow-forward-circle-outline" size={28}/></Text>
            </Animated.View>
          </PanGestureHandler>
          <Text style={{fontSize:20,fontWeight:600}}>Swipe to get started</Text>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#1E1E1E',
  },
  splash: {
    position: 'relative',
  },
  splashimg: {
    width: 394,
    height: 550,
  },
  sudarshini: {
    position: 'absolute',
    width: 153,
    height: 88,
    top: 64,
    left: 26,
  },
  sudarshinitxt: {
    color: '#EBEBEB',
    fontFamily: 'VinaSans',
    fontWeight: '400',
    fontSize: 36,
    lineHeight: 36,
    textAlign: 'left',
  },
  celeb: {
    width: 294,
    height: 96,
    marginLeft: 20,
  },
  celebtxt: {
    color: '#EBEBEB',
    fontFamily: 'poppins',
    fontWeight: '400',
    fontSize: 36,
    lineHeight: 40,
  },
  splashtxt: {
    color: '#D9D9D9CC',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'poppins',
    lineHeight: 25,
    marginTop: 20,
  },
  splashbox: {
    width: 340,
    height: 120,
  },
  swipebox: {
    marginTop: 40,
    marginBottom: 90,
    width: 354,
    height: 52,
    backgroundColor: '#F0CF45',
    borderRadius: 28,
    // justifyContent: 'space-evenly',
    overflow: 'hidden',
    flexDirection:'row',
    alignItems:'center',
    gap:30
  },
  box: {
    backgroundColor: '#3e3e3e',
    borderRadius: 50,
    width: 50,
    height:53,
    alignItems: 'center',
    justifyContent:'center',
    zIndex:1000
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});