module.exports = function(app){
	var clientes = app.controllers.clientes;

	app.get("/clientes", clientes.index);
	app.get("/clientes/create", clientes.create);
	app.post("/clientes", clientes.insert);
	app.get("/clientes/edit/:id", clientes.edit);
	app.put("/clientes/edit/:id", clientes.update);
	app.get("/clientes/show/:id", clientes.show);
	app.delete("/clientes/delete/:id", clientes.remove);
}
