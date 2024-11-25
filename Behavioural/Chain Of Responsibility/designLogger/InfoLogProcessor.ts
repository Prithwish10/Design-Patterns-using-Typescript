import { LogLevel } from "./LogLevel";
import { LogProcessor } from "./LogProcessor";

export class InfoLogProcessor extends LogProcessor {
    constructor(nextLogProcessor: LogProcessor | null) {
        super(nextLogProcessor);
    }

    log(logLevel: LogLevel, message: string) {
        if (logLevel === LogLevel.INFO) {
          console.log(LogLevel.INFO, ": ", message);
        } else {
          super.log(logLevel, message);
        }
    }
}