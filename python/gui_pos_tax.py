import tkinter as tk
from tkinter import messagebox, ttk
import datetime

import sqlite3

# Constants
TAX_RATE = 0.10  # 10%

# Menu
# Menu with categories
menu = {
    "Food": {
        "Burger": 5.99,
        "Pizza": 8.99,
        "Pasta": 7.99,
        "Salad": 4.99
    },
    "Drinks": {
        "Soda": 1.99,
        "Water": 0.99,
        "Juice": 2.49
    }
}

order = {}  # Store item: quantity


def init_db():
    conn = sqlite3.connect("restaurant_pos.db")
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            item TEXT,
            quantity INTEGER,
            price REAL,
            total REAL,
            order_time TEXT
        )
    ''')
    conn.commit()
    conn.close()

# --- Functions ---
def get_price(item_name):
    for category in menu.values():
        if item_name in category:
            return category[item_name]
    return 0
 
def add_to_order(item, price):
    try:
        qty = int(quantity_entry.get())
        if qty <= 0:
            raise ValueError
    except ValueError:
        messagebox.showerror("Invalid Quantity", "Please enter a number greater than 0.")
        return

    if item in order:
        order[item] += qty
    else:
        order[item] = qty

    update_order_display()

def update_order_display():
    order_text = ""
    subtotal = 0

    for item, qty in order.items():
        price = get_price(item)
        total = price * qty
        order_text += f"{item} x{qty} = ${total:.2f}\n"
        subtotal += total

    tax = subtotal * TAX_RATE
    grand_total = subtotal + tax

    order_text += f"\nSubtotal: ${subtotal:.2f}"
    order_text += f"\nTax (10%): ${tax:.2f}"
    order_text += f"\nTotal: ${grand_total:.2f}"

    order_display.config(state="normal")
    order_display.delete(1.0, tk.END)
    order_display.insert(tk.END, order_text)
    order_display.config(state="disabled")

def save_order_to_db(order_dict):
    conn = sqlite3.connect("restaurant_pos.db")
    c = conn.cursor()
    now = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')

    for item, qty in order_dict.items():
        price = get_price(item)
        total = price * qty
        c.execute('''
            INSERT INTO orders (item, quantity, price, total, order_time)
            VALUES (?, ?, ?, ?, ?)
        ''', (item, qty, price, total, now))

    conn.commit()
    conn.close()

   
def save_order_to_db(order_dict):
    conn = sqlite3.connect("restaurant_pos.db")
    c = conn.cursor()
    now = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    for item, qty in order_dict.items():
        price = get_price(item)
        total = price * qty
        c.execute('''
            INSERT INTO orders (item, quantity, price, total, order_time)
            VALUES (?, ?, ?, ?, ?)
        ''', (item, qty, price, total, now))
    conn.commit()
    conn.close()

def generate_receipt():
    if not order:
        messagebox.showwarning("Empty Order", "No items in the order.")
        return

    now = datetime.datetime.now()
    filename = f"receipt_{now.strftime('%Y%m%d_%H%M%S')}.txt"

    subtotal = sum(get_price(item) * qty for item, qty in order.items())
    tax = subtotal * TAX_RATE
    total = subtotal + tax

    with open(filename, 'w') as f:
        f.write("===== My Restaurant Receipt =====\n")
        f.write(f"Date: {now.strftime('%Y-%m-%d %H:%M:%S')}\n")
        f.write("-------------------------------\n")
        for item, qty in order.items():
            f.write(f"{item} x{qty}: ${get_price(item) * qty:.2f}\n")
        f.write("-------------------------------\n")
        f.write(f"Subtotal: ${subtotal:.2f}\n")
        f.write(f"Tax (10%): ${tax:.2f}\n")
        f.write(f"Total: ${total:.2f}\n")
        f.write("Thank you for your order!\n")

    # Save to DB here:
    save_order_to_db(order)

    messagebox.showinfo("Receipt Saved", f"Receipt saved as {filename}")
    reset_order()

def reset_order():
    order.clear()
    order_summary.set("Current Order:\n\nSubtotal: $0.00\nTax: $0.00\nTotal: $0.00")
    quantity_entry.delete(0, tk.END)
    quantity_entry.insert(0, "1")

def view_saved_orders():
    conn = sqlite3.connect("restaurant_pos.db")
    c = conn.cursor()
    c.execute("SELECT item, quantity, price, total, order_time FROM orders ORDER BY order_time DESC")
    rows = c.fetchall()
    conn.close()

    # Create a new window
    win = tk.Toplevel(root)
    win.title("Saved Orders")
    win.geometry("600x400")

    # Headers
    headers = ["Item", "Qty", "Price", "Total", "Time"]
    for i, h in enumerate(headers):
        tk.Label(win, text=h, font=("Arial", 10, "bold"), borderwidth=1, relief="solid", padx=5, pady=2).grid(row=0, column=i, sticky="nsew")

    # Order rows
    for r, row in enumerate(rows, start=1):
        for c, val in enumerate(row):
            tk.Label(win, text=val, borderwidth=1, relief="solid", padx=5, pady=2).grid(row=r, column=c, sticky="nsew")

    # Scrollbar (optional: if needed for many entries)
    # You can add this later if the table gets too long

# --- GUI Setup ---
root = tk.Tk()
root.title("Restaurant POS")
root.geometry("800x500")

# Main frame for layout
main_frame = tk.Frame(root)
main_frame.pack(padx=10, pady=10, fill="both", expand=True)

# LEFT: Menu buttons
menu_frame = tk.Frame(main_frame)
menu_frame.pack(side="left", fill="both", expand=True)
for category, items in menu.items():
    cat_label = tk.Label(menu_frame, text=category, font=("Arial", 12, "bold"), pady=5)
    cat_label.pack()

    for item, price in items.items():
        btn = tk.Button(menu_frame, text=f"{item} (${price:.2f})", width=20,
                        command=lambda i=item, p=price: add_to_order(i, p))
        btn.pack(padx=5, pady=2)

# RIGHT: Order summary + action buttons
order_frame = tk.Frame(main_frame)
order_frame.pack(side="right", fill="both", expand=True)
order_display = tk.Text(order_frame, height=20, width=40, state="disabled", bg="white")
order_display.pack(pady=10)

btn_frame = tk.Frame(order_frame)
btn_frame.pack(pady=5)

tk.Button(btn_frame, text="Pay & Save Receipt", command=generate_receipt, bg="green", fg="white").pack(side="left", padx=5)
tk.Button(btn_frame, text="Reset", command=reset_order, bg="red", fg="white").pack(side="left", padx=5)
tk.Button(btn_frame, text="View Orders", command=view_saved_orders, bg="blue", fg="white").pack(side="left", padx=5)

scroll = tk.Scrollbar(root)
scroll.pack(side="right", fill="y")

order_display.config(yscrollcommand=scroll.set)
scroll.config(command=order_display.yview)
# Quantity input
tk.Label(root, text="Quantity:").pack()
quantity_entry = tk.Entry(root)
quantity_entry.pack()
quantity_entry.insert(0, "1")

# Tabs for categories
tabs = ttk.Notebook(root)
tabs.pack(pady=10)

for category_name, items in menu.items():
    frame = tk.Frame(tabs)
    tabs.add(frame, text=category_name)

    for item, price in items.items():
        btn = tk.Button(frame, text=f"{item} (${price:.2f})", width=25,
                        command=lambda i=item, p=price: add_to_order(i, p))
        btn.pack(pady=3)
# Order summary
order_summary = tk.StringVar()
order_summary.set("Current Order:\n\nSubtotal: $0.00\nTax: $0.00\nTotal: $0.00")
summary_label = tk.Label(root, textvariable=order_summary, justify="left", font=("Arial", 12))
summary_label.pack(pady=10)

# Buttons
btn_frame = tk.Frame(root)
btn_frame.pack(pady=10)

tk.Button(btn_frame, text="Pay & Save Receipt", command=generate_receipt, bg="green", fg="white").pack(side="left", padx=5)
tk.Button(btn_frame, text="Reset Order", command=reset_order, bg="red", fg="white").pack(side="left", padx=5)

# Run
root.mainloop()