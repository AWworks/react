import java.io.*;

public class DeleteFileEx {
    public static void main(String[] args) {
        File file = new File("test-file.txt");
        if (file.delete()) {
            System.out.println("Deleted the file: " + file.getName());
        } else {
            System.out.println("Failed to delete file: " + file.getName());
        }
    }
}
