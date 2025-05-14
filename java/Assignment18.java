import java.util.Scanner;

@FunctionalInterface
 interface SquareCalculator {
int calculateSquare(int a);
    
}

@FunctionalInterface
 interface Factorial {
int calculate(int a);

}
public class Assignment18 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num1=0;
        boolean validInput = false;
        
        while (!validInput) {
            try{

                System.out.println("Enter a number");
                num1 = Integer.parseInt(scanner.nextLine());
                validInput = true;
            } catch (NumberFormatException e){
                    System.out.println("Eror: Invalid Input. Please enter an integer");
            }
            
        }

        SquareCalculator square = (a) -> (a*a);
        System.out.println("Square of number: "+ square.calculateSquare(num1));          
        };

    }

