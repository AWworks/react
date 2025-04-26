import datetime
import os
from menu_data import menu
from db import save_order_to_db

TAX_RATE = 0.1

def get_price(item_name):
    for category in menu.values():
        if item_name in category:
            return category[item_name]
    return 0

def calculate_totals(order):
    subtotal = sum(get_price(i) * q for i, q in order.items())
    tax = subtotal * TAX_RATE
    total = subtotal + tax
    return subtotal, tax, total

def generate_receipt_text(order):
    receipt = ""
    for item, qty in order.items():
        price = get_price(item)
        receipt += f"{item} x{qty} = ₹{price * qty:.2f}\n"
    subtotal, tax, total = calculate_totals(order)
    receipt += f"\nSubtotal: ₹{subtotal:.2f}\n"
    receipt += f"Tax (10%): ₹{tax:.2f}\n"
    receipt += f"Total: ₹{total:.2f}\n"
    return receipt


def save_receipt_to_file(order):
    # Create the receipts directory if it doesn't exist
    if not os.path.exists("receipts"):
        os.makedirs("receipts")
    
    # Generate a timestamp for the filename
    now = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    filename = f"receipts/receipt_{now}.txt"

    # Open the file with UTF-8 encoding to handle rupee symbol
    with open(filename, "w", encoding="utf-8") as f:
        # Write the receipt text into the file
        f.write(generate_receipt_text(order))
    
    # Prepare order details with prices and save them to the database
    order_with_prices = {item: (qty, get_price(item)) for item, qty in order.items()}
    save_order_to_db(order_with_prices)
