import React, {useEffect, useState} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

const ImageItem = ({url}) => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const isBufferUrl = url.includes(
      '04252023032040_00148466-6020-496d-879a-01edabd564d1',
    );

    const fetchImage = async () => {
      try {
        if (isBufferUrl) {
          RNFetchBlob.config({
            fileCache: true,
          })
            .fetch('GET', url)
            .then(res => {
              let status = res.info().status;

              if (status === 200) {
                return res.base64();
              } else {
                throw new Error('Image request failed');
              }
            })
            .then(base64Str => {
              setImageData(`data:image/png;base64,${base64Str}`);
            })
            .catch(error => {
              console.log('Error fetching image:', error);
            });
        } else {
          setImageData(url);
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, [url]);

  if (!imageData) {
    return (
      <View style={styles.loadingContainer} testID="loading-container">
        <Text style={styles.loadingText}>Please wait...</Text>
      </View>
    );
  }

  return (
    <Image source={{uri: imageData}} style={styles.image} testID="image" />
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default ImageItem;
