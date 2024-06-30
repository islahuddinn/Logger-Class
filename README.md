# Logger Class

## Description

The Logger class is a versatile utility for logging messages within your TypeScript applications. It offers:

Multiple Logging Levels: Control the granularity of logging with levels like VERBOSE, INFO, WARNING, and ERROR.
Console Logging: Outputs logs directly to the console for convenient monitoring.
Extensible Design: The class is readily expandable, allowing you to incorporate additional logging targets such as file storage or remote servers in the future.
## Features

Detailed Logging Levels: Manage the verbosity of logged messages.
Console Output: Logs appear directly in the console.
Extensible Architecture: Effortlessly add new logging targets.
## Installation

1. Project Setup

Create a new Node.js project directory:
Bash
mkdir logger-project
cd logger-project
npm init -y
Use code with caution.
content_copy
2. TypeScript Installation

Install TypeScript and its dependencies:
Bash
npm install typescript ts-node @types/node --save-dev
Use code with caution.
content_copy
3. tsconfig.json Configuration

Create a tsconfig.json file to configure TypeScript settings (specific settings depend on your project).
4. Project Structure

Organize your project with necessary files in the src directory (structure depends on your preference).
## Usage

1. Define Log Levels

Utilize the LogLevel enum to specify logging levels:
TypeScript
enum LogLevel {
  VERBOSE = 0,
  INFO = 1,
  WARNING = 2,
  ERROR = 3,
}
Use code with caution.
content_copy
2. Implement Loggers

Utilize ConsoleLogger for console logging. FileLogger is currently a placeholder for future file logging functionalities.
TypeScript
// ConsoleLogger.ts
class ConsoleLogger implements ILogger {
  logLevel: LogLevel;

  constructor(logLevel: LogLevel) {
    this.logLevel = logLevel;
  }

  log(level: LogLevel, message: string): void {
    if (level >= this.logLevel) {
      console.log(`[${LogLevel[level]}] ${message}`);
    }
  }
}

// FileLogger.ts (Placeholder)
class FileLogger implements ILogger {
  // Implement file logging logic here
}
Use code with caution.
content_copy
3. Set Log Level

Adjust the log level to control the verbosity of logged messages:
TypeScript
const logger = new ConsoleLogger(LogLevel.INFO); // Example: Log INFO and above
Use code with caution.
content_copy
4. Log Messages

Employ methods like verbose, info, warning, and error to log messages:
TypeScript
logger.verbose("This is a verbose message.");
logger.info("This is an informational message.");
logger.warning("This is a warning message.");
logger.error("This is an error message.");
Use code with caution.
content_copy
## Extending the Logger

To incorporate new logging targets, implement the ILogger interface and define the necessary logic for your target. Here's a basic example (replace with your specific implementation):

TypeScript
interface ILogger {
  log(level: LogLevel, message: string): void;
}

// RemoteLogger.ts (Example)
class RemoteLogger implements ILogger {
  // Implement remote logging logic here
}
