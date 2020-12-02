import React, { useEffect, useState } from 'react';
import css from './Visual.module.css';
import axios from 'axios';

const Visual = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    (async () => {
      let { data } = await axios.get('http://localhost:8080/courses/it');
      // console.log(data);
      
      setCourses(data);
    })();
  }, []);

  if (courses.length > 0) {
    console.log(courses);
  }

  let render = courses.length > 0 ? 
    <div className={css.courses_wrapper}>
      {courses.map((row, idx1) => {
        return <div className={css.semester} key={idx1}>
          {row.map((course, idx2) => {
            return <div className={css.course} key={idx2}>
              {course.code}
            </div>
          })}
        </div>
      })}
    </div>
  : <div>no courses yet</div>;
  

  return <div>{render}</div>;
};

export default Visual;
