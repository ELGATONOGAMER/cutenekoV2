  
class RoleManager {
   constructor(client) {

      this.client = client;

      this.cache = new (require("./RoleManagerCollection"))(client);

   }

}

module.exports = RoleManager;