package org.library.book;
import org.library.LibraryItem;

public class Book extends LibraryItem {
    private String author;
    private String genre;

    public Book(String title, int yearPublished, String author, String genre) {
        super(title, yearPublished);
        this.author = author;
        this.genre = genre;
    }

    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Author: " + author);
        System.out.println("Genre: " + genre);
    }

}
