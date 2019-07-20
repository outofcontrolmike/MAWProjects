--Query 5

-- Pick a class
		-- Figure out what room the Class was taught in, This Semester

		select CourseName, Course.SectionNumber,ClassTime, RoomNumber, SemesterTaught
		from Course
		join Location
		on Course.CourseID = location.CourseID
		join ClassTime 
		on location.CourseID = ClassTime.CourseID
		where courseName = 'Astronomy 130' And SemesterTaught = 'Fall';