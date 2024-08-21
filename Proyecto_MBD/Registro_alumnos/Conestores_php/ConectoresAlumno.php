<?php
// Conexión a la base de datos SQL Server
header('Content-Type: text/html; charset=utf-8');

$serverName = "IMMER";
$connectionInfo = array("Database"=>"BasedeRegistros_LDRJLL", "UID"=>"sa", "PWD"=>"Gatitos123", "CharacterSet" => "UTF-8");
$conn = sqlsrv_connect($serverName, $connectionInfo);

if ($conn === false) {
    die(print_r(sqlsrv_errors(), true));
}

//Insertar Datos de alumno
$codigo = $_POST["codigo"];
$Nombre1 = $_POST["nombre1"];
$Nombre2 = $_POST["nombre2"];
$apellido1 = $_POST["apellido1"];
$apellido2 = $_POST["apellido2"];
$correo = $_POST["correo"];
$telefono = $_POST["telefono"];
$fecha_nacimiento = $_POST["fecha_nacimiento"];
$Transporte = $_POST["Transporte"];
$Genero = $_POST["Genero"];

$SqlAlumno = "INSERT INTO Alumnos(Codigo_Alumno, PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, Correo, Telefono, FechadeNacimiento, Transporte, Genero) VALUES ('$codigo', '$Nombre1', '$Nombre2', '$apellido1', '$apellido2', '$correo', '$telefono', '$fecha_nacimiento', '$Transporte', '$Genero')";
$res = sqlsrv_prepare($conn, $SqlAlumno);


if (sqlsrv_execute($res)) {
    echo "Datos Alumnos ingresados bien ";
} else {
    echo "Error 1 "  . print_r(sqlsrv_errors(), true);
}


$curso = $_POST["curso"];
$SqlCursoAlumno = "INSERT INTO Nivel(Grado) VALUES ('$curso')";
$resC = sqlsrv_prepare($conn, $SqlCursoAlumno);

if (sqlsrv_execute($resC)) {
    echo "Datos curso ingresados bine ";
} else {
    echo "Error 2 "  . print_r(sqlsrv_errors(), true);
}


//Insertar datos de DMD
$Departamento = $_POST["Departamento"];
$Municipio = $_POST["Municipio"];
$Distrito = $_POST["Distrito"];

$SqlDirectAlum = "INSERT INTO DMD (Departamento, Municipio, Distrito) VALUES ('$Departamento', '$Municipio', '$Distrito')";
$Resdirec = sqlsrv_prepare($conn, $SqlDirectAlum);


if (sqlsrv_execute($Resdirec)) {
    echo "Datos DMD ingresados bien ";
} else {
    echo "Error  3 ". print_r(sqlsrv_errors(), true) ;
}



/*
//Insertar en la tabla Direccion_ALUMNO
$Colonia = $_POST["Colonia"];
$Resto = $_POST["Resto"];

// Obtener el Id_alumno recién insertado
$lastIdSql = "SELECT SCOPE_IDENTITY() as Id_alumno";
$stmt = sqlsrv_query($conn, $lastIdSql);
$row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC);
$Id_alumno = $row['Id_alumno'];

$lastIdSql2 = "SELECT SCOPE_IDENTITY() as Id_DMD";
$stmt2 = sqlsrv_query($conn, $lastIdSql2);
$row2 = sqlsrv_fetch_array($stmt2, SQLSRV_FETCH_ASSOC);
$Id_DMD = $row2['Id_DMD'];

$SqlDrectAlumn2 = "INSERT INTO DireccionAlum (Colonia, CallePolNC, Id_alumno, Id_DMD) VALUES ('$Colonia', '$Resto' , '$Id_alumno' ,'$Id_DMD')";
$ResDiracl = sqlsrv_prepare($conn, $SqlDrectAlumn2);

if (sqlsrv_execute($ResDiracl)) {
    echo "DATOS DIRECCION BIEN ";
} else {
    echo "Error 4" . print_r(sqlsrv_errors(), true;
}
*/

?>