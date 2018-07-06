var year, month, date, first_day, total_days, nodes,
  name, callback, empty = 0,
  selector = "";
var month_array = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var day_array = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
var now = new Date();

updateCalender(now.getFullYear(), now.getMonth(), now.getDate());

for (var i = 0; i < 7; i++) {
  var s = document.createElement('button');
  s.setAttribute('class', 'day');
  s.innerHTML = day_array[i];
  $('.week').appendChild(s);
}

$('#previous').on('click', function() {
  $('.date_holder').innerHTML = "";
  if (month == 0) {
    month = 12;
    year -= 1;
  }
  updateCalender(year, month - 1, date)
})

$('#next').on('click', function() {
  $('.date_holder').innerHTML = "";
  if (month == 11) {
    month = -1;
    year += 1;
  }
  updateCalender(year, month + 1, date)
})

function $(selector) {
  if (typeof selector == 'string') {
    self = document.querySelectorAll(selector);
    if (self.length == 1) {
      self = self[0];
    }
  } else {
    self = selector;
  }
  self.on = function(type, callback) {
    for (i = 0; i < (self.length || 1); i++) {
      types = type.split(",");
      for (k = 0; k < types.length; k++) {
        (self[i] || self)['on' + types[k]] = callback;
      }
    }
  }
  return self;
}


function updateCalender(newYear, newMonth, newDate) {
  first_day = new Date(newYear, newMonth, 1).getDay();
  total_days = 32 - new Date(newYear, newMonth, 32).getDate();
  $('#year').innerHTML = newYear;
  $('#month').innerHTML = month_array[newMonth];
  for (i = 1; i <= 42; i++) {
    dates = document.createElement('button');
    dates.setAttribute('class', 'dates');
    if (i > first_day) {
      if (i < total_days + first_day + 1) {
        dates.innerHTML = i - first_day;
        if (new Date(newYear, newMonth, i - first_day).getDay() == 0) {
          dates.setAttribute('style', 'color:red;')
        }
      } else {
        dates.innerHTML = "x";
        dates.setAttribute('style', 'font-size:3vw;')
      }
    } else {
      dates.innerHTML = "x";
      empty += 1;
      dates.setAttribute('style', 'font-size:3vw;')
    }
    if (i == newDate && newMonth == now.getMonth() && newYear == now.getFullYear()) {
      dates.setAttribute('style', 'background-color:#FF5350;')
    }
    $('.date_holder').appendChild(dates);
  }
  year = newYear;
  month = newMonth;
  date = newDate;
}
