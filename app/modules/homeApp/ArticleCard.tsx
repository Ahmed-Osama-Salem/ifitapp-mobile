import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import {BlogPost} from '../../server/blog/BlogService';
import RenderHtml from 'react-native-render-html';
import {useNavigation} from '@react-navigation/native';
import {BookMarkIcon, HeartIcon, ProfileIcon} from '../SvgIcons';
import {Colors} from '../../utils/theme';

interface ArticleCardProps {
  data: BlogPost;
}

const ArticleCard = (props: ArticleCardProps) => {
  const {width} = useWindowDimensions();
  const navigation: any = useNavigation();
  const source = {
    html: props.data.content.replace('h1>', 'p>'),
  };

  const navigateToSinglePost = (postSlug: string) => {
    navigation.navigate('PostDetails', {slug: postSlug});
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <View style={styles.autherHeader}>
          <ProfileIcon colorStroke="#666E80" />
          <Text
            style={{fontFamily: 'Nunito-Medium', color: Colors.text.primary}}>
            Mohamed Elfit
          </Text>
          <Text style={styles.textStyles}>17 june, 2022</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.mainTitle}>{props.data.title.slice(0, 20)}</Text>
          <Text style={styles.textStyles}>
            {props.data.readingTime} min read
          </Text>
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
          <RenderHtml contentWidth={width} source={source} />
        </Text>
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.cardHeader}>
          <TouchableOpacity
            style={styles.authButton}
            onPress={() => {
              navigateToSinglePost(props.data.slug);
            }}>
            <Text style={styles.buttonText}>Read</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerIcon}>
          <View style={styles.footerIcon}>
            <Text style={styles.textStyles}>{props.data.helpfulCount}</Text>
            <HeartIcon />
          </View>
          <BookMarkIcon />
        </View>
      </View>
    </View>
  );
};

export default ArticleCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.white,
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
    gap: 10,
  },
  autherHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyles: {
    color: Colors.text.tertiary,
    fontFamily: 'Nunito-Regular',
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#231A16',
    fontFamily: 'Nunito-Bold',
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
    marginVertical: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    width: '100%',
  },
  buttonText: {
    color: '#231A16',
    textAlign: 'center',
    // fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Nunito-ExtraBold',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
  },
  footerIcon: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});
