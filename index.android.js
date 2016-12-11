/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image
} from 'react-native';
import MovieItem from './MovieItem';



export default class ch3 extends Component {
 constructor() {
    super();
    this._refreshData();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([])
    };
  }
_renderRow=(rowData)=> {
  return (
 
    <MovieItem
    name = {rowData.name}
    movieURL = {rowData.thumbnail_url}>
   </MovieItem>
  );
}

_refreshData = ()=> {
  console.log('refresh data was called');
  var endpoint = "https://herotalkies-staging.elasticbeanstalk.com/api/v2/general/new_releases";
  fetch(endpoint)
  .then((response)=> response.json())
  .then((responseJSON)=>{
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(responseJSON)
    });
  })
  .catch((error) => {
    console.error(error);
  })

}

_componentDidMount = ()=> {
  console.log('component did mount was called');
  this._refreshData();
}

_renderHeader = ()=> {
  return(
    <View
    style={{
      height: 80
    }}>
    <Text
    style= {{
      alignSelf: 'center',
      color: '#ffffff',
      style: 'bold',
      fontSize: 24
      
    }}>
    Movies 
    </Text>
    </View>
  );
}

_renderFooter = ()=> {
  <View>
  <Text>
  Data from herotalkies
  </Text>
  </View>
}


  render() {
    return (
      <ListView
        style={{backgroundColor: '#000000'}}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => this._renderRow(rowData)}
        renderHeader = {this._renderHeader}
        renderFooter = {this._renderFooter}
        enableEmptySections = {true}
        pageSize = {5}
        removeClippedSubviews = {true}
         renderSeparator={(sectionID, rowID) =>
        <View key={`${sectionID}-${rowID}`} style={{
          height: 1,
          backgroundColor: 'grey',
          marginBottom: 10
        }} />
      }
      />
    );
  }
}



AppRegistry.registerComponent('ch3', () => ch3);
