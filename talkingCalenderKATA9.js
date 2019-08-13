var talkingCalendar = function(date) {
  
  var year = date.slice(0, 4);
  var month = date.slice(5, 7) -1;
  var day = parseInt(date.slice(8));

  const monthName = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var suffix;

  switch(day) {
    case 1:
    case 21:
    case 31:
      suffix = "st";
      break;
    case 2:
    case 22:
      suffix = "nd";
      break;
    case 3:
    case 23:
      suffix = "rd"; 
      break;
    default:
      suffix = "th";
      break;
  }

  var dateString = monthName[month] + " " + day + suffix + ", " + year;

  return dateString;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("1826/01/07"));