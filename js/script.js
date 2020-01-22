//al pasar por encima el ratón muestra el nombre de los municipios
function text(nombre) {
    clase = "." + nombre;
    x = $(clase.toLowerCase()).css("right");
    y = $(clase.toLowerCase()).css("top");
    $(".map").append('<div id="' + nombre.toLowerCase() + '" ></div>');
    id = "#" + nombre.toLowerCase();
    $(id).text(nombre);
    $(id).fadeIn("slow");

}
//borra el nombre de las palabras cuando no esta pasando por encima el ratón
function normal(nombre) {
    $(nombre).remove();
}
//muestra en el html las variables optenidas desde JSON
function inf(max, min, nombre, img) {
    $("#" + nombre).remove();
    $("#tiempo").remove();
    clase = "tiempo_" + nombre;
    $('body').append('<div id="tiempo" class="' + clase + '" > <div class="foto"><img src="img/' + img + '.png" alt=' + img + '></div></div>');
    $("." + clase).append('<div class="maxmin"><span class="max">' + max + '°C</span>| <span class="min">' + min + '°C</span></div>')
    $("." + clase).slideToggle();
}
//extrae los datos del fichero JSON
function tiempo(nombre) {
    var max;
    var min;
    $.ajax({
        // la URL para la petición
        url: 'http://localhost:3000/tiempo',
        // especifica si será una petición POST o GET
        type: 'GET',
        // el tipo de información que se espera de respuesta
        dataType: 'json',
        // código a ejecutar si la petición se ha realizado;
        success: function(data) {
            var i;
            for (var i = 0; i < data.length; i++) {
                if (data[i].municipio == nombre) {
                    max = data[i].max;
                    min = data[i].min;
                    img = data[i].img;
                    inf(max, min, nombre, img);
                }

            }
        },
        // código a ejecutar si la petición falla;
        error: function(xhr, status) {
            alert('error');
        },
    });
}