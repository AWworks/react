menu = {
    "Burger": 5.99,
    "Pizza": 8.99,
    "Pasta": 7.99,
    "Salad": 4.99,
    "Soda": 1.99
}

print("Welcome to my restaurant!")
print("Here's the menu")

for item, price in menu.items(): 
    print(f"{item}: ${price:.2f}")

order = []

while True: 
    choice = input("Enter item to order (or type 'done' to finish)").title()

    if choice =='Done': 
        break
    elif choice in menu:
            order.append(choice)
            print(f"{choice} added to your order.")
    else :
            print("Item not on menu. Please try again.")    

# Step 4: Calculate the total and show the receipt
total = sum(menu[item] for item in order)
print("\nYour order:")
for item in order:
    print(f"- {item} (${menu[item]:.2f})")

print(f"Total: ${total:.2f}")