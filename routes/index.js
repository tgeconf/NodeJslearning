var express = require('express');
var router = express.Router();
var FileSys = require("custom_modules/fileSys");

/* GET home page. */
router.get('/', function(req, res, next) {
	var name = req.query.name;
	console.log("name: " + name);

	var customFS = new FileSys();
	customFS.csv("data/papers.csv", function(){
		console.log("Done reading data");
		console.log("input data length: " + customFS.dataContainer.length);	

		if(typeof(name) == "undefined"){
			res.render('index', { title: 'Express', listData : customFS.dataContainer });
		}else{
			res.send('{"selection" : "' + customFS.dataContainer[parseInt(name)].name + '"}');
			res.end();
		}	

		// res.render('index', { title: 'Express', listData : customFS.dataContainer });
	});

	// if(typeof(name) == "undefined"){
	// 	console.log("starting rendering...");

	// 	//read data file
	// 	var customFS = new FileSys();
	// 	customFS.csv("data/papers.csv", function(){
	// 		console.log("Done reading data");
	// 		console.log("input data length: " + customFS.dataContainer.length);	
	// 		res.render('index', { title: 'Express', listData : customFS.dataContainer });
	// 	});
	// }else{
	// 	console.log("got request");
	// 	var customFS = new FileSys();
	// 	customFS.csv("data/papers.csv", function(){
	// 		console.log("Done reading data");
	// 		console.log("input data length: " + customFS.dataContainer.length);	
	// 		var resultJson = '{"selection" : "' + customFS.dataContainer[parseInt(name)].name + '"}';
	// 		console.log(resultJson);
	// 		res.send('{"selection" : "aaaaa"}');
	// 		// res.render('index', { title: 'Express', listData : customFS.dataContainer });
	// 	});
		
	// 	res.end();
	// }
});


module.exports = router;
