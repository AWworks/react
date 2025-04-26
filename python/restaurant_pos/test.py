import tkinter as tk
from tkinter import ttk

menu = {
    "Food": {
        "Burger": 5.99,
        "Pasta": 7.99,
        "Fries": 2.99
    },
    "Drinks": {
        "Soda": 1.99,
        "Water": 0.99,
        "Coffee": 2.49
    },
    "Dessert": {
        "Ice Cream": 3.49,
        "Cake": 4.99
    }
}

def add_to_order(item, price):
    print(f"Added to order: {item} - ${price:.2f}")

def create_gui():
    root = tk.Tk()
    root.title("Restaurant POS")
    root.geometry("800x600")

    tab_control = ttk.Notebook(root)
    tab_control.pack(fill="both", expand=True)

    for category, items in menu.items():
        tab = ttk.Frame(tab_control)
        tab_control.add(tab, text=category)

        # Inner frame to hold buttons
        inner_frame = tk.Frame(tab)
        inner_frame.pack(padx=10, pady=10, fill="both", expand=True)

        for item, price in items.items():
            btn = tk.Button(inner_frame, text=f"{item} (${price:.2f})",
                            command=lambda i=item, p=price: add_to_order(i, p))
            btn.pack(anchor="w", pady=5)

    root.mainloop()

create_gui()
