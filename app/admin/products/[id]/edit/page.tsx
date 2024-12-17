"use client"; // Enable client-side rendering for forms and state

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { baseUrl } from "@/app/admin/utils/url";

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
}

export default function EditProductPage() {
    const router = useRouter();
    const params = useParams();
    const productId = params.id; // Extract product ID from URL

    const [product, setProduct] = useState<Product>({
        id: "",
        name: "",
        description: "",
        price: 0,
    });
    const [loading, setLoading] = useState(true);

    // Fetch product details
    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await fetch(`${baseUrl}/products/${productId}`);
                if (res.ok) {
                    const rasult = await res.json();
                    console.log(rasult.data);

                    setProduct(rasult.data);
                    setLoading(false);
                } else {
                    console.error("Error fetching product data");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
        fetchProduct();
    }, [productId]);

    // Handle form submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch(`${baseUrl}/products/${productId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(product),
            });
            if (res.ok) {
                alert("Product updated successfully!");
                router.push("/admin/products");
            } else {
                console.error("Error updating product");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    // Handle form field change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div>
                    <label className="block font-semibold">Product Name</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        required
                    />
                </div>

                {/* Description Input */}
                <div>
                    <label className="block font-semibold">Description</label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        rows={4}
                    ></textarea>
                </div>

                {/* Price Input */}
                <div>
                    <label className="block font-semibold">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={product?.price || ""}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Save Changes
                </button>
            </form>
            
        </div>
    );
}
