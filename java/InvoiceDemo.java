import com.smartech.finance.appx.sales.Invoice;

public class InvoiceDemo {
    public static void main(String[] args) {
        // Create an instance of the Invoice class
        Invoice invoice = new Invoice("INV12345", "AW Supplies", "2023-10-01", 3500.00, 1500.00);

        // Display the invoice details
        invoice.displayInvoice();
        System.out.println("Balance Due: " + invoice.calculateBalance());
    }
}
