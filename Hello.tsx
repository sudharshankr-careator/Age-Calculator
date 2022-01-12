import React from 'react';

export default function Hello({ name }) {
  var obj = {
    a: 1,
    b: 2,
    c: 3,
  };
  var fruits="Banana Orange Apple Mango";
 console.log(fruits.split(' ').reverse())
 let a=["guru","reva", "kaju"];
 
  function sum(obj){
    return Object.keys(obj).reduce((sum, key)=>sum+ (obj[key]||0),0)
  }
// let v = Object.values(obj).reduce((a, b)=> a+b)
   console.log(sum(obj))
  return (
    <div>
      <h1>Hello {name}!</h1>
      {a.map((val: any)=>val.length)}
    </div>
  );
}
