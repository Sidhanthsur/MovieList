
import React,{Component,PropTypes} from 'react';
import {StyleSheet,Text,View,Image,
    TouchableHighlight} from 'react-native';

 export default class MovieItem extends Component {

   _onPressItem = ()=> {
       console.log("Pressed"+this.props.name);
   }
 render(){
     return(
         <TouchableHighlight
         style={{flex:1}}
         onPress = {this._onPressItem}
         >
         <View style= {styles.mainContainer}>
         
         <Image
         style= {styles.imageView}
         source = {{uri: 'https:'+this.props.movieURL}}>
         </Image>
        
         <Text style= {styles.textView}>{this.props.name}
         </Text>
         
         
        </View>
        </TouchableHighlight>
        
     );
 }


}
 MovieItem.propTypes = {
     name: PropTypes.string.isRequired,
     movieURL: PropTypes.string.isRequired
 };

 var styles =  StyleSheet.create({
     mainContainer:{
         flexDirection: 'row',
         flex: 1,
         marginBottom: 10
         
     },
     imageView: {
         
         width: 90,
         height: 120
     },
     textView: {
         flex:1,
         fontSize: 18,
         marginLeft: 10,
         alignSelf: 'center',
         color: '#FFFFFF'
         
     }
 })