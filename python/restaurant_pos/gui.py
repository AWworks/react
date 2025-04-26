from tkinter import ttk

import tkinter as tk
from tkinter import messagebox
from menu_data import menu
from logic import get_price, calculate_totals, generate_receipt_text, save_receipt_to_file
from db import get_all_orders, get_daily_sales
import datetime

order = {}
currency_symbol = "₹"  # Default currency symbol

def change_currency(symbol):
    global currency_symbol
    currency_symbol = symbol
    update_order_display()  # Update the order display when currency changes

def create_gui():
    global order_display, total_label

    root = tk.Tk()
    root.title("Restaurant POS")
    root.geometry("800x600")

    main_frame = tk.Frame(root)
    main_frame.pack(fill="both", expand=True)

    tab_control = ttk.Notebook(main_frame)
    tab_control.pack(side="left", fill="both", expand=True)

    for category, items in menu.items():
        tab = tk.Frame(tab_control)
        tab_control.add(tab, text=category)

        # Create a frame inside the tab to hold buttons
        inner_frame = tk.Frame(tab)
        inner_frame.pack(fill="both", expand=True)

        for item, price in items.items():
            btn = tk.Button(inner_frame, text=f"{item} (₹{price:.2f})", width=20,
                            command=lambda i=item, p=price: add_to_order(i, p))
            btn.pack(padx=5, pady=2, anchor="w")

    # Menu buttons
    menu_frame = tk.Frame(main_frame)
    menu_frame.pack(side="left", fill="both", expand=True)

    # Order summary
    order_frame = tk.Frame(main_frame)
    order_frame.pack(side="right", fill="both", expand=True)

    order_display = tk.Text(order_frame, height=15, width=40, state="disabled", bg="white")
    order_display.pack(pady=10)

    # Total label
    total_label = tk.Label(order_frame, text="Total: ₹0.00", font=("Arial", 12, "bold"))
    total_label.pack(pady=10)

    btn_frame = tk.Frame(order_frame)
    btn_frame.pack(pady=5)

    tk.Button(btn_frame, text="Pay & Save Receipt", bg="green", fg="white", command=pay_and_save).pack(side="left", padx=5)
    tk.Button(btn_frame, text="Reset", bg="red", fg="white", command=reset_order).pack(side="left", padx=5)
    tk.Button(btn_frame, text="View Orders", bg="blue", fg="white", command=view_saved_orders).pack(side="left", padx=5)
    tk.Button(btn_frame, text="Daily Report", bg="purple", fg="white", command=view_daily_report).pack(side="left", padx=5)

    root.mainloop()


def update_order_display():
    order_display.config(state="normal")
    order_display.delete(1.0, tk.END)

    # Generate and display receipt text
    receipt_text = generate_receipt_text(order)
    order_display.insert(tk.END, receipt_text)

    # Calculate total
    total = sum(get_price(item) * qty for item, qty in order.items())
    
    # Update the total label
    total_label.config(text=f"Total: ₹{total:.2f}")

    order_display.config(state="disabled")

def add_to_order(item, price):
    order[item] = order.get(item, 0) + 1
    update_order_display()

def reset_order():
    order.clear()
    update_order_display()

def pay_and_save():
    if not order:
        messagebox.showwarning("Empty Order", "Add some items first!")
        return
    save_receipt_to_file(order)
    messagebox.showinfo("Success", "Receipt saved!")
    reset_order()

def view_saved_orders():
    rows = get_all_orders()
    win = tk.Toplevel()
    win.title("Saved Orders")
    win.geometry("600x400")

    headers = ["Item", "Qty", "Price", "Total", "Time"]
    for i, h in enumerate(headers):
        tk.Label(win, text=h, font=("Arial", 10, "bold"), borderwidth=1, relief="solid").grid(row=0, column=i, sticky="nsew")

    for r, row in enumerate(rows, start=1):
        for c, val in enumerate(row):
            tk.Label(win, text=val, borderwidth=1, relief="solid").grid(row=r, column=c, sticky="nsew")

def view_daily_report():
    rows, total_revenue = get_daily_sales()

    win = tk.Toplevel()
    win.title("Daily Sales Report")
    win.geometry("500x400")

    tk.Label(win, text=f"Sales Report for {datetime.datetime.now().strftime('%Y-%m-%d')}",
             font=("Arial", 12, "bold")).pack(pady=10)

    frame = tk.Frame(win)
    frame.pack()

    headers = ["Item", "Total Sold", "Total Revenue"]
    for i, h in enumerate(headers):
        tk.Label(frame, text=h, font=("Arial", 10, "bold"), borderwidth=1, relief="solid", padx=5, pady=2).grid(row=0, column=i)

    for r, row in enumerate(rows, start=1):
        for c, val in enumerate(row):
            tk.Label(frame, text=str(val), borderwidth=1, relief="solid", padx=5, pady=2).grid(row=r, column=c)

    tk.Label(win, text=f"\nTotal Revenue: ₹{total_revenue:.2f}", font=("Arial", 11, "bold")).pack(pady=10)
