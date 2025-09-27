import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import ShiftCard from './ShiftCard';
import { weeklyShifts, timeSlots, daysOfWeek } from '../data/weeklyShiftsData';

const TIME_SLOT_HEIGHT = 60;
const TOTAL_TIME_SLOTS = timeSlots.length;

const WeeklyGrid = ({ selectedDate }) => {
  const renderTimeSlot = (time) => {
    return (
      <View key={time} style={styles.timeSlot}>
        <Text style={styles.timeText}>{time}</Text>
        {/* Không cần timeLine riêng, sẽ dùng horizontal lines chung */}
      </View>
    );
  };

  const renderDayColumn = (day) => {
    const shifts = weeklyShifts[day] || [];
    
    return (
      <View key={day} style={styles.dayColumn}>
        {shifts.map((shift) => {
          const startTime = shift.startTime;
          const endTime = shift.endTime;
          
          const startIndex = timeSlots.indexOf(startTime);
          const endIndex = timeSlots.indexOf(endTime);
          
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
    return timeSlots.map((time, index) => (
      <View key={`line-${index}`} style={styles.gridLine} />
    ));
  };

  const renderHorizontalLines = () => {
    return timeSlots.slice(0, -1).map((time, index) => {
      const topPosition = (index + 1) * TIME_SLOT_HEIGHT;
      
      return (
        <View 
          key={`horizontal-${index}`} 
          style={[
            styles.horizontalTimeLine,
            { 
              top: topPosition,
              left: 0,
              right: 0,
              opacity: 1
            }
          ]} 
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View style={styles.gridContainer}>
          {/* Time Axis */}
          <View style={styles.timeAxis}>
            {timeSlots.map(renderTimeSlot)}
          </View>

          {/* Days Columns */}
          <View style={styles.daysContainer}>
            {daysOfWeek.map(renderDayColumn)}
          </View>

          {/* Grid Lines */}
          <View style={styles.gridLinesContainer}>
            {renderGridLines()}
          </View>

          {/* Horizontal Lines */}
          <View style={styles.horizontalLinesContainer}>
            {renderHorizontalLines()}
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
    backgroundColor: '#FFFFFF',
    borderRightWidth: 1,
    borderRightColor: '#E8EAED',
    paddingHorizontal: 2,
    paddingVertical: 8,
    position: 'relative',
    minHeight: TIME_SLOT_HEIGHT * TOTAL_TIME_SLOTS,
    zIndex: 5,
  },
  shiftContainer: {
    position: 'absolute',
    left: 2,
    right: 2,
    zIndex: 99999,
  },
  gridLinesContainer: {
    position: 'absolute',
    top: 0,
    left: 60,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
  },
  horizontalLinesContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  horizontalLineContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  horizontalTimeLine: {
    position: 'absolute',
    height: 1,
    backgroundColor: '#E8EAED',
    zIndex: 0,
    left: 0,
    width: 60,
  },
});

export default WeeklyGrid;
