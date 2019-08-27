import React, { Component } from 'react';
import {StyleSheet,Dimensions,Button, Text,Animated, View, TouchableOpacity, Image} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import CardStack, { Card } from 'react-native-card-stack-swiper';
import Video from 'react-native-video'

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const Assets = [
  { id: "1", uri: require('./assets/FakePicture/1.jpg')},
  { id: "2", uri: require('./assets/FakePicture/2.jpg')},
  { id: "3", uri: require('./assets/FakePicture/3.jpg')},        
  { id: "4", uri: require('./assets/FakePicture/4.jpg')},
  { id: "5", uri: require('./assets/FakePicture/5.jpg')},
  { id: "6", uri: require('./assets/FakePicture/6.jpg')},
  { id: "7", uri: require('./assets/FakePicture/7.jpg')},
]


class HomeScreen extends Component<{}> {
  static navigationOptions = {
      header: null
  }

  constructor() {
    super()
    this.state = {
      Picture: [
        { id: "1", uri: require('./assets/FakePicture/1.jpg')},
        { id: "2", uri: require('./assets/FakePicture/2.jpg')},
        { id: "3", uri: require('./assets/FakePicture/3.jpg')},        
        { id: "4", uri: require('./assets/FakePicture/4.jpg')},
        { id: "5", uri: require('./assets/FakePicture/5.jpg')},
        { id: "6", uri: require('./assets/FakePicture/6.jpg')},
        { id: "7", uri: require('./assets/FakePicture/7.jpg')},
      ]
    }
  }

  updateArray = () => {
    var Temp = this.state.Picture

    this.setState({Picture : Temp})
  }

  
  render() {

    var Array = []
    
    for(var i=0;i<Assets.length;i++){
      Array.push(<Card style={[styles.card, styles.card1]}><Image style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }} source={Assets[i].uri} /></Card>);
    }

    return (
      <View style={{marginTop: 30,flex:1}}>

        <View style={{ flex: 0.3, justifyContent: "center", alignItems: "center"}}>

            <TouchableOpacity style={{marginTop: 30}} onPress={()=>{
              this.props.navigation.navigate('Details')
            }}>
              <Image source={require('./assets/setting.png')} resizeMode={'contain'} style={{ height: 42, width: 42 }} />
            </TouchableOpacity>
        </View>
        <CardStack
          style={styles.content}
          loop={true}
          onSwiped={() => console.log('onSwiped')}
          renderNoMoreCards={() => <Text style={{fontWeight:'700', fontSize:18, color:'gray'}}>No more cards :(</Text>}
          ref={swiper => {
            this.swiper = swiper
          }}
        >

        {
          this.state.Picture.map(function(item){
            if(item.id%2){
            return(
                <Card key={item.id} style={styles.card}><Image style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }} source={item.uri} /></Card>
              )
          }
          else{
            return(
                <Card key={item.id} style={[styles.card, styles.card1]}><Text style={styles.label}>Je suis un Texte</Text></Card>
              )
          }
          })
        }
        <Card key='9' style={[styles.card, styles.card1]}><Video style={styles.label} source={require('./assets/Skate.mp4')}/></Card>
        
        </CardStack>


        <View style={styles.footer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button,styles.red]} onPress={()=>{
              this.swiper.swipeLeft();
            }}>
              <Image source={require('./assets/red.png')} resizeMode={'contain'} style={{ height: 42, width: 42 }} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,styles.orange]} onPress={() => {
              this.swiper.goBackFromLeft();
            }}>
              <Image source={require('./assets/back.png')} resizeMode={'contain'} style={{ height: 32, width: 32, borderRadius: 5 }} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,styles.green]} onPress={()=>{
              this.swiper.swipeRight();
            }}>
              <Image source={require('./assets/green.png')} resizeMode={'contain'} style={{ height: 42, width: 42 }} />
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Ceci est le détail !</Text>
        
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
  },
  content:{
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    width: 320,
    height: 470,
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
  },
    card1: {
    backgroundColor: '#FE474C',
  },
 label: {
    lineHeight: 400,
    textAlign: 'center',
    fontSize: 35,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  footer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonContainer:{
    width:220,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  button:{
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    zIndex: 0,
  },
  orange:{
    width:55,
    height:55,
    borderWidth:6,
    borderColor:'rgb(246,190,66)',
    borderWidth:4,
    borderRadius:55,
    marginTop:-15
  },
  green:{
    width:75,
    height:75,
    backgroundColor:'#fff',
    borderRadius:75,
    borderWidth:6,
    borderColor:'#01df8a',
  },
  red:{
    width:75,
    height:75,
    backgroundColor:'#fff',
    borderRadius:75,
    borderWidth:6,
    borderColor:'#fd267d',
  }
});