import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Exploring the Beauty of Modern Design",
      description:
        "An insight into how modern design trends shape user experiences.",
      image: "/images/slides/slide7.png",
      date: "Dec 1, 2024",
    },
    {
      id: 2,
      title: "The Rise of AI in Everyday Applications",
      description:
        "Learn how artificial intelligence is being integrated into daily tools.",
      image: "/images/slides/slide5.png",
      date: "Nov 25, 2024",
    },
    {
      id: 3,
      title: "Sustainability in Web Development",
      description:
        "Discover eco-friendly approaches in software and web development.",
      image: "/images/slides/slide8.png",
      date: "Nov 18, 2024",
    },
    {
      id: 4,
      title: "Innovations in Mobile Technology",
      description:
        "A look at the latest breakthroughs in mobile devices and platforms.",
      image: "/images/slides/slide6.png",
      date: "Nov 10, 2024",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 lg:px-0 py-16">
      {/* Heading */}
      <h1 className="text-3xl lg:text-4xl font-semibold text-center mb-6">
        Our Blogs
      </h1>
      <p className="text-gray-500 text-center max-w-2xl mx-auto mb-8">
        Discover insights, tips, and the latest trends in technology, design,
        and development. Stay updated with our curated blog posts.
      </p>

      {/* Featured Blog */}
      <div className="bg-primary text-white rounded-lg overflow-hidden mb-16">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <Image
              src="/images/slides/slide6.png"
              alt="Featured Blog"
              width={600}
              height={400}
              className="object-cover w-full aspect-video"
            />
          </div>
          <div className="lg:w-1/2 p-8">
            <p className="text-gray-100 text-sm mb-4">Nov 10, 2024</p>
            <h2 className="text-3xl font-semibold mb-4 line-clamp-3">
              Revolutionizing Web Experiences in 2024
            </h2>
            <p className="text-lg text-gray-200 mb-4 line-clamp-3">
              Dive into the innovative web solutions reshaping the digital world
              and enhancing user experiences across platforms.
            </p>
            <Button variant='secondary'>
                Read More
            </Button>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white flex flex-col items-start rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="w-full aspect-video relative">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm mb-2 line-clamp-1">
                  {blog.date}
                </p>
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {blog.description}
                </p>
              </div>
              <Button>Read More</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
