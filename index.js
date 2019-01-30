/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.test02 = (req, res) => {
	res.status(200).send('Hello World!!!!!!!');
};