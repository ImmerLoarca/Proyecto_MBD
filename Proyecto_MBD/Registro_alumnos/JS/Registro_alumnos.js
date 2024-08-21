         
         //Mensaje para trasporte
         // Obtener el input y el mensaje
         const trans = document.getElementById("transporte");
         const mensaje = document.getElementById("mensaje"); 
        
        
        // Mostrar el mensaje cuando el input recibe foco
        trans.addEventListener("focus", function() {
            mensaje.style.display = "block";
        });

        // Ocultar el mensaje cuando el input pierde el foco
        trans.addEventListener("blur", function() {
            mensaje.style.display = "none";
        });

        /*//Verficacion de genero
        const formulario = document.getElementById("formularioalumno");
        Genero =  document.getElementById("Genero");

        function validarGenero(event) {
        if (Genero !== "Masculino" && Genero !== "masculino" && Genero !== "Femenino" && Genero !== "femenino" ){
            alert('El valor ingresado no es válido. Por favor, ingrese "Masculino" o "Femenino".');
                event.preventDefault(); // Evitar el envío del formulario
                document.getElementById("Genero").value = '';
        }
     }
           formulario.addEventListener("submit", validarGenero);
*/

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
            return inicialNombre + inicialApellido + numeroAleatorio ;
        }

       
        function actualizarCodigo() {
            const nombre = document.getElementById('nombre1').value;
            const apellido = document.getElementById('apellido1').value;
            const codigo = generarCodigo(nombre, apellido);
            document.getElementById('codigo').value = codigo;
        }

        document.getElementById('nombre1').addEventListener('input', actualizarCodigo);
        document.getElementById('apellido1').addEventListener('input', actualizarCodigo);

        
        //Agregar formulario
        let contadorAdultos = 0;

        function agregarFormularioAdulto() {
            contadorAdultos++;

        const nuevoFormulario = document.createElement('div');
        nuevoFormulario.className = 'formulario';
        nuevoFormulario.setAttribute('id', `formulario-adulto-${contadorAdultos}`);

        nuevoFormulario.innerHTML =  `
        <h4 class="DatoRespo">Responsable ${contadorAdultos}</h4>
        
        <label for="nombreRespo1-${contadorAdultos}">Primer nombre:</label>
        <input type="text" id="nombreRespo1-${contadorAdultos}" name="nombreRespo1[]" required>

        <label for="nombreRespo2-${contadorAdultos}">Segundo nombre:</label>
        <input type="text" id="nombreRespo2-${contadorAdultos}" name="nombreRespo2[]" >

        <label for="apellidoRespo1-${contadorAdultos}">Primer Apellido:</label>
        <input type="text" id="apellidoRespo1-${contadorAdultos}" name="apellidoRespo1[]" required>

        <label for="apellidoRespo2-${contadorAdultos}">Segundo Apellido:</label>
        <input type="text" id="apellidoRespo2-${contadorAdultos}" name="apellidoRespo2[]">
        
        <label for="DUI--${contadorAdultos}">DUI</label>
        <input type="text" id="DUI--${contadorAdultos}" name="DUI" maxlength="10" placeholder="00000000-0" >

        <label for="Parentesco-${contadorAdultos}">Parentesco:</label>
        <input type="text" id="Parentesco-${contadorAdultos}" name="Parentesco[]" required> 
        
        <label for="direccion-${contadorAdultos}" class="Direccion">Direccion</label>
         <select id="curso" name="DepartamentoRespo" required>
            <option value=" "> </option>
            <option value="Ahuachapán">Ahuachapán</option>
            <option value="La Libertad">La Libertad</option>
            <option value="San Salvador">San Salvador</option>
            <option value="Cuscatlán">Cuscatlán</option>
            <option value="Cabañas">Cabañas</option>
            <option value="La Paz">La Paz</option>
            <option value="La Unión">La Unión</option>
            <option value="Usulután">Usulután</option>
            <option value="Sonsonate">Sonsonate</option>
            <option value="Santa Ana">Santa Ana</option>
            <option value="San Vicente">San Vicente</option>
            <option value="San Miguel">San Miguel</option>
            <option value="Morazán">Morazán</option>
            <option value="Chalatenango">Chalatenango</option>
        </select>

        
        <select id="curso" name="MunicipioRespo" required>
            <option value=" "> </option>
            <option value="Municipio de Ahuachapán Centro">Municipio de Ahuachapán Centro</option>
            <option value="Municipio de Ahuachapán Norte">Municipio de Ahuachapán Norte</option>
            <option value="Municipio de Ahuachapán Sur">Municipio de Ahuachapán Sur</option>
            <option value="Municipio de San Salvador Norte">Municipio de San Salvador Norte</option>
            <option value="Municipio de San Salvador Oeste">Municipio de San Salvador Oeste</option>
            <option value="Municipio de San Salvador Este">Municipio de San Salvador Este</option>
            <option value="Municipio de San Salvador Centro">Municipio de San Salvador Centro</option>
            <option value="Municipio de San Salvador Sur">Municipio de San Salvador Sur</option>
            <option value="Municipio de La Libertad Norte">Municipio de La Libertad Norte</option>
            <option value="Municipio de La Libertad Centro">Municipio de La Libertad Centro</option>
            <option value="Municipio de La Libertad Oeste">Municipio de La Libertad Oeste</option>
            <option value="Municipio de La Libertad Este">Municipio de La Libertad Este</option>
            <option value="Municipio de La Libertad Costa">Municipio de La Libertad Costa</option>
            <option value="Municipio de La Libertad Sur">Municipio de La Libertad Sur</option>
            <option value="Municipio de Chalatenango Norte">Municipio de Chalatenango Norte</option>
            <option value="Municipio de Chalatenango Centro">Municipio de Chalatenango Centro</option>
            <option value="Municipio de Chalatenango Sur">Municipio de Chalatenango Sur</option>
            <option value="Municipio de Cuscatlán Norte">Municipio de Cuscatlán Norte</option>
            <option value="Municipio de Cuscatlán Sur">Municipio de Cuscatlán Sur</option>
            <option value="Municipio de Cabañas Este">Municipio de Cabañas Este</option>
            <option value="Municipio de Cabañas Oeste">Municipio de Cabañas Oeste</option>
            <option value="Municipio de La Paz Oeste">Municipio de La Paz Oeste</option>
            <option value="Municipio de La Paz Centro">Municipio de La Paz Centro</option>
            <option value="Municipio de La Paz Este">Municipio de La Paz Este</option>
            <option value="Municipio de La Unión Norte">Municipio de La Unión Norte</option>
            <option value="Municipio de La Unión Sur">Municipio de La Unión Sur</option>
            <option value="Municipio de Usulután Norte">Municipio de Usulután Norte</option>
            <option value="Municipio de Usulután Este">Municipio de Usulután Este</option>
            <option value="Municipio de Usulután Oeste">Municipio de Usulután Oeste</option>
            <option value="Municipio de Sonsonate Norte">Municipio de Sonsonate Norte</option>
            <option value="Municipio de Sonsonate Centro">Municipio de Sonsonate Centro</option>
            <option value="Municipio de Sonsonate Este">Municipio de Sonsonate Este</option>
            <option value="Municipio de Sonsonate Oeste">Municipio de Sonsonate Oeste</option>
            <option value="Municipio de Santa Ana Norte">Municipio de Santa Ana Norte</option>
            <option value="Municipio de Santa Ana Centro">Municipio de Santa Ana Centro</option>
            <option value="Municipio de Santa Ana Este">Municipio de Santa Ana Este</option>
            <option value="Municipio de Santa Ana Oeste">Municipio de Santa Ana Oeste</option>
            <option value="Municipio de San Vicente Norte">Municipio de San Vicente Norte</option>
            <option value="Municipio de San Vicente Sur">Municipio de San Vicente Sur</option>
            <option value="Municipio de San Miguel Norte">Municipio de San Miguel Norte</option>
            <option value="Municipio de San Miguel Centro">Municipio de San Miguel Centro</option>
            <option value="Municipio de San Miguel Oeste">Municipio de San Miguel Oeste</option>
            <option value="Municipio de Morazán Norte">Municipio de Morazán Norte</option>
            <option value="Municipio de Morazán Sur">Municipio de Morazán Sur</option>          
        </select>

        
        <select id="curso" name="DistritoRespo" required>
            <option value=" "> </option>
            <option value='Distrito de Ilopango'>Distrito de Ilopango</option>
            <option value='Distrito de Soyapango'>Distrito de Soyapango</option>
            <option value='Distrito de Tonacatepeque'>Distrito de Tonacatepeque</option>
            <option value='Distrito de Ayutuxtepeque'>Distrito de Ayutuxtepeque</option>
            <option value='Distrito de Mejicanos'>Distrito de Mejicanos</option>
            <option value='Distrito de San Salvador'>Distrito de San Salvador</option>
            <option value='Distrito de Cuscatancingo'>Distrito de Cuscatancingo</option>
            <option value='Distrito de Ciudad Delgado'>Distrito de Ciudad Delgado</option>
            <option value='Distrito de Panchimalco'>Distrito de Panchimalco</option>
            <option value='Distrito de Rosario de Mora'>Distrito de Rosario de Mora</option>
            <option value='Distrito de San Marcos'>Distrito de San Marcos</option>
            <option value='Distrito de Santo Tomás'>Distrito de Santo Tomás</option>
            <option value='Distrito de Santiago Texacuangos'>Distrito de Santiago Texacuangos</option>
            <option value='Distrito de Quezaltepeque'>Distrito de Quezaltepeque</option>
            <option value='Distrito de San Matías'>Distrito de San Matías</option>
            <option value='Distrito de San Pablo Tacachico'>Distrito de San Pablo Tacachico</option>
            <option value='Distrito de San Juan Opico'>Distrito de San Juan Opico</option>
            <option value='Distrito de Ciudad Arce'>Distrito de Ciudad Arce</option>
            <option value='Distrito de Colón'>Distrito de Colón</option>
            <option value='Distrito de Jayaque'>Distrito de Jayaque</option>
            <option value='Distrito de Sacacoyo'>Distrito de Sacacoyo</option>
            <option value='Distrito de Tepecoyo'>Distrito de Tepecoyo</option>
            <option value='Distrito de Talnique'>Distrito de Talnique</option>
            <option value='Distrito de Antiguo Cuscatlán'>Distrito de Antiguo Cuscatlán</option>
            <option value='Distrito de Huizucar'>Distrito de Huizucar</option>
            <option value='Distrito de Nuevo Cuscatlán'>Distrito de Nuevo Cuscatlán</option>
            <option value='Distrito de San José Villanueva'>Distrito de San José Villanueva</option>
            <option value='Distrito de Zaragoza'>Distrito de Zaragoza</option>
            <option value='Distrito de Chiltuipán'>Distrito de Chiltuipán</option>
            <option value='Distrito de Jicalapa'>Distrito de Jicalapa</option>
            <option value='Distrito de La Libertad'>Distrito de La Libertad</option>
            <option value='Distrito de Tamanique'>Distrito de Tamanique</option>
            <option value='Distrito de Teotepeque'>Distrito de Teotepeque</option>
            <option value='Distrito de Comasagua'>Distrito de Comasagua</option>
            <option value='Distrito de Santa Tecla'>Distrito de Santa Tecla</option>
            <option value='Distrito de Aguilares'>Distrito de Aguilares</option>
            <option value='Distrito de El Paisnal'>Distrito de El Paisnal</option>
            <option value='Distrito de Guazapa'>Distrito de Guazapa</option>
            <option value='Distrito de Apopa'>Distrito de Apopa</option>
            <option value='Distrito de Nejapa'>Distrito de Nejapa</option>
            <option value='Distrito de San Martín'>Distrito de San Martín</option>
        </select>

        <input type="text" id="direccion" name="coloniaRespo" placeholder="colonia" required>  
        <input type="text" id="direccion" name="RestoRespo" placeholder="Calle, POL y Numero de casa" required> 

        <label for="correo-${contadorAdultos}">Correo electrónico:</label>
        <input type="email" id="correo-${contadorAdultos}" name="correoRespo" required>

        <label for="Telefono-${contadorAdultos}">Telefono:</label>
        <input type="tel" id="telefono-${contadorAdultos}" name="telefonoRespo" required>
        
        <button type="button" class="remove-btn" onclick="eliminarFormularioAdulto(${contadorAdultos})">x</button>`;

        document.getElementById('formularios-adultos-container').appendChild(nuevoFormulario);
    }

    document.getElementById('agregarAdultoBtn').addEventListener('click', agregarFormularioAdulto);

    function eliminarFormularioAdulto(id) {
        const formulario = document.getElementById(`formulario-adulto-${id}`);
        formulario.remove();
    }


    // Iniciar con un formulario de adulto por defecto
    agregarFormularioAdulto();

    function CargardatosDMD(){
        
    }
