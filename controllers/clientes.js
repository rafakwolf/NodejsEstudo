var moment = require("moment");

module.exports = function (app) {
    
    var cliente = app.models.cliente;
    
    var clienteController = {
        index: function (req, res) {
            cliente.find(function (err, data) {
                if (err) {
                    console.log(err);
                }
                res.render("clientes/index", { lista: data, moment: moment });
            });
        },
        
        create: function (req, res) {
            res.render("clientes/create");
        },
        
        insert: function (req, res) {
            var model = new cliente(req.body);
            model.save(function (err) {
                if (err) {
                    console.log(err);
                }
                req.flash("info", "Cliente cadastrado com sucesso!");
                res.redirect("/clientes");
            });
        },
        
        edit: function (req, res) {
            cliente.findById(req.params.id, function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    res.render("clientes/edit", { value: data });
                }
            });
        },
        
        update: function (req, res) {
            cliente.findById(req.params.id, function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    var model = data;
                    model.nome = req.body.nome;
                    model.login = req.body.login;
                    model.save(function (err) {
                        if (err) {
                            console.log(err);
                        } else {
                            req.flash("info", "Cliente atualizado com sucesso!");
                            res.redirect("/clientes");
                        }
                    });
                }
            });
        },
        
        show: function (req, res) {
            cliente.findById(req.params.id, function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    res.render("clientes/show", { value: data });
                }
            });
        },
        
        remove: function (req, res) {
            cliente.remove({ _id: req.params.id }, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    req.flash("info", "Cliente excluído com sucesso!");
                    res.redirect("/clientes");
                }
            });
        }
    };
    
    return clienteController;
};