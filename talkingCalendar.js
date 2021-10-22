/*Takes in a date string with the format YYYY/MM/DD, 
Returns a new date that looks like December 2nd, 2017*/

const talkingCalendar = date => {
  let day = date.slice(-2); //getting the day, the month and the year by slicing the string
  let month = date.slice(5, 7);
  let year = date.slice(0, 4);
  let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  month = months[month - 1]; //converting to string format

  if(day < 10) {
    day = parseInt(day); //getting rid of zero
  }
  if (day == '1' || day == '21' || day == '31') { //adding suffixes
    day += 'st';
  }
  else if(day == '2' || day == '22') {
    day += 'nd'
  }
  else if(day == '3'|| day == '23') {
    day += 'rd'
  }
  else {
    day += 'th'
  }
  return (month + ' ' + day + ', ' + year);
};

//checking
console.log(talkingCalendar("2007/12/02"));
