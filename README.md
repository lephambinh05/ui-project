# Work Shift App

Ứng dụng quản lý ca làm việc được xây dựng bằng React Native + Expo.

## Tính năng

- Giao diện quản lý ca làm việc hiện đại
- Lịch tháng với các indicator màu sắc
- Hiển thị thông tin ca làm việc (Ca sáng, Ca trưa, Ca tối)
- Quản lý nhân viên cho từng ca
- Trạng thái ca làm việc (Đủ nhân viên, Thiếu nhân viên, Chờ duyệt)

## Cài đặt

1. Cài đặt dependencies:
```bash
npm install
```

2. Chạy ứng dụng:
```bash
npm start
```

3. Mở ứng dụng trên thiết bị:
- Scan QR code bằng Expo Go app (Android/iOS)
- Hoặc chạy trên simulator/emulator

## Cấu trúc dự án

```
src/
├── components/
│   ├── Header.js          # Header với navigation và location
│   ├── Calendar.js        # Component lịch tháng
│   ├── ShiftList.js       # Danh sách ca làm việc
│   └── ShiftCard.js       # Card hiển thị thông tin ca
├── data/
│   └── sampleData.js      # Dữ liệu mẫu
└── screens/
    └── WorkShiftScreen.js # Màn hình chính
```

## Dependencies

- React Native
- Expo
- @expo/vector-icons
- react-native-linear-gradient
- react-native-vector-icons
