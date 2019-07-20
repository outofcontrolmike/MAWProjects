--Query 10

-- Pick a class

-- How many Males vs Females took the that class this semester?

select courseName,
sum(case when (Gender = 'm' or gender = 'Male') Then 1 End) As Males,
sum(case when (Gender= 'F' or gender = 'female') Then 1 End) as Females
from Course
join Enrolled
on Course.CourseID = Enrolled.CourseID
join Student
on Enrolled.StudentID = Student.StudentID
group by courseName
having courseName = 'Astronomy 101';