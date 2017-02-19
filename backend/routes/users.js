var express = require('express')
var router = express.Router()
var usersdao = require('../models/usersdao.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
	usersdao.getAll()
	.then((resultat)=>{
		res.status(200).json({
			status: "success",
			users: resultat
		})
	})
	.catch((err)=>{
		res.status(500).json({
			status: "Error",
			message: err
		})
  	})
})

router.get('/:id', function(req, res, next) {
  usersdao.getUser(req.params.id)
  .then((resultat)=>{
	res.status(200).json({
		status: "success",
		user:{
		   	id: resultat[0].id,
			name: resultat[0].name,
			email: resultat[0].email,
			alliance_id: resultat[0].alliance_id
		}
	})
  })
  .catch((err)=>{
		res.status(500).json({
			status: "Error",
			message: err
		})
  	})
})

router.post('/', function(req, res, next) {
	var name = "obama" ; //obama
	var email= "obaba@whitehouse.usa"; //obaba@withehouse.use
	var alliance_id = null ; //null

 	usersdao.addUser(name,email,alliance_id)
  	.then((resultat)=>{
		res.status(200).json({
			status: "success",
			message: "Inserted one user",
			user:{
			   	id: resultat[0].id,
				name: resultat[0].name,
				email: resultat[0].email,
				alliance_id: resultat[0].alliance_id
			}
		})
  	})
  	.catch((err)=>{
		res.status(500).json({
			status: "Error",
			message: err
		})
  	})
})

router.delete('/:id', function(req, res, next) {
  usersdao.deleteUser(req.params.id)
  .then((resultat)=>{
	res.status(200).json({
		status: "success",
		message: []
	})
  })
  .catch((err)=>{
		res.status(500).json({
			status: "Error",
			message: err
		})
  	})

})

router.put('/:id', function(req, res, next) {
	var name = "PierrickBis";
	var email = "pierrickBis@lonestone.studio";
	var alliance_id = "2";

 	usersdao.updateUser(name,email,alliance_id,req.params.id)
  	.then((resultat)=>{
		res.status(200).json({
			status: "success",
			message: "modified a user",
			user:{
			   	id: resultat[0].id,
				name: resultat[0].name,
				email: resultat[0].email,
				alliance_id: resultat[0].alliance_id
			}
		})
  	})
  	.catch((err)=>{
		res.status(500).json({
			status: "Error",
			message: err
		})
  	})
})

/*Routes bonus*/
router.get('/:id/characters', function(req, res, next) {
  usersdao.getCharactersByUser(req.params.id)
  .then((resultat)=>{
	res.status(200).json({
		status: "success",
		characters: resultat
	})
  })
  .catch((err)=>{
		res.status(500).json({
			status: "Error",
			message: err
		})
  	})
})

module.exports = router;
