import React from 'react';
import { CartContext, CartItem } from './cart-context';

type CartProviderProps = {
  children?: React.ReactNode;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const updateCartItems = React.useCallback(
    (items: CartItem[], total: number) => {
      setCartItems(items);
      setTotalPrice(total);
    },
    [],
  );

  const clearCart = React.useCallback(() => {
    setCartItems([]);
    setTotalPrice(0);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        updateCartItems,
        totalPrice,
        clearCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};
