'use strict'

import React, { Component,PropTypes, } from 'react';
import {
	    View,
        Text,
        StyleSheet,
        Alert,
        ScrollView,
        ListView,
        Image,
        ActivityIndicator,
        ProgressBarAndroid,
        ActivityIndicatorIOS,
        Platform,
        NativeModules,
        TouchableNativeFeedback,
        Button, 
        AsyncStorage,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import { StackNavigator,NavigationActions } from 'react-navigation';
import { BottomNavigation,COLOR,Badge,ActionButton } from 'react-native-material-ui';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TimerEnhance from 'react-native-smart-timer-enhance';
import PullToRefreshListView from 'react-native-smart-pull-to-refresh-listview';

import PostScreen from './PostScreen';
import FlagContent from './FlagContent';
import flagData from './data';
import TabSwiper from './TabSwiper';
import Header from './Header';

const UIManager = NativeModules.UIManager;
const propTypes = {
    navigator: PropTypes.object,
    //route: PropTypes.object.isRequired,
    //style:{},
};

class FlagListScreen extends Component {
   // static navigationOptions = {
   //      header:(navigation, defaultHeader)=>({
   //   //     visible:false,
   //        title:'Flagchat',
   //        style:{
   //           height:48,
   //           backgroundColor:'#6495ED',
   //        },
   //        tintColor:'white',
   //        right:(
   //         <TouchableNativeFeedback onPress={() => navigation.navigate('PostPage')}
   //            background={TouchableNativeFeedback.SelectableBackground()}>
   //          <View style={{marginRight:16,}} >
   //            <Icon size={24} name='telegram' style={{color:'white',}}/>
   //          </View>
   //        </TouchableNativeFeedback>
   //       ),
   //      }),
   //  }

   constructor(props){
      super(props)
      this.state={active:'home'}
      this._dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            //sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
      });
      let dataList = []

      this.state = {
            first: true,
            dataList: dataList,
            dataSource: this._dataSource.cloneWithRows(dataList),
      }
	}



  componentDidMount () {
        this._pullToRefreshListView.beginRefresh()
        if (UIManager.setLayoutAnimationEnabledExperimental) {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
  }

  componentWillMount () {
    //this.props.screenProps.tabBar.hide()
  }

  componentWillUnmount () {
   // this.props.screenProps.tabBar.show()
  }
  
  render(){
       //const { navigate } = this.props.navigation;
       const { navigation } = this.props;
		return(
         <View style={{flex:1}}>
              <Header navigation={navigation}/>
              <Button title={'退出登录'} onPress={()=>{ 
                 AsyncStorage.removeItem('user')
              }}/>
              <PullToRefreshListView
                ref={ (component) => this._pullToRefreshListView = component }
                viewType={PullToRefreshListView.constants.viewType.listView}
                contentContainerStyle={{backgroundColor: 'white', }}
                //style={{marginTop: Platform.OS == 'ios' ? 64 : 56, }}
                initialListSize={20}
                enableEmptySections={true}
                dataSource={this.state.dataSource}
                pageSize={20}
                renderRow={this._renderRow}
                renderHeader={this._renderHeader}
                renderFooter={this._renderFooter}
                //renderSeparator={(sectionID, rowID) => <View style={styles.separator} />}
                onRefresh={this._onRefresh}
                onLoadMore={this._onLoadMore}
                pullUpDistance={35}
                pullUpStayDistance={50}
                pullDownDistance={35}
                pullDownStayDistance={50}
                removeClippedSubviews={false}
               />
         </View>         
		);
	}

   _renderRow = (rowData, sectionID, rowID) => {
          if(rowID=='0'){
             return (
               <TabSwiper />
              ) 
            }else {
                return (
                  <View style={styles.thumbnail}>
                     <FlagContent {...rowData} />
                  </View>
                ) 
            }         
    }

    _renderHeader = (viewState) => {
        let {pullState, pullDistancePercent} = viewState
        let {refresh_none, refresh_idle, will_refresh, refreshing,} = PullToRefreshListView.constants.viewState
        pullDistancePercent = Math.round(pullDistancePercent * 100)
        switch(pullState) {
            case refresh_none:
                return (
                    <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink',}}>
                        <Text>pull down to refresh</Text>
                    </View>
                )
            case refresh_idle:
                return (
                    <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink',}}>
                        <Text>pull down to refresh{pullDistancePercent}%</Text>
                    </View>
                )
            case will_refresh:
                return (
                    <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink',}}>
                        <Text>release to refresh{pullDistancePercent > 100 ? 100 : pullDistancePercent}%</Text>
                    </View>
                )
            case refreshing:
                return (
                    <View style={{flexDirection: 'row', height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink',}}>
                        {this._renderActivityIndicator()}<Text>refreshing</Text>
                    </View>
                )
        }
    }

    _renderFooter = (viewState) => {
        let {pullState, pullDistancePercent} = viewState
        let {load_more_none, load_more_idle, will_load_more, loading_more, loaded_all, } = PullToRefreshListView.constants.viewState
        pullDistancePercent = Math.round(pullDistancePercent * 100)
        switch(pullState) {
            case load_more_none:
                return (
                    <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink',}}>
                        <Text>pull up to load more</Text>
                    </View>
                )
            case load_more_idle:
                return (
                    <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink',}}>
                        <Text>pull up to load more{pullDistancePercent}%</Text>
                    </View>
                )
            case will_load_more:
                return (
                    <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink',}}>
                        <Text>release to load more{pullDistancePercent > 100 ? 100 : pullDistancePercent}%</Text>
                    </View>
                )
            case loading_more:
                return (
                    <View style={{flexDirection: 'row', height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink',}}>
                        {this._renderActivityIndicator()}<Text>loading</Text>
                    </View>
                )
            case loaded_all:
                return (
                    <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink',}}>
                        <Text>no more</Text>
                    </View>
                )
        }
    }

    _onRefresh = () => {
        //console.log('outside _onRefresh start...')

        //simulate request data
        this.setTimeout( () => {

            //console.log('outside _onRefresh end...')
            //加载数量
            let addNum = 5
            let refreshedDataList = []
            for(let i = 0 ; i < addNum; i++) {
                refreshedDataList.push(flagData[i])
            }

            //showFlagNum=showFlagNum+5

            this.setState({
                dataList: refreshedDataList,
                dataSource: this._dataSource.cloneWithRows(refreshedDataList),
            })
            this._pullToRefreshListView.endRefresh()

        }, 100)
    }

    _onLoadMore = () => {
        //console.log('outside _onLoadMore start...')

        this.setTimeout( () => {

            //console.log('outside _onLoadMore end...')

            let length = this.state.dataList.length
            let addNum = 5
            let addedDataList = []
            let loadedAll = false  
            if(length >= 100) {
                addNum = 3
            }

            console.log(`加载数量 ${length} 总数量 ${flagData.length}` )
            if(length >= flagData.length) {
                loadedAll = true
                this._pullToRefreshListView.endLoadMore(loadedAll)
            }else {
                loadedAll = false
                this._pullToRefreshListView.endLoadMore(loadedAll)
                for(let i = length; i < length + addNum; i++) {
                   addedDataList.push(flagData[i])
                 }
                let newDataList = this.state.dataList.concat(addedDataList)
                this.setState({
                   dataList: newDataList,
                   dataSource: this._dataSource.cloneWithRows(newDataList),
               })
            }
        }, 100)
    }

    _renderActivityIndicator() {
        return ActivityIndicator ? (
            <ActivityIndicator
                style={{marginRight: 10,}}
                animating={true}
                color={'#ff0000'}
                size={'small'}/>
        ) : Platform.OS == 'android' ?
            (
                <ProgressBarAndroid
                    style={{marginRight: 10,}}
                    color={'#ff0000'}
                    styleAttr={'Small'}/>

            ) :  (
            <ActivityIndicatorIOS
                style={{marginRight: 10,}}
                animating={true}
                color={'#ff0000'}
                size={'small'}/>
        )
    }

} 

const styles = StyleSheet.create({
    itemHeader: {
        height: 35,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ccc',
        backgroundColor: 'blue',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        height: 60,
        //borderBottomWidth: StyleSheet.hairlineWidth,
        //borderBottomColor: '#ccc',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },

    contentContainer: {
        paddingTop: 20 + 44,
    },

    thumbnail: {
        //padding: 6,
        //flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ccc',
        //overflow: 'hidden',
    },

    textContainer: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})


FlagListScreen.propTypes=propTypes;
export default TimerEnhance(FlagListScreen);
