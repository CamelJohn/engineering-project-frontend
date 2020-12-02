import React from 'react';
import css from './UploadCommand.module.css';

const UploadCommand = props => {
  
  // will beed to manage state to cancel dropZone state when pressing 'cancel'.
  return <div className={css.wrapper}>
    <div className={css.header}>הגדרת הקובץ</div>
    <div className={css.formControl}>
      <label>שנתון</label>
      <input type="text"/>
    </div>
    <div className={css.formControl}>
      <label>תכנית</label>
      <select>
        <option>בוקר</option>
        <option>ערב</option>
      </select>
    </div>
    <div className={css.formControl}>
      <label>סוג קובץ</label>
      <select>
        <option>תכנית לימודים</option>
        <option>ציונים</option>
      </select>
    </div>
    <div className={css.formButtonControl}>
      <button className={css.btnSubmit} onClick={props.clicked}>שלח לעיבוד</button>
      <button className={css.btnCancel} onClick={props.cancelled}>בטל</button>
    </div>
  </div>;
};

export default UploadCommand;
