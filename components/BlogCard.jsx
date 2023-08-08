import React from 'react'
import { Link } from "next/Link";


const BlogCard = ({item}) => {

  return (
    <div className="m-auto px-6 sm:px-0 sm:w-10/12 md:w-7/12 lg:w-6/12 xl:w-4/12">  
    <div className="relative group">
      <div
        role="hidden"
        className="absolute inset-0 w-full h-full rounded-3xl bg-white transition duration-300 shadow-xl group-hover:scale-105"
      ></div>
      <div className="relative flex flex-wrap gap-6 p-6 sm:flex-nowrap">
        <div className="sm:w-5/12">
          <img
           src={item?.image}
            className="h-full w-full object-cover rounded-2xl"
            alt=""
          />
        </div>

        <div className="space-y-4 sm:w-7/12">
          <h3 className="text-2xl font-bold text-gray-700">
            {item?.title}
          </h3>
          <p className="text-gray-600">{item?.title}</p>

      


          <div className="pt-6 border-t flex gap-4">
            <img
           className="w-10 h-15 object-cover rounded-full"
           src={item?.image}
           alt="author photo"
             /> 
            <div>
              <h6 className="text-base font-semibold text-gray-600">
                John Doe
              </h6>
              <span className="block text-xs tracking-wide text-gray-500">
                 Web Developer
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BlogCard