-- Query 11

 -- Pick a college

 -- Business

	-- Which classes are offered by all programs in this college?

	Select College, CourseName,ProgramName, Program.ProgramID
	From Course
	join Program
	on Course.ProgramID = Program.ProgramID
	where college = 'Business';