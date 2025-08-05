import React, { createContext, useContext, useReducer } from 'react';
import { allProducts } from '../data/mockData';

const AppContext = createContext();

const initialState = {
  navState: { screen: 'home', history: ['home'], data: null },
  cartItems: [],
  filteredProducts: allProducts,
  isLoggedIn: false,
};

function appReducer(state, action) {
  switch (action.type) {
    case 'NAVIGATE':
      return {
        ...state,
        navState: {
          screen: action.screen,
          history: [...state.navState.history, action.screen],
          data: action.data || null,
        },
      };
    
    case 'GO_BACK':
      const newHistory = [...state.navState.history];
      newHistory.pop();
      return {
        ...state,
        navState: {
          screen: newHistory[newHistory.length - 1] || 'home',
          history: newHistory,
          data: null,
        },
      };
    
    case 'ADD_TO_CART':
      const existingItem = state.cartItems.find(item => item.id === action.product.id);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.product, quantity: 1 }],
      };
    
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems
          .map(item =>
            item.id === action.id
              ? { ...item, quantity: Math.max(0, item.quantity + action.delta) }
              : item
          )
          .filter(item => item.quantity > 0),
      };
    
    case 'SET_FILTERED_PRODUCTS':
      return {
        ...state,
        filteredProducts: action.products,
      };
    
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
      };
    
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        navState: { screen: 'home', history: ['home'], data: null },
      };
    
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const navigate = (screen, data = null) => {
    dispatch({ type: 'NAVIGATE', screen, data });
  };

  const goBack = () => {
    dispatch({ type: 'GO_BACK' });
  };

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  const updateQuantity = (id, delta) => {
    dispatch({ type: 'UPDATE_QUANTITY', id, delta });
  };

  const setFilteredProducts = (products) => {
    dispatch({ type: 'SET_FILTERED_PRODUCTS', products });
  };

  const login = () => {
    dispatch({ type: 'LOGIN' });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const value = {
    ...state,
    navigate,
    goBack,
    addToCart,
    updateQuantity,
    setFilteredProducts,
    login,
    logout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
