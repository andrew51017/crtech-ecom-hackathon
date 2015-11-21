module.exports = function(ApplicationUser) {

    ApplicationUser.getWord =  function(cb)
    {
        cb(null, "Hello!");
    };

    ApplicationUser.remoteMethod('getWord',
      {
        http: {path: '/word', verb: 'get'},
        returns: {arg: 'word', type: 'string'}
      }
    );



};
