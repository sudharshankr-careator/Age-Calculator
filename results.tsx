import React from 'react';
export default function Results({ date }) {
  //today
  let today = new Date().getTime();
  //birth day
  let birthdate = new Date(date).getTime();

  let d = Math.abs(today - birthdate);

   let days = Math.abs(d / (1000 * 60 * 60 * 24));
  let AllDays = Math.floor(d / (1000 * 60 * 60 * 24));
  let AllMonths = Math.floor(days / 31);
  let AllWeeks = Math.floor(days / 7);
  let hours = Math.abs(days * 24);
  let minutes = Math.floor(days * 24 * 60);
  let seconds = Math.floor(days * 60 * 60 * 24);
  console.log(days)
    let years = Math.floor(days / 365);
    console.log(years)
   days -= years * 365;

  let months = Math.floor(days / 31);
  days -= months * 31;
  if (today < birthdate) {
    alert('You selected future Date as your birthday');
  }
  return (
    <div>
      <div>
        Age in Years:
        <br />
        {years} Years, {months} Months, {days} Days
      </div>
      <hr />
      <div>
        Age in Months:
        <br />
        {AllMonths} Months, {days} Days
      </div>
      <hr />
      <div>
        Age in Weeks: {AllWeeks} Weeks, {days} Days
      </div>
      <hr />
      <div>Age in Days: {AllDays} Days</div>
      <div>Age in Hours: {hours} </div>
      <div>Age in Minutes: {minutes} </div>
      <div>Age in Seconds: {seconds} </div>
    </div>
  );
}
