import React, {useCallback} from 'react';
import {ListRenderItem} from 'react-native';
import {FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import ArticleCard from '../components/ArticleCard';
import EmptyView from '../components/EmptyView';
import {NewsItem} from '../model/news';
import {deleteFromFavorites} from '../store/auth/actions';
import colors from '../util/colors';
import {favoritesScreenStrings} from '../util/strings';

const NewsScreen = () => {
  const {favorites} = useSelector((state: any) => state.news);
  const dispatch = useDispatch();

  const renderEmptyView = () => {
    return <EmptyView text={favoritesScreenStrings.noArticles} />;
  };

  const isFavorite = useCallback(
    (item: any) => {
      return favorites.includes(item);
    },
    [favorites],
  );

  const removeFavorite = (item: any) => {
    dispatch(deleteFromFavorites(item));
  };

  const renderItem: ListRenderItem<NewsItem> = ({item}) => {
    return (
      <ArticleCard
        isFavorite={isFavorite(item)}
        onIconPress={() => {
          removeFavorite(item);
        }}
        item={item}
      />
    );
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <FlatList
        keyExtractor={item => item.title}
        ListEmptyComponent={renderEmptyView}
        renderItem={renderItem}
        data={favorites}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  card: {margin: 16},
  emptyView: {
    overflow: 'hidden',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 24,
    marginTop: 80,
    marginHorizontal: 24,
    textAlign: 'center',
  },
});

export default NewsScreen;
