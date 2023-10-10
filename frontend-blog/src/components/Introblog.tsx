'use client';
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Link from 'next/link';

const IntroBlog = () => {

    const [data, setData] = useState([]);
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `http://localhost:1337/api/intro-blogs?populate=*&pagination[start]=0&pagination[limit]=${limit}`
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
      <div >
        <div className='mx-10'>
            <h1 className="text-start text-[24px] font-bold text-red-800">Intro Post</h1>
         </div>
        {data?.map((item: any, index: number) => (
          <Link href={`${item.id}`} key={index} className='grid grid-cols-1 md:grid-cols-2 mt-10 px-10 md:px-15 lg:px-32 gap-8'>
            <div>
                <img src={'http://localhost:1337/uploads/MERNS_b037502ad9.webp'} alt=""
                className="rounded-2xl object-cover w-full h-[100%] hover:scale-[109%] transition-all duration-300 ease-in-out"/>
            </div>
            <div>
                <h3 className='text-red-700 text-semibold'>{item.attributes.Hashtag}</h3>
                <h2 className='text-xl font-bold my-2'>{item.attributes.Title}</h2>
                <p className = 'line-clamp-6 text-gray-500 md:text-lg'>{item.attributes.description}</p>
                <p>{item.attributes.Date}</p>
            </div>
          </Link>
    ))}
        
      </div>
    )
}

  

export default IntroBlog