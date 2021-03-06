var server_function = require('./server.js');

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.test02 = (req, res) => {
	
	var method = req.method;
	var rute = req.url;
	var message = "";
	
	if(method == 'GET') {
		switch(rute) {
			case '/getById':
			message = server_function.getById();
			console.log('/getById');
			break;

			case '/getList':
			message = "getList method";
			console.log('/getList');
			break;
				
			default:
			message = "default method";
			break;
		}
	} else if(method == 'POST') {
		switch(rute) {
			case '/create':
			message = "create method";
			break;

			case '/update':
			message = "update method";
			break;

			case '/delete':
			message = "delete method";
			break;

			default:
			message = "default method";
			break;
		}
	}
		
	res.status(200).send(message);
};
