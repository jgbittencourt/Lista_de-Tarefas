import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import styles from './style/styles'; 

export default function App() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const [selectedIndices, setSelectedIndices] = useState([]);

  const addItem = () => {
    if (text) {
      setList([...list, text]);
      setText('');
    }
  };

  const removePrimeiroItem = () => {
    setList((prevList) => prevList.slice(1));
  };

  const removeLastItem = () => {
    setList((prevList) => prevList.slice(0, -1));
  };

  const removeSelectedItems = () => {
    setList((prevList) => prevList.filter((_, index) => !selectedIndices.includes(index)));
    setSelectedIndices([]);
  };

  const toggleSelectItem = (index) => {
    if (selectedIndices.includes(index)) {
      setSelectedIndices(selectedIndices.filter((i) => i !== index));
    } else {
      setSelectedIndices([...selectedIndices, index]);
    }
  };

  return (
    <View style={styles.container}>
    <Text style={text}>Lista de Tarefas</Text>
      <TextInput
        style={styles.input}
        placeholder="Add Item"
        placeholderTextColor="#ffffff" 
        value={text}
        onChangeText={setText}
      />
      <Button title="TO ADD" onPress={addItem} />

      <FlatList
        data={list}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.listItem,
              selectedIndices.includes(index) && styles.selectedItem,
            ]}
            onPress={() => toggleSelectItem(index)}
          >
            <Text style={styles.listItemText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={styles.buttonsContainer}>
        <Button title="Remove First" onPress={removePrimeiroItem} />
        <Button title="Remove Last" onPress={removeLastItem} />
        <Button title="Remove Selected" onPress={removeSelectedItems} />
      </View>
    </View>
  );
}
