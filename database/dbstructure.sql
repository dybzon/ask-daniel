CREATE TABLE dbo.Responses (
	Id INT IDENTITY(1,1),
	CONSTRAINT PK_Responses PRIMARY KEY CLUSTERED (Id ASC),
)

CREATE TABLE dbo.ResponseParts (
	Id INT IDENTITY(1,1),
	ResponseId INT NOT NULL,
	[Value] NVARCHAR(500) NOT NULL,
	[Type] NVARCHAR(10) NOT NULL,
	CONSTRAINT PK_ResponseParts PRIMARY KEY CLUSTERED (Id ASC),
	CONSTRAINT FK_ResponseParts_Responses FOREIGN KEY (ResponseId)
        REFERENCES dbo.Responses(Id)
        ON DELETE CASCADE,
)

CREATE TABLE dbo.ResponseKeywords (
	ResponseId INT NOT NULL,
	Keyword NVARCHAR(50) NOT NULL,
	CONSTRAINT FK_ResponseKeywords_Responses FOREIGN KEY (ResponseId)
        REFERENCES dbo.Responses(Id)
        ON DELETE CASCADE,
)

CREATE TABLE dbo.Questions (
	Id INT IDENTITY(1,1),
	IsAutoQuestion BIT,
	AskedFromIpAddress BINARY(4),
	QuestionText NVARCHAR(400),
	CONSTRAINT PK_Questions PRIMARY KEY CLUSTERED (Id ASC),
)