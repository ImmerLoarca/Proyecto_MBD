<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Página PHP</title>
</head>
<body>


<label for="curso">Grado</label>
        <select id="curso" name="curso" required placeholder="Grado">
            <option value="Kinder 4">Kinder 4</option>
            <option value="Kinder 5">Kinder 5</option>
            <option value="Preparatoria">Preparatoria</option>
            <option value="Primer Grado">Primer Grado</option>
            <option value="Segundo Grado">Segundo Grado</option>
            <option value="Tercer Grado">Tercer Grado</option>
            <option value="Cuarto Grado">Cuarto Grado</option>
            <option value="Quinto Grado">Quinto Grado</option>
            <option value="Sexto Grado">Sexto Grado</option>
            <option value="Septimo Grado">Septimo Grado</option>
            <option value="Octavo Grado">Octavo Grado</option>
            <option value="Noveno Grado">Noveno Grado</option>
            <option value="Primer año Bachillerato con Diplomado en Computación">Primer año Bachillerato con Diplomado en Computación</option>
            <option value="Segundo año Bachillerato con Diplomado en Computación">Segundo año Bachillerato con Diplomado en Computación</option>
            <option value="Primer año Bachillerato con Diplomado en Ingles">Primer año Bachillerato con Diplomado en Ingles</option>
            <option value="Segundo año Bachillerato con Diplomado en Ingles">Segundo año Bachillerato con Diplomado en Ingles</option>
            
        </select>


<p>Este es un párrafo en HTML.</p>

<?php
// Conexión a la base de datos SQL Server
$serverName = "IMMER";
$connectionInfo = array("Database"=>"BasedeRegistros_LDRJLL", "UID"=>"sa", "PWD"=>"Gatitos123");
$conn = sqlsrv_connect($serverName, $connectionInfo);

if ($conn === false) {
    die(print_r(sqlsrv_errors(), true));
}

// Lista de valores permitidos
$valoresPermitidos = [
    'Kinder 4', 'Kinder 5', 'Preparatoria', 'Primer Grado',
    'Segundo Grado', 'Tercer Grado', 'Cuarto Grado',
    'Quinto Grado', 'Sexto Grado', 'Septimo Grado',
    'Octavo Grado', 'Noveno Grado',
    'Primer año Bachillerato con Diplomado en Computación',
    'Segundo año Bachillerato con Diplomado en Computación',
    'Primer año Bachillerato con Diplomado en Ingles',
    'Segundo año Bachillerato con Diplomado en Ingles'
];

// Valor recibido del formulario
$gradoRecibido = $_POST['curso']; // Ajusta según tu nombre de campo

// Validar si el valor recibido es permitido
if (in_array($gradoRecibido, $valoresPermitidos)) {
    // Procede con la inserción en la base de datos
} else {
    // Manejar el error: el valor recibido no es válido
    echo "Error: Valor de grado no permitido.";
}

?>

</body>
</html>
