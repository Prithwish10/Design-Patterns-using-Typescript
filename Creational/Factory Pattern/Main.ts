import { Shape } from "./Shape";
import { ShapeFactory } from "./ShapeFactory";

class Main {
    public static main(): void {
        const shapeFactory: ShapeFactory = new ShapeFactory();
        const shape: Shape | null = shapeFactory.getShape("CIRCLE");
        shape?.draw();
    }
}

Main.main();