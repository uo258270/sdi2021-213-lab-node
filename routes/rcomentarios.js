module.exports = function (app, swig, gestorBD) {
    app.post("/cancion/:id", function (req, res) {
        if (req.session.usuario == null) {
            res.redirect("/identificarse");
            return;
        }

        let comentario = {
            autor: req.session.usuario,
            texto: req.body.texto,
            cancion_id: gestorBD.mongo.ObjectID(req.params.id)
        };

        // Conectarse
        gestorBD.insertarComentario(comentario, function (id) {
            if (id == null) {
                res.send("Error al insertar comentario");
            } else {
                res.redirect("/cancion/" + gestorBD.mongo.ObjectID(req.params.id));
            }
        });
    });
};