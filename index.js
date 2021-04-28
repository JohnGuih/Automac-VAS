const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const hb = require('handlebars');
const moment = require("moment");
const bodyParser = require("body-parser");
const { Cliente, Engenheiro, Obra, Registro } = require("./models/index");
const path = require("path");
const admin = require("./routes/VASadmin")

// Config
    // Handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    // Body Parser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());
    // Public
        app.use(express.static(path.join(__dirname,"public")));

 // Rotas
    app.get("/", function(req, res){
        res.render('home')
    })

    app.get("/tabelaCliente", function(req, res){
        Cliente.findAll().then(function(clientes){
            res.render('tabelaCliente', {clientes: clientes})
        })
    })

    app.get("/tabelaEng", function(req, res){
        Engenheiro.findAll().then(function(engenheiros){
            hb.registerHelper('dateFormat', function (date, options) {
                const formatToUse = (arguments[1] && arguments[1].hash && arguments[1].hash.format) || "DD/MM/YYYY"
                return moment(date).format(formatToUse);
            });
            res.render('tabelaEng', {engenheiros: engenheiros})
        })
    })

    app.get("/tabelaObra", function(req, res){
        Obra.findAll().then(function(obras){
            hb.registerHelper('dateFormat', function (date, options) {
                const formatToUse = (arguments[1] && arguments[1].hash && arguments[1].hash.format) || "DD/MM/YYYY"
                return moment(date).format(formatToUse);
            });
            res.render('tabelaObra', {obras: obras})
        })
    })

    app.use('/admin', admin)

const PORT = process.env.PORT || 8081
app.listen(PORT,()=>{
    console.log("Servidor rodando!");
});