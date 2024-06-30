import { ConsoleLogger } from "./consoleLogger";
import { FileLogger } from "./fileLogger";
import { LogLevel } from "./logLevel";
import { ILogger } from "./loggerInterface";

const consoleLogger: ILogger = new ConsoleLogger();
consoleLogger.setLogLevel(LogLevel.VERBOSE);

consoleLogger.verbose("This is a verbose message");
consoleLogger.info("This is an info message");
consoleLogger.warning("This is a warning message");
consoleLogger.error("This is an error message");

const fileLogger: ILogger = new FileLogger();
fileLogger.setLogLevel(LogLevel.INFO);

fileLogger.verbose("This is a verbose message");
fileLogger.info("This is an info message");
fileLogger.warning("This is a warning message");
fileLogger.error("This is an error message");
