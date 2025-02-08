function isComplete(course: { name: string; lessons: string[] }): boolean {
  return course.lessons.length >= 4;
}

const course = {
  name: 'Java',
  lessons: ['variables', 'functions', 'conditions', ';lkjj'],
};

console.log(isComplete(course));
