import { View, Text, StyleSheet, StatusBar, Platform } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import {Calendar,DateData} from 'react-native-calendars'
import { datesData } from '@/src/data/mochdata'
import Componentheader from '@/src/components/componentheader'

// type DateData ={
//   dateString: string;
//   day: number;
//   month: number;
//   year: number;
//   timestamp: number;
// }

const Checkin = () => {
  // const [startdate,setStartdate] = useState<string | null>(null);
  // const [enddate,setEnddate] = useState<string | null>(null);
  // const onDayPress=(day:DateData)=>{
  //   if(!startdate){
  //     setStartdate(day.dateString);
  //   }
  //   else if(!enddate){
  //     setEnddate(day.dateString)
  //     const range = getDatesInRange(startdate,day.dateString)
  //     console.log('range is',range.length)
  //   }
  //   else{
  //     setStartdate(day.dateString)
  //     setEnddate(null)
  //   }
  // }
  // const getDatesInRange = (start: string, end: string, ): string[]=>{
  //   const startObj = new Date(start);
  //   const endObj = new Date(end);
  //   const dates: string[] = [];
  //   let currentDate = startObj;
  //   while(currentDate <= endObj){
  //     dates.push(currentDate.toISOString().split('T')[0]);
  //     currentDate.setDate(currentDate.getDate()+1);
  //   }
  //   return dates;
  // }

    const today = new Date().toISOString().split('T')[0];
    const [selectedDate,setSelectedDate] = useState<string>(today)
    const onDayPress=(day:DateData)=>{
      setSelectedDate(day.dateString)
    }
    const filterData = datesData.filter(item=>item.date === selectedDate)
    const predefinedDates = {
      '2025-11-12':{selected:true, selectedColor:'#dda15e',marked:true,},
      '2025-11-21':{selected:true, selectedColor:'#8ecae6',marked:true},
      '2025-12-20':{selected:true, selectedColor:'#ffc8dd',marked:true},
      '2025-12-22':{selected:true, selectedColor:'#ccd5ae',marked:true},
      '2026-01-07':{selected:true, selectedColor:'#ffbe0b',marked:true},
    }
    const markedDates = {
      ...predefinedDates,
      ...(selectedDate && {
        [selectedDate]:{
          selected:true,
          selectedColor: selectedDate === today ? '#2d2d2d':'#fff',
          selectedTextColor:  selectedDate === today ? '#3a86ff' : '#000',
        }
      })
    }
    return(
      <>
        <View style={styles.container}>
          <StatusBar barStyle={'light-content'}/>
          <Componentheader headerText='Calendar'/>
          <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={styles.calendarBox}>
              <Calendar
              current={'2025-11-11'}
              minDate={'2025-11-01'}
              maxDate={'2026-01-31'}
              onDayPress={onDayPress}
              markedDates={markedDates}
              theme={{
                    todayTextColor: '#3a86ff',
                    arrowColor: '#fff',
                    calendarBackground:'#2d2d2d',
                    monthTextColor: '#fff',
                    dayTextColor:'#fff',
                    textDisabledColor: '#888888',
              }}
              />
            </View>
            {
              selectedDate && (
                <View style={styles.eventBox}>
                    <Text style={styles.eventHead}>{selectedDate}</Text>
                      {
                        filterData.length > 0 ?(
                          filterData.map((item,index)=>(
                            <View key={index}>
                              <Text style={styles.eventTxt}> {item.event} </Text>
                            </View>
                          ))
                        )
                        :
                        (
                          <Text style={styles.noevent}>No Event Today</Text>
                        )
                      }
                </View>
              )
            }
          </ScrollView>
        </View>
      </>
    )
}

export default Checkin

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#1d1d1d',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  calendarBox:{
    width:'95%',
    marginHorizontal:'auto',
    marginVertical:20,
    height:'auto',
    backgroundColor:'#2d2d2d',
    borderRadius:12
  },
  calendarCon:{
    // backgroundColor:'red',
    // borderRadius:20
  },
  eventBox:{
    width:'90%',
    marginHorizontal:'auto',
    backgroundColor:'#2d2d2d',
    borderRadius:12,
    height:'auto',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    gap:10
  },
  eventTxt:{
    fontSize:22,
    fontWeight:600,
    color:'#ffbe0b',
    marginBottom:20
  },
  eventHead:{
    color:'#fff',
    marginTop:20
  },
  noevent:{
    color:'#fff',
    marginBottom:20,
    fontSize:20,
    fontWeight:600,
  }
})


