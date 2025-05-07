package org.library.Magazine;

import org.library.LibraryItem;

public class Magazine extends LibraryItem {
    private String issueNumber;
    private String genre;

    public Magazine(String title, int yearPublished, String issueNumber, String genre) {
        super(title, yearPublished);
        this.issueNumber = issueNumber;
        this.genre = genre;
    }

    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Issue Number: " + issueNumber);
        System.out.println("Genre: " + genre);
    }

}
