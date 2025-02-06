import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const Morning = [
  { id: '1', title: 'Wake-Up and Refresh', color: '#F8F5E9' },
  { id: '2', title: 'Wake up and stretch', color: '#DF6D14' },
  { id: '3', title: 'Drink a glass of water', color: '#3A7D44' },
  { id: '4', title: 'Brush your teeth and wash your face', color: '#F7CFD8' },
  { id: '5', title: 'Prepare and eat a healthy breakfast', color: '#FFEFC8' },
  { id: '6', title: 'Review your schedule and set priorities', color: '#3674B5' },
  { id: '7', title: 'Check and respond to urgent emails/messages', color: '#D70654' },
  { id: '8', title: 'Attend any scheduled meetings or classes', color: '#497D74' },
  { id: '9', title: 'Focus on the most important task for the day', color: '#B8D576' },
  { id: '10', title: 'Third Item' },
];

const Afternoon = [
  { id: '1', title: 'Lunch Break', color: '#F8F5E9' },
  { id: '2', title: 'Take a Walk', color: '#DF6D14' },
  { id: '3', title: 'Respond to Emails/Messages', color: '#3A7D44' },
  { id: '4', title: 'Work on Important Task', color: '#F7CFD8' },
  { id: '5', title: 'Review Calendar/Agenda', color: '#FFEFC8' },
  { id: '6', title: 'Take Short Break', color: '#3674B5' },
  { id: '7', title: 'Continue Work/Study', color: '#D70654' },
  { id: '8', title: 'Prepare for the Next Day', color: '#497D74' },
  { id: '9', title: 'Evening Relaxation', color: '#B8D576' },
  { id: '10', title: 'Connect with a Friend or Family Member', color: '#FFD700' },
];

const Evening = [
  { id: '1', title: 'Dinner', color: '#F8F5E9' },
  { id: '2', title: 'Relax & Unwind', color: '#DF6D14' },
  { id: '3', title: 'Light Exercise', color: '#3A7D44' },
  { id: '4', title: 'Plan for Tomorrow', color: '#F7CFD8' },
  { id: '5', title: 'Disconnect from Screens', color: '#FFEFC8' },
];


const CustomRadioButton = ({ isSelected, onSelect }) => (
  <TouchableOpacity onPress={onSelect} style={styles.radioButtonContainer}>
    <View style={[styles.radioButton, isSelected && styles.selectedRadioButton]} />
  </TouchableOpacity>
);

const Item = ({ title, color, isSelected, onSelect }) => (
  <View style={[styles.item, { backgroundColor: color }]}>
    <TouchableOpacity onPress={onSelect}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
    <CustomRadioButton isSelected={isSelected} onSelect={onSelect} />
  </View>
);

const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (title) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(title)) {
        // Remove from selected list
        return prevSelectedItems.filter((item) => item !== title);
      } else {
        // Add to selected list
        return [...prevSelectedItems, title];
      }
    });
  };

  const getNotSelectedCount = () => {
    // Combine all data arrays into one array
    const totalItems = [...Morning, ...Afternoon, ...Evening];
    return totalItems.length - selectedItems.length;
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.textStyle}>Morning</Text>
        <FlatList
          data={Morning}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              color={item.color}
              isSelected={selectedItems.includes(item.title)}
              onSelect={() => handleSelect(item.title)}
            />
          )}
          keyExtractor={(item) => item.id}
        />

        <Text style={styles.textStyle}>Afternoon</Text>
        <FlatList
          data={Afternoon}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              color={item.color}
              isSelected={selectedItems.includes(item.title)}
              onSelect={() => handleSelect(item.title)}
            />
          )}
          keyExtractor={(item) => item.id}
        />

        <Text style={styles.textStyle}>Evening</Text>
        <FlatList
          data={Evening}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              color={item.color}
              isSelected={selectedItems.includes(item.title)}
              onSelect={() => handleSelect(item.title)}
            />
          )}
          keyExtractor={(item) => item.id}
        />

        <Text style={styles.selectedCount}>
          Selected Count: {selectedItems.length}
        </Text>
        <Text style={styles.selectedCount}>
          Not Selected Count: {getNotSelectedCount()}
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    flex: 1,
  },
  radioButtonContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#3674B5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButton: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
  selectedRadioButton: {
    backgroundColor: '#3674B5',
  },
  selectedCount: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  },
});

export default App; 