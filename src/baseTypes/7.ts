enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function isWeekend(day: Day): boolean {
  return day === Day.Saturday || day === Day.Sunday;
}

export {};
