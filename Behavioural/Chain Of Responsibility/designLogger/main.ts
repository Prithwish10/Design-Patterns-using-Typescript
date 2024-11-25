import { DebugLogProcessor } from "./DebugLogProcessor";
import { ErrorLogProcessor } from "./ErrorLogProcessor";
import { InfoLogProcessor } from "./InfoLogProcessor";
import { LogLevel } from "./LogLevel";
import { LogProcessor } from "./LogProcessor";

function main() {
    const loggerObject: LogProcessor = new InfoLogProcessor(new DebugLogProcessor(new ErrorLogProcessor(null)));

    loggerObject.log(LogLevel.ERROR, 'Exception occured.');
    loggerObject.log(LogLevel.DEBUG, 'Debug message.');
    loggerObject.log(LogLevel.SILLY, 'This is a silly message.');
}

main();