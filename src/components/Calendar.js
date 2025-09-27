import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Calendar = ({ selectedDate, onDateSelect, currentMonth, onMonthChange }) => {
  const daysOfWeek = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CB'];
  
  // Single row of dates as shown in the image
  const dateRow = [26, 27, 28, 29, 30, 31, 1];

  const getDateIndicators = (date) => {
    // Date 1 has multiple colored indicators
    if (date === 1) {
      return ['#FF6B35', '#FFD23F', '#8B5CF6'];
    }
    // Other dates have single grey indicator
    return ['#CCCCCC'];
  };

  const renderDateCell = (date) => {
    const indicators = getDateIndicators(date);
    const isSelected = selectedDate === date;

    return (
      <TouchableOpacity
        key={date}
        style={styles.dateCell}
        onPress={() => onDateSelect(date)}
      >
        {isSelected ? (
          <View style={styles.selectedDateCircle}>
            <Text style={styles.selectedDateText}>{date}</Text>
          </View>
        ) : (
          <Text style={[
            styles.dateText,
            date < 26 && styles.otherMonthDateText
          ]}>
            {date}
          </Text>
        )}
        
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
      {/* Days of Week */}
      <View style={styles.daysOfWeek}>
        {daysOfWeek.map((day, index) => (
          <Text key={index} style={styles.dayOfWeekText}>{day}</Text>
        ))}
      </View>

      {/* Single Date Row */}
      <View style={styles.dateRow}>
        {dateRow.map((date) => renderDateCell(date))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  daysOfWeek: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    backgroundColor: '#F5F5F5',
    paddingVertical: 8,
  },
  dayOfWeekText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666666',
    width: 40,
    textAlign: 'center',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
  },
  dateCell: {
    width: 40,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  dateText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
  otherMonthDateText: {
    color: '#CCCCCC',
  },
  selectedDateCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F0F0F0',
    borderWidth: 2,
    borderColor: '#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedDateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  indicatorsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 2,
    flexWrap: 'wrap',
  },
  indicator: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginHorizontal: 1,
  },
});

export default Calendar;
