import { createContext, useContext, useState, type ReactNode } from "react";

// Type for a single item in the cart, including quantity
type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

// Type for an item to be added (without quantity)
type Item = {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
};

type CartContextType = {
    cart: CartItem[];
    addToCart: (item: Item) => void;
    clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used within CartProvider");
    return ctx;
};

// Props type for the CartProvider (expects children)
type CartProviderProps = {
    children: ReactNode;
};


export const CartProvider = (props: CartProviderProps) => {

    const [cart, setCart] = useState<CartItem[]>([]);

    // Function to add an item to the cart (or increase quantity if it exists)
    const addToCart = (item: { id: number; name: string; price: number }) => {
        setCart((prev) => {
            const found = prev.find((c) => c.id === item.id);
            if (found) {

                return prev.map((c) =>
                    c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
                );
            }
            // If item not in cart, add it with quantity 1
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    // Function to clear all items from the cart
    const clearCart = () => setCart([]);

    // Provide cart state and functions to all children components
    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContext;