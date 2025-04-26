import sqlite3
import datetime
# from logic import get_price

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

def save_order_to_db(order_dict_with_prices):
    conn = sqlite3.connect("restaurant_pos.db")
    c = conn.cursor()
    now = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')

    for item, (qty, price) in order_dict_with_prices.items():
        total = price * qty
        c.execute('''
            INSERT INTO orders (item, quantity, price, total, order_time)
            VALUES (?, ?, ?, ?, ?)
        ''', (item, qty, price, total, now))

    conn.commit()
    conn.close()

def get_all_orders():
    conn = sqlite3.connect("restaurant_pos.db")
    c = conn.cursor()
    c.execute("SELECT item, quantity, price, total, order_time FROM orders ORDER BY order_time DESC")
    rows = c.fetchall()
    conn.close()
    return rows

def get_daily_sales():
    today = datetime.datetime.now().strftime('%Y-%m-%d')
    conn = sqlite3.connect("restaurant_pos.db")
    c = conn.cursor()
    c.execute('''
        SELECT item, SUM(quantity) AS total_qty, SUM(total) AS total_sales
        FROM orders
        WHERE order_time LIKE ?
        GROUP BY item
    ''', (f'{today}%',))
    rows = c.fetchall()

    c.execute('''
        SELECT SUM(total) FROM orders WHERE order_time LIKE ?
    ''', (f'{today}%',))
    total_revenue = c.fetchone()[0] or 0.0

    conn.close()
    return rows, total_revenue