var express = require('express')
var router = express.Router()
var alliancesdao = require('../models/alliancesdao.js')

/* GET alliances listing. */
router.get('/', function(req, res, next) {
  alliancesdao.getAll()
  .then((resultat)=>{
  	res.status(200).json({
  		status: "success",
  		alliances: resultat
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
  alliancesdao.getalliance(req.params.id)
  .then((resultat)=>{
	res.status(200).json({
		status: "success",
		alliance:{
		   	id: resultat[0].id,
			name: resultat[0].name
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
	var name = "Les fous dingues";

 	alliancesdao.addalliance(name)
  	.then((resultat)=>{
		res.status(200).json({
			status: "success",
			message: "Inserted one alliance",
			alliance:{
			   	id: resultat[0].id,
				name: resultat[0].name,
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
  alliancesdao.deletealliance(req.params.id)
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
	var name = "Nouveau nom";

 	alliancesdao.updatealliance(name,req.params.id)
  	.then((resultat)=>{
		res.status(200).json({
			status: "success",
			message: "modified a alliance",
			alliance:{
			   	id: resultat[0].id,
				name: resultat[0].name,
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
router.get('/:id/users', function(req, res, next) {
  alliancesdao.getUsersFromAlliance(req.params.id)
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

router.get('/:id/characters', function(req, res, next) {
  alliancesdao.getCharactersFromAlliance(req.params.id)
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

router.get('/:id/characters/:class', function(req, res, next) {
  alliancesdao.getCharactersFromAllianceByClass(req.params.id,req.params.class)
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