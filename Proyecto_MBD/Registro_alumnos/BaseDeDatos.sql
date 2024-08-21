USE master
GO


Create DATABASE BasedeRegistros_LDRJLL
GO

USE [BasedeRegistros_LDRJLL]

--Tabla Alumnos
CREATE TABLE Alumnos (
Id_alumno INT PRIMARY KEY IDENTITY(1,1), --Verificar si se puede con el UNIQUE
Codigo_Alumno Varchar(8) UNIQUE NOT NULL,
CONSTRAINT CHK_Codigo check (Codigo_Alumno Like '[A-Za-z][A-Za-z][0-9][0-9][0-9][0-9][0-9][0-9]'),
Contraseña VARCHAR(60), --Contraseña para LOGIN
PrimerNombre NVARCHAR(50) NOT NULL,
SegundoNombre NVARCHAR(50),
PrimerApellido NVARCHAR(50) NOT NULL,
SegundoApellido NVARCHAR(50), --Grados en otr tabla
Correo Nvarchar(255) CHECK (Correo like '%@%.%'),
Telefono VARCHAR(15),
FechadeNacimiento DATE,
Transporte varchar(60),
Genero Varchar(60) CHECK (Genero in ('Femenino', 'Masculino')),
);
GO



--VIsta de datos en el tabla alumnos
SELECT TOP (1000) [Id_alumno]
      ,[Codigo_Alumno]
      ,[Contraseña]
      ,[PrimerNombre]
      ,[SegundoNombre]
      ,[PrimerApellido]
      ,[SegundoApellido]
      ,[Correo]
      ,[Telefono]
      ,[FechadeNacimiento]
      ,[Transporte]
      ,[Genero]
  FROM [BasedeRegistros_LDRJLL].[dbo].[Alumnos]

--Tabla Nivel estudiantil
CREATE TABLE Nivel (
Id_Nivel INT PRIMARY KEY IDENTITY(1,1),
Grado Varchar(100) CHECK (Grado COLLATE SQL_Latin1_General_CP1_CI_AS IN ('Kinder 4', 'Kinder 5', 'Preparatoria', 'Primer Grado', 'Segundo Grado', 'Tercer Grado', 'Cuarto Grado', 'Quinto Grado', 'Sexto Grado', 'Septimo Grado', 'Octavo Grado', 'Noveno Grado', 'Primer año Bachillerato con Diplomado en Computación', 'Segundo año Bachillerato con Diplomado en Computación', 'Primer año Bachillerato con Diplomado en Ingles', 'Segundo año Bachillerato con Diplomado en Ingles')) NOT NULL
);

--Ver tabla NIVEL
SELECT TOP (1000) [Id_Nivel]
      ,[Grado]
  FROM [BasedeRegistros_LDRJLL].[dbo].[Nivel]



