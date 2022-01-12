import React, { useEffect, useState } from 'react';
export default function Year() {
  let [d, setD] = useState('');

  function getAge(dateString: any) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  const calculate_age = (dob: any) => {
    const birthDate = new Date(dob);
    const difference = Date.now() - birthDate.getTime();
    const age = new Date(difference);

    return Math.abs(age.getUTCFullYear() - 1970);
  };
  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log(getAge(d), calculate_age(d));
  };

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <input type="Date" onChange={(e: any) => setD(e.target.value)} />
        <button type="submit">Click</button>
      </form>
    </div>
  );
}
