public class EncapsulationDemo {

}

class Person {
    private String name;
    private int age;

    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Getter for name
    public String getName() {
        return name;
    }

    // Setter for name
    public void setName(String name) {
        if (isNameValid(name)) {
            this.name = name;
        } else {
            System.out.println("Invalid name. Name should not be empty.");
        }
    }

    private boolean isNameValid(String name2) {

        return name2 != null && !name2.trim().isEmpty();
    }

    // Getter for age
    public int getAge() {
        return age;
    }

    // Method to check eligibility
    public String checkEligibility() {
        return (age >= 18) ? "Eligible" : "Ineligible";
    }
}