module.exports = function (app, swig) {
    app.get("/autores", function (req, res) {
        let autores = [{
            "nombre" : "Nombre1",
            "grupo" : "Grupo1",
            "rol" : "cantante"
        }, {
            "nombre" : "Nombre2",
            "grupo" : "Grupo2",
            "rol" : "batería"
        }, {
            "nombre" : "Nombre3",
            "grupo" : "Grupo3",
            "rol" : "guitarrista"
        }];

        let respuesta = swig.renderFile('views/autores.html', {
            vendedor : 'Autores',
            autores : autores
        });

        res.send(respuesta);
    });

    app.get('/autores/agregar', function (req, res) {
        let respuesta = swig.renderFile('views/autores-agregar.html', {

        });
        res.send(respuesta);
    });

    app.post("/autor", function (req, res) {
        let respuesta = "";

        if(req.body.nombre !== "" && typeof req.body.nombre !== undefined && req.body.nombre !== null){
            respuesta += "Autor agregado: " + req.body.nombre;
        } else {
            respuesta += "Autor agregado: " + "nombre no enviado en la petición";
        }

        if(req.body.grupo !== "" && typeof req.body.grupo !== undefined && req.body.grupo !== null){
            respuesta += "<br>" + " grupo: " + req.body.grupo;
        } else {
            respuesta += "<br>" + " grupo: " + "grupo no enviado en la petición";
        }

        if(req.body.rol !== "" && typeof req.body.rol !== undefined && req.body.rol !== null){
            respuesta += "<br>" + " rol: " + req.body.rol;
        } else {
            respuesta += "<br>" + " rol: " + "rol no enviado en la petición";
        }

        res.send(respuesta);
    });

    app.get('/autores/*', function (req, res) {
        res.redirect("/autores");
    })
};