const DATE_KEY="date"

function updateDate(date)
{
  if (typeof(Storage) !== "undefined")
  {
    localStorage.setItem(`${DATE_KEY}`,JSON.stringify(date));
  }
  else
  {
    console.log("localStorage is not supported by current browser.");
  }
}

const STARTTIME_KEY="starttime"

function updateStartDate(time)
{
  if (typeof(Storage) !== "undefined")
  {
    localStorage.setItem(`${STARTTIME_KEY}`,JSON.stringify(time));
  }
  else
  {
    console.log("localStorage is not supported by current browser.");
  }
}

const ENDTIME_KEY="endtime"

function updateEndDate(time)
{
  if (typeof(Storage) !== "undefined")
  {
    localStorage.setItem(`${ENDTIME_KEY}`,JSON.stringify(time));
  }
  else
  {
    console.log("localStorage is not supported by current browser.");
  }
}

function getSTime()
{
  let data = JSON.parse(localStorage.getItem(`${STARTTIME_KEY}`));
  return data;
}

function getETime()
{
  let data = JSON.parse(localStorage.getItem(`${ENDTIME_KEY}`));
  return data;
}
function getDate()
{
  let data = JSON.parse(localStorage.getItem(`${DATE_KEY}`));
  return data;
}