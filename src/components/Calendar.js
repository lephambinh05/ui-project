import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getShiftsForDate } from '../data/weeklyShiftsData';

const Calendar = ({ selectedDate, onDateSelect, currentWeek, onWeekChange }) => {
  const daysOfWeek = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
  const [currentDate, setCurrentDate] = useState(new Date());
  const [weekDates, setWeekDates] = useState([]);

  // Generate week dates dynamically
  useEffect(() => {
    generateWeekDates();
  }, [currentDate]);

  const generateWeekDates = () => {
    const today = new Date(currentDate);
    const dayOfWeek = today.getDay();
    const monday = new Date(today);
    monday.setDate(today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));
    
    const week = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      week.push({
        date: date.getDate(),
        fullDate: new Date(date),
        isCurrentMonth: date.getMonth() === currentDate.getMonth(),
        isToday: date.toDateString() === new Date().toDateString()
      });
    }
    setWeekDates(week);
  };

  const getDateIndicators = (dateInfo) => {
    const shifts = getShiftsForDate(dateInfo.fullDate);
    if (!shifts || shifts.length === 0) {
      return [];
    }
    
    // Generate colors based on shift types
    return shifts.map(shift => {
      switch (shift.status) {
        case 'normal':
          return '#4CAF50'; // Green
        case 'missing':
          return '#F44336'; // Red
        case 'warning':
          return '#FF9800'; // Orange
        default:
          return '#2196F3'; // Blue
      }
    });
  };

  const navigateWeek = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + (direction * 7));
    setCurrentDate(newDate);
    if (onWeekChange) {
      onWeekChange(newDate);
    }
  };

  const renderDateCell = (dateInfo) => {
    const { date, fullDate, isCurrentMonth, isToday } = dateInfo;
    const indicators = getDateIndicators(dateInfo);
    const isSelected = selectedDate === date;
    const hasShifts = indicators.length > 0;

    return (
      <TouchableOpacity
        key={`${date}-${fullDate.getMonth()}`}
        style={[
          styles.dateCell,
          hasShifts && styles.dateCellWithShifts,
          isSelected && styles.selectedDateCell
        ]}
        onPress={() => onDateSelect(date)}
      >
        <View style={[
          styles.dateContainer,
          isSelected && styles.selectedDateContainer,
          isToday && styles.todayDateContainer
        ]}>
          <Text style={[
            styles.dateText,
            !isCurrentMonth && styles.otherMonthDateText,
            isToday && styles.todayText,
            isSelected && styles.selectedDateText
          ]}>
            {date}
          </Text>
          
          <Text style={[
            styles.dayText,
            !isCurrentMonth && styles.otherMonthDayText,
            isToday && styles.todayDayText,
            isSelected && styles.selectedDayText
          ]}>
            {fullDate.toLocaleDateString('vi-VN', { weekday: 'short' })}
          </Text>
        </View>
        
        {indicators.length > 0 && (
          <View style={styles.indicatorsContainer}>
            {indicators.map((color, index) => (
              <View
                key={index}
                style={[styles.indicator, { backgroundColor: color }]}
              />
            ))}
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Navigation Header */}
      <View style={styles.navigationHeader}>
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => navigateWeek(-1)}
        >
          <Ionicons name="chevron-back" size={20} color="#333" />
        </TouchableOpacity>
        
        <Text style={styles.weekTitle}>
          Tuần {Math.ceil(weekDates[0]?.date / 7)} - {currentDate.toLocaleDateString('vi-VN', { month: 'long', year: 'numeric' })}
        </Text>
        
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => navigateWeek(1)}
        >
          <Ionicons name="chevron-forward" size={20} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Calendar Grid */}
      <View style={styles.calendarGrid}>
        {/* Time Label Column */}
        <View style={styles.timeLabelColumn}>
          <Text style={styles.timeLabelText}>Ngày</Text>
          <Text style={styles.timeLabelSubText}>/Giờ</Text>
        </View>

        {/* Days of Week */}
        <View style={styles.daysOfWeek}>
          {weekDates.map((dateInfo, index) => (
            <View key={index} style={styles.dayHeader}>
              <Text style={styles.dayNumber}>{dateInfo.date}</Text>
              <Text style={styles.dayName}>
                {dateInfo.fullDate.toLocaleDateString('vi-VN', { weekday: 'short' })}
              </Text>
            </View>
          ))}
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  navigationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 0,
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E8EAED',
  },
  navButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  weekTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    textAlign: 'center',
  },
  calendarGrid: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E8EAED',
    borderBottomWidth: 1,
    borderBottomColor: '#E8EAED',
  },
  timeLabelColumn: {
    width: 60,
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRightWidth: 1,
    borderRightColor: '#E8EAED',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeLabelText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#3C4043',
    textAlign: 'center',
    lineHeight: 18,
  },
  timeLabelSubText: {
    fontSize: 11,
    fontWeight: '400',
    color: '#5F6368',
    textAlign: 'center',
    lineHeight: 16,
  },
  daysOfWeek: {
    flexDirection: 'row',
    flex: 1,
  },
  dayHeader: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 0,
    backgroundColor: '#FFFFFF',
    borderRightWidth: 1,
    borderRightColor: '#E8EAED',
  },
  dayNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 2,
  },
  dayName: {
    fontSize: 12,
    fontWeight: '500',
    color: '#666666',
    textAlign: 'center',
  },
});

export default Calendar;
