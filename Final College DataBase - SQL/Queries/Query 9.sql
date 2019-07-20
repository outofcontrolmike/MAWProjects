--Query 9
	-- Pick Student	
		-- What is their gpa? 

		Select StudentFirstName + ' ' + studentLastName AS 'Student Name' , GPA as 'Current GPA'
		From Student
		Where studentID = 'AB100000';