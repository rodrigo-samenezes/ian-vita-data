import { PrismaClient } from '@prisma/client'
var express = require('express');
var mysql = require('mysql');
var app = express();

const prisma = new PrismaClient()


// banco de dados
var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
});

app.use(express.json())


app.post('/equipamentos/:id/dados', async function (req: any, res: any) {
    const params = req.params;
    const dados = req.body;

    console.log('dados: ', dados);
    console.log('params: ', params);

    // mandar pro banco
    try {
        await prisma.equipmentState.create({
            data: {
                equipmentId: parseInt(params.id),
                valor1: dados.valor1,
                valor2: dados.valor2,
                valor3: dados.valor3,
            }
        })
    }
    catch (ex: any) {
        console.log('erro ao salvar no banco');
    }

    res.send('OK')
});

app.listen(3001, () => {
    console.log('servidor inciado na porta 3001 - agora');
});