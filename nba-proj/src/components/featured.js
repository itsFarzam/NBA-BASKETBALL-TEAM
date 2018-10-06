import React from 'react';
import Carousel from 'nuka-carousel';

const settings ={
    renderCenterRightControls : null ,
    renderCenterLeftControls : null  ,
    renderBottomCenterControls : null 
}

const generateSlides=({slides})=>{   
           if(slides){
         return (
            <Carousel {...settings}>
                {slides.map(function(item){
                    return (
                        <div key={item.id} className="item_slider" 
                            style={{background:`url(/images/covers/${item.cover})`}}>
                            <div className="caption">
                                <h4>{item.topic}</h4>
                                <p>{item.title}</p>
                            </div>
                         </div>
                        )  
                })}
            </Carousel>
        )
    } 
}


const Featured = (props) => {
    console.log(props)
    return(
        <div>
            {generateSlides(props)}
              slider
        </div>
    )
}

export default Featured 