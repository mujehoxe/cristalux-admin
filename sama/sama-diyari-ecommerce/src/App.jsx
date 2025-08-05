import React from 'react';
import { AppProvider, useAppContext } from './contexts/AppContext.jsx';
import Header from './components/Header';
import HomeScreen from './components/screens/HomeScreen';
import ProductListingScreen from './components/screens/ProductListingScreen';
import ProductDetailScreen from './components/screens/ProductDetailScreen';
import CartScreen from './components/screens/CartScreen';
import CheckoutScreen from './components/screens/CheckoutScreen';
import ProfileScreen from './components/screens/ProfileScreen';

function AppContent() {
  const { navState } = useAppContext();

  const renderScreen = () => {
    switch (navState.screen) {
      case 'home':
        return <HomeScreen />;
      case 'products':
        return <ProductListingScreen />;
      case 'product':
        return <ProductDetailScreen />;
      case 'cart':
        return <CartScreen />;
      case 'checkout':
        return <CheckoutScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        {renderScreen()}
      </div>
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
