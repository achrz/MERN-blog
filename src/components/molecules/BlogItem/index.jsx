import React from "react";
import { RegisterBg } from "../../../assets";

const BlogItem = () => {
  return (
    <div>
      <div className="w-full rounded-lg overflow-hidden shadow-lg shadow-black/40">
        <img src={RegisterBg} alt="" className="w-full h-48 object-cover" />
        <div className="p-4">
          <p className="text-xl font-bold text-[#313131]">Title</p>
          <p className="text-xs mt-3 text-gray-500">Author Date</p>
          <p className="mt-4 text-base text-[#353535]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere aut
            perferendis praesentium architecto sed ut voluptatum corporis ullam
            suscipit laudantium alias, quisquam animi possimus nulla quis
            voluptate rerum excepturi pariatur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;