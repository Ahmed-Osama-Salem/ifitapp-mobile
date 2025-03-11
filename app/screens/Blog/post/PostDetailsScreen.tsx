import {
  I18nManager,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import PostInteractions from './components/PostInteractions';
import RelatedArticelCard from '../../../modules/homeApp/RelatedArticelCard';
import {Colors} from '../../../utils/theme';
import ScreenGradientHeader from 'Common/DynamicComponents/ScreenGradientHeader/ScreenGradientHeader';
import TypographyText from 'Common/DynamicComponents/TypographyText/TypographyText';
import {RootState, store} from 'Redux/Store';
import {fetchSingleBlog} from 'Redux/Slices/Blog/BlogSlice';
import {useSelector} from 'react-redux';
import RenderHtml, {defaultSystemFonts} from 'react-native-render-html';
import {TextStyle} from 'Common/DynamicComponents/TypographyText/Typography.system';

const PostDetailsScreen = ({route}: any) => {
  const {slug, title} = route.params;
  const {singleBlog} = useSelector((state: RootState) => state.blogs);
  const width = useWindowDimensions().width;
  const systemFonts = [
    ...defaultSystemFonts,
    'Nunito-Regular',
    'Nunito-Bold',
    'NotoKufiArabic-Regular',
    'NotoKufiArabic-Bold',
  ];

  const source = {
    html: singleBlog?.content.replace('h1>', 'p>') as string,
  };

  const tagsStyles = {
    p: {
      fontSize: TextStyle['16_Reguler'].fontSize,
      color: '#98A1B3',
      fontFamily: TextStyle['16_Reguler'].fontFamily,
      lineHeight: 27,
      textAlign: 'left',
    },
  };

  useEffect(() => {
    store.dispatch(fetchSingleBlog(slug)).unwrap();
  }, [slug]);

  return (
    <>
      <ScreenGradientHeader content={''} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <TypographyText
              content={title}
              type="34_Bold"
              color="dark"
              styles={{
                textTransform: 'capitalize',
              }}
            />
            <View style={styles.autherContainer}>
              <Image
                source={{
                  uri: 'https://media-hbe1-2.cdn.whatsapp.net/v/t61.24694-24/413127216_1132024591149012_8584608521826069019_n.jpg?ccb=11-4&oh=01_Q5AaIBWH_yUfHEYOVg_jPUPjAEtIEZG-XpFD2ogCNQieDvpM&oe=6639F6AB&_nc_sid=e6ed6c&_nc_cat=102',
                }}
                style={styles.autherImgStyle}
              />
              <View style={styles.autherContent}>
                <View style={styles.autherContainer}>
                  <Text
                    style={{
                      fontFamily: 'Nunito-Bold',
                      color: Colors.text.secondary,
                    }}>
                    Mohamed ElFit
                  </Text>
                  <Text style={styles.boldText}>Follow</Text>
                </View>
                <View style={styles.autherContainer}>
                  <Text
                    style={{
                      fontFamily: 'Nunito-Regular',
                      color: Colors.text.tertiary,
                    }}>
                    Published in 22 jun .
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Nunito-Regular',
                      color: Colors.text.tertiary,
                    }}>
                    6 min read
                  </Text>
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
              <RenderHtml
                contentWidth={width}
                source={source}
                tagsStyles={tagsStyles}
                systemFonts={systemFonts}
              />
            </View>
            <View style={{marginVertical: 20, gap: 20}}>
              <TypographyText content="Summry" type="24_Bold" color="dark" />
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
              <Text
                style={{
                  fontSize: 28,
                  fontFamily: 'Nunito-Bold',
                  color: Colors.text.primary,
                }}>
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
              <Text
                style={{
                  fontSize: 28,
                  fontFamily: 'Nunito-Bold',
                  color: Colors.text.primary,
                }}>
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
    direction: !I18nManager.isRTL ? 'ltr' : 'rtl',
  },
  backNavContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  postTitle: {
    fontSize: 24,
    fontFamily: 'Nunito-ExtraBold',
    color: Colors.text.primary,
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
    fontFamily: 'Nunito-Bold',
    color: '#98A1B3',
  },
  contentStyle: {
    fontSize: TextStyle['16_Reguler'].fontSize,
    color: '#98A1B3',
    fontFamily: TextStyle['16_Reguler'].fontFamily,
    textAlign: 'left',
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
