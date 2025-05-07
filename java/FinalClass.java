public class FinalClass {

}

final class Calculator {
    // This class cannot be extended because it is declared as final
    public int add(int a, int b) {
        return a + b;
    }
}

// class AdvancedCalculator extends Calculator {
// // This class cannot extend Calculator because it is final
// public int subtract(int a, int b) {
// return a - b;
// }

// }