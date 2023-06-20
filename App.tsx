import React from 'react';
import {FlatList, Text, StyleSheet, SafeAreaView} from 'react-native';
import ImageItem from './components/ImageItem';

const imageUrls = [
  'https://ayae52i9de.execute-api.us-east-1.amazonaws.com/prod/s3?key=elephant-trax/google_103236758783646644108/01232022112248_69365b28-43e0-406f-a0ce-8e6716146f61',
  'https://ayae52i9de.execute-api.us-east-1.amazonaws.com/prod/s3?key=elephant-trax/google_103236758783646644108/04252023032040_00148466-6020-496d-879a-01edabd564d1',
];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Images</Text>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={imageUrls}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <ImageItem url={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  contentContainer: {
    marginTop: 20,
  },
});

export default App;
