import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import ShiftCard from './ShiftCard';
import { getShiftsForDate, timeSlots } from '../data/weeklyShiftsData';

const TIME_SLOT_HEIGHT = 60;
const TOTAL_TIME_SLOTS = timeSlots.length;

const WeeklyGrid = ({ selectedDate, currentWeek }) => {
  const [weekDates, setWeekDates] = useState([]);

  useEffect(() => {
    if (currentWeek) {
      generateWeekDates();
    }
  }, [currentWeek]);

  const generateWeekDates = () => {
    const today = new Date(currentWeek);
    const dayOfWeek = today.getDay();
    const monday = new Date(today);
    monday.setDate(today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));
    
    const week = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      week.push(date);
    }
    setWeekDates(week);
  };

  const renderTimeSlot = (time) => {
    return (
      <View key={time} style={styles.timeSlot}>
        <Text style={styles.timeText}>{time}</Text>
      </View>
    );
  };

  const renderDayColumn = (date) => {
    const shifts = getShiftsForDate(date);
    
    return (
      <View key={date.getDate()} style={styles.dayColumn}>
        {shifts.map((shift) => {
          const startTime = shift.startTime;
          const endTime = shift.endTime;
          
          const startIndex = timeSlots.indexOf(startTime);
          const endIndex = timeSlots.indexOf(endTime);
          
          // Skip if time not found in timeSlots
          if (startIndex === -1 || endIndex === -1) {
            console.warn(`Time not found in timeSlots: ${startTime} or ${endTime}`);
            return null;
          }
          
          const top = startIndex * TIME_SLOT_HEIGHT;
          const height = (endIndex - startIndex) * TIME_SLOT_HEIGHT;
          
          return (
            <View 
              key={shift.id} 
              style={[
                styles.shiftContainer,
                { 
                  top: top,
                  height: height
                }
              ]}
            >
              <ShiftCard shift={shift} />
            </View>
          );
        })}
      </View>
    );
  };

  const renderGridLines = () => {
    const horizontalLines = timeSlots.map((time, index) => {
      const topPosition = index * TIME_SLOT_HEIGHT;
      
      return (
        <View 
          key={`horizontal-${index}`} 
          style={[
            styles.horizontalGridLine,
            { 
              top: topPosition,
            }
          ]} 
        />
      );
    });

    const verticalLines = weekDates.map((date, index) => {
      const leftPosition = (index + 1) * (100 / weekDates.length);
      
      return (
        <View 
          key={`vertical-${index}`} 
          style={[
            styles.verticalGridLine,
            { 
              left: `${leftPosition}%`,
            }
          ]} 
        />
      );
    });

    return [...horizontalLines, ...verticalLines];
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={16}
        onTouchStart={() => {}}
        onTouchEnd={() => {}}
      >
        <View style={styles.gridContainer}>
          {/* Time Axis */}
          <View style={styles.timeAxis}>
            {timeSlots.map(renderTimeSlot)}
          </View>

          {/* Grid Lines Background */}
          <View style={styles.gridBackground}>
            {renderGridLines()}
          </View>

          {/* Days Columns */}
          <View style={styles.daysContainer}>
            {weekDates.map(renderDayColumn)}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  scrollContainer: {
    flex: 1,
  },
  gridContainer: {
    flexDirection: 'row',
    width: '100%',
    position: 'relative',
    minHeight: TIME_SLOT_HEIGHT * TOTAL_TIME_SLOTS,
  },
  timeAxis: {
    width: 60,
    backgroundColor: '#FFFFFF',
    paddingVertical: 0,
    borderRightWidth: 1,
    borderRightColor: '#E8EAED',
    minHeight: TIME_SLOT_HEIGHT * TOTAL_TIME_SLOTS,
    boxShadow: '1px 0 3px rgba(0, 0, 0, 0.1)',
  },
  timeSlot: {
    height: TIME_SLOT_HEIGHT,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 12,
    position: 'relative',
    minHeight: TIME_SLOT_HEIGHT,
    maxHeight: TIME_SLOT_HEIGHT,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  timeText: {
    fontSize: 12,
    color: '#5F6368',
    fontWeight: '400',
    textAlign: 'right',
    lineHeight: 18,
    fontFamily: 'Roboto, sans-serif',
  },
  daysContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  dayColumn: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingHorizontal: 2,
    paddingVertical: 8,
    position: 'relative',
    minHeight: TIME_SLOT_HEIGHT * TOTAL_TIME_SLOTS,
    zIndex: 1,
  },
  shiftContainer: {
    position: 'absolute',
    left: 2,
    right: 2,
    zIndex: 10,
  },
  gridBackground: {
    position: 'absolute',
    top: 0,
    left: 60,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  horizontalGridLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#E8EAED',
  },
  verticalGridLine: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: '#E8EAED',
  },
});

export default WeeklyGrid;
