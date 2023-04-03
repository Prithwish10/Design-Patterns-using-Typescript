import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";
import { Square } from "./Square";

export class ShapeFactory {
    getShape(input: string): Shape | null {
        switch(input) {
            case "CIRCLE": return new Circle();
            case "SQUARE": return new Square();
            case "RECTANGLE": return new Rectangle();
            default: return null;
        }
    }
}