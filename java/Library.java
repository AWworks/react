public class Library {
    public static void main(String[] args) {
        LibraryItem book = new Book("The Great Gatsby", 1925, "F. Scott Fitzgerald");
        LibraryItem magazine = new Magazine("National Geographic", 2023, "March 2023");

        book.displayInfo();
        System.out.println();
        magazine.displayInfo();
    }
}

class LibraryItem {

    String title;
    int yearPublished;

    LibraryItem(String title, int yearPublished) {
        this.title = title;
        this.yearPublished = yearPublished;
    }

    void displayInfo() {
        System.out.println("Title: " + title);
        System.out.println("Year Published: " + yearPublished);
    }

}

class Book extends LibraryItem {
    String author;

    Book(String title, int yearPublished, String author) {
        super(title, yearPublished);
        this.author = author;
    }

    void displayInfo() {
        super.displayInfo();
        System.out.println("Author: " + author);
    }
}

class Magazine extends LibraryItem {
    String issueNumber;

    Magazine(String title, int yearPublished, String issueNumber) {
        super(title, yearPublished);
        this.issueNumber = issueNumber;
    }

    void displayInfo() {
        super.displayInfo();
        System.out.println("Issue Number: " + issueNumber);
    }
}