'use client';
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar';


const About = () => {

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
        <Navbar />
        <div className='bg-[#4B6BFB]/[5%]  rounded-xl w-full h-[200px]'>
            <h1 className="text-4xl md:text-7xl lg:pt-9 font-bold text-center">Intro Post</h1>
         </div>
        {data?.map((item: any, index: number) => (
            <div key={index} className ='grid grid-cols-1 mt-10 mb-3 px-10 md:px-15 lg:px-32 gap-8'>
            <div>
                <h2 className='text-3xl font-bold my-5'>{item.attributes.Title}</h2>
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

  

export default About