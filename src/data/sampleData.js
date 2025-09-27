export const sampleShifts = [
  {
    id: 1,
    title: 'Ca sáng',
    time: '7:00 - 12:00',
    backgroundColor: '#FFF8DC',
    iconColor: '#FFD700',
    iconName: 'sunny',
    employees: [
      { id: 1, name: 'Nguyễn Văn A', avatar: 'https://i.pravatar.cc/40?img=FFD700/FFFFFF?text=A' },
      { id: 2, name: 'Trần Thị B', avatar: 'https://i.pravatar.cc/40?img=FF6B35/FFFFFF?text=B' },
      { id: 3, name: 'Lê Văn C', avatar: 'https://i.pravatar.cc/40?img=8B5CF6/FFFFFF?text=C' },
    ],
    additionalCount: 3,
    status: {
      type: 'success',
      icon: 'checkmark-circle',
      text: 'Đủ nhân viên',
      color: '#4CAF50'
    },
    timeTagColor: '#FFD700'
  },
  {
    id: 2,
    title: 'Ca trưa',
    time: '12:00 - 18:00',
    backgroundColor: '#FFE4E1',
    iconColor: '#FF69B4',
    iconName: 'sunny',
    employees: [
      { id: 4, name: 'Phạm Văn D', avatar: 'https://i.pravatar.cc/40?img=20B2AA/FFFFFF?text=D' },
      { id: 5, name: 'Hoàng Thị E', avatar: 'https://i.pravatar.cc/40?img=FF6B35/FFFFFF?text=E' },
    ],
    additionalCount: 0,
    status: {
      type: 'error',
      icon: 'alert-circle',
      text: 'Thiếu 1 nv pha chế',
      color: '#F44336'
    },
    timeTagColor: '#F44336'
  },
  {
    id: 3,
    title: 'Ca tối',
    time: '18:00 - 24:00',
    backgroundColor: '#E6E6FA',
    iconColor: '#9370DB',
    iconName: 'moon',
    employees: [
      { id: 6, name: 'Vũ Văn F', avatar: 'https://i.pravatar.cc/40?img=8B5CF6/FFFFFF?text=F' },
      { id: 7, name: 'Đặng Thị G', avatar: 'https://i.pravatar.cc/40?img=20B2AA/FFFFFF?text=G' },
      { id: 8, name: 'Bùi Văn H', avatar: 'https://i.pravatar.cc/40?img=FFD23F/FFFFFF?text=H' },
    ],
    additionalCount: 0,
    status: {
      type: 'warning',
      icon: 'time',
      text: '1 ca chờ duyệt',
      color: '#FF9800'
    },
    timeTagColor: '#9370DB'
  }
];

export const sampleEmployees = [
  { id: 1, name: 'Nguyễn Văn A', position: 'Quản lý', avatar: 'https://i.pravatar.cc/40?img=FFD700/FFFFFF?text=A' },
  { id: 2, name: 'Trần Thị B', position: 'Nhân viên', avatar: 'https://i.pravatar.cc/40?img=FF6B35/FFFFFF?text=B' },
  { id: 3, name: 'Lê Văn C', position: 'Nhân viên', avatar: 'https://i.pravatar.cc/40?img=8B5CF6/FFFFFF?text=C' },
  { id: 4, name: 'Phạm Văn D', position: 'Pha chế', avatar: 'https://i.pravatar.cc/40?img=20B2AA/FFFFFF?text=D' },
  { id: 5, name: 'Hoàng Thị E', position: 'Nhân viên', avatar: 'https://i.pravatar.cc/40?img=FF6B35/FFFFFF?text=E' },
  { id: 6, name: 'Vũ Văn F', position: 'Nhân viên', avatar: 'https://i.pravatar.cc/40?img=8B5CF6/FFFFFF?text=F' },
  { id: 7, name: 'Đặng Thị G', position: 'Pha chế', avatar: 'https://i.pravatar.cc/40?img=20B2AA/FFFFFF?text=G' },
  { id: 8, name: 'Bùi Văn H', position: 'Nhân viên', avatar: 'https://i.pravatar.cc/40?img=FFD23F/FFFFFF?text=H' },
];
