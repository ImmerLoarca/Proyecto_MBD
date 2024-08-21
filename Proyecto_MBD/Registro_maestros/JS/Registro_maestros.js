 //Mensaje para Medicamento
 const medica = document.getElementById("Medicamento");
 const mensaje1 = document.getElementById("mensaje1"); 
 
 
 // Mostrar el mensaje cuando el input recibe foco
 medica.addEventListener("focus", function() {
     mensaje1.style.display = "block";
 });

 // Ocultar el mensaje cuando el input pierde el foco
 medica.addEventListener("blur", function() {
     mensaje1.style.display = "none";
 });

 


 //Mensaje para Enfermedad
 const enfermedad = document.getElementById("Enfermedad");
 const mensaje2 = document.getElementById("mensaje2"); 
 
 
 // Mostrar el mensaje cuando el input recibe foco
 enfermedad.addEventListener("focus", function() {
     mensaje2.style.display = "block";
 });

 // Ocultar el mensaje cuando el input pierde el foco
 enfermedad.addEventListener("blur", function() {
     mensaje2.style.display = "none";
 });




 //CODIGO DE LLAVE PRIMARIA
 function generarCodigo(nombre1, apellido1) {
     // Obtiene las iniciales del nombre y apellido
     const inicialNombre = nombre1.charAt(0).toUpperCase();
     const inicialApellido = apellido1.charAt(0).toUpperCase();

     // Genera un número aleatorio de 4 dígitos
     const numeroAleatorio = Math.floor(100000 + Math.random() * 900000);

     // Combina las iniciales y el número
     return `${inicialNombre}${inicialApellido}${numeroAleatorio}`;
 }

 document.getElementById('nombre1').addEventListener('input', actualizarCodigo);
 document.getElementById('apellido1').addEventListener('input', actualizarCodigo);

 function actualizarCodigo() {
     const nombre = document.getElementById('nombre1').value;
     const apellido = document.getElementById('apellido1').value;
     const codigo = generarCodigo(nombre, apellido);
     document.getElementById('codigo').value = codigo;
 }
