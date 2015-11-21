var ds = require('../../server/datasources/db')('postgres');

console.log(db);

ds.automigrate(function () {
  ds.discoverModelProperties('CUSTOMER_TEST', function (err, props) {
    console.log(props);
  });
});
