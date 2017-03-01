var express = require('express'),
	app = express(),
	logger = require('morgan');


app.use(logger('combined'));

app.get('/random/:min/:max', function(req, res){
	var min = parseInt(req.params.min);
	var max = parseInt(req.params.max);
	if(isNaN(min) || isNaN(max)) {
		res.status(400);
		res.json({error: 'Bad parameter!'})
		return;
	}
	var result = Math.round(Math.random()*(max-min) + min);
	res.status(200).json({result: result});
})

app.listen(3000, function(){
	console.log('Started server on port: 3000')
})