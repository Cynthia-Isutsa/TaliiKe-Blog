import React, {useState} from 'react'

const SubNavbar = () => {
    const tags =[
        {
          id:1,
          name:'All'
        },
        {
          id:2,
          name:'HTML/CSS'
        },
        {
          id:3,
          name:'MERN'
        },
        {
          id:4,
          name:'Django'
        },
        {
          id:5,
          name:'DSA'
        }
      ]

      
const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div>
        <div className='flex justify-center items-center gap-3 md:gap-14 xl:gap-20 my-7'>
        {tags.map((item, index) => (
          <ul key= {item.id} onClick={() =>setActiveIndex(index)} className={`${ index === activeIndex ?
           'bg-blue-500 text-semibold': null} px-2 rounded-lg cursor-pointer hover:scale-110 hover:border-[1px]
            border-blue-500 transition-all duration-300 ease-in-out`}>
             <li  className='px'>{item.name}</li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default SubNavbar
