
// type Course = {
//   lessons: string[]
// }

function lessonsCount({lessons} : {lessons: string[]}) {
  return lessons.length;
}

export { lessonsCount };
