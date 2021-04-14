const express = require("express");
const db = require('./models/db');
const app = express();
const handlebars = require('express-handlebars');
const hb = require('handlebars');
const moment = require("moment");
const bodyParser = require("body-parser");
const Associations = require("./models/Associations");

// Config
    // Tamplate Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    // Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())

 // Rotas
    app.get("/", function(req, res){
        res.render('home')
    })

    app.get("/tabelaCliente", function(req, res){
        Associations.Cliente.findAll().then(function(clientes){
            res.render('tabelaCliente', {clientes: clientes})
        })
    })

    app.get("/tabelaEng", function(req, res){
        /*Promise.all([Associations.Engenheiro.findAll(), Associations.Obra.findAll()])
        .then((data) => {
            hb.registerHelper('dateFormat', function (date, options) {
                const formatToUse = (arguments[1] && arguments[1].hash && arguments[1].hash.format) || "DD/MM/YYYY"
                return moment(date).format(formatToUse);
            });
            res.render('tabelaEng', {engenheiros: data[0], obras: data[1]})
        })*/
        Associations.Engenheiro.findAll().then(function(engenheiros){
            hb.registerHelper('dateFormat', function (date, options) {
                const formatToUse = (arguments[1] && arguments[1].hash && arguments[1].hash.format) || "DD/MM/YYYY"
                return moment(date).format(formatToUse);
            });
            res.render('tabelaEng', {engenheiros: engenheiros})
        })
    })

    app.get("/tabelaObra", function(req, res){
        Associations.Obra.findAll().then(function(obras){
            hb.registerHelper('dateFormat', function (date, options) {
                const formatToUse = (arguments[1] && arguments[1].hash && arguments[1].hash.format) || "DD/MM/YYYY"
                return moment(date).format(formatToUse);
            });
            res.render('tabelaObra', {obras: obras})
        })
    })

    app.get("/tabelaRegistro", function(req, res){
        Associations.Registro.findAll().then(function(registros){
            hb.registerHelper('dateFormat', function (date, options) {
                const formatToUse = (arguments[1] && arguments[1].hash && arguments[1].hash.format) || "DD/MM/YYYY"
                return moment(date).format(formatToUse);
            });
            res.render('tabelaRegistro', {registros: registros})
        })
    })

    app.get('/cadCliente', function(req, res){
        res.render('cadCliente')
    })

    app.get('/cadEng', function(req, res){
        res.render('cadEng')
    })
    
    app.get('/cadObra', function(req, res){
        Associations.Cliente.findAll().then(function(clientes){
            res.render('cadObra', {clientes: clientes})
        })
    })

    app.get("/cadRegistro", function(req, res){
        Promise.all([Associations.Engenheiro.findAll(), Associations.Obra.findAll()])
        .then((data) => {
            hb.registerHelper('dateFormat', function (date, options) {
                const formatToUse = (arguments[1] && arguments[1].hash && arguments[1].hash.format) || "DD/MM/YYYY"
                return moment(date).format(formatToUse);
            });
            res.render('cadRegistro', {engenheiros: data[0], obras: data[1]})
        })
    })

    app.post('/addClietne', function(req, res){
        if(req.body.doctype == 'cpf'){
            Associations.Cliente.create({
                nome: req.body.nome,
                end: req.body.end,
                fone: req.body.fone,
                celular: req.body.celular,
                cpf: req.body.doc
            }).then(function(){
                res.send("Post criado com sucesso!")
            }).catch(function(err){
                res.send("Houve um erro: "+err)
            })
        } else {
            Associations.Cliente.create({
                nome: req.body.nome,
                end: req.body.end,
                fone: req.body.fone,
                celular: req.body.celular,
                cnpj: req.body.doc
            }).then(function(){
                res.send("Post criado com sucesso!")
            }).catch(function(err){
                res.send("Houve um erro: "+err)
            })
        }
    })

    app.post('/addEng', function(req, res){
        Associations.Engenheiro.create({
            nome: req.body.nome,
            end: req.body.end,
            fone: req.body.fone,
            celular: req.body.celular,
            cpf: req.body.doc,
            crea: req.body.crea,
            salario: req.body.salario
        }).then(function(){
            res.send("Post criado com sucesso!")
        }).catch(function(err){
            res.send("Houve um erro: "+err)
        })
    })

    app.post('/addObra', function(req, res){
        console.log(req.body.clienteId)
        let INFRA;
        let GARAGEM;
        if(req.body.infra == "true"){ INFRA = "true" } else { INFRA = "false" }
        if(req.body.garagem == "true"){ GARAGEM = "true" } else { GARAGEM = "false" }
        Associations.Obra.create({
            end: req.body.end,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            estado: req.body.estado,
            metragem: req.body.metragem,
            quartos: req.body.quartos,
            wc: req.body.wc,
            infraestrutura: INFRA,
            garagem: GARAGEM,
            andar: req.body.andar,
            edificio: req.body.edificio,
            situacao: req.body.situacao,
            dataInicio: req.body.dataInicio,
            dataTermino: req.body.dataTermino,
            observacao: req.body.observacao,
            clienteId: req.body.clienteId
        }).then(function(){
            res.send("Post criado com sucesso!")
        }).catch(function(err){
            res.send("Houve um erro: "+err)
        })
    })

    app.post("/addRegistro", function(req, res){
        Associations.Registro.create({
            obraId: req.body.obraId,
            engenheiroId: req.body.engenheiroId,
            dataEntrada: req.body.dataEntrada,
            dataSaida: req.body.dataSaida
        }).then(function(){
            res.send("Post criado com sucesso!")
        }).catch(function(err){
            res.send("Houve um erro: "+err)
        })
    })

    
 app.listen(8081, function(){console.log("Servidor rodando!");});