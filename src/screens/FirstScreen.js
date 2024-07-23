import React from 'react';
import styles from './FirstScreen.module.css';

const DropshippingPromo = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>מעולה!</h1>
      <p className={styles.highlight}>✅ קיבלת גישה להדרכה של מתן ✅</p>
      <div className={styles.markerWrapper}>
        <span className={styles.marker}>ההדרכה תישאר פתוחה לזמן מוגבל</span>
      </div>
      <p className={`${styles.highlight} ${styles.watchNow}`}>צפה בה עכשיו (33 דק')</p>
      <p className={`${styles.highlight} ${styles.underline}`}>
        (וגלה איך להקים חנות דרופשיפינג ולייצר מקור הכנסה נוסף כל חודש)
      </p>
      <div className={styles.arrows}>⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️</div>
      <div className={styles.highlightYWrapper}>
        <span className={styles.highlightY}>לחץ על כפתור ה"PLAY" וודא שהסאונד עובד 🔊</span>
      </div>
      <div className={styles.videoContainer}>
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