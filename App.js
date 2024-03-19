import React, { Component } from 'react';
import {View,  Text,  StyleSheet,  Platform,  Button,  TouchableOpacity,Image,TextInput,Keyboard} from 'react-native';

  
export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      
    };
    }
  
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
           <Image 
            source={require('./src/logo.png')}
            style={styles.logo}
            />
            <Text style={styles.inicio}> Qual melhor opção?</Text>
          </View>
          <View>
             <Text style={styles.legenda}>
             Álcool (preço por litro):
             </Text>
             <TextInput style={styles.input}
              placeholder="Digite o preço da gasolina"
              keyboardType='numeric'
             />
             <Text style={styles.legenda}>
             Gasolina (preço por litro):
             </Text>
             <TextInput style={styles.input}
              placeholder="Digite o preço da gasolina"
              keyboardType='numeric'
             /> 
             <TouchableOpacity style={styles.botao}>
              <Text style={styles.calcular}>Calcular</Text>
             </TouchableOpacity>
                    
             </View>
             
             
             
      </View>
            
          
      );

  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'black',
  },
  header:{
    alignItems:'center',
    paddingTop:100
  },
  inicio:{
    color:'white',
    fontSize:30,
    paddingTop:15
  },
  legenda:{
    color:'white',
    fontSize:15,
    paddingTop:15 
  },
  input:{
    borderWidth:1,
    borderRadius:10,
    backgroundColor:'#EEEEEE',
  },
  botao:{
    backgroundColor:'red',
    color:'white',
    borderWidth:1,
    borderRadius:10,
    height:50,
    alignItems:'center',
    paddingTop:10
  }, 
  calcular:{
    color:'white',
    fontSize:20,
   
  } 
});

