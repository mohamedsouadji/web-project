const database = require('/web_project/backend/models/Database.js')
var pgp = require('pg-promise')

function getAll(){
	return database.accessor.query('select * from characters')
	.then(function (data){
	  return data;
	})
	.catch(function (err){
	  throw err;
	})
}

function getcharacter(req){
	return database.accessor.query('select * from characters where id = $1',[req])
	.then(function (data){
      return data;
    })
    .catch(function (err){
      throw err;
    })
}

function addcharacter(req,res,next,position){
	return database.accessor.query('insert into characters (name,user_id,class,position) values($1,$2,$3,$4) returning *',[req,res,next,position])
	.then(function (data){
      return data;
    })
    .catch(function (err){
      throw err;
    })
}

function deletecharacter(req){
	return database.accessor.query('delete from characters where id = $1',[req])
	.then(function (data){
      return data;
    })
    .catch(function (err){
      throw err;
    })
}

function updatecharacter(req,res,next,position,id){
	return database.accessor.query('update characters set name = $1, user_id = $2, class = $3, position = $4 where id = $5 returning *',[req,res,next,position,id])
	.then(function (data){
      return data;
    })
    .catch(function (err){
      throw err;
    })
}

/* Fonction routes bonus */
function getAllCharactersByClass(req){
  return database.accessor.query('select * from characters where class = $1',[req])
  .then(function (data){
      return data;
    })
    .catch(function (err){
      throw err;
    })
}



exports.getAll = getAll;
exports.getcharacter = getcharacter;
exports.addcharacter = addcharacter;
exports.deletecharacter = deletecharacter;
exports.updatecharacter = updatecharacter;
exports.getAllCharactersByClass = getAllCharactersByClass;