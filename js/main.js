var year, month, date;
var today = new Date();
var month_array = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var day_array = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
var m = 0;

create_calender(today.getFullYear(), today.getMonth(), today.getDate());

for (var i = 0; i < 7; i++) {
  var s = document.createElement('button');
  s.setAttribute('class', 'day');
  s.innerHTML = day_array[i];
  $('.week').appendChild(s);
}

function create_calender(p1, p2, p3) {
  $('#year').innerHTML = p1;
  $('#month').innerHTML = month_array[p2];
  var first_day = new Date(p1, p2, 1).getDay();
  var total_days = 32 - new Date(p1, p2, 32).getDate();
  for (var i = 1; i <= 42; i++) {
    var dates = document.createElement('button');
    dates.setAttribute('class', 'dates');
    if (i > first_day) {
      if (i < total_days + first_day + 1) {
        dates.innerHTML = i - first_day;
        if (new Date(p1, p2, i - first_day).getDay() == 0) {
          dates.setAttribute('style', 'color:red;')
        }
      } else {
        dates.innerHTML = "x";
        dates.setAttribute('style', 'font-size:3vw;')
      }
    } else {
      dates.innerHTML = "x";
      m += 1;
      dates.setAttribute('style', 'font-size:3vw;')
    }
    if (i == p3 && p2 == today.getMonth() && p1 == today.getFullYear()) {
      dates.setAttribute('style', 'background-color:#FF5350;')
    }
    $('.date_holder').appendChild(dates);
  }
  year = p1;
  month = p2;
  date = p3;
}

$('#previous').on(('click'||'touchstart'), function() {
  $('.date_holder').innerHTML = "";
  if (month == 0) {
    month = 12;
    year -= 1;
  }
  create_calender(year, month - 1, date)
})

$('#next').on(('click'||'touchstart'), function() {
  $('.date_holder').innerHTML = "";
  if (month == 11) {
    month = -1;
    year += 1;
  }
  create_calender(year, month + 1, date)
})
