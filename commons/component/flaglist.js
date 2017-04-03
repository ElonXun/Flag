'use strict';

import React, { Component } from 'react';
import {View, Text, ListView, Image, TouchableHighlight, StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export default class Flaglist extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
			{
				"_id": "350000199305113219",
				"head": "http://dummyimage.com/20×20/4454f8)"
			}, {
				"_id": "630000201104193598",
				"head": "http://dummyimage.com/20×20/549fe3)"
			}
      ]),
    };
  }

  renderRow (row){
    return (
       <TouchableHighlight>
          <View style={styles.item}>
             <Text>{row._id}</Text>
             <Image
               source={{uri: row.head}}
               style={styles.head}
             >
             </Image>
          </View>
       </TouchableHighlight>
    )
  }

  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          enableEmptySections={true}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
   container:{
      flex:1
   },

   item:{
      width:width,
      marginBottom:10
   },

   head:{
   	  width:200,
   	  height:500,
   	  resizeMode:'cover'
   }
});