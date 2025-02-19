class Logger {
  private static instance: Logger;
  private constructor() {}
  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }
  public log(message: string): void {
    const timestamp = new Date();
    console.log(`[${timestamp.toLocaleString()}]: ${message}`);
  }
}

// let Logger1 = Logger.getInstance();
// Logger1.log("First log");
// let Logger2 = Logger.getInstance();
// Logger2.log("Second log");

//Tight coupling
class Application {
  constructor(private logger: Logger) {}
  run(): void {
    this.logger.log("Application is running");
    this.logger.log("Application is shutting down");
  }
}
let logger = Logger.getInstance();
let app = new Application(logger);
app.run();
