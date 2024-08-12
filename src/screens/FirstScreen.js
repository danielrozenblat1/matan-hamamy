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
      <iframe width="560" height="315" src="https://www.youtube.com/embed/nWt3CbE96LA?si=82tog3udZI1n707C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default DropshippingPromo;