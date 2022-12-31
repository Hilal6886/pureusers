import React from 'react';
import './blog.scss'
import {BsArrowRightShort} from 'react-icons/bs';
const { getImageUrl } = require('../../services/media.service.js')
const img= getImageUrl('img.jpg')

const posts = [    
    {
        id:"b1",
        imageUrl: img,
        title:'Dal Lakh',
        description: 'Dal is a lake in Srinagar Dal Lake is a misnomer as Dal in Kashmiri means lake, the summer capital of Jammu and Kashmir. The urban lake, is integral to tourism and recreation in Kashmir and is named the “Jewel in the crown of Kashmir',
    },
    {
        id:"b2",
        title: "Why you should visit ladakh",
        imageUrl:"https://firebasestorage.googleapis.com/v0/b/quantumtourandtravels.appspot.com/o/quantumtourandtravel%2Fblogs%2FShyok_river_Ladakh.jpg.webp?alt=media&token=5f1a8588-eb44-4726-859a-0d29a7ad3454",
        description: "Imposing mountains, thrilling roads, and  Cinematic views, that’s the beauty of Ladakh",
    },
    {
        id:"b3",
        title: "Visiting Kashmir",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/quantumtourandtravels.appspot.com/o/quantumtourandtravel%2Fblogs%2Fimages.jpg?alt=media&token=dfe0a5fa-d486-4afa-b6d0-00ebfe018409",
        description: "Kashmir is the northernmost geographical region of the Indian subcontinent",
    },
    {
        id:"b4",
        imageUrl: img,
        title:'Dal Lakh',
        description: 'Dal is a lake in Srinagar Dal Lake is a misnomer as Dal in Kashmiri means lake, the summer capital of Jammu and Kashmir. The urban lake, is integral to tourism and recreation in Kashmir and is named the “Jewel in the crown of Kashmir',
    },
    {
        id:"b5",
        imageUrl: img,
        title:'Dal Lakh',
        description: 'Dal is a lake in Srinagar Dal Lake is a misnomer as Dal in Kashmiri means lake, the summer capital of Jammu and Kashmir. The urban lake, is integral to tourism and recreation in Kashmir and is named the “Jewel in the crown of Kashmir',
    },
    {
        id:"b6",
        imageUrl: img,
        title:'Dal Lakh',
        description: 'Dal is a lake in Srinagar Dal Lake is a misnomer as Dal in Kashmiri means lake, the summer capital of Jammu and Kashmir. The urban lake, is integral to tourism and recreation in Kashmir and is named the “Jewel in the crown of Kashmir',
    },
];

const Blog = () => {
    return (
     <section className='blog section'>
        <div className="secContaine">
            <div className="secitro">
                <h2 className='secTile'> 
                Our Blog
                </h2>
                <p>
                    An insight to the incredible experince in the world.
                </p>
            </div>
            <div className="mainCotainer grid">
                { 
                    posts.map(({id, imageUrl, title, description} )=>{
                        return (
                            <div className="snglePost grid" key={id} >
                                <div className="imgDev">
                                    <img src={imageUrl} alt={title} />
                                </div>
                                <div className="postDetails">
                                    <h3>
                                        {title}
                                    </h3>
                                    <p>{description}</p>
                                </div>
                                <a href='/' className='flex'>
                                Read More
                                <BsArrowRightShort className="icon"/>
                                </a>
                            </div>
                        )
                    })
                }
               
            </div>
        </div>
       
     </section>
    )
}
export default Blog