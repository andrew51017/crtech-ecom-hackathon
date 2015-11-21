module.exports = function(ApplicationUser) {
  var getWord = "getWord";
  ApplicationUser[getWord] =  function(callback) {
    callback(null, "Hello!");
  };

  ApplicationUser.remoteMethod(getWord, {
      http: {path: '/word', verb: 'get'},
      returns: {arg: 'word', type: 'string'}
    }
  );
};
