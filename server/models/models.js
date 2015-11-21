var srv = require("../server");
var ds = server.dataSources.db;

var applicationUser = require('ApplicationUser');
ds.createModel(applicationUser.name, applicationUser.properties, applicationUser.options);

ds.automigrate();
