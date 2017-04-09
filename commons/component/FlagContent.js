'use strict';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import SubMenu from './SubMenu';

import React, { Component,PropTypes, } from 'react';
import {
	    View,
        Text, 
        Image, 
        StyleSheet, 
        Dimensions,
        Alert,  
        } from 'react-native';

const propTypes ={
    //Flag的数据源  对象
    // data:PropTypes.shape({
    //   test: PropTypes.string.isRequired,
    // }).isRequired,
    // a:PropTypes.string.isRequired,
}

class FlagContent extends Component{

    constructor(props){
      super(props)
    }
    

    render(){
      //const { test,a } = this.props;
    	return(
            <View style={styles.wapper}>
                <View style={styles.top}>
                     <Image style={styles.headImg} source={require('../../logo.png')}/>
                     <View style={styles.headTitle} >
                        <Text style={styles.nickNameAndLocation}>
                           {this.props.nickName} &nbsp;
                          <Icon name={'map-marker-radius'} size={16}/>
                          &nbsp;{this.props.poiName} {this.props.test}
                        </Text>
                         <Text style={styles.time}>
                           {this.props.postData}
                        </Text>
                     </View>
                </View>
                <View style={styles.middle}>
                     <Text >
                       {this.props.flagContent}
                     </Text>
                </View>
                <View style={styles.loveBtnAndCommetBtn}>
                   <Icon name={'heart'} size={20} style={{color:'#DC143C',}} />
                   <Text>
                      &nbsp;{this.props.loveNum}
                   </Text>
                   <Icon name={'comment'} size={20} style={{position:'absolute',right:16,}}/>
                </View>
                <View style={styles.bottom}>
                    <Text>
                       fmn@Elo 搜索死你死死打扫打扫打扫的啊死打扫啊死大打扫
                        打扫打扫撒打扫的撒打扫打扫打扫打扫打扫的撒的...
                    </Text>
                    <Text>
                       全部300条评论
                    </Text>
                    <Text>
                      3小时前
                    </Text>
                </View>
            </View>
          
    	);
    }
}

const styles=StyleSheet.create({
	// <Icon name={'dots-vertical'} size={20} style={{position:'absolute',right:16,top:15}}/>
    wapper:{
      // flex:1,
       flexDirection:'column',
      // height:300,
       //backgroundColor:'black',
       paddingBottom:16,
    },
     
    top:{
    	//flex:0,
    	flexDirection:'row',
    	height:72,
    	paddingTop:16,
    	paddingLeft:16,
    	//backgroundColor:'blue',
    },

    headImg:{
        width:40,
        height:40,
        // 设置图片填充模式
        resizeMode:'stretch',
        // 设置圆角
       // borderRadius:100,
        //backgroundColor:'black',
        //resizeMode: 'stretch',
    },

    headTitle:{
    	flexDirection:'column',
        //backgroundColor:'red',
        marginLeft:8,
    },
    
    middle:{
    	flexDirection:'column',
    	//alignSelf:'baseline',
       // marginTop:1,
        paddingLeft:16,
        paddingRight:16,
        //backgroundColor:'yellow'
    },
    
    loveBtnAndCommetBtn:{
       flexDirection:'row',
       marginTop:8,
      // backgroundColor:'green',
       height:20,
       paddingLeft:16,
    },

    bottom:{
       flexDirection:'column',
       marginTop:8,
       paddingLeft:16,
       paddingRight:16,
       //backgroundColor:'pink',
    },

    
});

FlagContent.PropTypes=propTypes;
export default FlagContent;

