/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.gcftest_slack = (req, res) => {		
	res.status(200).send('gcftest_sclak!!');
};
