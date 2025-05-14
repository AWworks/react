@FunctionalInterface
 interface IGreeting {

    void greet();
}

class MyGreeting implements IGreeting{
    @Override
    public void greet(){
        System.out.println("Hello from Mygreeting");
    }
}

public class LambdaDemo {
    public static void main(String[] args) {
        MyGreeting myGreeting = new MyGreeting();
        myGreeting.greet();

        //Anonymous class 
        //new Greeting() => creating an object of an anonymous class htat implements Greeting interface
        IGreeting greeting = new IGreeting() {
            @Override
            public void greet(){
                System.out.println("Greeting by Anonymous class");
            }
        };
        greeting.greet();
    }
}
