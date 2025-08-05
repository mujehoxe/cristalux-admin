import React, { useState } from 'react';
import Icon from './Icon.jsx';
import { useAppContext } from '../contexts/AppContext.jsx';
import { allProducts, categories } from '../data/mockData.js';

const Header = () => {
  const { navigate, navState, cartItems, isLoggedIn, login, setFilteredProducts } = useAppContext();
  const [searchQuery, setSearchQuery] = useState('');

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleUserIconClick = () => {
    if (isLoggedIn) {
      navigate('profile');
    } else {
      login();
      navigate('profile');
    }
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      handleAiSearch(searchQuery);
    }
  };

  const handleAiSearch = async (query) => {
    const lowerQuery = query.toLowerCase();
    const searchResults = allProducts.filter(product =>
      product.name.toLowerCase().includes(lowerQuery) ||
      categories.find(cat => cat.id === product.categoryId)?.name.toLowerCase().includes(lowerQuery)
    );
    setFilteredProducts(searchResults);
    navigate('products', { name: `Search: "${query}"` });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between whitespace-nowrap py-4">
          <div className="flex items-center gap-8">
            <button onClick={() => navigate('home')} className="flex items-center gap-3 text-text-primary cursor-pointer">
              <Icon name="logo" className="h-8 w-8 text-secondary" />
              <h1 className="text-2xl font-bold tracking-tighter">Sama Diyari</h1>
            </button>
            <nav className="hidden lg:flex items-center gap-6">
              <button
                onClick={() => navigate('home')}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  navState.screen === 'home' ? 'text-primary font-bold' : 'text-gray-500 hover:text-primary'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  setFilteredProducts(allProducts);
                  navigate('products');
                }}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  navState.screen === 'products' ? 'text-primary font-bold' : 'text-gray-500 hover:text-primary'
                }`}
              >
                Products
              </button>
            </nav>
          </div>
          <div className="flex flex-1 justify-end items-center gap-4">
            <div className="hidden md:block relative w-full max-w-xs">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Icon name="search" className="text-gray-400 h-5 w-5" />
              </div>
              <input
                className="w-full rounded-md border border-gray-300 bg-accent text-text-primary pl-10 pr-4 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Search products..."
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
              />
            </div>
            <button
              aria-label="Shopping Cart"
              onClick={() => navigate('cart')}
              className="relative flex items-center justify-center p-2 rounded-full hover:bg-accent transition-colors"
            >
              <Icon name="shopping-cart" className="text-secondary h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button
              onClick={handleUserIconClick}
              className="hidden lg:flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-accent text-gray-500 hover:bg-gray-200 transition-colors"
            >
              <Icon name="user" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
