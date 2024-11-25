import { LogLevel } from "./LogLevel";

export abstract class LogProcessor {
    nextLogProcessor: LogProcessor | null;

    constructor(logProcessor: LogProcessor | null) {
        this.nextLogProcessor = logProcessor;
    }

    log(logLevel: LogLevel, message: string): void {
        if(this.nextLogProcessor !== null) {
            this.nextLogProcessor.log(logLevel, message);
        }
    }
}