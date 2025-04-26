import tkinter as tk
from tkinter import messagebox
import datetime

# Constants
TAX_RATE = 0.10  # 10% sales tax

# Menu
menu = {
    "Burger": 5.99,
    "Pizza": 8.99,
    "Pasta": 7.99,
    "Salad": 4.99,
    "Soda": 1.99
}

order = {}  # Store item: quantity

# Welcome
print("Welcome to My Restaurant!")
print("Here's the menu:")
for item, price in menu.items():
    print(f"{item}: ${price:.2f}")

# Take Order (with quantity)
order = {}  # Store item: quantity

while True:
    choice = input("Enter item to order (or 'done' to finish): ").title()
    if choice == 'Done':
        break
    elif choice in menu:
        try:
            qty = int(input(f"How many {choice}s would you like? "))
            if qty <= 0:
                print("Please enter a number greater than 0.")
                continue
            if choice in order:
                order[choice] += qty
            else:
                order[choice] = qty
            print(f"Added {qty} x {choice}(s) to your order.")
        except ValueError:
            print("Please enter a valid number.")
    else:
        print("Item not on the menu. Try again.")

# Calculate totals
subtotal = sum(menu[item] * qty for item, qty in order.items())
tax = subtotal * TAX_RATE
total = subtotal + tax

# Show summary
print("\nYour order:")
for item, qty in order.items():
    print(f"- {item} x{qty} = ${menu[item] * qty:.2f}")

print(f"Subtotal: ${subtotal:.2f}")
print(f"Tax (10%): ${tax:.2f}")
print(f"Total: ${total:.2f}")

# Save Receipt
now = datetime.datetime.now()
filename = f"receipt_{now.strftime('%Y%m%d_%H%M%S')}.txt"

with open(filename, 'w') as f:
    f.write("===== My Restaurant Receipt =====\n")
    f.write(f"Date: {now.strftime('%Y-%m-%d %H:%M:%S')}\n")
    f.write("----------------------------------\n")
    for item, qty in order.items():
        f.write(f"{item} x{qty}: ${menu[item] * qty:.2f}\n")
    f.write("----------------------------------\n")
    f.write(f"Subtotal: ${subtotal:.2f}\n")
    f.write(f"Tax (10%): ${tax:.2f}\n")
    f.write(f"Total: ${total:.2f}\n")
    f.write("Thank you for your order!\n")

print(f"\nReceipt saved to: {filename}")
