import { View, Text, StatusBar, StyleSheet, ScrollView, Platform, TouchableOpacity, FlatList, ImageSourcePropType } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { TextInput } from 'react-native-gesture-handler';
import FeedbackCard from '@/src/components/customcards/chatcards/feedbackCard';
import { feedbackData } from '@/src/data/mochdata';
import { MessageFilterData } from '@/src/data/messagesData';
import Messagecard from '@/src/components/customcards/chatcards/messagecard';
import Unreadmsgcard from '@/src/components/customcards/chatcards/unreadmsgcard';
import Pinmsgcard from '@/src/components/customcards/chatcards/pinmsgcard';
import Chatbox from '@/src/modals/messageboxmodal/chatbox';

type messageItem ={
    messangerName: string,
    img: ImageSourcePropType;
    time: string;
    message: string;
}
type messageFilter ={
    messageHeadName: string;
    msgdata: messageItem[];
} | undefined

const Chat = () => {
    const onClose =()=>{
        router.push('/(tabs)/home')
    }
    const [select,setSelect] = useState({
      ismsg:false,
      isfeed:true,
      showSuggetions:true,
      showSuggetionsMsg:true,
    });
    const [searchText,setSearchText] = useState('');
    const [searchTextMsg,setSearchTextMsg] = useState('');

    const filterData = feedbackData.filter(item=>item.nameis.toLowerCase().includes(searchText.toLowerCase()))
    const filterMsgData = MessageFilterData[0].msgdata.filter(item=>item.messangerName.toLowerCase().includes(searchTextMsg.toLowerCase()))
    console.log('search data',filterMsgData)

    const optData = ['All inboxes','Read Messages','Unread Messages','pinned Messages','Updates']
    const [isClick,setIsClick] = useState(false);
    const [mainData,setMainData] = useState('All inboxes')
    const [headerText,setHeaderText] = useState('10 unread Messages')
    const [showOptions,setShowOptions] = useState(true);

    const [quickFilterData,setQuickFilterData] = useState<messageFilter[]>([])
    const onpressMsgFilter = (item:string)=>{
      setShowOptions(false)
      setMainData(item)
      const messagesData = MessageFilterData.find(msg => msg.messageHeadName === item)
      if(messagesData){
        setQuickFilterData([messagesData])
        setHeaderText(messagesData?.messageHeadName)
      }
    }

    // chat box opens
    const [chatClick,setChatClick] = useState({
      isopen:false,
      isclose:true,
      isConvo:false,
    })
    return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1D1D1D" />
      <View style={styles.headerBox}>
        <View style={styles.headtxtbackicon}>
          <TouchableOpacity onPress={onClose} style={styles.closebtn}>
            <Ionicons name='chevron-back-circle-outline' size={42} color={'#fff'}/>
          </TouchableOpacity>
          <View
          style={styles.headtxt}
          >
                {
                  select.isfeed && (
                    <Text style={styles.headertxt}>
                      3 unread feedback
                    </Text>
                  )
                }
                {
                  select.ismsg && (
                    <Text style={styles.headertxt}>
                      {headerText}
                    </Text>
                  )
                }
          </View>
        </View>
        <View style={styles.msgfeed}>
          <Text
          style={[styles.msgfeedtxt,{borderColor:select.ismsg ? '#ffd60a':'#2d2d2d'}]} 
          onPress={()=>setSelect(prev=>({...prev,ismsg:true,isfeed:false}))}
          >
            Messages
          </Text>
          <Text 
          style={[styles.msgfeedtxt,{borderColor:select.isfeed ? '#ffd60a':'#2d2d2d'}]} 
          onPress={()=>setSelect(prev=>({...prev,isfeed:true,ismsg:false}))}
          >
            Feedback
          </Text>
        </View>
      </View>

        {/* feedback box container */}
        {
          select.isfeed &&
          (
            <ScrollView>
              <View style={styles.feedBox}>
              <View style={styles.inputBox}>
                  <Ionicons name="search-outline" size={32} color="#fff" />
                  <TextInput
                      style={styles.inputSearch}
                      placeholder="Search in Feedback..."
                      placeholderTextColor="#aaa"
                      value={searchText}
                      onChangeText={(txt)=>{
                          setSearchText(txt)
                          setSelect(prev=>({...prev,showSuggetions:true}))
                      }}
                  />
                </View>
                {
                  searchText && select.showSuggetions && (
                    <View style={styles.searchResults}>
                        {
                          filterData.length > 0 ?
                          (
                            filterData.map(item => (
                              <View key={item.id} style={styles.resultItem}>
                                <Text
                                  style={styles.resultText}
                                  onPress={() => {
                                    setSearchText(item.nameis);
                                    setSelect(prev => ({ ...prev, showSuggetions: false }));
                                  }}
                                >
                                  {item.nameis}
                                </Text>
                              </View>
                            ))
                          ) 
                          : 
                          (
                            <Text style={styles.noDataText}>No Data Found</Text>
                          )
                      }
                    </View>
                  )
                }
              <View>
                  {
                    filterData.length > 0 ?
                    (
                      filterData.map((item)=>(
                      <View key={item.id}>
                        <FeedbackCard
                          dateis={item.dateis}
                          nameis={item.nameis}
                          comment={item.comment}
                          course={item.course}
                          rating={item.rating}
                          img={item.img}
                        />
                      </View>
                    ))
                    )
                    :
                    (
                      feedbackData.map((item)=>(
                      <View key={item.id}>
                        <FeedbackCard
                          dateis={item.dateis}
                          nameis={item.nameis}
                          comment={item.comment}
                          course={item.course}
                          rating={item.rating}
                          img={item.img}
                        />
                      </View>
                    ))
                    )
                  }
              </View>
            </View>
            </ScrollView>
          )
        }

        {
          select.ismsg &&
          (
            <>
              <ScrollView>
              <View style={styles.msgBox}>
                <View style={styles.inputBox}>
                  <Ionicons name="search-outline" size={32} color="#fff" />
                  <TextInput
                      style={styles.inputSearch}
                      placeholder="Search in messages..."
                      placeholderTextColor="#aaa"
                      value={searchTextMsg}
                      onChangeText={(txt)=>{
                          setSearchTextMsg(txt)
                          setSelect(prev=>({...prev,showSuggetionsMsg:true}))
                      }}
                  />
                </View>
                {
                  searchTextMsg && select.showSuggetionsMsg && (
                    <View style={styles.searchResults}>
                      {
                        filterMsgData.length > 0 ?(
                          filterMsgData.map((item,index)=>(
                            <View key={index} style={styles.resultItem}>
                              <Text
                              style={styles.resultText}
                                  onPress={() => {
                                    setSearchTextMsg(item.messangerName);
                                    setSelect(prev => ({ ...prev, showSuggetionsMsg: false }));
                                  }}
                              >
                                {item.messangerName}
                              </Text>
                            </View>
                          ))
                        ):(
                          <Text style={styles.noDataText}>No Data Found</Text>
                        )
                      }
                    </View>
                  )
                }
                <View style={styles.selectCon}>
                  <View style={styles.selectBox}>
                    <TouchableOpacity 
                    style={styles.selectbtn} 
                    onPress={()=>{
                      setIsClick(true)
                      setShowOptions(true)
                    }}
                    >
                      <Text style={{color:'#fff',fontSize:20,alignItems:'center',justifyContent:'center'}}> {mainData} </Text>
                      <Ionicons name="chevron-down-outline" size={28} color="#fff" />
                    </TouchableOpacity>
                  </View>
                  {
                    isClick && showOptions &&(
                      <View style={styles.selectResultsm}>
                        {
                          optData.map((item,index)=>(
                            <View style={styles.resultItemm} key={index}>
                              <Text 
                              style={styles.resultTextt}
                              onPress={()=>onpressMsgFilter(item)}
                              >
                                {item}
                              </Text>
                            </View>
                          ))
                        }
                      </View>
                    )
                  }
              </View>
              <View style={styles.msgFilterData}>
                  {
                    quickFilterData.length >0 ? (
                      quickFilterData.map((item,index)=>(
                        <View key={index}>
                          {
                            item?.messageHeadName === 'Unread Messages' ?
                            (
                                item.msgdata.map((msg,index) =>(
                                <View key={index}>
                                  <Unreadmsgcard
                                  img={msg.img}
                                  time={msg.time}
                                  message={msg.message}
                                  messangerName={msg.messangerName}
                                  />
                                </View>
                              ))
                            )
                            :
                            (
                              item?.messageHeadName === 'pinned Messages' ?
                              (
                                item.msgdata.map((msg,index) =>(
                                  <View key={index}>
                                    <Pinmsgcard
                                    img={msg.img}
                                    time={msg.time}
                                    message={msg.message}
                                    messangerName={msg.messangerName}
                                    />
                                  </View>
                                ))
                              )
                              :
                              (
                                item?.messageHeadName === 'All inboxes' ?
                                (
                                  <>
                                  {
                                    item.msgdata.slice(0,3).map((msg,index)=>(
                                      <View key={index}>
                                        <Unreadmsgcard
                                        img={msg.img}
                                        time={msg.time}
                                        message={msg.message}
                                        messangerName={msg.messangerName}
                                        />
                                      </View>
                                    ))
                                  }
                                  {
                                    item.msgdata.slice(3,6).map((msg,index)=>(
                                      <View key={index}>
                                        <Messagecard
                                        img={msg.img}
                                        time={msg.time}
                                        message={msg.message}
                                        messangerName={msg.messangerName}
                                        />
                                      </View>
                                    ))
                                  }
                                  {
                                    item.msgdata.slice(7,8).map((msg,index)=>(
                                      <View key={index}>
                                        <Pinmsgcard
                                        img={msg.img}
                                        time={msg.time}
                                        message={msg.message}
                                        messangerName={msg.messangerName}
                                        />
                                      </View>
                                    ))
                                  }
                                  {
                                    item.msgdata.slice(9).map((msg,index)=>(
                                      <View key={index}>
                                        <Messagecard
                                        img={msg.img}
                                        time={msg.time}
                                        message={msg.message}
                                        messangerName={msg.messangerName}
                                        />
                                      </View>
                                    ))
                                  }
                                  {
                                    item.msgdata.slice(8,9).map((msg,index)=>(
                                      <View key={index}>
                                        <Pinmsgcard
                                        img={msg.img}
                                        time={msg.time}
                                        message={msg.message}
                                        messangerName={msg.messangerName}
                                        />
                                      </View>
                                    ))
                                  }
                                  </>
                                ):
                                (
                                  item?.messageHeadName === mainData &&(
                                  item.msgdata.map((msg,index) =>(
                                      <View key={index}>
                                        <Messagecard
                                        img={msg.img}
                                        time={msg.time}
                                        message={msg.message}
                                        messangerName={msg.messangerName}
                                        />
                                      </View>
                                    ))
                                )
                                )
                              )
                            )
                          }
                        </View>
                      ))
                    )
                    :
                    (
                     <>
                     {
                       MessageFilterData[0].msgdata.slice(0,3).map((item,index)=>(
                        <View key={index}>
                          <Unreadmsgcard
                          img={item.img}
                          time={item.time}
                          message={item.message}
                          messangerName={item.messangerName}
                          />
                        </View>
                      ))
                     }
                     {
                       MessageFilterData[0].msgdata.slice(3,6).map((item,index)=>(
                        <View key={index}>
                          <Messagecard
                          img={item.img}
                          time={item.time}
                          message={item.message}
                          messangerName={item.messangerName}
                          />
                        </View>
                      ))
                     }
                     {
                       MessageFilterData[0].msgdata.slice(7,8).map((item,index)=>(
                        <View key={index}>
                          <Pinmsgcard
                          img={item.img}
                          time={item.time}
                          message={item.message}
                          messangerName={item.messangerName}
                          />
                        </View>
                      ))
                     }
                     {
                       MessageFilterData[0].msgdata.slice(9).map((item,index)=>(
                        <View key={index}>
                          <Messagecard
                          img={item.img}
                          time={item.time}
                          message={item.message}
                          messangerName={item.messangerName}
                          />
                        </View>
                      ))
                     }
                     {
                       MessageFilterData[0].msgdata.slice(8,9).map((item,index)=>(
                        <View key={index}>
                          <Pinmsgcard
                          img={item.img}
                          time={item.time}
                          message={item.message}
                          messangerName={item.messangerName}
                          />
                        </View>
                      ))
                     }
                     </>
                    )
                  }
              </View>
              
            </View>
              </ScrollView>

              {/* chatting app  */}
              <View style={[styles.chatMsgBoxOpen,{display: chatClick.isopen ? 'flex' : 'none'}]}>
                <TouchableOpacity
                onPress={()=>{
                  setChatClick(prev=>({...prev,isConvo:true}))
                }}
                >
                  <Ionicons name='pencil-outline' size={42} color={'#ffd60a'}/>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{
                  setChatClick(prev=>({...prev,isopen:false,isclose:true}))
                }}
                >
                  <Text> <Ionicons name='chevron-forward-outline' size={38} color={'#fff'}/> </Text>
                </TouchableOpacity>
              </View>

              <View style={[styles.chatMsgBoxClose,{display: chatClick.isclose ? 'flex' : 'none'}]}>
                <TouchableOpacity
                onPress={()=>{
                  setChatClick(prev=>({...prev,isclose:false,isopen:true}))
                }}
                >
                  <Ionicons name='chevron-back-outline' size={38} color={'#fff'}/>
                </TouchableOpacity>
              </View>
              
              <View style={{display: chatClick.isConvo ? 'flex' : 'none'}}>
                <Chatbox
                onClose={()=>setChatClick(prev=>({...prev,isConvo:false}))} 
                visible={chatClick.isConvo}
                />
              </View>
            </>
            
          )
        }

    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1D1D1D',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    headerBox:{
        marginVertical:10,
        backgroundColor:'#2D2D2D',
        height:150,
        flexDirection:'column',
        width:'98%',
        marginHorizontal:'auto',
        borderBottomEndRadius:12,
        borderBottomStartRadius:12,
        alignItems:'center',
        justifyContent:'space-between'
    },
    headtxtbackicon:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginTop:20,
      width:'80%'
    },
    headtxt:{
      width:'80%',
      alignItems:'flex-start',
      justifyContent:'flex-start',
      // backgroundColor:'red'
    },
    closebtn:{
        marginLeft:0
    },
    headertxt:{
        fontWeight:600,
        fontSize:24,
        color:'#fff'
    },
    msgfeed:{
      flexDirection:'row',
      alignItems:'flex-end',
      width:'90%',
      justifyContent:'space-between',
      height:50
    },
    msgfeedtxt:{
      color:'#fff',
      fontSize:22,
      fontWeight:600,
      borderBottomWidth:2,
    },
    feedBox:{
      width:'93%',
      height:'auto',
      marginVertical:20,
      alignSelf:'center'
    },
    inputBox: {
        width: '95%',
        marginHorizontal: 'auto',
        backgroundColor: '#2d2d2d',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 12,
        paddingLeft:20
    },
    inputSearch: {
        width: 330,
        height: 65,
        fontSize: 18,
        color: '#fff',
        marginLeft: 10,
    },
    searchResults: {
      width: '95%',
      marginHorizontal: 'auto',
      backgroundColor: 'rgba(0,0,0,0.7)',
      borderRadius: 8,
      padding: 10,
      marginBottom: 10,
      position:'absolute',
      top:80,
      zIndex:100,
      marginLeft:10
    },
    resultItem: {
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#444',
    },
    resultText: {
      color: '#ffd60a',
      fontSize: 18,
    },
    noDataText: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
      paddingVertical: 10,
    },

    // Mssage box content styles
    msgBox:{
      width:'93%',
      height:'auto',
      marginVertical:20,
      alignSelf:'center'
    },
    selectCon:{
      width:'95%',
      height:'auto',
      marginHorizontal:'auto',
      alignItems:'center',
      justifyContent:'center'
    },
    selectBox:{
      width:'100%',
      marginVertical:20
    },
    selectbtn:{
      backgroundColor:'#000',
      width:'50%',
      height:40,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:12,
      flexDirection:'row'
    },
    selectResultsm:{
      backgroundColor:'rgba(0,0,0,0.7)',
      width:'40%',
      height:'auto',
      position:'absolute',
      top:70,
      left:10,
      zIndex:1000,
      alignItems:'center',
      borderRadius:20
    },
    resultItemm:{
      paddingVertical:9
    },
    resultTextt:{
      color:'#fff',
      fontSize:18
    },
    msgFilterData:{
      height:'auto',
      width:'95%',
      marginHorizontal:'auto',
    },
    chatMsgBoxOpen:{
      backgroundColor:'#000',
      width:90,
      height:60,
      position:'absolute',
      right:0,
      // top:600,
      zIndex:1000,
      bottom:100,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      borderTopLeftRadius:12,
      borderBottomLeftRadius:12
    },
    chatMsgBoxClose:{
      backgroundColor:'#000',
      position:'absolute',
      right:0,
       width:50,
      height:50,
      bottom:100,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      borderTopLeftRadius:12,
      borderBottomLeftRadius:12
    }

});