const database = require('/web_project/backend/models/Database.js')
var pgp = require('pg-promise')

function getAll(){
	return database.accessor.query('select * from users')
	.then(function (data){
	  return data;
	})
	.catch(function (err){
	  throw err;
	})
}

function getUser(req){
	return database.accessor.query('select * from users where id = $1',[req])
	.then(function (data){
      return data;
    })
    .catch(function (err){
      throw err;
    })
}

function addUser(req,res,next){
	return database.accessor.query('insert into users (name,email,alliance_id) values($1,$2,$3) returning *',[req,res,next])
	.then(function (data){
      return data;
  })
  .catch(function (err){
      throw err;
  })
}

function deleteUser(req){
	return database.accessor.query('delete from users where id = $1',[req])
	.then(function (data){
      return data;
    })
    .catch(function (err){
      throw err;
    })
}

function updateUser(req,res,next,id){
	return database.accessor.query('update users set name = $1, email = $2, alliance_id = $3 where id = $4 returning *',[req,res,next,id])
	.then(function (data){
      return data;
    })
    .catch(function (err){
      throw err;
    })
}

/*Fonction routes bonus*/
function getCharactersByUser(req){
  return database.accessor.query('select characters.id, characters.name, characters.user_id,class,position from users,characters where users.id = $1 and users.id = characters.user_id;',[req])
  .then(function (data){
      return data;
    })
    .catch(function (err){
      throw err;
    })
}

exports.getAll = getAll;
exports.getUser = getUser;
exports.addUser = addUser;
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;
exports.getCharactersByUser = getCharactersByUser;