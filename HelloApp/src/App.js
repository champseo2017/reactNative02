import React, { useEffect } from 'react';

import {View, Text, StyleSheet, Platform} from 'react-native';

import commonStyles from './styles/common-styles';
import ColumnItems from './components/column-items';
import RowItems from './components/row-items'

import {
  Alert
} from 'react-native'

const App = () => {
  /* 

    Component TextInput
    Props 

    - autoCapitalize
      - เปลี่ยนตัวพิมพ์อัตโนมัติ ค่าที่กำหนดได้คือ
        - character เปลียนอักขระทุกตัวเป็นตัวพิมพ์ใหญ่
        - sentences เฉพาะอักขระตัวแรกของประโยคเป็นตัวพิมพ์ใหญ่
        - words อักขระตัวแรกของแต่ละคำเป็นตัวพิมพ์ใหญ่

   - defaultVale
     - ค่าที่กำหนดไว้ล่วงหน้า

   - editable
     - แก้ไขได้หรือไม่ (true, false)
   
   - maxLength 
    - จำนวนอักขระสูงสุดที่สามารถใส่ลงไปได้

  - multiLines
    - แสดงผลหลายบรรทัด กำหนดเป็น true ควรเพิ่ม textAlignVertical='top'
    เพื่อให้เคอร์เซอร์เริ่มต้นที่มุมบนซ้าย ใช้ได้ 2 แพลตฟอร์ม

  - onFocus / onBlur
    - การตอบสนองเมื่อย้ายโฟกัสเข้า และ ออก

  - onChange
    - การตรวจสอบเมื่อ TextInput มีการเปลียนแปลง
    ตรวจสอบข้อมูลได้จากออกเจ็กต์ event.nativeEvent ได้

  - onChangeText
    - เมื่อข้อความใน TextInput มีการเปลียนแปลง สามารถส่งข้อความที่อยู่ใน
    TextInput ไปยังฟังก์ชันจัดการอีเวนต์ได้


  - Placehoder
    - กำหนดข้อความลายน้ำ

  - placeholderTextColor
    - กำหนดสีของข้อความลายน้ำ

  - textAlign
    - การจัดแนวข้อความ ('left', 'center', 'right')

  - secureTextEntry
    - กำหนดเป็น true ใช้รับ Password (ใช้ไม่ได้กับ multiLines)

  - returnKeyType
    - ข้อความที่จะแสดงบนปุ่ม Return ซึ้งค่าที่รองรับทั้ง 2 แพลตฟอร์มคือ
    ('done', 'go', 'next', 'search', 'send')

  - keyboardType
    - ลักษณะของปุ่มคีย์บอร์ด ค่าที่รองรับทั้ง 2 แพลตฟอร์มคือ
      - 'number-pad' สำหรับรับข้อมูลตัวเลข
      - 'decimal-pad' สำหรับข้อมูลตัวเลข
      - 'numeric' สำหรับข้อมูลตัวเลข
      - 'email-address' สำหรับรับข้อมูลอีเมล
      - 'phone-pad' สำหรับรับข้อมูลเบอร์โทรศัพท์
    
  */
   
  return <ColumnItems />;
};

export default App;
