"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation"; // For dynamic parameters
import { baseUrl } from "../../utils/url";

type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
};

export default function ProductDetail() {
    const router = useRouter();
    const { id } = useParams(); // Extract the product ID from the route
    const [product, setProduct] = useState<Product | null>(null); // State to store product details
    const [loading, setLoading] = useState<boolean>(true); // State to track loading
    const [error, setError] = useState<string | null>(null); // State to store error messages

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`${baseUrl}/products/${id}`); // Fetch specific product
                if (!response.ok) {
                    throw new Error("Failed to fetch product details");
                }
                const data = await response.json();
                console.log(data);

                setProduct(data.data); // Set product details
            } catch (err) {
                setError("Failed to load product details."); // Handle error
                console.error(err);
            } finally {
                setLoading(false); // Stop loading spinner
            }
        };

        if (id) fetchProduct(); // Ensure ID exists before fetching
    }, [id]); // Trigger the effect when 'id' changes

    // Handle product deletion
    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this product?");
        if (confirmDelete) {
            try {
                const res = await fetch(`${baseUrl}/products/${id}`, {
                    method: "DELETE",
                });
                if (res.ok) {
                    alert("Product deleted successfully!");
                    router.push("/admin/products"); // Redirect to product list after deletion
                } else {
                    console.error("Error deleting product");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
    };

    if (loading) {
        return <div>Loading...</div>; // Show loading indicator
    }

    if (error) {
        return <div>{error}</div>; // Show error message
    }

    if (!product) {
        return <div>Product not found.</div>; // Fallback if no product is found
    }

    return (
        <div className="max-w-screen-lg mx-auto px-4 py-8">
            <div className="product-detail bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full md:w-1/2 h-64 object-cover rounded-lg mb-6 md:mb-0"
                />
                <div className="product-info md:ml-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <p className="text-2xl font-bold text-gray-900 mb-4">${product.price}</p>
                    <div className="flex gap-2">
                        {/* Edit Button */}
                        <button
                            onClick={() => router.push(`/admin/products/${id}/edit`)}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Edit Product
                        </button>
                        {/* Delete Button */}
                        <button
                            onClick={handleDelete}
                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                        >
                            Delete Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
