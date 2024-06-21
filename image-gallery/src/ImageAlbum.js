import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ImageAlbum.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'




const ImageAlbum = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Simulated API keys and URLs (replace with your actual API keys and URLs)
       const simulatedApiResponse = [
                    {"id":"Bko0fl547","url":"https://cdn2.thedogapi.com/images/Bko0fl547_1280.jpg","width":500,"height":300},
                    {"id":"rJifQpT4m","url":"https://cdn2.thedogapi.com/images/rJifQpT4m.gif","width":600,"height":300},
                    {"id":"qBYpfkZr1","url":"https://cdn2.thedogapi.com/images/qBYpfkZr1.jpg","width":400,"height":300},
                    {"id":"mhikcBw9U","url":"https://cdn2.thedogapi.com/images/mhikcBw9U.jpg","width":500,"height":300},
                    {"id":"H_9Mcf3yk","url":"https://cdn2.thedogapi.com/images/H_9Mcf3yk.jpg","width":500,"height":300},
                    {"id":"Nryvx7PIf","url":"https://cdn2.thedogapi.com/images/Nryvx7PIf.jpg","width":100,"height":300},
                    {"id":"MyqmolpOL","url":"https://cdn2.thedogapi.com/images/MyqmolpOL.jpg","width":300,"height":300},
                    {"id":"CjaTGNYBQ","url":"https://cdn2.thedogapi.com/images/CjaTGNYBQ.jpg","width":500,"height":300},
                    {"id":"5nxQPtGcA","url":"https://cdn2.thedogapi.com/images/5nxQPtGcA.jpg","width":1000,"height":300},
                    
                ];
                


                useEffect(()=>{
                    const fetchImages=async() =>{
                        try{
                            //simulate fetching images from an API
                            setImages(simulatedApiResponse);
                            setLoading(false);
                        }catch(err){
                            setError(err.message);
                            setLoading(false);
                        }
                    };
                    fetchImages();
                },[]);

         

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="image-album">
            <Slide>
            {images.map((image, index) => (
                <div key={index} className="each-slide">
                    <div style={{...divStyle,'backgroundImage':`url(${simulatedApiResponse.url})`}}> 
                        <span style={spanStyle}>{image.id}</span>
                    <img src={image.url} alt={image.id} width={"500px"}/>
                    </div> 
                </div>
            ))}
            </Slide>
        </div>
    );
};

export default ImageAlbum;
const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000',
    borderRadius:'10px'
  };
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '500px',
    width:'100%'
  };


