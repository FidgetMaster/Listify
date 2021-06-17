import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import ListAnimation from "../components/listicon";

export default class WelcomeScreen extends React.Component{
    render(){
        return(
            <View style = {{flex:1,marginTop:100,alignItems:'center'}}>
                <ListAnimation/>
                <Text style = {{color:'#cece7b',fontSize:30,fontFamily:'Lucida Calligraphy'}}>
                    Listify
                </Text>
                <TouchableOpacity style = {styles.button} onPress = {()=>{this.props.navigation.navigate('Homescreen')}}>
                    <Text style = {{fontSize:15,fontFamily:'Arial',color:'#cece7b'}}>
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    button:{
        width:"30%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:"#8c6cd8",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop:70
        }
})