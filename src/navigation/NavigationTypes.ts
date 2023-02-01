import {StackScreenProps} from '@react-navigation/stack';
import Routes from './Routes';

export type RootStackParamList = {
  [Routes.welcomeScreen]: undefined;
  [Routes.newsScreen]: NewsScreenParams;
};

export type NewsScreenProps = StackScreenProps<
  RootStackParamList,
  Routes.newsScreen
>;

export type NewsScreenParams = {
  category: string;
};
