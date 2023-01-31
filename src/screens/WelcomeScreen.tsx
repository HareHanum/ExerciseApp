import React from 'react';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import {Button, Card} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import categoriesImages from '../assets/categoriesImages';
import {navigate} from '../navigation/Navigation';
import Routes from '../navigation/Routes';
import colors from '../util/colors';
import {welcomeScreenStrings} from '../util/strings';

interface Category {
  name: string;
  image: string;
}
const WelcomeScreen = () => {
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
    navigate(Routes.newsScreen, {category: category.name});
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
        onPress={() => console.log('Pressed')}>
        {welcomeScreenStrings.favorites}
      </Button>
    );
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <FlatList
        ListHeaderComponent={renderHeader}
        renderItem={renderItem}
        data={categories}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  button: {marginHorizontal: 16, marginVertical: 24},
  card: {margin: 16},
});

export {WelcomeScreen};
