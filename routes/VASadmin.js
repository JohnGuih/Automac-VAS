    const express = require('express');
    const router = express.Router();
    const { Cliente, Engenheiro, Obra, Registro } = require("../models/index");
    const hb = require('handlebars');
    const { Sequelize, Op, Model, DataTypes, sequelize } = require('../db');
    const moment = require("moment");

    router.get('/', (req, res)=>{
        res.render("admin/index")
    })

    router.get('/Cliente', function(req, res){
        Cliente.findAll().then(function(clientes){
            res.render('admin/Cliente', {clientes: clientes})
        })
    })

    router.get("/Engenheiro", function(req, res){
        Engenheiro.findAll().then(function(engenheiros){
            //console.log(engenheiros)
            res.render('admin/Engenheiro', {engenheiros: engenheiros})
        })
    })

    router.get("/Obra", function(req, res){
        Obra.findAll().then(function(obras){
            hb.registerHelper('dateFormat', function (date, options) {
                const formatToUse = (arguments[1] && arguments[1].hash && arguments[1].hash.format) || "DD/MM/YYYY"
                return moment(date).format(formatToUse);
            });
            res.render('admin/Obra', {obras: obras})
        })
    })

    router.get('/Cliente/cad', function(req, res){
        res.render('admin/cadCliente')
    })

    router.get('/Engenheiro/cad', function(req, res){
        res.render('admin/cadEng')
    })
    
    router.get('/Obra/cad', function(req, res){
        Cliente.findAll({attributes: ['id', 'nome']}).then(function(clientes){
            res.render('admin/cadObra', {clientes: clientes})
        })
    })

    router.post('/Cliente/add', function(req, res){
        if(req.body.doctype == 'cpf'){
            Cliente.create({
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
            Cliente.create({
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
        (async () => {
            await res.redirect('/admin/Cliente');
        })();
    })

    router.post('/Engenheiro/add', function(req, res){
        Engenheiro.create({
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
        });
        (async () => {
            await res.redirect('/admin/Engenheiro');
        })();
    })

    router.post('/Obra/add', function(req, res){
        let INFRA;
        let GARAGEM;
        if(req.body.infra == "true"){ INFRA = "true" } else { INFRA = "false" }
        if(req.body.garagem == "true"){ GARAGEM = "true" } else { GARAGEM = "false" }
        Obra.create({
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
        });
        (async () => {
            await res.redirect('/admin/Obra');
        })();
    })

    router.get('/delete/:table/:id', function(req, res){
        switch(req.params.table){
            case "Cliente":
                Cliente.destroy({
                    where: {
                      id: {
                        [Op.eq]: [req.params.id]
                      }
                    }
                });
                (async () => {
                    await res.redirect('/admin/Cliente');
                })();
            case "Engenheiro":
                Engenheiro.destroy({
                    where: {
                      id: {
                        [Op.eq]: [req.params.id]
                      }
                    }
                });
                (async () => {
                    await res.redirect('/admin/Engenheiro');
                })();
            case "Obra":
                Obra.destroy({
                    where: {
                      id: {
                        [Op.eq]: [req.params.id]
                      }
                    }
                });
                (async () => {
                    await res.redirect('/admin/Obra');
                })();
        }
    })
 module.exports = router