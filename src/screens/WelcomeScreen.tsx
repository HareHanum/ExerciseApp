import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  ListRenderItem,
  StyleSheet,
  View,
} from 'react-native';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import {Button, Card} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect, useDispatch, useSelector} from 'react-redux';
import categoriesImages from '../assets/categoriesImages';
import {navigate} from '../navigation/Navigation';
import Routes from '../navigation/Routes';
import {fetchNews} from '../store/auth/actions';
import colors from '../util/colors';
import {welcomeScreenStrings} from '../util/strings';

interface Category {
  name: string;
  image: string;
}

const WelcomeScreen = () => {
  const dispatch = useDispatch();
  const {pending} = useSelector((state: any) => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const categories: Category[] = [
    {name: welcomeScreenStrings.general, image: categoriesImages.general},
    {name: welcomeScreenStrings.business, image: categoriesImages.business},
    {
      name: welcomeScreenStrings.entertainment,
      image: categoriesImages.entertainment,
    },
    {name: welcomeScreenStrings.health, image: categoriesImages.health},
    {name: welcomeScreenStrings.science, image: categoriesImages.science},
    {name: welcomeScreenStrings.sports, image: categoriesImages.sports},
    {name: welcomeScreenStrings.technology, image: categoriesImages.technology},
  ];

  const onCategorySelected = (category: Category) => {
    navigate(Routes.newsScreen, {category: category.name.toLowerCase()});
  };

  const renderItem: ListRenderItem<Category> = ({item}) => {
    return (
      <Card onPress={() => onCategorySelected(item)} style={styles.card}>
        <Card.Title title={item.name} />
        <Card.Cover
          source={{
            uri: item.image,
          }}
        />
      </Card>
    );
  };

  const renderHeader = () => {
    return (
      <Button
        style={styles.button}
        icon={require('../assets/heart.png')}
        mode="contained"
        onPress={() => loginWithFacebook()}>
        {welcomeScreenStrings.favorites}
      </Button>
    );
  };

  const loginWithFacebook = () => {
    // Attempt a login using the Facebook login dialog asking for default permissions.
    LoginManager.logInWithPermissions(['public_profile']).then(
      (login: any) => {
        if (login.isCancelled) {
          console.log('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then((data: any) => {
            const accessToken = data.accessToken.toString();
            if (accessToken) {
              navigate(Routes.favoritesScreen);
            } else {
              Alert.alert(welcomeScreenStrings.facebookLoginFailed);
            }
          });
        }
      },
      (error: any) => {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <FlatList
        ListHeaderComponent={renderHeader}
        renderItem={renderItem}
        data={categories}
      />
      {pending ? (
        <View style={[styles.loadingView]}>
          <ActivityIndicator color={colors.blue} size={24} />
        </View>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  loadingView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: colors.loadingBG,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {marginHorizontal: 16, marginVertical: 24},
  card: {margin: 16},
});

export default connect()(WelcomeScreen);
