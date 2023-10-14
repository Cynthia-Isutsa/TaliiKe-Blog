"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Blogs = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `http://localhost:1337/api/blogs?populate=*&pagination[start]=0&pagination[limit]=${limit}`
      );
      let response = data.data.data;
      console.log(response);
      setData(response);
    };
    fetchData();
  }, [limit]);

  const handleLimit = () => {
    setLimit(limit + 3);
  };

  console.log(data);
  return (
    <div className="container mx-auto xl:max-w-[1180px] pt-[40px] text-white pb-[40px]">
      <h1 className="text-start text-[24px] font-bold">Latest Post</h1>
      <div className=" mt-[20px] grid grid-cols-3 gap-[20px]">
        {data?.map((item: any, index: number) => (
          <Link href={`${item.id}`}>
            <div className="cursor-pointer w-full border border-[#2f3241]">
              <div className="h-[240px] w-full overflow-hidden">
                <img
                 src={`http://localhost:1337/uploads/girl_coding_e3fd6f5fdb.webp`}
                  alt=""
                  className="w-full h-[100%] object-cover hover:scale-[109%] transition-all duration-300 ease-in-out"
                />
              </div>
              <div className="pt-[15px] pl-[8px] pb-[5px]">
                <h2 className="bg-[#4B6BFB]/[5%] inline-block text-[#4B6BFB] py-[2px] px-[4px] mb-[15px]">
                  {item.attributes.category}
                </h2>
                <p className="text-[24px] font-bold">{item.attributes.title}</p>
                <p className = 'line-clamp-6 text-gray-500 md:text-lg'>{item.attributes.Description}</p>
                <p>{item.attributes.Date}</p>
              </div>
            </div>
        
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center pt-[40px]">
        <button
          onClick={handleLimit}
          className="h-[50px] w-[150px] border border-[#2f3241] text-[black] hover:tex-blue-700"
        >
          View All Posts
        </button>
      </div>
    </div>
  );
};

export default Blogs;