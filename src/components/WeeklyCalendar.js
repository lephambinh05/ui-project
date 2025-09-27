import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const WeeklyCalendar = ({ selectedDate, onDateSelect }) => {
  const daysOfWeek = [
    { day: 'Ngày', subDay: '/Giờ', date: '', isTimeLabel: true },
    { day: '25', subDay: 'Thứ 2', date: 25 },
    { day: '26', subDay: 'Thứ 3', date: 26 },
    { day: '27', subDay: 'Thứ 4', date: 27 },
    { day: '28', subDay: 'Thứ 5', date: 28 },
    { day: '29', subDay: 'Thứ 6', date: 29 },
    { day: '30', subDay: 'Thứ 7', date: 30 },
    { day: '01', subDay: 'CN', date: 1 }
  ];

  const getDateIndicators = (date) => {
    if (date === 1) {
      return ['#FF6B35', '#FFD23F', '#8B5CF6'];
    }
    return ['#CCCCCC'];
  };

  const getDateColors = (date) => {
    if (date === 1) {
      return { dateColor: '#20B2AA', dayColor: '#20B2AA' };
    }
    return { dateColor: '#333333', dayColor: '#999999' };
  };

  const renderDateCell = (dayInfo, index) => {
    const { day, subDay, date, isTimeLabel } = dayInfo;
    const indicators = date ? getDateIndicators(date) : [];
    const isSelected = selectedDate === date;
    const colors = date ? getDateColors(date) : {};

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
        {daysOfWeek.map((dayInfo, index) => renderDateCell(dayInfo, index))}
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
    paddingVertical: 8,
    paddingHorizontal: 0,
    backgroundColor: '#FFFFFF',
    borderRightWidth: 1,
    borderRightColor: '#E8EAED',
  },
  dateCell: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 0,
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
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  dayText: {
    fontSize: 12,
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
