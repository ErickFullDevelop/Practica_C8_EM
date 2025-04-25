# PROYECTO FINAL 8 - IMPLEMENTACION DE API BACKEND NODE EXPRESS
  OBJETIVO: Implementar aplicaciones empresariales que disponibilizan servicios Rest utilizando el framework Express y el entorno Node.js para dar solucion a los requerimientos 
  de la organizacion.

  DESCRIPCIÓN:

  El equipo de desarrollo de software ha comenzado un desarrollo para el acceso a datos por medio de una aplicación realizada por medio de Node.js.
  Dicho desarrollo se basó en el diseño de acceso a datos por medio de sequelize y las relaciones respectivas para la gestión de cursos Bootcamp de una determinada empresa de 
  adiestramiento. El equipo aplica la metodología scrum y ya realizó el primer Sprint del proyecto que se trató en el diseño e implementación por medio de Node.js para el 
  registro 
  de cursos Bootcamp y de usuarios de los mismos.
  Ahora bien para éste segundo Sprint, se desea adecuar dicho diseño con la finalidad que éste disponible a través de una API RESTful, para éste nuevo sprint, se agrega a la 
  tabla 
  users el nuevo campo password, con un mínimo de 8 caracteres de requerimiento, con la finalidad de poder autenticar al usuario, el modelo de entidad relación de la base de 
  datos 
  es el que muestra a continuación:

  ![image](https://github.com/user-attachments/assets/397aaf35-c282-4295-abe3-d79338c7babb)

  El requerimiento emitido por la empresa de adiestramiento parte del principio de que los usuarios pueden participar en distintos bootcamp, y a su vez distintos bootcamp 
  poseen 
  distintos usuarios como se realizó en el primer sprint .
  Para el segundo Sprint se desea la construcción de la API RESTful con Express del bootcamp, soportará el token basado en la autenticación con JWT(JSONWebToken) y PostgreSQL.


  Para la construcción de la API debe contener los siguientes funcionalidades:

  •	Un usuario de puede registrar en la API

  •	Un usuario inicia sesión con el email y el password

  •	Los registros se guardarán en la base de datos PostgreSQL

  •	Una vez registrado el usuario usuario puede agregar bootcamp

  •	Puede asignar usuarios a los bootcamp

  •	La consulta de los bootcamp es pública

  
  La APIs debe proveer las siguientes endpoint:

  Métodos	/URL	/Acción
  
  POST	/api/signup	Registro de una nuevo usuario, acceso público
  
  POST	/api/signin	Inicio de sesión en la API, acceso público
  
  GET	/api/user/:id	Lista información del usuario según id, acceso por medio de token, previamente iniciado sesión
  
  GET	/api/user/	Lista información de todos los usuarios y los Bootcamp registrados, acceso por medio de token, previamente iniciado sesión
  
  PUT	/api/user/:id	Actualiza los campos de firstName y lastName de un usuario según su id, acceso por medio de token, previamente iniciado sesión
  
  DELETE	/api/user/:id	Elimina el usuario según id, acceso por medio de token, previamente iniciado sesión
  
  POST	/api/bootcamp	Crea un bootcamp, acceso por medio de token, previamente iniciado sesión
  
  POST	/api/bootcamp/adduser	Agrega usuarios previamente registrados al bootcamp, acceso por medio de token, previamente iniciado sesión
  
  GET	/api/bootcamp/:id	Obtiene información de un bootcamp según id, y muestra los usuarios registrados en el bootcamp. Acceso por medio de token, previamente iniciado sesión
  
  GET	/api/bootcamp	Lista todos los bootcamp, acceso público


  En este segundo sprint, el equipo de desarrollo conjuntamente con el ScrumMaster acordaron lo siguientes pasos para el desarrollo del mismo:
  1.	Adecuar el proyecto y el código que se realizó en el primer sprint, el cual se adjunta el archivo llamado: sprint_01_bootcamp.zip, con la finalidad de que se adecue, 
      mejoré y construya una API RESTful para el bootcamp según las rutas antes mencionadas.
  2.	Se implementa haciendo uso de las siguientes dependencias: express, sequelize, pg, pg-hstore, body-parser, cors, JWT(jsonwebtoken) y bcryptjs
  3.	Partir de la siguiente estructura para el desarrollo

        ![image](https://github.com/user-attachments/assets/0bc4a04f-e10c-4800-95e8-7ee8e2e6ceb2)

     
  4.	Crear dentro de la carpeta config, el archivo db.config.js, que posee la configuración a la base de datos, el nombre de la base de datos es: db_jwtbootcamp y 
      auth.config.js que contendrá la frase secreta para la creación del token respectivamente
  5.	Dentro de la carpeta models, se encuentran los modelos tanto para el usuario (user.model.js) como para el bootcamp (bootcamp.model.js). El archivo index.js se define la 
      conexión con sequelize a la base de datos y modelos
  6.	En la carpeta controllers posee los controladores tanto para el usuario (user.controller.js), como para el bootcamp (bootcamp.controller.js).
      Para el usuario se deben adecuar los siguientes controladores para la API:

   • Crear y guardar usuarios llamado createUser
   
   •	Obtener los bootcamp de un usuario llamado findUserById
   
   •	Obtener todos los Usuarios incluyendo los bootcamp llamado findAll
   
   •	Actualizar usuario por Id llamado updateUserById
   
   •	Eliminar un usuario por Id llamado deleteUserById


   Para el bootcamp se debe adecuar los siguientes controladores para la API:

   •	Crear y guardar un nuevo bootcamp llamado createBootcamp
   
   •	Agregar un Usuario al Bootcamp llamado addUser
   
   •	Obtener los bootcamp por id llamado findById
   
   •	Obtener todos los Usuarios incluyendo los Bootcamp llamado findAll

   


 7.	En la carpeta middleware contiene los siguientes archivos:

    auth.js: que contiene una función de verificar token llamada verifyToken
    verifySingUp.js: que verifica si el correo ya se encuentra ingresado al momento de registrarse un nuevo usuario
    index.js: módulo que exporta los middleware




 8.	En la carpeta routes contiene la definición de las rutas en los siguientes archivos:

    user.routes.js: definen las rutas de los usuarios
    bootcamp.user.js: definen las rutas para los bootcamp

    La estructura final es la siguiente:
   
    ![image](https://github.com/user-attachments/assets/02fb8849-eb38-4113-b9a2-a59963ba3950)

   

  9.Finalmente para verificar los modelos y las relaciones con sus métodos y los endpoint se hace uso de la herramienta Postman .
   Crear los siguientes usuarios:

   firstName /	lastName	/ email	password
   
   Mateo	Díaz	/ mateo.diaz@correo.com /mateo123456
   
   Santiago	Mejías/	santiago.mejias@correo.com /santiago123456
   
   Lucas	Rojas	/lucas.rojas@correo.com /lucas123456
   
   Facundo	Fernández/	facundo.fernandez@correo.com /facundo123456


 Al ejecutar a modo de ejemplo la creación del primer usuario, con postman obtenemos:
 
 
 ![image](https://github.com/user-attachments/assets/481a1d20-aca6-4ae4-9a4c-1daf63d5b33f)








  



