import { LogLevel } from "./logLevel";

export interface ILogger {
  setLogLevel(level: LogLevel): void;
  verbose(message: string): void;
  info(message: string): void;
  warning(message: string): void;
  error(message: string): void;
}
