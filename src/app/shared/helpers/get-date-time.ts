export const GetLastUpdatedTime = () => {
  const date = new Date();

  const currHour = date.getHours();
  const hour = (currHour < 10 ? '0' : '') + currHour;

  const currMin  = date.getMinutes();
  const min = (currMin < 10 ? '0' : '') + currMin;

  const currSec  = date.getSeconds();
  const sec = (currSec < 10 ? '0' : '') + currSec;

  const currYear = date.getFullYear();

  const currMonth = date.getMonth() + 1;
  const month = (currMonth < 10 ? '0' : '') + currMonth;

  const currDay  = date.getDate();
  const day = (currDay < 10 ? '0' : '') + currDay;

  return month + '/' + day + '/' + currYear + ' at ' + hour + ':' + min + ':' + sec;
};
