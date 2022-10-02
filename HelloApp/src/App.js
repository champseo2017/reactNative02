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

    - Nested Text
     - การวางคอมโฟเนนต์ Text ซ้อนกัน หรือ การจัดรูปแบบ
     ข้อความในบางช่วง สามารถแทรก {'\n'} ขึ้นบรรทัดใหม่
     หรือ {''} แทนช่องว่าง

     Props Text
      - numberOfLines กำหนดจำนวนบรรทัดที่จะแสดงผล
      - ellipsizeMode
        - หากข้อความเกินจำนวนบรรทัดแสดงผลได้ ส่วนที่ตัดออก
        จะแทนที่ด้วย ... (ellipsize)
         - head ตัดส่วนหัวออกไป '...xyz'
         - middle ตัดส่วนที่อยู่ตรงกลางออกไป เช่น 
         'abc...xyz'
         - tail ตัดส่วนท้ายออกไป (ค่าดีฟอลต์) เช่น 'abc...'
         - clip ตัดส่วนที่เกินขอบออกไป โดยไม่แสดง ...

      Android กำหนดค่า numberOfLines มากกว่า 1 อาจแสดงผล
      ได้ถูกต้องเฉพาะ tail เท่านั้น

    - selectable
      - สามารถเลือกข้อความได้หรือไม่ (true, false)
      - ให้ผู้ใช้เลือกข้อความเพื่อใช้ฟังก์ชันการคัดลอกและวางแบบเนทีฟ

    - onPress
      - กำหนดการตอบสนอง (จัดการอีเวนต์) เมื่อแตะข้อความ
    
    - onLongPress
      - กำหนดการตอบสนอง (จัดการอีเวนต์)
       เมื่อแตะข้อความค้างเอาไว้

  */
   
  return <ColumnItems />;
};

export default App;
