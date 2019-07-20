
 --Create Tables

 --Table 1
CREATE TABLE Program(
	ProgramID Varchar(4) NOT NULL,			
	ProgramHead VARCHAR(30) NOT NULL,
	College VARCHAR(30) NOT NULL,
	ProgramName VARCHAR(30) NOT NULL,
	PRIMARY KEY (ProgramID),
	check (ProgramID Like '[0-9][0-9][0-9][0-9]')
	);


Create Index idx_programName
	ON Program (ProgramName);

--Table 2
CREATE TABLE STUDENT(
	StudentID Varchar(8) NOT NULL,
	StudentFirstName VARCHAR(40) NOT NULL,
	StudentLastName VARCHAR(40) NOT NULL,
	StudentEmail VARCHAR(40) NOT NULL,
	StudentPhoneNo VARCHAR(14) Not NULL,
	Homestate VARCHAR(2) NOT NULL,
	Birthdate VARCHAR(11)  default '01-01-1901',
	Gender VARCHAR(40) NOT NULL,
	TotalCreditHours INT NOT NULL,
	GPA Decimal (3, 2) NOT NULL,
	SemesterEnrolled VARCHAR (15) NOT NULL,
	Program varchar (4) NOT NULL,
	PRIMARY KEY (StudentID),
	FOREIGN KEY (Program) REFERENCES Program(ProgramID),		-- Changed to reference Program table

	check (BirthDate Like '[0-1][1-9][-][0-3][0-9][-][1-2][0-9][0-9][0-9]'),
	check (StudentPhoneNo  like '[0-9][0-9][0-9][-][0-9][0-9][0-9][-][0-9][0-9][0-9][0-9]'),
	check (Gender in ('M', 'F', 'Male', 'Female')),
	check ((Homestate like '[a-z][a-z]')),
	check (StudentID Like '[a-z][a-z][0-9][0-9][0-9][0-9][0-9][0-9]'),
	check (Program Like '[0-9][0-9][0-9][0-9]')
	);

	
Create Index idx_StudentID
	ON Student(StudentID);

Create Index idx_StudentLastName
	ON Student(studentLastName);

Create Index idx_StudentPhoneNumber
	On Student(StudentPhoneNo);


----Table 3
CREATE TABLE Instructor (
	InstructorID VarChar(8) Not NUll,
	InstructorFirstName VARCHAR (40) NOT NULL,
	InstructorLastName VARCHAR (40) NOT NULL,
	InstructorEmail VARCHAR (40) NOT NULL,
	InstructorPhoneNo VARCHAR (14) NOT NULL,
	DegreeEarned VARCHAR (40) NOT NULL,
	DegreeSchool VARCHAR (40) NOT NULL,
	PRIMARY KEY (InstructorID),
	check (InstructorPhoneNo like '[0-9][0-9][0-9][-][0-9][0-9][0-9][-][0-9][0-9][0-9][0-9]'),
	check (InstructorID Like '[a-z][a-z][0-9][0-9][0-9][0-9][0-9][0-9]')
	);

	Create Index idx_InstructorID
	ON Instructor(InstructorID);

-- Table 4
CREATE TABLE Course(
	CourseID VarChar(4) NOT NULL,
	InstructorID VarChar(8) Not NUll,									
	ProgramID varchar(4) Not NUll,			--ProgramID INT NOT NULL,
	CourseName VARCHAR (20) NOT NULL,
	ProgramCode varchar (6) NOT NULL,		-- 
	CourseNumber INT NOT NULL,
	SectionNumber INT NOT NULL,
	CreditHours INT NOT NULL
	PRIMARY KEY (CourseID),
	FOREIGN KEY (InstructorID) REFERENCES Instructor (InstructorID),
	FOREIGN KEY (ProgramID) REFERENCES Program (ProgramID),
	check (CreditHours > 0),
	check (CourseID Like '[0-9][0-9][0-9][0-9]'),
	check (InstructorID Like '[a-z][a-z][0-9][0-9][0-9][0-9][0-9][0-9]')
	);

	Create Index idx_CourseID
	ON Course(CourseID);

-- Table 5

CREATE TABLE Enrolled (
	ID INT NOT NULL,
	InstructorID VarChar(8) Not NUll,	
	StudentID VarChar(8) NOT NULL,
	CourseID VarChar(4) NOT NULL,
	PRIMARY KEY (ID),
	FOREIGN KEY (InstructorID) REFERENCES Instructor(InstructorID),
	FOREIGN KEY (StudentID) REFERENCES Student(StudentID),
	FOREIGN KEY (CourseID) REFERENCES Course(CourseID),
	check (InstructorID Like '[a-z][a-z][0-9][0-9][0-9][0-9][0-9][0-9]'),
	check (StudentID Like '[a-z][a-z][0-9][0-9][0-9][0-9][0-9][0-9]'),
	check (CourseID Like '[0-9][0-9][0-9][0-9]')
	);
	
Create Index idx_ID
	ON Enrolled(ID);




----Table 6
CREATE TABLE ClassTime(
	ClassTimeID Int NOT NULL,
	CourseID VarChar(4) NOT NULL,
	DayOfWeek Varchar(20),
	ClassTime varchar(20) NOT NULL,					-- 
	SemesterTaught VARCHAR (20) NOT NULL,
	PRIMARY KEY (ClassTimeID),
	FOREIGN KEY (CourseID) REFERENCES Course (CourseID),
	check (CourseID Like '[0-9][0-9][0-9][0-9]')
	);

	
Create Index idx_ClassTimeID
	ON ClassTime(ClassTimeID);



----Table 7
CREATE TABLE Location (
	LocationID varchar(10) NOT NULL,
	CourseID VarChar(4)NOT NULL,
	RoomNumber Varchar(3) NOT NULL,
	Building VARCHAR(30) NOT NULL,
	PRIMARY KEY (LocationID),
	FOREIGN KEY (CourseID) REFERENCES Course(CourseID),
	check (CourseID Like '[0-9][0-9][0-9][0-9]'),
	check (RoomNumber like '[1-3][0-9][0-9]')
	);

	
Create Index idx_LocationID
	ON Location(LocationID);
