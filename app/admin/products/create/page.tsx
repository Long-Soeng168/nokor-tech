"use client"
import React, { useState } from "react";
import { baseUrl } from "../../utils/url";


const page = () => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
    });


    // Define the type for image as File or null
    const [image, setImage] = useState<File | null>(null);

    const [loading, setLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0]); // Set the selected image file
        }
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const data = new FormData();
        data.append("name", formData.name);
        data.append("description", formData.description);
        data.append("price", formData.price);
        if (image) {
            data.append("image", image); // Append the image if it's selected
        }

        console.log(data);


        try {
            setLoading(true);

            const response = await fetch(`${baseUrl}/products`, {
                method: "POST",
                body: data,
                headers: {
                    // Optional: Add Authorization header or other necessary headers
                    // "Authorization": "Bearer <Your-Token>"
                },
            });

            if (!response.ok) {
                throw new Error('Failed to create product');
            }

            const result = await response.json();
            console.log(result);

            alert("Product created successfully!");
            // Redirect to the /admin/products page after success
            setFormData({ name: "", description: "", price: "" });
            setImage(null);
        } catch (error) {
            console.error("Error creating product:", error);
            alert("Failed to create product.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-700">Submit Product</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Product Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Product Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            rows={4}
                            required
                            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Price ($)
                        </label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                            required
                            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    {/* Image */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Product Image
                        </label>
                        <input
                            type="file"
                            onChange={handleImageChange}
                            required
                            className="w-full mt-1 text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300 file:text-gray-600 file:bg-gray-50 hover:file:bg-gray-100"
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
                                } text-white py-2 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        >
                            {loading ? "Submitting..." : "Submit Product"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default page;
