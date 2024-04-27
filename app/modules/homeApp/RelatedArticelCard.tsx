import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const RelatedArticelCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.contentSide}>
        <Text style={styles.postTitle}>Civil engineering</Text>
        <Text style={{color: '#98A1B3', fontSize: 14, lineHeight: 25}}>
          Generate Lorem IpSelect the numbeGenerate Lorem IpSelect.
        </Text>
      </View>
      <View style={styles.imageSide}>
        <Image
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1681823695031-c7c125cbc9cb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.imageStyle}
        />
      </View>
    </View>
  );
};

export default RelatedArticelCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    width: '100%',
    minHeight: 140,
    borderColor: '#E1E2E6FC',
    borderWidth: 1,
    borderRadius: 10,
  },
  contentSide: {
    width: '55%',
    backgroundColor: '#F7F8FA',
    flexDirection: 'column',
    gap: 10,
    padding: 10,
    borderRadius: 10,
  },
  imageSide: {
    flexGrow: 1,
    height: '100%',
  },
  imageStyle: {
    width: '100%',
    height: 140,
    borderRadius: 10,
  },
  postTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#666E80',
  },
});
