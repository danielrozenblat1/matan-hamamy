import React, { useState } from 'react';
import styles from './FormScreen.module.css';

const Form = () => {
  const [goal, setGoal] = useState('');
  const [knowledge, setKnowledge] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const resetForm = () => {
    setGoal('');
    setKnowledge('');
    setFullName('');
    setPhone('');
    setEmail('');
    setAge('');
  };
  const handleGoalChange = (e) => setGoal(e.target.value);
  const handleKnowledgeChange = (e) => setKnowledge(e.target.value);
  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = `https://api.leadmanager.co.il/handlers/lm/submit.cms?lm_form=79061&lm_key=71b897a2db13460ba9ad07a67e45ab9a&fld_136628=${encodeURIComponent(fullName)}&fld_136630=${encodeURIComponent(phone)}&fld_136631=${encodeURIComponent(email)}&fld_137951=${encodeURIComponent(age)}&fld_151450=${encodeURIComponent(goal)}&fld_151451=${encodeURIComponent(knowledge)}`;

    try {
      const response = await fetch(apiUrl, { method: 'GET',mode: 'no-cors' });
      resetForm()
      window.location.href = 'https://matanhamamy.ravpage.co.il/thankyoupage205';
    } catch (error) {
      console.error('Error submitting form:', error);
      // ניתן להוסיף כאן טיפול בשגיאות
    }
  };

  if (isSubmitted) {
    return (
      <div className={styles.successMessage}>
        <h2>תודה על ההרשמה!</h2>
        <p>המטרה שלך: {goal}</p>
        <p>רמת הידע שלך: {knowledge}</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.underlinedText}>שלב 2 - אחרי צפייה בקורס המלא</p>
      
      <p className={styles.highlightedText}>אם אתה רוצה ללמוד ממתן חממי את השיטה המלאה</p>
      <p className={styles.highlightedText}>שעוזרת לו ולמאות תלמידים לסחור באיביי במודל דרופשיפינג</p>
      <p className={styles.fingerPointer}>
        👇🏻 תמלא את הפרטים בטופס לשיחת התאמה לתוכנית 👇🏻
      </p>
      <h2 className={styles.title}>טופס התאמה לתוכנית דרופשיפינג באיביי</h2>
      
      <div className={styles.inputGroup}>
        <label htmlFor="goal">מה המטרה שתרצה להשיג מדרופשיפינג באיביי?</label>
        <select id="goal" value={goal} onChange={handleGoalChange} required>
          <option value="">בחר אפשרות</option>
          <option value="מקור הכנסה נוסף">מקור הכנסה נוסף</option>
          <option value="יש לי זמן פנוי שאני לא מנצל">יש לי זמן פנוי שאני לא מנצל</option>
          <option value="מקור הכנסה עיקרי">מקור הכנסה עיקרי</option>
          <option value="התחום מסקרן אותי">התחום מסקרן אותי</option>
        </select>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="knowledge">מה רמת הידע שלך היום על דרופשיפינג?</label>
        <select id="knowledge" value={knowledge} onChange={handleKnowledgeChange} required>
          <option value="">בחר אפשרות</option>
          <option value="אין לי ידע בכלל">אין לי ידע בכלל</option>
          <option value="יש לי ידע בסיסי">יש לי ידע בסיסי</option>
          <option value="יש לי ידע מתקדם">יש לי ידע מתקדם</option>
        </select>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="fullName">שם מלא</label>
        <input type="text" id="fullName" value={fullName} onChange={handleFullNameChange} required />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="phone">טלפון</label>
        <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} required />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="email">מייל</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="age">גיל</label>
        <input type="number" id="age" value={age} onChange={handleAgeChange} required />
      </div>

      <button type="submit" className={styles.submitButton}>אני רוצה לקבל פרטים על תכנית הליווי דרופשיפינג באיביי</button>
    </form>
  );
};

export default Form;