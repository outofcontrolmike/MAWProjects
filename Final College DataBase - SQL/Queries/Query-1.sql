Select InstructorFirstName + ' '+ InstructorLastName As 'Instructor Name', CourseName, 
SectionNumber, SemesterTaught As 'Semester Taught'
from Instructor join Course 
on Instructor.InstructorID = Course.InstructorID
join classTime
on Course.CourseID = ClassTime.CourseID
where Instructor.InstructorID = 'JC004000';