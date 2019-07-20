-- Query 2

--pick a class

Select CourseName, DayofWeek, ClassTime
from Course 
join classTime
on Course.CourseID = ClassTime.CourseID
Where CourseName = 'Accounting 210';