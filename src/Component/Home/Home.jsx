import React, { useState } from 'react'
import Card from '../Card/Card';
import "./Home.css"

const Home = () => {
    const [category, setCategory] = useState('');
    const [availability, setAvailability] = useState(false);

    const products = [
        {
            name: 'Product 1',
            category: 'Electronics',
            price: 799.99,
            available: true,
        },
        {
            name: 'Product 2',
            category: 'Books',
            price: 19.99,
            available: true,
        },
        {
            name: 'Product 3',
            category: 'Home & Kitchen',
            price: 49.99,
            available: false,
        },
        {
            name: 'Product 4',
            category: 'Toys & Games',
            price: 29.99,
            available: true,
        },
        {
            name: 'Product 5',
            category: 'Electronics',
            price: 599.99,
            available: true,
        },
        {
            name: 'Product 6',
            category: 'Books',
            price: 9.99,
            available: true,
        },
    ];


    const filterProducts = () => {
        return products.filter((product) => {
            // Filter by category
            if (category && product.category !== category) {
                return false;
            }

            // Filter by availability
            if (availability && !product.available) {
                return false;
            }

            return true;
        });
    };

    // Render filtered products
    const renderProducts = () => {
        const filteredProducts = filterProducts();

        return (
            <div className='home'>
                <div className='home_container'>

                    {filteredProducts.map((product, index) => (

                        <Card product={product} />

                    ))}

                </div>
            </div>
        );
    };

    return (
        <div><h1>Product List</h1>
            <div className='filter_option'>
                {/* Filter options */}
                <div>
                    <label htmlFor="category">Filter by Category:</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Books">Books</option>
                        <option value="Home & Kitchen">Home & Kitchen</option>
                        <option value="Toys & Games">Toys & Games</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="availability">Filter by Availability:</label>
                    <input
                        type="checkbox"
                        id="availability"
                        checked={availability}
                        onChange={(e) => setAvailability(e.target.checked)}
                    />
                </div>
            </div>

            {/* Display filtered products */}
            {renderProducts()}
        </div>
    )
}

export default Home