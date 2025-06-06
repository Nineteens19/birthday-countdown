function countdown() {
    const birthDate = new Date('2025-06-18T00:00:00');
    const now = new Date();    
    const diff = birthDate - now;    
    if (diff <= 0) {
      // แสดงคำอวยพรสวยงามแทนกล่องนับถอยหลัง
      document.getElementById('countdown').innerHTML = `
        <div class="congrats-message">
          <h2>สุขสันต์วันเกิดที่รักนะเอิร์น</h2>
          <p>โตขึ้นอีกปีแล้ว เก่งขึ้นแล้วเป็นวัยรุ่นวัยทำงานแบบเต็มตัว เก่งมากกกก ก็อยู่ด้วยกันมาครบรอบอ้วนแก่ขึ้นอีกปี
          ก็คงอยู่กันไปแบบนี้เรื่อยๆ ขอให้อ้วนสุขภาพแข็งแรงนะอย่าป่วย เค้าป่วยคนเดียวพอ 555555 ขอให้รวยๆเลี้ยงเค้าด้วย รักนะ ถึงจะดุจะว่าจะพูดไม่ดีเค้าก็ขอโทษนะคะ   เจ้าอ้วน</p>
        </div>
      `;
      clearInterval(timerInterval);
      return;
    }
  
    // ส่วนคำนวณเวลาปกติเหมือนเดิม
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
  
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
  }
  
  const timerInterval = setInterval(countdown, 1000);
  countdown();
  