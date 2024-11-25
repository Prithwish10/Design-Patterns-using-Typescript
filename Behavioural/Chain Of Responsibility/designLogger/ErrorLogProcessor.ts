import { LogLevel } from "./LogLevel";
import { LogProcessor } from "./LogProcessor";

export class ErrorLogProcessor extends LogProcessor {
  constructor(nextLogProcessor: LogProcessor | null) {
    super(nextLogProcessor);
  }

  log(logLevel: LogLevel, message: string) {
    if (logLevel === LogLevel.ERROR) {
      console.log(LogLevel.ERROR, ": ", message);
    } else {
      super.log(logLevel, message);
    }
  }
}
