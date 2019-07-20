--Query 3

-- Pick a student
-- Using FAll as Current Semester

Select studentFirstName + ' ' + studentLastName as 'Student Name' , Enrolled.CourseID,
CourseName, SemesterEnrolled
from Student
join Enrolled
on Student.StudentID = Enrolled.StudentID
join Course
on Enrolled.CourseID = Course.CourseID
where student.studentID = 'AB100000' And SemesterEnrolled = 'Fall';