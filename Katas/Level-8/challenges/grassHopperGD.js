//1. Description
//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

//2. My Solution
function getGrade (s1, s2, s3) {
    let average = (s1 + s2 + s3)/3;
    if (average >= 90 && average <= 100)  return 'A'
    if (average >= 80 && average < 90)  return 'B'
    if (average >= 70 && average < 80) return 'C'
    if (average >= 60 && average < 70) return 'D'
    if (average >= 0 && average < 60) return 'F'
}