//practica de Programacion de Interfaces web.


Pasos a seguir: 
    primero instalar todo lo necesario;
    con comandos en el terminal de visual.
        Comando:   npm install
        con esto se deberia de instalar todos los archivos necesarios;
        Comando: npm install axios, 
        por si no se ha instalado con el anterior.

    segundo correr el programa;
        Comando: npm run dev
        con este comando se crea el proyecto y muestra una url en el terminal, se accede a ese comando y se abre el navegador.

Explicacion del proyecto:
    partiendo de base con un proyecto de react funcional que podemos tener con el comando:
     npm create vite@latest "el nnombr que quieras"...



    el proyecto se divide en 3 pasos, el primero en el que se crean los componentes, el principal es el App.tsx donde sucede la logica del proyecto. Los demas componentes van dentro de la carpeta que hemos creado llamada components y en una subcarpeta llamada character, los componentes CharacterCard(dentro escribimos lo que queremos que se muestre en la pagina) y CharacterList

    La llamada a la API de SWAPI se realiza en el app.tsx mediante useEffect.

    Los personajes se almacenan en el estado characters y se acumulan usando el valor next que devuelve la API para implementar la paginación.

    Los componentes CharacterList y CharacterCard reciben los datos por props.


    los componentes error y loader simplemente cuando se les llama muestran por pantalla un mensaje de cargando o error respectivamente.




    Paginación

    Se implementa un botón “Siguiente Página” que utiliza la URL next que devuelve la API.
    Al pulsarlo, se realiza una nueva petición y los personajes se acumulan en el estado existente, sin reemplazar los anteriores.

    con el .env codificamos la url por lo que creamos el archivo api.ts (https://swapi.dev/api/people/)