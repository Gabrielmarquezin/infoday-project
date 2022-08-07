const express = require('express')
const Router = express.Router()
const {data, db} = require('../database/dataUser.js')

Router.post('/usuarios',  async (req, res)=>{
    const nome = req.body.name
    data.nome = nome
    
    try {
        
        const ValidName = await db.where("nome", "==",nome).get()
        if(ValidName.empty){   
            db.add(data).then(()=>{ 
                res.statusCode = 201
                res.send("Document Criado")
                
                console.log("documento criado")
            })
            .catch((err)=>{
                console.log("Erro ao criar user: "+ err)
            })

        }else{
            res.statusCode = 200
            res.send("Usuario ja existe")
            console.log("DOCUMENTO JA EXISTE")
        }

    } catch( err ){
        console.log("Verifique o body da requisição: "+err)
    }

})


Router.get('/usuarios/:user', async (req, res)=>{
    const nome = req.params.user

    try{
        const search = await db.where("nome", "==",nome).get() 
        if(!search.empty){    
            search.forEach(doc => {
                res.statusCode = 200
                res.send(doc.data())
            })       
        }else{
            res.statusCode = 404
            res.send("Documento inxistente")
        }

    } catch (err){
        console.log("Usuario nao econtrado: "+ err)
    }

})


Router.put('/usuarios/update/:idUser', async (req, res)=>{
    const nome = req.params.idUser
    const NewData = req.body
 
    try {
         const searchUser = await db.where('nome','==',nome).get()
         searchUser.forEach((doc)=>{
             const id = doc.id
             db.doc(`${id}`).update(NewData)
         })
 
         if(!searchUser.empty){
             res.statusCode = 200
             res.send("Documento atualizado")

         }else{
            res.statusCode = 404
            res.send({error: "Documento nao existe"})
         }
         
    } catch (error) {
         console.log("Usuario nao atualizado "+error)
    }
 
 })


module.exports = Router