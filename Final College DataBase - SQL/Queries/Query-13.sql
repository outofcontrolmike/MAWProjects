-- Query 13

-- Write a query that shows how many credit hours per program were taken by all students this semster

-- Counts the Credit hours taken by all students



Select ProgramID,  sum(creditHours) As ' Credit Hours Per Program '
from Enrolled
join Course
on Enrolled.CourseID = course.CourseID
Group by Grouping Sets ((programID) , (creditHours))
having programID = '0412' or programID = '0452';
