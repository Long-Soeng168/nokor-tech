"use client";

import * as React from "react";
import { Trash2, Pencil, Check, ChevronsUpDown, Minus, Plus } from "lucide-react";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const countries = [
    { value: "afghanistan", label: "Afghanistan" },
    { value: "albania", label: "Albania" },
    { value: "algeria", label: "Algeria" },
];

type Product = {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
    subtotal: number;
};

const products: Product[] = [
    {
        id: 1,
        name: "MSI MEG Trident X Gaming Desktop",
        image: "https://via.placeholder.com/100",
        price: 4349.0,
        quantity: 1,
        subtotal: 13047.0,
    },
    {
        id: 2,
        name: "Dell XPS 13 Laptop",
        image: "https://via.placeholder.com/100",
        price: 999.0,
        quantity: 1,
        subtotal: 999.0,
    },
];

const Page = () => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

    return (
        <div className="max-w-screen-xl mx-auto px-2 mb-20">
            <h1 className="text-2xl lg:text-3xl font-bold mb-8">Shopping Cart</h1>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Products Table */}
                <div className="lg:w-8/12">
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse">
                            <thead>
                                <tr className="text-sm font-semibold text-left text-gray-700">
                                    <th className="border-b-2 py-4 text-center">Item</th>
                                    <th className="border-b-2 py-4 text-center">Price</th>
                                    <th className="border-b-2 py-4 text-center">Qty</th>
                                    <th className="border-b-2 py-4 text-center">Subtotal</th>
                                    <th className="border-b-2 py-4 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr key={product.id} className="hover:bg-gray-50 space-x-2">
                                        <td className="p-4 flex items-center">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-20 aspect-square mr-2 object-cover rounded"
                                            />
                                            <p className="line-clamp-2 w-60 lg:w-96 text-gray-700">
                                                {product.name}
                                            </p>
                                        </td>
                                        <td className="p-4 text-gray-600">${product.price.toFixed(2)}</td>
                                        <td className="p-4 text-center text-lg">
                                            <div className="flex items-center justify-center gap-2">
                                                <Button variant='outline' size='icon'>
                                                    <Minus />
                                                </Button>
                                                {product.quantity}
                                                <Button variant='outline' size='icon'>
                                                    <Plus />
                                                </Button>
                                            </div>
                                        </td>
                                        <td className="p-4 text-gray-600">${product.subtotal.toFixed(2)}</td>
                                        <td className="p-4 text-center space-x-2">
                                            <button className="p-2 bg-red-500 text-white rounded hover:bg-red-600">
                                                <Trash2 size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex justify-between mt-6">
                        <Link href="#">
                            <Button variant='outline' className="border-destructive text-destructive hover:bg-primary hover:text-primary-foreground hover:border-primary">
                                <Trash2 />
                                Clear Cart
                            </Button>
                        </Link>
                        <div className="space-x-4">

                            <Link href="/checkout">
                                <Button>
                                    Checkout
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Summary Section */}
                <div className="lg:w-4/12 bg-gray-50 p-6 rounded-md shadow-sm">
                    <h2 className="text-xl font-bold mb-6">Summary</h2>

                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="font-semibold text-sm">
                                Products
                            </AccordionTrigger>
                            <AccordionContent className="mt-4 text-sm text-gray-600">
                                <table className="w-full space-y-2">
                                    <tbody>
                                        {products.map((product) => (
                                            <tr key={product.id}>
                                                <td className="p-2 flex items-center">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="w-10 aspect-square mr-2 object-cover rounded"
                                                    />
                                                    <p className="line-clamp-2 text-gray-700">
                                                        {product.name}
                                                    </p>
                                                </td>
                                                <td className="p-2 text-gray-600">${product.price.toFixed(2)}</td>
                                                <td className="p-2 text-center text-lg">
                                                    {product.quantity}
                                                </td>
                                                <td className="p-2 text-gray-600">${product.subtotal.toFixed(2)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <div className="mt-6 pt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                            <p>Subtotal</p>
                            <p>$13,047.00</p>
                        </div>
                        <div className="flex justify-between text-sm">
                            <p>Shipping</p>
                            <p>$2.00</p>
                        </div>
                        <div className="flex justify-between text-lg font-bold">
                            <p>Total</p>
                            <p>$13,049.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