--Tabla Departamento, Municipio, Distrito
CREATE TABLE DMD (
Id_DMD INT PRIMARY KEY IDENTITY(1,1),
Departamento VARCHAR(80) CHECK (Departamento COLLATE SQL_Latin1_General_CP1_CI_AS IN ('Ahuachapán', 'La Libertad', 'San Salvador', 'Cuscatlán', 'Cabañas', 'La Paz', 'La Unión', 'Usulután', 'Sonsonate', 'Santa Ana', 'San Vicente', 'San Miguel', 'Morazán', 'Chalatenango')),
Municipio VARCHAR(80) CHECK (Municipio COLLATE SQL_Latin1_General_CP1_CI_AS IN ('Municipio de Ahuachapán Centro', 'Municipio de Ahuachapán Norte', 'Municipio de Ahuachapán Sur', 'Municipio de San Salvador Norte', 'Municipio de San Salvador Oeste', 'Municipio de San Salvador Este', 'Municipio de San Salvador Centro', 'Municipio de San Salvador Sur', 'Municipio de La Libertad Norte', 'Municipio de La Libertad Centro', 'Municipio de La Libertad Oeste', 'Municipio de La Libertad Este', 'Municipio de La Libertad Costa', 'Municipio de La Libertad Sur', 'Municipio de Chalatenango Norte', 'Municipio de Chalatenango Centro', 'Municipio de Chalatenango Sur', 'Municipio de Cuscatlán Norte', 'Municipio de Cuscatlán Sur', 'Municipio de Cabañas Este', 'Municipio de Cabañas Oeste', 'Municipio de La Paz Oeste', 'Municipio de La Paz Centro', 'Municipio de La Paz Este', 'Municipio de La Unión Norte', 'Municipio de La Unión Sur', 'Municipio de Usulután Norte', 'Municipio de Usulután Este', 'Municipio de Usulután Oeste', 'Municipio de Sonsonate Norte', 'Municipio de Sonsonate Centro', 'Municipio de Sonsonate Este', 'Municipio de Sonsonate Oeste', 'Municipio de Santa Ana Norte', 'Municipio de Santa Ana Centro', 'Municipio de Santa Ana Este', 'Municipio de Santa Ana Oeste', 'Municipio de San Vicente Norte', 'Municipio de San Vicente Sur', 'Municipio de San Miguel Norte', 'Municipio de San Miguel Centro', 'Municipio de San Miguel Oeste', 'Municipio de Morazán Norte', 'Municipio de Morazán Sur')),
Distrito VARCHAR(80),
CONSTRAINT CHK_distrito CHECK (Distrito COLLATE SQL_Latin1_General_CP1_CI_AS IN ('Distrito de Ilopango', 'Distrito de Soyapango', 'Distrito de Tonacatepeque', 'Distrito de Ayutuxtepeque', 'Distrito de Mejicanos', 'Distrito de San Salvador', 'Distrito de Cuscatancingo', 'Distrito de Ciudad Delgado', 'Distrito de Panchimalco', 'Distrito de Rosario de Mora', 'Distrito de San Marcos', 'Distrito de Santo Tomás', 'Distrito de Santiago Texacuangos', 'Distrito de Quezaltepeque', 'Distrito de San Matías', 'Distrito de San Pablo Tacachico', 'Distrito de San Juan Opico', 'Distrito de Ciudad Arce', 'Distrito de Colón', 'Distrito de Jayaque', 'Distrito de Sacacoyo', 'Distrito de Tepecoyo', 'Distrito de Talnique', 'Distrito de Antiguo Cuscatlán', 'Distrito de Huizucar', 'Distrito de Nuevo Cuscatlán', 'Distrito de San José Villanueva', 'Distrito de Zaragoza', 'Distrito de Chiltuipán', 'Distrito de Jicalapa', 'Distrito de La Libertad', 'Distrito de Tamanique', 'Distrito de Teotepeque', 'Distrito de Comasagua', 'Distrito de Santa Tecla', 'Distrito de Aguilares', 'Distrito de El Paisnal', 'Distrito de Guazapa', 'Distrito de Apopa', 'Distrito de Nejapa', 'Distrito de San Martín'))
);
GO

--Ver datos en DMD
SELECT TOP (1000) [Id_DMD]
      ,[Departamento]
      ,[Municipio]
      ,[Distrito]
  FROM [BasedeRegistros_LDRJLL].[dbo].[DMD]


--Tabla direccion Alumno
CREATE TABLE DireccionAlum(
Id_DireccionAlum INT PRIMARY KEY IDENTITY(1,1),
Colonia varchar(20) not null,
CallePolNC varchar(MAX) Not null,
Id_alumno INT NOT NULL, --Llave foranea
Id_DMD INT NOT NULL, --Llave Foranea
CONSTRAINT FK_Id_Alumno FOREIGN KEY (Id_alumno) REFERENCES Alumnos(Id_Alumno),
CONSTRAINT FK_Id_DMD FOREIGN KEY (Id_DMD) REFERENCES DMD(Id_DMD)
);
GO

--Ver datos de la tabla
SELECT TOP (1000) [Id_DireccionAlum]
      ,[Colonia]
      ,[CallePolNC]
      ,[Id_alumno]
      ,[Id_DMD]
  FROM [BasedeRegistros_LDRJLL].[dbo].[DireccionAlum]




--Tabla de padecimientos
CREATE TABLE Padecimiento(
Id_Padecimiento INT PRIMARY KEY IDENTITY(1,1),
Medicamentos_Info varchar(MAX),
Enfermedades varchar(MAX),
Id_alumno INT NOT NULL, --Llave foranea
CONSTRAINT FK2_Id_alumno FOREIGN KEY (Id_alumno) REFERENCES Alumnos(Id_alumno)
);
GO

--Tabla responsable
CREATE TABLE Responsable(
Id_Responsable INT PRIMARY KEY IDENTITY(1,1),
Nombre1Responsable NVARCHAR(100) NOT NULL,
Nombre2Responsable NVARCHAR(100),
Apellido1Responsable NVARCHAR(100) NOT NULL,
Apellido2Responsable NVARCHAR(100),
DUI char(10) not null,
Parentesco Char(100) NOT NULL,
Correo Nvarchar(255) CHECK (Correo like '%@%.%'),
Telefono VARCHAR(15),
);
GO


