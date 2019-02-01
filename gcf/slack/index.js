/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.gcftest_slack = (req, res) => {	
	
	//メッセージ設定
	var data = JSON.stringify({"text": "github_commit"});

	//オプション情報設定
	var  options = {
		hostname: 'hooks.slack.com',
		port: 443,
		path: '/services/TFKQALTNC/BFLNH8YQ5/Wd1TxMYyFAcTx7MOcsAdDMRo',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Content-Length': Buffer.byteLength(data)
		}
	};

	//リクエスト
	var req = https.request(options, (res) =>{
		if(res.statusCode===200){
			console.log("OK:"+res.statusCode);
		}else{
			console.log("Status Error:"+res.statusCode);
		}
	});

	//そもそもなエラー時
	req.on('error',(e)=>{
		console.error(e);
	});

	//データ送信
	req.write(data);
	req.end();
};
