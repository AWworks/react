enum OrderStatus {
    PLACED,
    SHIPPED,
    OUTFORDELIVERY,
    DELIVERED,
    CANCELED
}

class Order {
    private String orderId;
    private String customerName;
    private OrderStatus status;
    private double amount;

    public Order(String orderId, String customerName, OrderStatus status, double amount) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.status = status;
        this.amount = amount;
    }

    public void displayOrder() {
        System.out.println("Order ID: " + orderId);
        System.out.println("Customer Name: " + customerName);
        System.out.println("Order Status: " + status);
        System.out.println("Order Amount: " + amount);
    }

    public void updateStatus(OrderStatus newStatus) {
        this.status = newStatus;
        System.out.println("Order status updated to: " + status);
    }

}

public class EnumDemo {
    public static void main(String[] args) {
        // Create an instance of the Order class
        Order order = new Order("ORD12345", "John Doe", OrderStatus.PLACED, 1500.00);

        // Display the order details
        order.displayOrder();

        // Update the order status
        order.updateStatus(OrderStatus.SHIPPED);
        order.displayOrder();

        // Update the order status
        order.updateStatus(OrderStatus.OUTFORDELIVERY);
        order.displayOrder();

        // Update the order status
        order.updateStatus(OrderStatus.DELIVERED);
        order.displayOrder();
    }
}