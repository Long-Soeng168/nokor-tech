"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // For navigation
import { baseUrl } from "../utils/url";

type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
};

export default function Products() {
    const router = useRouter(); // Initialize Next.js router

    const [products, setProducts] = useState<Product[]>([]); // State to store products
    const [loading, setLoading] = useState<boolean>(true); // State to track loading status
    const [error, setError] = useState<string | null>(null); // State to store error message

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${baseUrl}/products`);
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                const data = await response.json();
                console.log(data);

                setProducts(data.data); // Set the fetched products
            } catch (err) {
                setError("Failed to load products."); // Set error if something went wrong
                console.error(err);
            } finally {
                setLoading(false); // Set loading to false once the request is complete
            }
        };

        fetchProducts();
    }, []); // Empty dependency array to run the effect only once (on mount)

    if (loading) {
        return <div>Loading...</div>; // Display loading message while fetching data
    }

    if (error) {
        return <div>{error}</div>; // Display error message if an error occurred
    }

    // Handle product click to navigate to the detail page
    const handleProductClick = (id: number) => {
        router.push(`/admin/products/${id}`); // Navigate to dynamic product detail page
    };

    return (
        <div className="max-w-screen-xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
                Product List
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        onClick={() => handleProductClick(product.id)} // Click event for navigation
                        className="product-card bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col cursor-pointer hover:shadow-xl transition duration-300"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            {product.name}
                        </h2>
                        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                        <p className="text-lg font-bold text-gray-900">${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
