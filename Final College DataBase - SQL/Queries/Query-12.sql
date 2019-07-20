-- Query 12

--  Write a query that shows classes that weren't offered

Select CourseName, SemesterTaught
from Classtime
join course
on Classtime.CourseID = Course.CourseID
Where SemesterTaught != 'Fall';
