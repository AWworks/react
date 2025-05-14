import java.util.Optional;

public class OptionalDemo {
    public static void main(String[] args) {
       Optional<Cat> optionalCat = getInfo("Browny");
        if (optionalCat.isPresent()) {
            Cat cat = optionalCat.get();
            cat.printInfo();
        } else {
            System.out.println("No cat found");
        }        
    }

    public static Optional<Cat> getInfo(String name) {
        Cat cat = new Cat("Browny", 2);
        return Optional.ofNullable(cat);
    }
}

class Cat {
    String name;
    int age;
    Cat(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void printInfo() {
        System.out.println("Cat name: " + name);
        System.out.println("Cat age: " + age);
    }
}