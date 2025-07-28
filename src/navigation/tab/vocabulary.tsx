import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
    getVocabularyDetailByWord,
    searchVocabularyByFuriganaPrefixAndLevel,
    searchVocabularyByKeywordAndPOS
} from "../../realm/service";


const VocabularyScreen = () => {

    const loadData = async () => {
        try {
            const data = searchVocabularyByKeywordAndPOS("Nhà hàng","Danh từ")
            console.log(data);
        } catch (error) {
            console.error('Lỗi khi load dữ liệu Realm:', error);
        }
    };


  return (
      <View style={styles.container}>
        <TouchableOpacity onPress={loadData}>
          <Text>Lấy data</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default VocabularyScreen;
