var nextWeekStart = moment().utc().add(1, 'weeks').isoWeekday(1).startOf('day');
var localTime = nextWeekStart.local();

document.getElementById("weekStartDayLocal").innerHTML = localTime.format('dddd');
document.getElementById("weekStartTimeLocal").innerHTML =
    localTime.minute() ? localTime.format('h:mm a') : localTime.format('h a');
document.getElementById("timeZoneName").innerHTML = moment.tz.guess()