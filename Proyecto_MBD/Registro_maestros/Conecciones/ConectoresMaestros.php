<?php
$serverName = "IMMER";
$connectionInfo = array("Database"=>"BasedeRegistros_LDRJLL", "UID"=>"sa", "PWD"=>"Gatitos123", "CharacterSet" => "UTF-8");
$conn = sqlsrv_connect($serverName, $connectionInfo);

if ($conn === false) {
    die(print_r(sqlsrv_errors(), true));
}

//Datos Maestro
$codigo = $_POST["codigo"];
$Nombre1 = $_POST["nombre1"];
$Nombre2 = $_POST["nombre2"];
$apellido1 = $_POST["apellido1"];
$apellido2 = $_POST["apellido2"];
$DUI = $_POST["DUI"];
$Cargo = $_POST["Cargo"];
$correo = $_POST["correo"];
$telefono = $_POST["telefono"];
$fecha_nacimiento = $_POST["fecha_nacimiento"];
$Genero = $_POST["Genero"];

$SqlMaestro = "INSERT INTO Maestros(Codigo_Maestro, PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, DUI, Correo, Telefono, FechadeNacimiento, Genero, Cargo) VALUES ('$codigo','$Nombre1','$Nombre2','$apellido1','$apellido2','$DUI','$correo','$telefono','$fecha_nacimiento','$Genero' , '$Cargo')";
$res = sqlsrv_prepare($conn, $SqlMaestro);

if (sqlsrv_execute($res)) {
    echo "Datos Maestros ingresados bien ";
} else {
    echo "Error 1 "  . print_r(sqlsrv_errors(), true);
}

//Datos DMD
$Departamento = $_POST["Departamento"];
$Municipio = $_POST["Municipio"];
$Distrito = $_POST["Distrito"];

$SqlDirectMaestro = "INSERT INTO DMD (Departamento, Municipio, Distrito) VALUES ('$Departamento', '$Municipio', '$Distrito')";
$Resdirec = sqlsrv_prepare($conn, $SqlDirectMaestro);


if (sqlsrv_execute($Resdirec)) {
    echo "Datos DMD ingresados bien ";
} else {
    echo "Error  3 ". print_r(sqlsrv_errors(), true) ;
}


/*
//Direccion Maestro
$Colonia = $_POST["Colonia"];
$Resto = $_POST["Resto"];
*/

/*
//Padecimientos
$Medicamento = $_POST["Medicamento"];
$Enfermedad = $_POST["Enfermedad"];
*/

/*
//Contacto de emergencia
$contacto = $_POST["contacto"];
$ctelefono = $_POST["ctelefono"];
*/

?>