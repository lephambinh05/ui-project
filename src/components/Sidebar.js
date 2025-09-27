import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { EMPLOYEE_NAMES, AVATAR_URLS, EMPLOYEE_ROLES, EMPLOYEE_TYPES, NAVIGATION_ITEMS } from '../constants/shiftTimes';

const Sidebar = ({ isVisible, onClose, selectedView, onViewChange }) => {
  const staffMembers = [
    {
      id: 1,
      name: EMPLOYEE_NAMES[8], // Hương Thảo
      role: EMPLOYEE_ROLES[0], // Bán hàng
      type: EMPLOYEE_TYPES[1], // Parttime
      avatar: AVATAR_URLS[0]
    },
    {
      id: 2,
      name: EMPLOYEE_NAMES[5], // Mai Anh
      role: EMPLOYEE_ROLES[0], // Bán hàng
      type: EMPLOYEE_TYPES[1], // Parttime
      avatar: AVATAR_URLS[1]
    },
    {
      id: 3,
      name: EMPLOYEE_NAMES[9], // Tuấn Minh
      role: EMPLOYEE_ROLES[1], // Thu ngân
      type: EMPLOYEE_TYPES[1], // Parttime
      avatar: AVATAR_URLS[2]
    },
    {
      id: 4,
      name: EMPLOYEE_NAMES[5], // Mai Anh
      role: EMPLOYEE_ROLES[0], // Bán hàng
      type: EMPLOYEE_TYPES[1], // Parttime
      avatar: AVATAR_URLS[3]
    },
    {
      id: 5,
      name: EMPLOYEE_NAMES[10], // Lê Bình An
      role: EMPLOYEE_ROLES[2], // Pha chế
      type: EMPLOYEE_TYPES[1], // Parttime
      avatar: AVATAR_URLS[4]
    },
    {
      id: 6,
      name: EMPLOYEE_NAMES[5], // Mai Anh
      role: EMPLOYEE_ROLES[0], // Bán hàng
      type: EMPLOYEE_TYPES[1], // Parttime
      avatar: AVATAR_URLS[0]
    }
  ];

  const navigationItems = NAVIGATION_ITEMS;

  if (!isVisible) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.sidebar}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuButton} onPress={onClose}>
            <Ionicons name="menu" size={24} color="#333333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.navigation}>
          {navigationItems.map((item) => (
            <TouchableOpacity
              key={item.key}
              style={[
                styles.navItem,
                selectedView === item.key && styles.navItemActive
              ]}
              onPress={() => onViewChange(item.key)}
            >
              <Text style={[
                styles.navText,
                selectedView === item.key && styles.navTextActive
              ]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.staffSection}>
          <Text style={styles.sectionTitle}>Nhân viên</Text>
          <ScrollView style={styles.staffList} showsVerticalScrollIndicator={false}>
            {staffMembers.map((staff) => (
              <TouchableOpacity key={staff.id} style={styles.staffCard}>
                <Image source={{ uri: staff.avatar }} style={styles.staffAvatar} />
                <View style={styles.staffInfo}>
                  <Text style={styles.staffName}>{staff.name}</Text>
                  <Text style={styles.staffRole}>{staff.role} • {staff.type}</Text>
                </View>
                <View style={styles.statusDot} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 300,
    height: '100%',
    backgroundColor: '#FFFFFF',
    paddingTop: 50,
    paddingHorizontal: 20,
    boxShadow: '-2px 0 4px rgba(0, 0, 0, 0.1)',
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  menuButton: {
    padding: 8,
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#20B2AA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigation: {
    marginBottom: 30,
  },
  navItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 4,
  },
  navItemActive: {
    backgroundColor: '#E8F5E8',
  },
  navText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666666',
  },
  navTextActive: {
    color: '#20B2AA',
    fontWeight: '600',
  },
  staffSection: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
  },
  staffList: {
    flex: 1,
  },
  staffCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
  },
  staffAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  staffInfo: {
    flex: 1,
  },
  staffName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 2,
  },
  staffRole: {
    fontSize: 12,
    color: '#666666',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#20B2AA',
  },
});

export default Sidebar;
