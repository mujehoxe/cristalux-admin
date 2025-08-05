import React, { useState } from 'react';
import { useAppContext } from '../../contexts/AppContext.jsx';
import { categories, allProducts } from '../../data/mockData.js';
import Icon from '../Icon.jsx';

const FilterSection = ({ title, children, isOpen, onToggle }) => (
  <div className="border-b border-gray-200 pb-3">
    <button onClick={onToggle} className="w-full flex items-center justify-between text-left">
      <span className="font-medium text-text-primary">{title}</span>
      <Icon 
        name="chevron-down" 
        className={`h-5 w-5 transform transition-transform text-secondary ${
          isOpen ? 'rotate-180' : ''
        }`} 
      />
    </button>
    {isOpen && <div className="mt-2 space-y-2">{children}</div>}
  </div>
);

const ProductCard = ({ product, onClick, onAddToCart }) => (
  <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white hover:shadow-lg hover:shadow-gray-200 transition-shadow duration-300">
    <div className="aspect-square overflow-hidden cursor-pointer" onClick={onClick}>
      <div
        className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url("${product.image}")` }}
      ></div>
    </div>
    <div className="p-4 flex-1 flex flex-col bg-accent">
      <h3 className="text-base font-semibold text-text-primary flex-1">
        <button onClick={onClick} className="hover:text-primary cursor-pointer">
          {product.name}
        </button>
      </h3>
      <p className="text-sm text-gray-500 mt-1">{product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="btn-primary mt-3 w-full rounded-md py-2 text-sm font-bold"
      >
        Add to Cart
      </button>
    </div>
  </div>
);

const ProductListingScreen = () => {
  const { navigate, addToCart, filteredProducts, navState, setFilteredProducts } = useAppContext();
  const [openFilters, setOpenFilters] = useState({
    category: true,
    brand: false,
    application: false,
    specs: false
  });
  const [sortBy, setSortBy] = useState('relevance');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const title = navState.data?.name || 'All Products';

  const toggleFilter = (filterName) => {
    setOpenFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };

  const handleCategoryFilter = (categoryId) => {
    let newSelectedCategories;
    if (selectedCategories.includes(categoryId)) {
      newSelectedCategories = selectedCategories.filter(id => id !== categoryId);
    } else {
      newSelectedCategories = [...selectedCategories, categoryId];
    }
    setSelectedCategories(newSelectedCategories);
    
    if (newSelectedCategories.length === 0) {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter(product => 
        newSelectedCategories.includes(product.categoryId)
      );
      setFilteredProducts(filtered);
    }
  };

  const handleProductSelect = (product) => {
    navigate('product', product);
  };

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    setSortBy(sortValue);
    
    let sortedProducts = [...filteredProducts];
    switch (sortValue) {
      case 'price-low':
        sortedProducts.sort((a, b) => 
          parseFloat(a.price.replace('SAR ', '')) - parseFloat(b.price.replace('SAR ', ''))
        );
        break;
      case 'price-high':
        sortedProducts.sort((a, b) => 
          parseFloat(b.price.replace('SAR ', '')) - parseFloat(a.price.replace('SAR ', ''))
        );
        break;
      case 'newest':
        sortedProducts.sort((a, b) => b.id - a.id);
        break;
      default:
        // Keep original order for relevance
        break;
    }
    setFilteredProducts(sortedProducts);
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="lg:w-1/4">
          <div className="sticky top-28">
            <div className="space-y-6">
              <div>
                <nav className="text-sm text-text-secondary mb-6">
                  <ol className="flex items-center space-x-2">
                    <li>
                      <button 
                        onClick={() => navigate('home')} 
                        className="hover:text-primary"
                      >
                        Home
                      </button>
                    </li>
                    <li><span className="mx-2">/</span></li>
                    <li className="font-medium text-text-primary">Products</li>
                  </ol>
                </nav>
                <h2 className="text-3xl font-extrabold text-text-primary tracking-tight">
                  {title}
                </h2>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-text-primary">Filters</h3>
                <div className="space-y-3">
                  {/* Category Filter */}
                  <FilterSection 
                    title="Category" 
                    isOpen={openFilters.category}
                    onToggle={() => toggleFilter('category')}
                  >
                    {categories.map(category => (
                      <label key={category.id} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category.id)}
                          onChange={() => handleCategoryFilter(category.id)}
                          className="rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-text-secondary hover:text-primary">
                          {category.name}
                        </span>
                      </label>
                    ))}
                  </FilterSection>

                  {/* Brand Filter */}
                  <FilterSection 
                    title="Brand" 
                    isOpen={openFilters.brand}
                    onToggle={() => toggleFilter('brand')}
                  >
                    <p className="text-sm text-text-secondary">Brand filters coming soon...</p>
                  </FilterSection>

                  {/* Application Filter */}
                  <FilterSection 
                    title="Application" 
                    isOpen={openFilters.application}
                    onToggle={() => toggleFilter('application')}
                  >
                    <p className="text-sm text-text-secondary">Application filters coming soon...</p>
                  </FilterSection>

                  {/* Technical Specs Filter */}
                  <FilterSection 
                    title="Technical Specs" 
                    isOpen={openFilters.specs}
                    onToggle={() => toggleFilter('specs')}
                  >
                    <p className="text-sm text-text-secondary">Spec filters coming soon...</p>
                  </FilterSection>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:w-3/4">
          {/* Sort and Results Count */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-text-secondary">
              Showing {filteredProducts.length} of {allProducts.length} products
            </p>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium" htmlFor="sort">Sort by:</label>
              <select 
                className="form-select rounded-md border-gray-300 bg-accent text-sm text-text-primary focus:border-primary focus:ring-primary" 
                id="sort"
                value={sortBy}
                onChange={handleSortChange}
              >
                <option value="relevance">Relevance</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleProductSelect(product)}
                onAddToCart={addToCart}
              />
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-accent rounded-lg">
              <p className="text-text-secondary text-lg">No products found matching your criteria.</p>
              <button 
                onClick={() => {
                  setSelectedCategories([]);
                  setFilteredProducts(allProducts);
                }}
                className="mt-4 btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductListingScreen;
