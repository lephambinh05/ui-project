import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarComponent = ({ selectedDate, onDateSelect, currentWeek, onWeekChange }) => {
  const [selected, setSelected] = useState(selectedDate ? selectedDate.toString() : '');

  const onDayPress = (day) => {
    setSelected(day.dateString);
    onDateSelect(day.day);
  };

  const getMarkedDates = () => {
    const marked = {};
    
    // Mark selected date
    if (selected) {
      marked[selected] = {
        selected: true,
        selectedColor: '#20B2AA',
        selectedTextColor: '#FFFFFF'
      };
    }

    // Mark today
    const today = new Date().toISOString().split('T')[0];
    marked[today] = {
      ...marked[today],
      marked: true,
      dotColor: '#FF6B6B'
    };

    return marked;
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={onDayPress}
        markedDates={getMarkedDates()}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#20B2AA',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#FF6B6B',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: '#20B2AA',
          disabledArrowColor: '#d9e1e8',
          monthTextColor: '#2d4150',
          indicatorColor: '#20B2AA',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 13
        }}
        firstDay={1} // Start week on Monday
        showWeekNumbers={false}
        hideExtraDays={true}
        enableSwipeMonths={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default CalendarComponent;
