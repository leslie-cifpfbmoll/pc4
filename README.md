#  Mapa del tiempo 
### Descripción
<p>En esta práctica creamos  un mapa meteorológico de Mallorca. Donde mostramos los datos meteorológicos de 5 municipios la isla: la temperatura máxima, mínima y una imagen relacionada con el clima(soleado, nublado, lluvia). Estos datos los obtenemos desde una REST API  </p>

### Diseño Web 
<p>En el mapa, las ciudades las representamos con puntos, cuando pasas sobre estos, sus nombres se muestran, con efectos Jquery. Al hacer click sobre alguno, nos muestra los datos meteorológico de este pueblo, al hace click sobre cualquier otro elemento desaparece esta información.</p>

### Guia de instalación

Para poder leer el archivo JSON tenemos que instalar en el ordenador la Rest API Local [json-server](https://github.com/typicode/json-server), tambien tendriamos que tener instalado el node.js
<p>Instalamos el servidor JSON </p>

```bash
npm install -g json-server
```

En el archivo db.json tenemos la información meteorológica de los municipios.

```json
{ "tiempo": [ 
{ "id": 12345671, "municipio": "palma", "max": "15", "min": "10", "img":"nublado" }, 
{ "id": 12345672, "municipio": "andratx", "max": "12", "min": "7","img": "sol"},
 { "id": 12345673, "municipio": "calvia", "max": "10", "min": "5", "img": "sol" },
 { "id": 12345674, "municipio": "llucmajor", "max": "12", "min": "18", "img": "nublado" }, 
{ "id": 12345675, "municipio": "manacor", "max": "7", "min": "4", "img": "tormenta" }
 ]}
 ```

 Para iniciar el servidor, nos situamos en la ruta donde se encuentra nuestro archivo json 

```bash
json-server --watch db.json
```

<p>De esta manera ya podemos obtener los datos json desde el javascript mediante JQuery Ajax y mostrar su contenido en nuestra página. </p>

---

Autor: Leslie Oña
