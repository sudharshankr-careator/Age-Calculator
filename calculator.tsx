import React, { useState } from 'react';
import Results from './results';
export default function calculate_age() {
  const [data, setData] = useState<any>({
    date: '',
    birthday: '',
    showResults: false,
  });
  const CalculateAge = (e: any) => {
    e.preventDefault();
    setData({ birthday: data.date, showResults: true });
  };
  const changeHandler = (e: any) => {
    setData({ date: e.target.value });
  };
 
  return (
    <div>
      <form action="" onSubmit={CalculateAge}>
        <input type="Date" onChange={changeHandler} />
        <button type="submit">Click</button>
      </form>
      <div>
              {data.showResults ? <Results date={data.birthday} /> : <div />}
            </div>
    </div>
  );
}
