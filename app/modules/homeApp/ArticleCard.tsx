import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ArticleCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <View style={styles.contentContainer}>
          <Text>Mohamed Elfit</Text>
          <Text style={styles.textStyles}>17 june, 2022</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.mainTitle}>Generate Lorem</Text>
          <Text style={styles.textStyles}>5 min read</Text>
        </View>
      </View>
      <View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.cardHeader}>
        <Text style={styles.textStyles}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada,
          libero nec sodales elementum, tortor lacus aliquam mauris, nec euismod
        </Text>
      </View>
      <View style={styles.cardHeader}>
        <TouchableOpacity style={styles.authButton}>
          <Text style={styles.buttonText}>Read</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ArticleCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    paddingVertical: 20,
    borderRadius: 10,
    marginVertical: 10,
    borderColor: '#E1E2E680',
    borderWidth: 1,
    minHeight: 200,
    height: 'auto',
  },
  cardHeader: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    gap: 20,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyles: {
    color: '#98A1B3',
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#231A16',
  },
  imageStyle: {
    width: '100%',
    height: 200,
    marginVertical: 20,
  },
  authButton: {
    backgroundColor: '#F6E117',
    borderRadius: 100,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 20,

    borderStyle: 'solid',
    borderWidth: 1,
    width: '25%',
  },
  buttonText: {
    color: '#231A16',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 17,
  },
});
