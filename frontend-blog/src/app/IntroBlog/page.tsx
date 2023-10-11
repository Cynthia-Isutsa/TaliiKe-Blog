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
      //console.log(response);
      setData(response);
    };
    fetchData();
  }, [limit]);

  const handleLimit = () => {
    setLimit(limit + 3);
  };

  //console.log(data);



    return (
      <div >
        <div className='mx-10'>
            <h1 className="text-start text-[24px] bg-[#4B6BFB]/[5%] font-bold text-red-800">Intro Post</h1>
         </div>
        {data?.map((item: any, index: number) => (
            <div key={index} className ='grid grid-cols-1 mt-10 mb-3 px-10 md:px-15 lg:px-32 gap-8'>
            <div>
                <h2 className='text-3xl font-bold my-3'>{item.attributes.Title}</h2>
                <img src={'http://localhost:1337/uploads/MERNS_b037502ad9.webp'} alt=""
                className="object-cover w-[70%] h-[80%] text-center"/>
                
            </div>
                
            <div>
                <h3 className='text-red-700 text-semibold mb-2'>{item.attributes.Hashtag}</h3>
               
                <p className = 'text-gray-500 object-cover'>{item.attributes.description}</p>
            </div>
            </div>
    ))}
        
      </div>
    )
}

  

export default IntroBlog