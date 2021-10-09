require("dotenv").config();
var axios = require('axios');

async function isTokenValid(token) {
  if (token) {
    const bearerToken = token.split(" ");
    const result = new Promise((resolve, reject) => {
      var config = {
        method: 'get',
        url: 'http://localhost:8080/project/user/validateToken',
        headers: { 
          'Authorization': bearerToken[1]
        }
      };
      axios(config).then(function (response) {
        if(response.status == 200){
          resolve(response.data);
        }else{
          resolve({ error: 'unauthorized' })
        }
      }).catch(function (error) {
        resolve({ error: 'unauthorized' })
      });
    });
    return result;
  }
  return { error: "No token provided" };
}

module.exports = isTokenValid;
