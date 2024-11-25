import { LogLevel } from "./LogLevel";
import { LogProcessor } from "./LogProcessor";

export class DebugLogProcessor extends LogProcessor {
  constructor(nextLogProcessor: LogProcessor | null) {
    super(nextLogProcessor);
  }

  log(logLevel: LogLevel, message: string) {
    if (logLevel === LogLevel.DEBUG) {
      console.log(LogLevel.DEBUG, ": ", message);
    } else {
        super.log(logLevel, message)
    }
  }
}
