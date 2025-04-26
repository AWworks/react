import java.util.Scanner;

public class Ternary {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a name: ");
        String name = scanner.nextLine();
        System.out.print("Enter a number: ");
        int age = scanner.nextInt();

        String result = (age >= 18) ? "Eligible" : "Ineligible";
        System.out.println("Name: " + name + ", Age: " + age + ", Status: " + result);
    }
}