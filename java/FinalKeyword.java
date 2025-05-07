public class FinalKeyword {

    public static void main(String[] args) {
        String fullName = "John Doe";
        final int MAX_SPEED = 120; // final variable
        System.out.println("Max Speed: " + MAX_SPEED);
        // MAX_SPEED = 150; // This will cause a compilation error
    }
}