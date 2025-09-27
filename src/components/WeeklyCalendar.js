import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const WeeklyCalendar = ({ selectedDate, onDateSelect, currentWeek }) => {
  const [weekDates, setWeekDates] = useState([]);

  // Generate week dates dynamically based on current date
  useEffect(() => {
    generateWeekDates();
  }, [currentWeek]);

  const generateWeekDates = () => {
    const baseDate = currentWeek || new Date();
    const dayOfWeek = baseDate.getDay();
    const monday = new Date(baseDate);
    monday.setDate(baseDate.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));
    
    const dates = [];
    
    // Add time label column
    dates.push({ day: 'Ngày', subDay: '/Giờ', date: '', isTimeLabel: true });
    
    // Generate 7 days starting from Monday
    for (let i = 0; i < 7; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      
      dates.push({
        day: date.getDate().toString(),
        subDay: date.toLocaleDateString('vi-VN', { weekday: 'long' }).replace('Thứ ', 'Thứ '),
        date: date.getDate(),
        fullDate: date,
        isCurrentMonth: date.getMonth() === baseDate.getMonth(),
        isToday: date.toDateString() === new Date().toDateString()
      });
    }
    
    setWeekDates(dates);
  };

  const getDateIndicators = (dateInfo) => {
    if (dateInfo.isToday) {
      return ['#FF6B35', '#FFD23F', '#8B5CF6'];
    }
    return ['#CCCCCC'];
  };

  const getDateColors = (dateInfo) => {
    if (dateInfo.isToday) {
      return { dateColor: '#20B2AA', dayColor: '#20B2AA' };
    }
    if (!dateInfo.isCurrentMonth) {
      return { dateColor: '#CCCCCC', dayColor: '#CCCCCC' };
    }
    return { dateColor: '#333333', dayColor: '#999999' };
  };

  const renderDateCell = (dayInfo, index) => {
    const { day, subDay, date, isTimeLabel } = dayInfo;
    const indicators = date ? getDateIndicators(dayInfo) : [];
    const isSelected = selectedDate === date;
    const colors = date ? getDateColors(dayInfo) : {};

    return (
      <TouchableOpacity
        key={index}
        style={[
          isTimeLabel ? styles.timeLabelCell : styles.dateCell,
          isSelected && styles.selectedDateCell
        ]}
        onPress={() => date && onDateSelect(date)}
      >
        {isTimeLabel ? (
          <View style={styles.timeLabelContainer}>
            <Text style={styles.timeLabelText}>{day}</Text>
            <Text style={styles.timeLabelSubText}>{subDay}</Text>
          </View>
        ) : (
          <View style={styles.dateContainer}>
            <Text style={[
              styles.dateNumber,
              { color: colors.dateColor }
            ]}>
              {day}
            </Text>
            <Text style={[
              styles.dayText,
              { color: colors.dayColor }
            ]}>
              {subDay}
            </Text>
            {indicators.length > 0 && (
              <View style={styles.indicatorsContainer}>
                {indicators.map((color, idx) => (
                  <View
                    key={idx}
                    style={[styles.indicator, { backgroundColor: color }]}
                  />
                ))}
              </View>
            )}
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.daysRow}>
        {weekDates.map((dayInfo, index) => renderDateCell(dayInfo, index))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 0,
  },
  daysRow: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E8EAED',
    borderTopWidth: 1,
    borderTopColor: '#E8EAED',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  timeLabelCell: {
    width: 60,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    backgroundColor: '#FFFFFF',
    borderRightWidth: 1,
    borderRightColor: '#E8EAED',
  },
  dateCell: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    backgroundColor: '#FFFFFF',
    borderRightWidth: 1,
    borderRightColor: '#E8EAED',
  },
  selectedDateCell: {
    backgroundColor: '#FFE4E1',
  },
  timeLabelContainer: {
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
  dateContainer: {
    alignItems: 'center',
  },
  dateNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  dayText: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  indicatorsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 2,
  },
  indicator: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginHorizontal: 1,
  },
});

export default WeeklyCalendar;
