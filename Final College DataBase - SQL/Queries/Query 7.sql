--Query 7

	--Pick a Student
	-- How many credit hours are is the student taking this semester?

	Select Student.StudentID, StudentFirstName + ' ' + studentLastName as 'Student Name',
	sum(CreditHours) as numOfCredits, SemesterEnrolled
	from Student
	join Enrolled
	on Student.StudentID = Enrolled.StudentID
	join Course 
	on Enrolled.CourseID = Course.CourseID
	group by Student.studentID, studentFirstName, StudentLastName, SemesterEnrolled
	having Student.StudentID = 'JH300000' And SemesterEnrolled = 'Fall';