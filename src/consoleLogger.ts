import { ILogger } from "./loggerInterface";
import { LogLevel } from "./logLevel";
import * as fs from "fs";

export class ConsoleLogger implements ILogger {
  private currentLogLevel: LogLevel = LogLevel.INFO;

  public setLogLevel(level: LogLevel): void {
    this.currentLogLevel = level;
  }

  private log(level: LogLevel, message: string): void {
    const levelOrder = [
      LogLevel.VERBOSE,
      LogLevel.INFO,
      LogLevel.WARNING,
      LogLevel.ERROR,
    ];
    if (levelOrder.indexOf(level) >= levelOrder.indexOf(this.currentLogLevel)) {
      console.log(`[${level}] ${message}`);
    }
  }

  public verbose(message: string): void {
    this.log(LogLevel.VERBOSE, message);
  }

  public info(message: string): void {
    this.log(LogLevel.INFO, message);
  }

  public warning(message: string): void {
    this.log(LogLevel.WARNING, message);
  }

  public error(message: string): void {
    this.log(LogLevel.ERROR, message);
  }
}
