const express = require('express')
const cors = require ('cors')
require ('dotenv').config();
const sequelize = require('./back/conexion');
const { Router } = require('express');
const productViews = require('./back/views/productViews');
const homeViews = require('./back/views/homeView')
const loginView = require('./back/views/loginView');



const app = express();
app.use(express.json())
app.use(cors())

app.use(express.static(__dirname+ '/public'))
app.set('view engine', 'ejs')
app.set('views',__dirname+'/views')

async function serverStart(){
    try{
        await sequelize.authenticate();
        console.log('Conección estabilizada correctamente');
        app.listen(process.env.PORT, function () {
            console.log(`Sistema iniciado en htt://${process.env.HOST}:${process.env.PORT}`);
        });
    } catch(e){
        console.error(e.message);
    }
}

serverStart();

//iniciamos las vistas

productViews(app)
homeViews(app)
loginView(app)