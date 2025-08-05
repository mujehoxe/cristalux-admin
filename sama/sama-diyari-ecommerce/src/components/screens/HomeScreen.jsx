import React from 'react';
import { useAppContext } from '../../contexts/AppContext.jsx';
import { categories, allProducts } from '../../data/mockData.js';

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

const HomeScreen = () => {
  const { navigate, addToCart, setFilteredProducts } = useAppContext();

  const handleProductSelect = (product) => {
    navigate('product', product);
  };

  const handleCategorySelect = (category) => {
    const categoryProducts = allProducts.filter(p => p.categoryId === category.id);
    setFilteredProducts(categoryProducts);
    navigate('products', category);
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Navigation */}
      <nav className="mb-12">
        <details>
          <summary className="cursor-pointer text-xl font-bold text-text-primary mb-4">
            Electro-Metallic Tubing Products
          </summary>
          <ul className="list-disc pl-6 space-y-1">
            <li>Eleromate</li>
            <li>Jumbo</li>
            <li>TMB</li>
            <li>While Copol</li>
            <li>000</li>
          </ul>
        </details>
        <details>
          <summary className="cursor-pointer text-xl font-bold text-text-primary mb-4">
            Cable Management System & Hardwares
          </summary>
          <ul className="list-disc pl-6 space-y-1">
            <li>Cable Trays</li>
            <li>Cable Ladders</li>
            <li>Cable Trunks</li>
            <li>PVC Trunks</li>
            <li>PVC Channels</li>
            <li>Fastening Hardwares</li>
            <li>Channels & Supports</li>
            <li>PVC Cable Sleeves</li>
            <li>Heat Shrink Sleeves</li>
          </ul>
        </details>
        <details>
          <summary className="cursor-pointer text-xl font-bold text-text-primary mb-4">
            Cables & Wires
          </summary>
          <ul className="list-disc pl-6 space-y-1">
            <li>Wiring Cables</li>
            <li>LSOH Cables</li>
            <li>LV Cables</li>
            <li>Copper Cables</li>
            <li>Rubber Cables</li>
            <li>Aluminium Cables</li>
            <li>Flexible Cables</li>
            <li>Bare Copper Cables</li>
            <li>Fire Resistant Cables</li>
            <li>Optic Fibers</li>
            <li>Data Cables</li>
            <li>Cable Joint Kits</li>
          </ul>
        </details>
        <details>
          <summary className="cursor-pointer text-xl font-bold text-text-primary mb-4">
            Electrical Protection Systems
          </summary>
          <ul className="list-disc pl-6 space-y-1">
            <li>Circuit Breakers</li>
            <li>Contactors</li>
            <li>Relays</li>
            <li>Timers</li>
            <li>VFDs</li>
          </ul>
        </details>
        <details>
          <summary className="cursor-pointer text-xl font-bold text-text-primary mb-4">
            Lighting and Accessories
          </summary>
          <ul className="list-disc pl-6 space-y-1">
            <li>Light Source</li>
            <li>Downlights</li>
            <li>Ceiling Lights</li>
            <li>Commercial Light</li>
            <li>Battens</li>
            <li>Panel Light</li>
          </ul>
        </details>
        <details>
          <summary className="cursor-pointer text-xl font-bold text-text-primary">
            Switches & Sockets
          </summary>
          <ul className="list-disc pl-6 space-y-1">
            <li>Switched Sockets</li>
            <li>Unswitched Sockets</li>
            <li>DP Switches</li>
            <li>Cooler Controls</li>
            <li>Dimmers</li>
          </ul>
        </details>
      /nav>

      {/* Shop by Category */}
      <section className="mb-12">
        h2 className="text-2xl font-bold tracking-tight mb-6 text-text-primary">
          Shop by Category
        /h2>
        div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <button key={cat.id} onClick={() => handleCategorySelect(cat)} className="group block cursor-pointer">
              <div className="overflow-hidden rounded-lg">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url("${cat.image}")` }}
                >/div>
              /div>
              p className="mt-3 text-lg font-semibold text-text-primary">{cat.name}/p>
            /button>
          ))}
        /div>
      /section>
      
      {/* Featured Products */}
      <section className="mb-12">
        h2 className="text-2xl font-bold tracking-tight mb-6 text-text-primary">
          Featured Products
        /h2>
        div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allProducts.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleProductSelect(product)}
              onAddToCart={addToCart}
            />
          ))}
        /div>
      /section>
    </main>
  );
};

export default HomeScreen;
