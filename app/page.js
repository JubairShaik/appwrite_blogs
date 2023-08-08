"use client";
import Image from "next/image";
import { Client, Databases, ID } from "appwrite";
import { useState, useEffect } from "react";
import BlogCard from './../components/BlogCard';


const client = new Client()
.setEndpoint("https://cloud.appwrite.io/v1")
.setProject("64d0735810589506c35f");





export default function page() {
  // Initially The Blogs Are Empty
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
  
      const databases = new Databases(client);

    // Fetch documents from the database
    const promise = databases.listDocuments("64d0751a73fcc9bc1534", "64d075279ecc95d0d903")
    
      promise.then((response) => {
        setBlogs(response.documents); // Update blogs state with fetched data
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);



  return (

    <main>
      {/* Use map to render each blog */}
      {blogs.map((item) => (
        <div key={item.$id} className="gap-10  flex items-center justify-center" >          
         <BlogCard item={item} />
        </div>
      ))}
    </main>
  );
}
