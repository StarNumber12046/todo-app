import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Keyboard, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import Task from './components/task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy)
  }
  
  return (
    <View style={styles.container}>
      {/* Cose da fare di oggi */}

      <View style={styles.taskWrapper}>
          <Text style={styles.sezioneTitolo}>Cose da fare oggi</Text>
          <View style={styles.items}>
            {/* Dove saranno scritte le task */}
            {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                    <Task  text={item}/>
                  </TouchableOpacity>
                )
              })
            }
            {/* <Task text={"Avere la ragazza"}/>
            <Task text={"Uscire e toccare l'erba (touch grass)"}/> */}
          </View>
      </View>

        {/* Scrivi una task */}
        <KeyboardAvoidingView
        behavior={Platform.OS == 'android' ? "padding" : "height"}
        style={styles.wrapperScriviTask}
        >
          <TextInput style={styles.input} placeholder={"Scrivi la cosa da fare"} value={task} onChangeText={text => setTask(text)} />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.aggiungiWrapper}>
              <Text style={styles.aggiungiTesto}>+</Text>
            </View>
          </TouchableOpacity>

        </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b2bd6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskWrapper: {
    paddingHorizontal: 20,
  },
  sezioneTitolo: {
   fontSize: 26,
   fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal:15,
    backgroundColor:'#fff',
    width: 250,
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1


  },
  wrapperScriviTask:{
    position: 'absolute',
    bottom:60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  aggiungiWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  aggiungiTesto:{},
});
