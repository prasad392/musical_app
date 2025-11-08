import { View, Text, Modal, StyleSheet, Platform, StatusBar, TextInput, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Modalheader from '@/src/modals/modalheader/modalheader';
import { Ionicons } from '@expo/vector-icons';
import Ebbokcard from '../components/customcards/ebbokcard';
import { EbookCardData } from '@/src/data/mochdata';

type Props = {
  visible: boolean;
  onClose: () => void;
};

const Ebookmodal: React.FC<Props> = ({ visible, onClose }) => {
  const [searchText, setSearchText] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);

  const filteredData = EbookCardData.filter(item =>
    item.head.toLowerCase().includes(searchText.toLowerCase())
  );
  
  return (
    <Modal 
    visible={visible} 
    transparent 
    animationType="fade" 
    onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Modalheader headerText="Ebook" onClose={onClose} />

        {/* Serach Box */}
        <View style={styles.inputBox}>
          <Ionicons name="search-outline" size={32} color="#fff" />
          <TextInput
            style={styles.inputSearch}
            placeholder="Search in Ebooks..."
            placeholderTextColor="#aaa"
            value={searchText}
            onChangeText={(txt)=>{
                setSearchText(txt)
                setShowSuggestions(true)
            }}
          />
        </View>

        {/* Filtereed Results */}
        {searchText.length > 0 && showSuggestions && (
          <View style={styles.searchResults}>
            {
                filteredData.length > 0 ? (
                    <FlatList
                        data={filteredData}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.resultItem}>
                            <Text style={styles.resultText}
                            onPress={()=>{
                                setShowSuggestions(false)
                                setSearchText(item.head)
                            }}
                            >{item.head}</Text>
                            </View>
                        )}
                    />
                )
                :
                (
                    <Text style={styles.noDataText}>No Data Found</Text>
                )
            }
          </View>
        )}

        {/* Original Cards */}
        <View>
          <Ebbokcard data={filteredData.length > 0 ? filteredData : EbookCardData} />
        </View>

      </View>
    </Modal>
  );
};

export default Ebookmodal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#1d1d1d',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  inputBox: {
    width: '95%',
    marginVertical: 20,
    marginHorizontal: 'auto',
    backgroundColor: '#2d2d2d',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 12,
    paddingHorizontal: 10,
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
    top:250,
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
   }
});