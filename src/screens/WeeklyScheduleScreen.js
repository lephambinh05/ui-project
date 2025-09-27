import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from '../components/Header';
import WeeklyCalendar from '../components/WeeklyCalendar';
import WeeklyGrid from '../components/WeeklyGrid';
import EmployeeSuggestion from '../components/EmployeeSuggestion';
import Sidebar from '../components/Sidebar';

const WeeklyScheduleScreen = () => {
  const [selectedDate, setSelectedDate] = useState(25);
  const [currentWeek, setCurrentWeek] = useState('25/04 - 01/05');
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [selectedView, setSelectedView] = useState('week');

  return (
    <View style={styles.container}>
      <Header 
        currentWeek={currentWeek} 
        onWeekChange={setCurrentWeek}
        onMenuPress={() => setSidebarVisible(true)}
      />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <WeeklyCalendar 
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
        />
        <WeeklyGrid selectedDate={selectedDate} />
        <EmployeeSuggestion />
      </ScrollView>
      
      <Sidebar
        isVisible={sidebarVisible}
        onClose={() => setSidebarVisible(false)}
        selectedView={selectedView}
        onViewChange={setSelectedView}
      />
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

export default WeeklyScheduleScreen;