--Tabla direccion Responsable
CREATE TABLE DireccionRespon(
Id_DireccionRespon INT PRIMARY KEY IDENTITY(1,1),
Colonia varchar(20) not null,
CallePolNC varchar(MAX) Not null,
Id_Responsable INT NOT NULL, --lave foranea
Id_DMD INT NOT NULL, --Llave Foranea
CONSTRAINT FK_Id_Responsable FOREIGN KEY (Id_Responsable) REFERENCES Responsable(Id_Responsable),
CONSTRAINT FK1_Id_DMD FOREIGN KEY (Id_DMD) REFERENCES DMD(Id_DMD)
);
GO


--Tabla Muchos a muchos Alumno y responsables
CREATE TABLE Responsable_Alumno(
    id_RA INT IDENTITY(1,1) PRIMARY KEY,
    Id_alumno INT NOT NULL,
    Id_Responsable INT NOT NULL,
    FOREIGN KEY (Id_alumno) REFERENCES Alumnos(Id_alumno),
    FOREIGN KEY (Id_Responsable) REFERENCES Responsable(Id_Responsable)
);


--Tabla para Maestro
CREATE TABLE Maestros (
Id_maestro INT PRIMARY KEY IDENTITY(1,1), --ID y Clave no son lo mismo
Codigo_Maestro Varchar(8) UNIQUE NOT NULL,
CONSTRAINT CHK_CodigoM check (Codigo_Maestro Like '[A-Za-z][A-Za-z][0-9][0-9][0-9][0-9][0-9][0-9]'),
Contraseña VARCHAR(60), --Contraseña para LOGIN
PrimerNombre NVARCHAR(50) NOT NULL,
SegundoNombre NVARCHAR(50),
PrimerApellido NVARCHAR(50) NOT NULL,
SegundoApellido NVARCHAR(50), 
DUI char(10) not null,
Correo Nvarchar(255) CHECK (Correo like '%@%.%'),
Telefono VARCHAR(15),
FechadeNacimiento DATE,
Genero Varchar(60) CHECK (Genero in ('Femenino', 'Masculino')),
Cargo varchar(30) CHECK (CARGO COLLATE SQL_Latin1_General_CP1_CI_AS IN ('Director/a', 'Sub Director/a', 'Coordinador de maestros', 'Maestro', 'Secretaría'))
);
GO

--Ver tabla maestro
SELECT TOP (1000) [Id_maestro]
      ,[Codigo_Maestro]
      ,[Contraseña]
      ,[PrimerNombre]
      ,[SegundoNombre]
      ,[PrimerApellido]
      ,[SegundoApellido]
      ,[DUI]
      ,[Correo]
      ,[Telefono]
      ,[FechadeNacimiento]
      ,[Genero]
      ,[Cargo]
  FROM [BasedeRegistros_LDRJLL].[dbo].[Maestros]



--Tabla direccion Maestro
CREATE TABLE DireccionMaest(
Id_DireccionMaestro INT PRIMARY KEY IDENTITY(1,1),
Colonia varchar(20) not null,
CallePolNC varchar(MAX) Not null,
Id_maestro INT NOT NULL, --Llave foranea
Id_DMD INT NOT NULL, --Llave Foranea
CONSTRAINT FK_Id_maestro FOREIGN KEY (Id_maestro) REFERENCES Maestros(Id_maestro),
CONSTRAINT FK2_Id_DMD FOREIGN KEY (Id_DMD) REFERENCES DMD(Id_DMD)
);
GO

--Tabla de padecimientos Mestros
CREATE TABLE PadecimientoMaestro(
Id_PadecimientoM INT PRIMARY KEY IDENTITY(1,1),
Medicamentos_Info varchar(MAX),
Enfermedades varchar(MAX),
Id_maestro INT NOT NULL, --Llave foranea
CONSTRAINT FK2_Id_maestro FOREIGN KEY (Id_maestro) REFERENCES Maestros(Id_maestro)
);
GO

--Tabla De contactos de emergencia
CREATE TABLE Contactos(
Id_Contacto INT PRIMARY KEY IDENTITY(1,1),
NombredeEmerg NVarchar(80) Not null,
ApellidoEmerg Nvarchar(80) not null,
Relacion Nvarchar(60) not null,
Telefono varchar(15) not null,
Id_maestro int not null,
CONSTRAINT FK3_Id_maestro FOREIGN KEY (Id_maestro) REFERENCES Maestros(Id_maestro)
);