public class FinalMethod {

}

class Vehicle {

    public final void showType() {
        System.out.println("this is a vehicle.");
    }
}

class Car extends Vehicle {

    // This method cannot be overridden because it is final in the parent class
    // public void showType() {
    // System.out.println("this is a car.");
    // }
}