const database = require('/web_project/backend/models/Database.js')
var pgp = require('pg-promise')

function getAll(){
	return database.accessor.query('select * from alliances')
	.then(function (data){
	  return data;
	})
	.catch(function (err){
	  throw err;
	})
}

function getalliance(req){
	return database.accessor.query('select * from alliances where id = $1',[req])
	.then(function (data){
      return data;
    })
    .catch(function (err){
      throw err;
    })
}

function addalliance(req,res,next){
	return database.accessor.query('insert into alliances (name) values($1) returning *',[req])
	.then(function (data){
      return data;
    })
    .catch(function (err){
      throw err;
    })
}

function deletealliance(req){
	return database.accessor.query('delete from alliances where id = $1',[req])
	.then(function (data){
      return data;
    })
    .catch(function (err){
      throw err;
    })
}

function updatealliance(req,res){
	return database.accessor.query('update alliances set name = $1 where id = $2 returning *',[req,res])
	.then(function (data){
      return data;
    })
    .catch(function (err){
      throw err;
    })
}

/*Functions routes speciales*/
function getUsersFromAlliance(req){
  return database.accessor.query('select * from users where alliance_id = $1',[req])
  .then(function (data){
      return data;
    })
    .catch(function (err){
      throw err;
    })
}

function getCharactersFromAlliance(req){
  return database.accessor.query('select characters.id,characters.name,user_id,class,position from characters,users where alliance_id =$1 and characters.user_id=users.id order by users.id',[req])
  .then(function (data){
      return data;
    })
    .catch(function (err){
      throw err;
    })
}

function getCharactersFromAllianceByClass(req,res){
  return database.accessor.query('select characters.id, characters.name,characters.user_id,class,position from users,alliances,characters where users.id=characters.user_id and users.alliance_id = alliances.id and alliances.id = $1 and class = $2',[req,res])
  .then(function (data){
      return data;
    })
    .catch(function (err){
      throw err;
    })
}


exports.getAll = getAll;
exports.getalliance = getalliance;
exports.addalliance = addalliance;
exports.deletealliance = deletealliance;
exports.updatealliance = updatealliance;
exports.getUsersFromAlliance = getUsersFromAlliance;
exports.getCharactersFromAlliance = getCharactersFromAlliance;
exports.getCharactersFromAllianceByClass = getCharactersFromAllianceByClass;