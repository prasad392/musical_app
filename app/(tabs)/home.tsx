import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, ScrollView, Platform, ImageBackground, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Carousel from 'react-native-reanimated-carousel'
import Mentorcard from '@/src/components/customcards/mentorcard';
import { banners, categoriesData, mentorsdata } from '@/src/data/mochdata';
import Categorycard from '@/src/components/customcards/categorycard';
import Notifymodal from '@/src/modals/notifymodal';
import Viewallmodal from '@/src/modals/viewallmodal';
import Ebookmodal from '@/src/modals/ebookmodal';
import Eventmodal from '@/src/modals/eventmodals/eventmodal';
import Coursemodal from '@/src/modals/coursemodal/coursemodal';
const { width } = Dimensions.get('window');

type catitems ={
  title:string;
}
type res={
    id: number;
    title: string;
    content: string;
    icon: string;
} | undefined

const Home = () => {
  const [sections,setSections] =useState({
    notify:false,
    viewall:false,
  })
  const [iscategory,setIscategory] = useState({
    book:false,
    event:false,
    course:false,
  })

  const handlecatCick=(item:catitems)=>{
    const res:res = categoriesData.find(c=>c.title === item.title);
    console.log(res?.title)
    if(res?.title === 'Ebook'){
      setIscategory(prev=>({...prev,book:true}))
    }
    else if(res?.title === 'Events'){
      setIscategory(prev=>({...prev,event:true}))
    }
    else if(res?.title === 'Course'){
      setIscategory(prev=>({...prev,course:true}))
    }
    else{
      console.log('category not triggered')
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1D1D1D" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        {/* Header box */}

        <View style={styles.homeHeader}>
          <Text style={{ color: '#fff', fontSize: 24 }}>Hello, Prasad 😁</Text>
          <View style={styles.bellicon}>
            <TouchableOpacity onPress={()=>setSections(prev=>({...prev,notify:true}))}>
              <Ionicons name="notifications-circle-outline" size={42} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* corusel box */}

        <Carousel
          loop
          width={width}
          height={220}
          autoPlay={false}
          autoPlayInterval={3000}
          data={banners}
          scrollAnimationDuration={1000}
          renderItem={({ item }) => (
            <ImageBackground source={item.bg} style={styles.bannerbox} imageStyle={{ resizeMode: 'cover' }}>
                <View style={styles.bannerContent}>
                  <Text style={styles.bannerText}>{item.title}</Text>
                  <Image source={item.image} style={styles.bannerImage} />
                </View>
              </ImageBackground>
            )}
        />

        {/* mentors box */}

        <View style={styles.mentorsbox}>
          <View style={styles.mentorview}>
            <Text style={styles.mentortxt}>Mentors</Text>
            <TouchableOpacity onPress={()=>setSections(prev=>({...prev,viewall:true}))}>
              <Text style={styles.viewtxt}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.mentorItems}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {
                mentorsdata.map((item)=>(
                  <View key={item.id}>
                    <Mentorcard img={item.img}/>
                  </View>
                ))
              }
            </ScrollView>
          </View>
        </View>

        {/* categories box */}

        <View>
          <View style={styles.catTxtbox}>
            <Text style={styles.catTxt}>Categories</Text>
          </View>
          <View style={styles.catItems}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {
                categoriesData.map((item)=>(
                  <View key={item.id}>
                    <Categorycard title={item.title} content={item.content} icon={item.icon} onpress={()=>handlecatCick({title:item.title})}/>
                  </View>
                ))
              }
            </ScrollView>
          </View>
        </View>
          
        {/* notification modal */}
        <View style={{display:sections.notify?'flex':'none'}}>
          <Notifymodal visible={sections.notify} onClose={()=>setSections(prev=>({...prev,notify:false}))}/>
        </View>

        {/* mentors modal */}
        <View style={{display:sections.viewall ? 'flex':'none'}}>
            <Viewallmodal onClose={()=>setSections(prev=>({...prev,viewall:false}))} visible={sections.viewall}/> 
        </View>

        {/* Ebook modal */}
        <View style={{display:iscategory.book ? 'flex':'none'}}>
            <Ebookmodal onClose={()=>setIscategory(prev=>({...prev,book:false}))} visible={iscategory.book}/>
        </View>
        
        {/* events modal */}
        <View style={{display:iscategory.event ? 'flex' : 'none'}}>
          <Eventmodal visible={iscategory.event} onClose={()=>setIscategory(prev=>({...prev,event:false}))}/>
        </View>

        {/* course modal */}
        <View style={{display:iscategory.course ? 'flex' : 'none'}}>
          <Coursemodal visible={iscategory.course} onClose={()=>setIscategory(prev=>({...prev,course:false}))}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D1D',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  homeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    width: '90%',
    alignSelf: 'center'
  },
  bellicon: {
    backgroundColor: '#2D2D2D',
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  bannerbox: {
    width: width - 40,
    height: 200,
    marginHorizontal: 20,
    borderRadius: 12,
    overflow: 'hidden',
    marginVertical:10
  },
  bannerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 0
  },
  bannerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    maxWidth: 125,
    marginLeft:10
  },
  bannerImage: {
    width: 300,
    height: '100%',
    resizeMode: 'center',
  },
  mentorsbox:{
    width:'90%',
    marginVertical:20,
    marginHorizontal:'auto',
    height:200,
    flexDirection:'column'
  },
  mentorview:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:20,
    marginVertical:20
  },
  mentortxt:{
    fontSize:20,
    fontWeight:600,
    color:'#fff'
  },
  viewtxt:{
    color:'#ffd60a',
    fontSize:18,
    fontWeight:600
  },
  catTxtbox:{
    marginBottom:20
  },
  mentorItems:{},
  catTxt:{
    color:'#fff',
    marginLeft:30,
    fontSize:22,
    fontWeight:600
  },
  catItems:{
    width:'85%',
    marginHorizontal:'auto',
  }

});