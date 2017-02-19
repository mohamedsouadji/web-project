var express = require('express')
var router = express.Router()
var charactersdao = require('../models/charactersdao.js')

/* GET characters listing. */
router.get('/', function(req, res, next) {
  charactersdao.getAll()
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

router.get('/:id', function(req, res, next) {
  charactersdao.getcharacter(req.params.id)
  .then((resultat)=>{
	res.status(200).json({
		status: "success",
		character:{
		   	id: resultat[0].id,
			name: resultat[0].name,
			user_id: resultat[0].user_id,
			class: resultat[0].class,
			position: resultat[0].position
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
	var name = "Trump";
	var user_id = "1";
	var classe = "thief";
	var x = "48.792726,";
	var y = "2.359249";
	var position = x+y;

 	charactersdao.addcharacter(name,user_id,classe,position)
  	.then((resultat)=>{
		res.status(200).json({
			status: "success",
			message: "Inserted one character",
			character:{
			   	id: resultat[0].id,
				name: resultat[0].name,
				user_id: resultat[0].user_id,
				class: resultat[0].class,
				position: resultat[0].position
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
  charactersdao.deletecharacter(req.params.id)
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
	var name = "GedeonUpdated";
	var user_id = "1";
	var classe = "warrior";
	var x = "48.722726,";
	var y = "2.339249";
	var position = x+y;

 	charactersdao.updatecharacter(name,user_id,classe,position,req.params.id)
  	.then((resultat)=>{
		res.status(200).json({
			status: "success",
			message: "modified a character",
			character:{
			   	id: resultat[0].id,
				name: resultat[0].name,
				user_id: resultat[0].user_id,
				class: resultat[0].class,
				position: resultat[0].position
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

/* Routes bonus */
router.get('/all/:class', function(req, res, next) {
  charactersdao.getAllCharactersByClass(req.params.class)
  .then((resultat)=>{
  	res.json({
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