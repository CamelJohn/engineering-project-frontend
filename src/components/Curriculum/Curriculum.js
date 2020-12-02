import React, { useEffect, useState } from 'react';
import css from './Curriculum.module.css';
import axios from 'axios';

const Curriculum = () => {
  let [data, setData] = useState([]);
  let [selected, setSelected] = useState();

  useEffect(() => {
    (async () => {
      let { data } = await axios.get('http://localhost:8080/courses-dropdown');
      // console.log(data);
      
      setData(data);
    })();
  }, []);

  // useEffect(() => {}, [selected]);

  const handleSelect = e => {
    setSelected(...data.filter(d => d.code == e.target.value));
  };

  if (selected) {    
    
    (async () => {
      let { data } = await axios.post('http://localhost:8080/get/course', { code: selected.code }, { headers: { 'Content-Type': 'application/json'}});
      console.log(data);
      
    })()
  }

  // let table = selected ? (
  //   <table>
  //     <thead>
  //       <tr>
  //         <th>Course Name</th>
  //         <th>Course Code</th>
  //       </tr>
  //     </thead>

  //     <tbody>
  //       <tr>
  //         <td>{selected.name}</td>
  //         <td>{selected.code}</td>
  //       </tr>
  //     </tbody>
  //   </table>
  // ) : (
  //   <div>No data selected yet...</div>
  // );

  return (
    <div className={css.wrapper}>
      <div className={css.header}>הצגת תכנית לימודים</div>
      <section className={css.section}>
        <div className={css.formControl}>
          <label>בחר תכנית לימודים לצפייה</label>
          <select onChange={handleSelect}>
            <option>בחר תכנית לימודים</option>
            {data.map((option, idx) => (
              <option key={idx} value={option.code}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </section>
      {/* <section className={css.section}>{table}</section> */}
    </div>
  );
};

export default Curriculum;
