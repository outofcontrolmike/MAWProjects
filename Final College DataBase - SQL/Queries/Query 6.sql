-- Query 6

-- Pick a room
	--What class were taught in that room on Mondays?
		-- Select RoomNumber, CourseNumber, CourseName,  Section

--Picked room 111

Select DayofWeek, RoomNumber, CourseName, CourseNumber, SectionNumber
From Location
join Course
on Location.CourseID = Course.CourseID
join ClassTime on
Course.CourseID = ClassTime.CourseID
where dayofweek = 'Monday/Wed' And
roomNumber = '103';