-- Query 8

-- Pick an Instructor

	--What is their name, and what degree and from what school?

	Select InstructorFirstName + ' ' + InstructorLastName As 'Instructor Name', 
	DegreeEarned, DegreeSchool
	From
	Instructor
	Where InstructorID = 'MT004003';