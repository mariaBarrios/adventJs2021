function daysToXmas(date) {
  const oneDay = 24 * 60 * 60 * 1000;
  const xmasDay = new Date("Dec 25, 2021");

  const daysLeft = Math.ceil((xmasDay.getTime() - date.getTime()) / oneDay);
  return daysLeft;
}

const date = new Date("Dec 25, 2021");
console.log("Dec 25, 2021", daysToXmas(date)); // 0

const date1 = new Date("Dec 26, 2021");
console.log("Dec 26, 2021", daysToXmas(date1)); // -1

const date2 = new Date("Dec 31, 2021");
console.log("Dec 31, 2021", daysToXmas(date2)); // -6

const date3 = new Date("Jan 1, 2022 00:00:01");
console.log("Jan 1, 2022 00:00:01", daysToXmas(date3)); // -7

const date4 = new Date("Jan 1, 2022 23:59:59");
console.log("Jan 1, 2022 23:59:59", daysToXmas(date4)); // -7
