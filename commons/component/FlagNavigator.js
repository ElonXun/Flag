'use strict';

import { StackNavigator } from 'react-navigation';
import Flag from './Flag';
import PostScreen from './PostScreen';

const FlagNavigator = StackNavigator({
  FlagPage: { screen: Flag },
  PostPage: { screen: PostScreen },
}); 

export default FlagNavigator;