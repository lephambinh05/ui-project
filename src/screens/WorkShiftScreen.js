import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from '../components/Header';
import Calendar from '../components/Calendar';
import ShiftList from '../components/ShiftList';

const WorkShiftScreen = () => {
  const [selectedDate, setSelectedDate] = useState(24);
  const [currentMonth, setCurrentMonth] = useState('Tháng 4');

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Calendar 
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
          currentMonth={currentMonth}
          onMonthChange={setCurrentMonth}
        />
        <ShiftList selectedDate={selectedDate} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
  },
});

export default WorkShiftScreen;
