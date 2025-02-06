import React, {useState} from 'react';
import {StyleSheet, Text, View, SectionList, StatusBar, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Morning',
    data: ['Taking Bath', 'BreakFast', 'Tootbrush', 'Warm-up', 'Organize your space', 'Take a moment to relax', 'Exercise', 'Mindfulness', 'Wake Up Early'],
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Afternoon',
    data: ['Eating', 'Gaming', 'Watching', 'Social Media', 'Hydrate','Work/Study Session', 'Short Walk', 'Lunch Break'],
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Evening',
    data: ['Dinner', 'Taking bath', 'Sleep', 'prepare for bed', 'Light Exercise', 'Relaxation', 'Plan for Tomorrow', 'Unplug'],
  },
];

const getColor = (index) => {
  const colors = ['#00cc77', '#cc1100', '#00cccc', '#00ffff'];
  return colors[index % colors.length];
};

const App = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top']}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({item, index}) => (
            <View style={[styles.item, {backgroundColor: selectedItemIndex === index ? '#7c7c7c' : getColor(index)}]}>
              <TouchableOpacity onPress={() => setSelectedItemIndex(index)}>
                <Text style={styles.title}>{item}</Text>
              </TouchableOpacity>
            </View>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default App;
