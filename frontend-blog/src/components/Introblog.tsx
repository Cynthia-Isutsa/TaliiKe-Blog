import React from 'react'
import Image from 'next/image'

const IntroBlog = ({post}) => {

  

    return (
      <div className='grid grid-cols-1 md:grid-cols-2 mt-10 px-10 md:px-15 lg:px-32 gap-8'>
        <Image src='http://localhost:1337/uploads/Nairobi_c3166914c7.jpg' alt="image" height={500} width={500}/>
        <div>
        <h4>{post.tag}</h4>
        <h2>{post.title}</h2>
        <p className = 'line-clamp-6'>{post.desc}</p>
       {/*} .substring(0, 200)
          <Link to={`/details/${post.id}`}>Read more</Link>*/}
          
        </div>
      </div>
    )
}

  

export default IntroBlog