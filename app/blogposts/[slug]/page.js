"use client";
import React from 'react';
import { Client, Databases, Query } from "appwrite";
import { useState, useEffect } from "react";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64d0735810589506c35f");

 export default function page({ params }) {
  const slug = params.slug;
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const databases = new Databases(client);

    const promise = databases.listDocuments("64d0751a73fcc9bc1534", "64d075279ecc95d0d903", [
      Query.equal("slug", slug)
    ]);

    // Fetch documents from the database
    promise
      .then((response) => {
        setBlog(response.documents[0]); // Update blogs state with fetched data
      })
      .catch((error) => {
        console.log(error);
      });
  }, [slug]);

  return (
    <div>
      {slug}
      <h2>{blog?.content}</h2>
    </div>
  );
};

 
