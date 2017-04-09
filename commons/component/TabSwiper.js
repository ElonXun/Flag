'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';


import Swiper from 'react-native-swiper';
const width = Dimensions.get('window').width;
const BANNER_IMGS = [  
    require('../../src/assets/img/banner/bnner1.jpg'),  
    require('../../src/assets/img/banner/bnner2.jpg'),  
    require('../../src/assets/img/banner/bnner3.jpg'),  
]; 

export default class TabSwiper extends Component{

   constructor(props){
      super(props)
   }

   render(){
      return(
         <View >
             <Swiper style={styles.wrapper} height={130} 
                     showsButtons={false} horizontal={true} 
                     autoplay={true} autoplayTimeout={2.5} 
                     autoplayDirection={true} showsPagination={true}
                     paginationStyle={{
                        bottom: 6,
                     }}
                     >
                 <View style={styles.slide1}>
                    <Image source={BANNER_IMGS[1]} style={styles.img}/>
                 </View>
                 <View style={styles.slide2}>
                   <Image source={BANNER_IMGS[2]} style={styles.img}/>
                 </View>
                 <View style={styles.slide3}>
                    <Image source={BANNER_IMGS[0]} style={styles.img}/>
                 </View>
             </Swiper>         
         </View>
      );
   }
}

const styles = StyleSheet.create({
  wrapper: {
    
  	//height:130,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  img:{
  	width:width,
  	flex:1,
  	height: 130,  
  	resizeMode: 'stretch',
  }

})