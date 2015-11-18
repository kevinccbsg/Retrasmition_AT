

exports.onRequest = function (req,res,next) {
	res.render('layout',{hola: 'Welcome to chat with jade'});
	next();
}

exports.onSecondRequest = function (req,res,next){
	res.render('index',{hola: 'hola other request'});
	next();
}