
'use client';

import React, { useEffect } from "react";
import Image from "next/image";
import { FaRegComment, FaUser } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const blogPosts = [
  {
    id: 1,
    date: "22 Dec",
    title: "CTO to showcase technology solutions at sea air space",
    excerpt: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
    image: "/blog-1-1.jpg",
  },
  {
    id: 2,
    date: "22 Dec",
    title: "In interdum turpis tellus tempus mollis lobortis ultricies",
    excerpt: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
    image: "/blog-4-1.png",
  },
  {
    id: 3,
    date: "22 Dec",
    title: "Cras quam turpis, commodo vel blandit sed, porttitor",
    excerpt: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
    image: "/blog-4-1.png",
  },
];

const LatestBlog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16 bg-white text-center" data-aos="fade-right">
      <h2 className="text-3xl font-semibold mb-4">Latest Blog</h2>
      <div className="border-b-2 w-12 mx-auto border-blue-500 mb-10"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow rounded overflow-hidden text-left"
            data-aos="fade-up"
            
          >
            <div className="relative">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="w-full object-cover"
              />
              <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-br">
                {post.date}
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-md mb-2 hover:text-blue-500 cursor-pointer">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <FaUser className="text-blue-500" />
                  Admin
                </div>
                <div className="flex items-center gap-1">
                  <FaRegComment className="text-blue-500" />
                  1 Comment
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestBlog;
