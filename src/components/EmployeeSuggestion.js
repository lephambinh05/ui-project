import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const EmployeeSuggestion = () => {
  const suggestedEmployees = [
    {
      id: 1,
      name: 'Hương Thảo',
      position: 'Nv bán hàng • Parttime',
      avatar: 'https://i.pravatar.cc/40?img=1',
    },
    {
      id: 2,
      name: 'Lê Tuấn',
      position: 'Nv bán hàng • Partti',
      avatar: 'https://i.pravatar.cc/40?img=2',
    }
  ];

  const renderEmployeeCard = (employee) => (
    <TouchableOpacity key={employee.id} style={styles.employeeCard}>
      <Image source={{ uri: employee.avatar }} style={styles.employeeAvatar} />
      <View style={styles.employeeInfo}>
        <Text style={styles.employeeName}>{employee.name}</Text>
        <Text style={styles.employeePosition}>{employee.position}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đề xuất nhân viên</Text>
      
      <TouchableOpacity style={styles.autoCaButton}>
        <Ionicons name="star" size={16} color="#FFFFFF" />
        <Text style={styles.autoCaText}>AutoCa</Text>
      </TouchableOpacity>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.employeesScroll}
      >
        {suggestedEmployees.map(renderEmployeeCard)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 12,
  },
  autoCaButton: {
    backgroundColor: '#87CEEB',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  autoCaText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    marginLeft: 4,
  },
  employeesScroll: {
    flexDirection: 'row',
  },
  employeeCard: {
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 200,
  },
  employeeAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  employeeInfo: {
    flex: 1,
  },
  employeeName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 2,
  },
  employeePosition: {
    fontSize: 12,
    color: '#666666',
  },
});

export default EmployeeSuggestion;
