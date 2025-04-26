import sqlite3

def init_db():
    conn = sqlite3.connect("restaurant_pos.db")
    c = conn.cursor()

    # Create table if it doesn't exist
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
