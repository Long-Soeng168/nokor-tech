// components/PageSuccess.js
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const PageSuccess = async () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">

      <h1 className="mt-4 text-3xl font-semibold text-gray-800">
        Thanks For Order!
      </h1>
      <p className="mt-2 text-gray-600">
        Your Order Has Been Successfully Placed.
      </p>
      <p className="mt-2 text-gray-600">
        We Will Get Back To You As Soon As Possible
      </p>

      <Link href="/" passHref>
        <Button className="mt-6">Return To Home Page</Button>
      </Link>
    </div>
  );
};

export default PageSuccess;
