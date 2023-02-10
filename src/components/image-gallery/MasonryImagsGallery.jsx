import React from 'react'
import gallryimages from './gallryimages'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
const MasonryImagsGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakpoints={{350:1, 768:3, 992:4}}>
       <Masonry gutter= '1rem'>
        {
            gallryimages.map((item,index) =>(
                <img className='masonry_img' src={item} key={index} alt=''
                style={{'width':'100%',display: 'block', borderRadius: '10px'}}/>
            ))
        }

       </Masonry>
    </ResponsiveMasonry>
  )
}

export default MasonryImagsGallery