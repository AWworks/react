package org.library;

public class LibraryItem {
    private String title;
    private int yearPublished;

    public LibraryItem(String title, int yearPublished) {
        this.title = title;
        this.yearPublished = yearPublished;
    }

    public void displayInfo () {
        System.out.println("Title: " + title);
        System.out.println("Year of Publication: " + yearPublished);
    }

}
