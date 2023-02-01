import React, {useCallback, useMemo} from 'react';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect, useDispatch, useSelector} from 'react-redux';
import ArticleCard from '../components/ArticleCard';
import EmptyView from '../components/EmptyView';
import {NewsItem} from '../model/news';
import {NewsScreenProps} from '../navigation/NavigationTypes';
import {deleteFromFavorites, saveToFavorites} from '../store/auth/actions';
import colors from '../util/colors';
import {newsScreenStrings} from '../util/strings';

const NewsScreen: React.FC<NewsScreenProps> = ({route}) => {
  const {params} = route;
  const dispatch = useDispatch();
  const {newsList, favorites} = useSelector((state: any) => state.news);

  const filteredList = useMemo(() => {
    return newsList.filter((item: any) => item.category === params.category);
  }, [newsList, params.category]);

  const renderEmptyView = () => {
    return <EmptyView text={newsScreenStrings.noArticles} />;
  };

  const isFavorite = useCallback(
    (item: any) => {
      return favorites.includes(item);
    },
    [favorites],
  );

  const addOrRemoveFavorite = (item: any) => {
    if (isFavorite(item)) {
      dispatch(deleteFromFavorites(item));
    } else {
      dispatch(saveToFavorites(item));
    }
  };

  const renderItem: ListRenderItem<NewsItem> = ({item}) => {
    return (
      <ArticleCard
        isFavorite={isFavorite(item)}
        onIconPress={() => addOrRemoveFavorite(item)}
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
        data={filteredList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  authorText: {textAlign: 'center'},
  cardCover: {margin: 8},
  emptyText: {
    fontSize: 24,
    marginTop: 80,
    marginHorizontal: 24,
    textAlign: 'center',
  },
  heartButton: {height: 24, width: 24},
  cardTitle: {marginTop: 8},
  cardSubtitle: {marginTop: 16},
  emptyView: {
    overflow: 'hidden',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {margin: 8},
});

export default connect()(NewsScreen);
