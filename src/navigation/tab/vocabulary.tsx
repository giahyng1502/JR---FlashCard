import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {getCachedRealm, getStaticRealm, preloadAllRealms} from "../../realm/service/vocabulary_service.ts";

const VocabularyScreen = () => {

    const loadData = async () => {
        try {
            const realm = getCachedRealm('grammar', 'N2');
            const grammars = realm.objects('Grammar');

            console.log(`📚 Grammar N3: Đã load ${grammars.length} mục`);
            if (grammars.length > 0) {
                console.log('🔍 Grammar đầu tiên:', JSON.stringify(grammars[0], null, 2));
            }

            const vocabRealm = getStaticRealm('vocab');
            const vocabs = vocabRealm.objects('Vocabulary');

            console.log(`🧠 Vocabulary: Đã load ${vocabs.length} mục`);
            if (vocabs.length > 0) {
                console.log('🔤 Từ đầu tiên:', JSON.stringify(vocabs[0], null, 2));
            }
        } catch (error) {
            console.error('❌ Lỗi khi load dữ liệu Realm:', error);
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
