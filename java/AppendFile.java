import java.io.FileWriter;

public class AppendFile {
    public static void main(String[] args) {

        final String FILE_NAME = "test-file.txt";
        try {
            FileWriter fileWriter = new FileWriter(FILE_NAME, true);
            fileWriter.write("\n This is a appended line.");
            fileWriter.close();
            System.out.println("Successfully appended to the file");

        } catch (Exception e) {
            System.out.println("An Error Occurred: " + e.getMessage());
        }
    }
}
