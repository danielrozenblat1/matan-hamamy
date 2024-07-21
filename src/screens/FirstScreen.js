import React from 'react';
import styles from './FirstScreen.module.css';

const DropshippingPromo = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>מעולה!</h1>
      <p className={styles.highlight}>✅ קיבלת גישה להדרכה של מתן ✅</p>
      <p className={styles.marker}>ההדרכה תישאר פתוחה לזמן מוגבל</p>
      <p className={styles.highlight}>צפה בה עכשיו (33 דק')</p>
      <p className={styles.highlight}>(וגלה איך להקים חנות דרופשיפינג ולייצר מקור הכנסה נוסף כל חודש)</p>
      <div className={styles.arrows}>⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️</div>
      <p className={styles.highlight}>לחץ על כפתור ה"PLAY" וודא שהסאונד עובד 🔊</p>
      <div className={styles.videoContainer}>
        {/* כאן יש להוסיף את ה-iframe של YouTube כשיהיה לך את הקישור */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/iBkwcZ1RDPw?si=gHea_aMiPaCKX6Np"
          title="קורס חינמי לדרופשיפינג באיביי מא עד ת"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default DropshippingPromo;