import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from '../components/Header';
import Calendar from '../components/Calendar';
import ShiftList from '../components/ShiftList';

const WorkShiftScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  const [currentMonth, setCurrentMonth] = useState(new Date().toLocaleDateString('vi-VN', { month: 'long' }));

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
