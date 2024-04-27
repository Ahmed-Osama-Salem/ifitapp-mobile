import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderNav from '../../home/components/HeaderNav';
import BackNavigator from '../../../modules/elements/BackNavigator';
import PostInteractions from './components/PostInteractions';
import RelatedArticelCard from '../../../modules/homeApp/RelatedArticelCard';

const PostDetailsScreen = ({route}: any) => {
  const {slug} = route.params;

  return (
    <>
      <HeaderNav />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.backNavContainer}>
            <BackNavigator />
          </View>
          <View>
            <Text style={styles.postTitle}>
              Generate Lorem Ipsum placeholder text. Select the number of words,
              sentences.
            </Text>
            <View style={styles.autherContainer}>
              <Image
                source={{
                  uri: 'https://media-hbe1-2.cdn.whatsapp.net/v/t61.24694-24/413127216_1132024591149012_8584608521826069019_n.jpg?ccb=11-4&oh=01_Q5AaIBWH_yUfHEYOVg_jPUPjAEtIEZG-XpFD2ogCNQieDvpM&oe=6639F6AB&_nc_sid=e6ed6c&_nc_cat=102',
                }}
                style={styles.autherImgStyle}
              />
              <View style={styles.autherContent}>
                <View style={styles.autherContainer}>
                  <Text style={{fontWeight: '500'}}>Mohamed ElFit</Text>
                  <Text style={styles.boldText}>Follow</Text>
                </View>
                <View style={styles.autherContainer}>
                  <Text>Published in 22 jun .</Text>
                  <Text>6 min read</Text>
                </View>
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

            <View style={{marginVertical: 20, gap: 20}}>
              <Text style={styles.contentStyle}>
                ntrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45
                BC, making it over 2000 years old. Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia, looked up one
                of the more obscure Latin words.
              </Text>
              <Text style={styles.contentStyle}>
                ntrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45
                BC, making it over 2000 years old. Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia, looked up one
                of the more obscure Latin words.
              </Text>
            </View>
            <View style={{marginVertical: 20, gap: 20}}>
              <Text style={{fontWeight: '700', fontSize: 28}}>Summry</Text>
              <Text style={styles.contentStyle}>
                ntrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45
                BC, making it over 2000 years old. Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia, looked up one
                of the more obscure Latin words.
              </Text>
              <View>
                <Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1625722776951-39123efa4dc3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  }}
                  style={styles.imageStyle}
                />
              </View>
            </View>
            <PostInteractions />
            <View style={{marginVertical: 30}}>
              <Text style={{fontWeight: '700', fontSize: 28}}>
                More From Elfit
              </Text>
              <View
                style={{marginVertical: 20, ...styles.RelatedArticelContainer}}>
                {[...Array(5)].map((_, index) => (
                  <RelatedArticelCard key={index} />
                ))}
              </View>
            </View>
            <View style={{marginVertical: 30}}>
              <Text style={{fontWeight: '700', fontSize: 28}}>
                Related Articels
              </Text>
              <View
                style={{marginVertical: 20, ...styles.RelatedArticelContainer}}>
                {[...Array(5)].map((_, index) => (
                  <RelatedArticelCard key={index} />
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default PostDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  backNavContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '25%',
  },
  postTitle: {
    fontSize: 24,
    fontWeight: '700',
  },
  autherImgStyle: {
    width: 56,
    height: 56,
    marginVertical: 20,
    borderRadius: 100,
  },
  autherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  autherContent: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 10,
  },
  boldText: {
    fontWeight: '700',
  },
  contentStyle: {
    fontSize: 16,
    color: '#98A1B3',
  },
  imageStyle: {
    width: '100%',
    height: 280,
    borderRadius: 10,
  },
  RelatedArticelContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
});
