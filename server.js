var express = require("express");
var app = express();
var useragent = require ("useragent");

function getIp(req) {
        return (req.headers['x-forwarded-for'] || '').split(',')[0] 
        || req.connection.remoteAddress;
}

app.get('/', function(req, res){
   var ip = getIp(req);
   var language = req.headers["accept-language"];
   var os = useragent.parse(req.headers['user-agent']).toString();
   var json = {"IP Adress" : ip, "User-Language" : language, "Operating System" : os};
   res.send(json);
});


app.listen(process.env.PORT || 8080, function(){
    console.log("Connected to port");
})