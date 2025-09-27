import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from '../components/Header';
import WeeklyCalendar from '../components/WeeklyCalendar';
import WeeklyGrid from '../components/WeeklyGrid';
import EmployeeSuggestion from '../components/EmployeeSuggestion';
import Sidebar from '../components/Sidebar';

const WeeklyScheduleScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [currentWeekString, setCurrentWeekString] = useState('');
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [selectedView, setSelectedView] = useState('week');

  // Initialize week string on mount
  useEffect(() => {
    handleWeekChange(currentWeek);
  }, []);

  const handleWeekChange = (newWeek) => {
    setCurrentWeek(newWeek);
    // Format week string for display
    const weekStart = new Date(newWeek);
    const dayOfWeek = weekStart.getDay();
    const monday = new Date(weekStart);
    monday.setDate(weekStart.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));
    
    const weekEnd = new Date(monday);
    weekEnd.setDate(monday.getDate() + 6);
    
    const startStr = monday.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' });
    const endStr = weekEnd.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' });
    setCurrentWeekString(`${startStr} - ${endStr}`);
  };

  return (
    <View style={styles.container}>
      <Header 
        currentWeek={currentWeek} 
        onWeekChange={handleWeekChange}
        onMenuPress={() => setSidebarVisible(true)}
      />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <WeeklyCalendar 
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
          currentWeek={currentWeek}
          onWeekChange={handleWeekChange}
        />
        <WeeklyGrid selectedDate={selectedDate} currentWeek={currentWeek} />
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
