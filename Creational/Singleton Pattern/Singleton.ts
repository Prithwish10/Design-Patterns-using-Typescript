export class SingleTon {
  private static instance: SingleTon;

  private constructor() {}

  public static getInstance() {
    if(SingleTon.instance == null) {
        SingleTon.instance = new SingleTon();
    }

    return SingleTon.instance;
  }
}
