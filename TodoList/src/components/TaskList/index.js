import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

export default function TaskList({ data, deleteItem, editItem }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ marginRight: 10 }} onPress={() => deleteItem(data.key)}>
        <Icon
          name="trash"
          color="#FFF"
          size={20}
        />
      </TouchableOpacity>

      <View style={{ paddingRight: 15 }}>
        <TouchableWithoutFeedback onPress={() => editItem(data)}>
          <Text style={{ color: '#FFF', paddingRight: 10 }}>{data.nome}</Text>
        </TouchableWithoutFeedback>
      </View>

    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#121212',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5
  }
})