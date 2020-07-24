import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    FlatList,
    TouchableOpacity,
    Alert,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import Header from './components/Header';
import Todo from './components/todo';
import Addtodo from './components/Addtodo';
import Sandbox from './components/Sandbox';

export default function App() {
  
   const [todos,setTodos] = useState([
     {text: 'buy coffe', key:'1'},
     {text: 'create app', key:'2'},
     {text: 'code', key:'3'},
   ])
    const pressHandler = (key) => {
      setTodos((prevTodos)=>{
        return prevTodos.filter(todo => todo.key != key)
      })
    }
   const submitHandler = (text) => {

   if(text.length > 3){
    setTodos((prevTodos)=>{
      return[
        {text: text, key:Math.random().toString()},
         ...prevTodos
      ]
    })
   }else {
     Alert.alert('OOPS!','TODS must be over 3 chars long',[
       {text:'Understood',onPress:()=> console.log('alert closed')}
     ])
   }

     
   }
    return (
      // <Sandbox/>
        <TouchableWithoutFeedback onPress={()=>{
          Keyboard.dismiss();
          console.log('dismissed keyboard')
        }}>
        <View style={styles.container}>
               <Header/>
              <View style={styles.content}>
                <Addtodo submitHandler={submitHandler}/>
                <View style={styles.list}>
                  <FlatList
                  data={todos}
                  renderItem={({item})=>(
                    <Todo item={item} pressHandler={pressHandler}/>
                  )}
                  />

                </View>
              </View>
            <StatusBar style="auto"/>
        </View>
         </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
      padding: 40,
      flex:1
    },
    list: {
      marginTop: 20,
      flex:1
    }
});
