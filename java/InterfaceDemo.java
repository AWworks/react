interface Animal {
    void makeSound();

    void eat();

}

class Dog implements Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof!");
    }

    @Override
    public void eat() {
        System.out.println("Dog is eating.");
    }
}

class Cat implements Animal {
    @Override
    public void makeSound() {
        System.out.println("Meow!");
    }

    @Override
    public void eat() {
        System.out.println("Cat is eating.");
    }

}

public class InterfaceDemo {

    public static void main(String[] args) {
        Animal dog = new Dog();
        Animal cat = new Cat();

        work(dog);
        work(cat);
    }

    static void work(Animal animal) {
        animal.makeSound();
        animal.eat();
    }
}
