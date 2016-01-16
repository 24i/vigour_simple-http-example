#!/bin/node
//----------------------------------------------------------------
var mHTTP;
try { mHTTP = require("http"); }
catch (e){ console.log("ERROR loading required: modules\n" + e); }
//----------------------------------------------------------------
var IP="127.0.0.1" ; var PORT="63336";
var http = mHTTP.createServer(); 
var args = process.argv; 
var iCPos = args.indexOf("--config");
var iPPos = args.indexOf("--port");
var iIDPos = args.indexOf("--id");

var sMSG = "\nARGS === "+args+"\n";
var oConfig, sID;

if (-1 !== iPPos)
{
	PORT = args[iPPos+1];
	sMSG+="\n PORT-TYPE === "+typeof(PORT)+"\n PORT === "+PORT;
}

if (-1 !== iIDPos)
{
	sID = args[iIDPos+1];
	sMSG+="\n ID-TYPE === "+typeof(sID)+"\n ID === "+sID;
}

if (-1 !== iCPos)
{
	oConfig = JSON.parse(args[iCPos+1]);
	sMSG+="\n CTYPE === "+typeof(oConfig)+"\n CONFIG === "+JSON.stringify(oConfig, false, " ");
}

http.on('request', function(req, res) {	res.writeHead(200); res.end(); return ; });

http.on("error", function(sError){ console.log("COULD NOT BIND or / Bad REQ", "ERROR: on adapator or call issue with socket"); });
http.listen(PORT, IP);
console.log(sMSG, "\nServer running at http://%s:%s", IP, PORT);

function http_close()
{
	console.log("EXIT / Shutdown request.\ncul8r!\n");
	http.close();
	process.exit();
}
