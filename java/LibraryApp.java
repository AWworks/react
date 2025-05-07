import org.library.book.Book;
import org.library.LibraryItem;
import org.library.Magazine.Magazine;

public class LibraryApp {
    public static void main(String[] args) {
        org.library.LibraryItem book = new Book("The Great Gatsby", 1925, "F. Scott Fitzgerald", "Fiction");
        // LibraryItem magazine = new Magazine("National Geographic", 2023, "March
        // 2023", "Science");

        book.displayInfo();
        // magazine.displayInfo();
    }
}
