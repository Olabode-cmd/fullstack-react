import { useState, useEffect } from 'react';
import ProductCard from '../components/productcard';

const Products = () => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        // try-catch block
        try {
            const response = await fetch('https://dummyjson.com/products')

            if (!response.ok) { // 200-299
                throw new Error('Failed to fetch products');
            }

            const data = await response.json();
            setProducts(data.products)
        } catch (error) {
            console.error(error)
            setError(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []) // dependency array

    // fetchProducts();

    // Asynchronous function
    // Javascript is a single threaded language

    if (loading) {
        return <div className="max-w-7xl mx-auto px-4 py-8">Loading...</div>
    }

    if (error) {
        return <div className="max-w-7xl mx-auto px-4 py-8 text-red-600">Error: {error.message}</div>
    }

    // console.log(products)
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1>Products</h1>
            <p>Products page</p>

            <div className="grid grid-cols-4 gap-4">
                {products.map((product) => {
                    return (
                        <div>
                            <ProductCard 
                                title={product.title}
                                description={product.description}
                                category={product.category}
                                price={product.price}
                                image={product.thumbnail}
                            
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Products;

