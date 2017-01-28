var mysql = require("mysql");
function REST_ROUTER(router,connection) {
    var self = this;
    self.handleRoutes(router,connection);
}

REST_ROUTER.prototype.handleRoutes = function(router,connection) {
    router.get("/getEditions", function(req,res){
        var query = "SELECT * From edition";
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json(rows);
            }
        });
    });
    router.post("/createEdition", function(req,res){
        console.log('req', req);
        console.log('res', res);
        var query = "INSERT INTO edition(??,??) VALUES (?,?)";
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Edition created !"});
            }
        });
    });
    router.delete("/deleteEdition", function(req,res){
        console.log('req', req);
        console.log('res', res);
        var query = "DELETE * FROM edition WHERE Id = " + req;
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Edition created !"});
            }
        });
    });
    router.get("/getCards/:id", function(req,res){
        var editionId = req.params.id;
        var query = "SELECT * From card WHERE EditionId = " + editionId;
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json(rows);
            }
        });
    });
}

module.exports = REST_ROUTER;
