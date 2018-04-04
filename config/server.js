/* Importar o módulo do Framework Express */
var express = require('express');

/* Importar o módulo do Consign */
var consign = require('consign');

/* Importar o módulo do body-parser*/
var bodyParser = require('body-parser');

/* Importar o módulo do express-validator */
var expressValidator = require('express-validator');

/* Iniciar o objeto do express */
var app = express();


/* Setar as variavéis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configurar o middleware express statis */
app.use(express.static('./app/public'));

/* configurar o middleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));

/* configurar o middleware express-validator */
app.use(expressValidator());


/* Efetua o autoload das rotas dos controllers e models para o objeto App */
	consign()
		.include('app/routes')
		.then('app/controllers')
		.then('app/models')
		.into(app);

/* Exportar o objeto App */
module.exports = app;