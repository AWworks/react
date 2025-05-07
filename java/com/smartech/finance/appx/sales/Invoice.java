package com.smartech.finance.appx.sales;

public class Invoice {
    public String invoiceNumber;
    public String customerName;
    public String invoiceDate;
    public double totalAmount;
    public double paymentReceived;

    public Invoice(String invoiceNumber, String customerName, String invoiceDate, double totalAmount,
            double paymentReceived) {
        this.invoiceNumber = invoiceNumber;
        this.customerName = customerName;
        this.invoiceDate = invoiceDate;
        this.totalAmount = totalAmount;
        this.paymentReceived = paymentReceived;
    }

    public double calculateBalance() {
        return totalAmount - paymentReceived;
    }

    public void displayInvoice() {
        System.out.println("****** Invoice Details ******");
        System.out.println("Invoice Number: " + invoiceNumber);
        System.out.println("Customer Name: " + customerName);
        System.out.println("Invoice Date: " + invoiceDate);
        System.out.println("Total Amount: " + totalAmount);
        System.out.println("Payment Received: " + paymentReceived);
    }
}
