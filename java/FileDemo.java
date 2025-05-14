import java.io.*;

public class FileDemo {

    static String FILE_NAME = "test-file.txt";
    public static void main(String[] args) {
        writeToFile();
        readFromFile();
    }
    private static void readFromFile() {
        String fileContent ;
       try{
        FileReader fileReader = new FileReader(FILE_NAME);
        BufferedReader bufferedReader = new BufferedReader(fileReader);

        while ((fileContent = bufferedReader.readLine()) != null) {
            System.out.println(fileContent);
        }
        bufferedReader.close();
       }catch(IOException e) {
        System.out.println("error: " + e.getMessage());
       }
    }
    private static void writeToFile() {
        
        try {
            FileWriter fileWriter = new FileWriter(FILE_NAME);
            BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);
            bufferedWriter.write("Test line written by JAva code - MAy 11 2025");
            bufferedWriter.newLine();
            bufferedWriter.write("Another line");
            bufferedWriter.close();

        } catch (IOException e) {
            System.out.println("Error occurred: " + e.getMessage());
        }
    }
}