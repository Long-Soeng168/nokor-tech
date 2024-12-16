"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
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
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

// Types
type Product = {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
    subtotal: number;
};

type Option = { value: string; label: string };

// Example products
const products: Product[] = [
    {
        id: 1,
        name: "Gaming PC with Intel i7",
        image: "https://via.placeholder.com/100",
        price: 4349.0,
        quantity: 1,
        subtotal: 4349.0,
    },
    {
        id: 2,
        name: "MSI MEG Trident X 10SD",
        image: "https://via.placeholder.com/100",
        price: 4349.0,
        quantity: 1,
        subtotal: 4349.0,
    },
];

// Components
const FormField: React.FC<{
    label: string;
    required?: boolean;
    children: React.ReactNode;
}> = ({ label, required, children }) => (
    <div className="text-sm mb-4">
        <p className="font-semibold text-black">
            {label} {required && <span className="text-red-500">*</span>}
        </p>
        {children}
    </div>
);

const Dropdown: React.FC<{
    label: string;
    options: Option[];
    value: string;
    onChange: (value: string) => void;
}> = ({ label, options, value, onChange }) => {
    const [open, setOpen] = useState(false);

    return (
        <FormField label={label} required>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full py-2 justify-between"
                    >
                        {value
                            ? options.find((option) => option.value === value)?.label
                            : `Select ${label.toLowerCase()}...`}
                        <ChevronsUpDown className="opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-2">
                    <Command>
                        <CommandInput placeholder={`Search ${label.toLowerCase()}...`} />
                        <CommandList>
                            <CommandEmpty>No {label.toLowerCase()} found.</CommandEmpty>
                            <CommandGroup>
                                {options.map((option) => (
                                    <CommandItem
                                        key={option.value}
                                        value={option.value}
                                        onSelect={(currentValue) => {
                                            onChange(currentValue === value ? "" : currentValue);
                                            setOpen(false);
                                        }}
                                    >
                                        {option.label}
                                        <Check
                                            className={cn(
                                                "ml-auto",
                                                value === option.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </FormField>
    );
};

const ProductSummary: React.FC<{ product: Product }> = ({ product }) => (
    <div className="flex gap-4 mb-4">
        <img
            src={product.image}
            alt={product.name}
            className="w-24 h-24 object-cover rounded-sm"
        />
        <div>
            <p className="font-semibold">{product.name}</p>
            <p className="text-gray-600">Qty: {product.quantity}</p>
            <p className="font-semibold text-gray-900">${product.subtotal}</p>
        </div>
    </div>
);

const CheckoutPage: React.FC = () => {
    const [valueProvince, setValueProvince] = useState("");
    const [valueCountry, setValueCountry] = useState("");

    return (
        <div className="max-w-screen-xl mx-auto mb-20">
            <h1 className="text-2xl lg:text-3xl font-bold mb-8">Checkout</h1>
            <div className="flex flex-col  px-2 lg:flex-row gap-12">
                {/* Shipping Address */}
                <div className="lg:w-8/12">
                    <div>
                        <FormField label="Name" required>
                            <input
                                type="text"
                                className="border py-2 w-full rounded-md px-4 text-gray-800"
                            />
                        </FormField>
                        <FormField label="Phone Number" required>
                            <input
                                type="email"
                                className="border py-2 w-full rounded-md px-4 text-gray-800"
                            />
                        </FormField>
                        <FormField label="Note" required>
                            <Textarea
                                id="note"
                                placeholder='Note'
                            />
                        </FormField>
                    </div>
                    <Link href='/checkout/success' className="flex justify-end">
                        <Button>
                            Place Order
                        </Button>
                    </Link>
                </div>

                {/* Order Summary */}
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

export default CheckoutPage;
