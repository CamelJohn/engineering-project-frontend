import React, { useState } from 'react';
// import DropConfig from './DropConfig/DropConfig';
import DropZone from './DropZone/DropZone';
import css from './Upload.module.css';
import UploadCommand from './UploadCommand/UploadCommand';

const Upload = () => {
  const [isClicked, setIsClicked] = useState(false);
  
  const click = () => setIsClicked(true);
  
  const cancel = () => setIsClicked(false);
  
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <h3>טופס העלאת קבצים</h3>
      </div>
      <section>
        <DropZone clicked={isClicked} />
        <UploadCommand clicked={click} cancelled={cancel}/>
      </section>
    </div>
  );
};

export default Upload;
