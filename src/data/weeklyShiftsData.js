export const weeklyShifts = {
  25: [
    {
      id: 1,
      title: 'Ca sáng',
      startTime: '07:00',
      endTime: '11:00',
      backgroundColor: '#FEF7E0',
      iconColor: '#FFD700',
      iconName: 'sunny',
      employees: [
        { id: 1, name: 'Nguyễn Văn A', avatar: 'https://i.pravatar.cc/32?img=1' },
        { id: 2, name: 'Trần Thị B', avatar: 'https://i.pravatar.cc/32?img=2' },
        { id: 3, name: 'Lê Thị C', avatar: 'https://i.pravatar.cc/32?img=3' },
      ],
      task: 'Kiểm tra kho',
      status: 'normal'
    },
    {
      id: 2,
      title: 'Ca trưa',
      startTime: '12:00',
      endTime: '17:00',
      backgroundColor: '#FCE8E6',
      iconColor: '#FF69B4',
      iconName: 'sunny',
      employees: [
        { id: 4, name: 'Phạm Thị D', avatar: 'https://i.pravatar.cc/32?img=4' },
      ],
      additionalCount: 1,
      status: 'missing',
      missingText: 'Thiếu nv'
    },
    {
      id: 3,
      title: 'Ca tối',
      startTime: '17:00',
      endTime: '20:00',
      backgroundColor: '#E8EAF6',
      iconColor: '#9370DB',
      iconName: 'moon',
      employees: [
        { id: 5, name: 'Hoàng Thị E', avatar: 'https://i.pravatar.cc/32?img=5' },
        { id: 6, name: 'Vũ Thị F', avatar: 'https://i.pravatar.cc/32?img=6' },
      ],
      task: 'Kiểm tra',
      status: 'normal'
    }
  ],
  26: [
    {
      id: 4,
      title: 'Ca sáng',
      startTime: '07:00',
      endTime: '11:00',
      backgroundColor: '#FEF7E0',
      iconColor: '#FFD700',
      iconName: 'sunny',
      employees: [
        { id: 7, name: 'Đặng Văn G', avatar: 'https://i.pravatar.cc/32?img=20B2AA/FFFFFF?text=G' },
      ],
      additionalCount: 1,
      status: 'missing',
      missingText: 'Thiếu nv'
    },
    {
      id: 5,
      title: 'Ca trưa',
      startTime: '12:00',
      endTime: '17:00',
      backgroundColor: '#FCE8E6',
      iconColor: '#FF69B4',
      iconName: 'sunny',
      employees: [
        { id: 8, name: 'Bùi Văn H', avatar: 'https://i.pravatar.cc/32?img=FFD23F/FFFFFF?text=H' },
        { id: 9, name: 'Nguyễn Thị I', avatar: 'https://i.pravatar.cc/32?img=8B5CF6/FFFFFF?text=I' },
        { id: 10, name: 'Trần Văn J', avatar: 'https://i.pravatar.cc/32?img=20B2AA/FFFFFF?text=J' },
      ],
      task: 'Kiểm tra đặt lịch',
      status: 'normal'
    },
    {
      id: 6,
      title: 'Ca tối',
      startTime: '17:00',
      endTime: '20:00',
      backgroundColor: '#E8EAF6',
      iconColor: '#9370DB',
      iconName: 'moon',
      employees: [
        { id: 11, name: 'Lê Thị K', avatar: 'https://i.pravatar.cc/32?img=FF6B35/FFFFFF?text=K' },
        { id: 12, name: 'Phạm Thị L', avatar: 'https://i.pravatar.cc/32?img=8B5CF6/FFFFFF?text=L' },
      ],
      status: 'normal'
    }
  ],
  1: [
    {
      id: 7,
      title: 'Ca sáng',
      startTime: '07:00',
      endTime: '11:00',
      backgroundColor: '#FEF7E0',
      iconColor: '#FFD700',
      iconName: 'sunny',
      employees: [
        { id: 13, name: 'Hoàng Văn M', avatar: 'https://i.pravatar.cc/32?img=20B2AA/FFFFFF?text=M' },
        { id: 14, name: 'Vũ Thị N', avatar: 'https://i.pravatar.cc/32?img=FF6B35/FFFFFF?text=N' },
        { id: 15, name: 'Đặng Thị O', avatar: 'https://i.pravatar.cc/32?img=8B5CF6/FFFFFF?text=O' },
      ],
      task: 'Kiểm tra quầy',
      status: 'normal'
    },
    {
      id: 8,
      title: 'Ca trưa',
      startTime: '12:00',
      endTime: '17:00',
      backgroundColor: '#E8F5E8',
      iconColor: '#4CAF50',
      iconName: 'sunny',
      employees: [
        { id: 16, name: 'Bùi Thị P', avatar: 'https://i.pravatar.cc/32?img=FFD23F/FFFFFF?text=P' },
        { id: 17, name: 'Nguyễn Văn Q', avatar: 'https://i.pravatar.cc/32?img=20B2AA/FFFFFF?text=Q' },
      ],
      status: 'normal'
    },
    {
      id: 9,
      title: 'Ca tối',
      startTime: '17:00',
      endTime: '20:00',
      backgroundColor: '#E8EAF6',
      iconColor: '#9370DB',
      iconName: 'moon',
      employees: [
        { id: 18, name: 'Trần Thị R', avatar: 'https://i.pravatar.cc/32?img=FF6B35/FFFFFF?text=R' },
        { id: 19, name: 'Lê Thị S', avatar: 'https://i.pravatar.cc/32?img=8B5CF6/FFFFFF?text=S' },
      ],
      status: 'normal'
    }
  ]
};

export const timeSlots = [
  '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',
  '19:00', '20:00', '21:00', '22:00', '23:00'
];

export const daysOfWeek = [25, 26, 27, 28, 29, 30, 1];
