import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-paper';
import colors from '../util/colors';

interface Props {
  onIconPress?: () => void;
  item: any;
  isFavorite: boolean;
}

const ArticleCard: React.FC<Props> = ({
  item = {},
  onIconPress = () => {},
  isFavorite = false,
}) => {
  const cardLeftView = () => {
    return (
      <TouchableOpacity
        onPress={() => onIconPress()}
        style={styles.heartButton}>
        <Image
          style={styles.heartButton}
          resizeMode="contain"
          source={
            isFavorite
              ? require('../assets/heart_filled.png')
              : require('../assets/heart.png')
          }
        />
      </TouchableOpacity>
    );
  };

  return (
    <Card style={styles.card}>
      <Card.Title
        left={() => cardLeftView()}
        titleVariant="titleLarge"
        titleStyle={styles.cardTitle}
        titleNumberOfLines={2}
        subtitleNumberOfLines={5}
        subtitleStyle={styles.cardSubtitle}
        title={item.title}
        subtitle={item.description}
      />
      <Card.Cover
        style={styles.cardCover}
        source={{
          uri: item.image,
        }}
      />
    </Card>
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

export default ArticleCard;
