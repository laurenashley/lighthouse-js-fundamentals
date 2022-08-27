const convertMonth = function(month){
    // turn month into string (use switch)
  switch (month) {
    case '12':
      month = 'December';
      break;
    case '11':
      month = 'November';
      break;
    case '10':
      month = 'October';
      break;
    case '09':
      month = 'September';
      break;
    case '08':
      month = 'August';
      break;
    case '07':
      month = 'July';
      break;
    case '06':
      month = 'June';
      break;
    case '05':
      month = 'May';
      break;
    case '04':
      month = 'April';
      break;
    case '03':
      month = 'March';
      break;
    case '02':
      month = 'February';
      break;
    case '01':
      month = 'January';
      break;
  }

  return month;
}

const convertDay = function(day) {
  // remove beginning 0
  if (day.includes('0')){
    day = day.replace('0', '');
  }
  
  // Get last character
  let lastChar = day.slice(-1);

  // add ordinal value
  if (day === '11') {
    day = day + 'th';
  } else if (lastChar === '1') {
    day = day + 'st';
  } else if (lastChar === '2') {
    day = day + 'nd';
  } else if (lastChar === '3') {
    day = day + 'rd';
  } else {
    day = day + 'th';
  }

  return day;
}

const talkingCalendar = function(date) {
  const newDate = date.split('/');
  let result = 'I should be a human readable date';

  // store year month day in variables
  let year = newDate[0],
      month = newDate[1],
      day = newDate[2];

  month = convertMonth(month);
  day = convertDay(day);

  return result = `${month} ${day}, ${year}`;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("1987/05/22"));
console.log(talkingCalendar("1987/05/23"));
console.log(talkingCalendar("1987/03/01"));
console.log(talkingCalendar("1987/03/21"));