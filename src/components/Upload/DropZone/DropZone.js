import React, { useEffect, useRef, useState } from 'react';
import css from './DropZone.module.css';
import { ReactComponent as Logo } from './cloud-computing.svg';
import axios from 'axios';

const DropZone = props => {
  const [isDragOver, setIsDragOver] = useState(false);

  const dropZoneRef = useRef();
  let inputRef = useRef();
  const spanRef = useRef();
  const thumbRef = useRef();
  let thumbText = '';

  let dropZoneclasses = [css.dropZone, isDragOver ? css.dropZoneHover : null].join(' ');
  let spanClasses = [css.dropZone_prompt, isDragOver ? css.dropZoneSpanHover : null].join(' ');
  let logoClasses = [css.logo, isDragOver ? css.dropZoneLogoHover : null].join(' ');

  const postFile = async () => {
    const data = new FormData();
    data.append('file', inputRef.current.files[0]);
    // console.log(inputRef.current.files[0]);
    let res = await axios.post('http://localhost:8080/day', data)
    console.log(res);
  }

  useEffect( async () => {
    if (props.clicked) {
      setIsDragOver(true);
      await postFile();
    } else {
      setIsDragOver(false);
    }
  }, [props.clicked]);

  // const updateThumbnail = (dropElement, file) => {

  // }

  const uploadFile = () => inputRef.current.click();

  const dragOver = e => {
    e.preventDefault();

    setIsDragOver(true);
  };

  const dragLeave = e => {
    e.preventDefault();

    setIsDragOver(false);
  };

  const fileDrop = e => {
    e.preventDefault();

    if (e.dataTransfer.files.length > 0) {
      inputRef.current.files = e.dataTransfer.files;
    }

    console.log(inputRef.current.files[0]);

    setIsDragOver(true);
  };

  const inputHandler = async () => {
    await setIsDragOver(true);

    thumbRef.current.dataset.label = inputRef.current.files[0].name;
  };

  const thumb = isDragOver ? <div className={css.dropZone__thumb} ref={thumbRef}>{thumbText}</div> : null;
  const propmt = !isDragOver ? <span className={spanClasses} ref={spanRef}>גרור קבצים לכאן או לחץ כאן לחיצה כפולה להעלאה</span> : null;
  const logo = !isDragOver ? <Logo className={logoClasses} /> : null;

  return (
    <div className={dropZoneclasses} ref={dropZoneRef} 
      onClick={uploadFile}
      onDragOver={dragOver}
      onDragLeave={dragLeave}
      onDragEnd={dragLeave}
      onDrop={fileDrop}>
      {logo}
      {propmt}
      {thumb}
      <input type='file' name='file' className={css.dropZone_input} ref={inputRef} onChange={inputHandler} />
    </div>
  );
};

export default DropZone;
