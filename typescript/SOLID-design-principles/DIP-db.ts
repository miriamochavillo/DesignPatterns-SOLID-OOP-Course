//Does not Follow DIP:
// class MySQLDatabase {
//   save(data: string): void {}
// }

// class HighLevelModule {
//   constructor(private database: MySQLDatabase) {}
//   execute(data: string) {
//     this.database.save(data);
//   }
// }

//Follows DIP:
interface IDatabase {
  save(data: string): void;
}

class MySQLDatabase implements IDatabase {
  save(data: string): void {
    console.log(`${data} saved in MySQL Database`);
  }
}

class MongoDBDatabase implements IDatabase {
  save(data: string): void {
    console.log(`${data} saved in MongoDB Database`);
  }
}

//does not directly depend on MySQLDatabase or MongoDBDatabase
class HighLevelModule {
  constructor(private database: IDatabase) {}
  execute(data: string) {
    this.database.save(data);
  }
}

let mysqlDB: MySQLDatabase = new MySQLDatabase();
let mongoDB: MongoDBDatabase = new MongoDBDatabase();

let user: HighLevelModule = new HighLevelModule(mysqlDB);
user.execute("John");

let post: HighLevelModule = new HighLevelModule(mongoDB);
post.execute("New Post");
