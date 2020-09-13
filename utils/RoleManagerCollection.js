class RoleManagerCollection extends Map {
   constructor(client) {
      super();
      client.once("ready", () => {
         client.guilds.cache.forEach((guild) => {
            guild.roles.cache.filter(x => x.id !== guild.id).forEach((role) => {
               role.guild = guild;
               this.set(role.id, role);
            });
         });
      });
   }

   get(key) {
      return this.find((role) => role.id === key);
   }

   find(func) {
      for (const item of super.values()) {
         if (func(item)) {
            return item;
         }
      }
      return undefined;
   }

   filter(func) {
      const arr = [];
      for (const item of super.values()) {
         if (func(item)) {
            arr.push(item);
         }
      }
      return arr;
   }

   map(func) {
        const arr = [];
        for(const item of super.values()) {
            arr.push(func(item));
        }
        return arr;
    }

   get size() {
      return super.size;
   }

}

module.exports = RoleManagerCollection;