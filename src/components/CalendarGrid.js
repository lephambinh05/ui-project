import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CalendarGrid = ({ selectedDate, onDateSelect, currentWeek, onWeekChange }) => {
  const [monthDates, setMonthDates] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    generateMonthDates();
  }, [currentMonth]);

  const generateMonthDates = () => {
    const today = new Date();
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    // Get first day of month and last day of month
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    // Get first Monday of the week containing first day
    const firstMonday = new Date(firstDay);
    const dayOfWeek = firstDay.getDay();
    const daysToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    firstMonday.setDate(firstDay.getDate() - daysToMonday);
    
    // Get last Sunday of the week containing last day
    const lastSunday = new Date(lastDay);
    const lastDayOfWeek = lastDay.getDay();
    const daysToSunday = lastDayOfWeek === 0 ? 0 : 7 - lastDayOfWeek;
    lastSunday.setDate(lastDay.getDate() + daysToSunday);
    
    const dates = [];
    const current = new Date(firstMonday);
    
    while (current <= lastSunday) {
      dates.push({
        date: current.getDate(),
        fullDate: new Date(current),
        isCurrentMonth: current.getMonth() === month,
        isToday: current.toDateString() === today.toDateString(),
        isSelected: current.getDate() === selectedDate
      });
      current.setDate(current.getDate() + 1);
    }
    
    setMonthDates(dates);
  };

  const handleDatePress = (dateInfo) => {
    if (dateInfo.isCurrentMonth) {
      onDateSelect(dateInfo.date);
    }
  };

  const handleMonthChange = (direction) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(currentMonth.getMonth() + direction);
    setCurrentMonth(newMonth);
  };

  const getDateStyle = (dateInfo) => {
    if (dateInfo.isSelected) {
      return [styles.dateText, styles.selectedDate];
    }
    if (dateInfo.isToday) {
      return [styles.dateText, styles.todayDate];
    }
    if (!dateInfo.isCurrentMonth) {
      return [styles.dateText, styles.otherMonthDate];
    }
    return styles.dateText;
  };

  const getDateContainerStyle = (dateInfo) => {
    if (dateInfo.isSelected) {
      return [styles.dateContainer, styles.selectedDateContainer];
    }
    return styles.dateContainer;
  };

  const monthYearString = currentMonth.toLocaleDateString('vi-VN', { 
    month: 'long', 
    year: 'numeric' 
  });

  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <View style={styles.container}>
      {/* Month/Year Header */}
      <View style={styles.monthHeader}>
        <TouchableOpacity onPress={() => handleMonthChange(-1)}>
          <Ionicons name="chevron-back" size={20} color="#20B2AA" />
        </TouchableOpacity>
        <Text style={styles.monthYearText}>{monthYearString}</Text>
        <TouchableOpacity onPress={() => handleMonthChange(1)}>
          <Ionicons name="chevron-forward" size={20} color="#20B2AA" />
        </TouchableOpacity>
      </View>

      {/* Day Names Header */}
      <View style={styles.dayNamesRow}>
        {dayNames.map((day, index) => (
          <Text key={index} style={styles.dayNameText}>{day}</Text>
        ))}
      </View>

      {/* Calendar Grid */}
      <View style={styles.calendarGrid}>
        {monthDates.map((dateInfo, index) => (
          <TouchableOpacity
            key={index}
            style={getDateContainerStyle(dateInfo)}
            onPress={() => handleDatePress(dateInfo)}
          >
            <Text style={getDateStyle(dateInfo)}>
              {dateInfo.date}
            </Text>
            {/* Event indicator dot */}
            {dateInfo.isCurrentMonth && dateInfo.date === 27 && (
              <View style={styles.eventDot} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  monthHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  monthYearText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  dayNamesRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  dayNameText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666666',
    width: 40,
    textAlign: 'center',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  dateContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    position: 'relative',
  },
  selectedDateContainer: {
    backgroundColor: '#20B2AA',
    borderRadius: 20,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
  selectedDate: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  todayDate: {
    color: '#FF6B6B',
    fontWeight: 'bold',
  },
  otherMonthDate: {
    color: '#CCCCCC',
  },
  eventDot: {
    position: 'absolute',
    bottom: 4,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FF6B6B',
  },
});

export default CalendarGrid;
