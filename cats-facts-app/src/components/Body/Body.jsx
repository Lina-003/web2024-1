import React from 'react';
import { useState, useEffect } from 'react';
import './Body.css'
import { useFetchFacts, useFetchImageCats, CatFact, CatImage, Button } from '../index';

export const Body = () => {
  const { fact, 
          isLoading: isLoadingFacts
  } = useFetchFacts();
  const { catImageUrl, 
          isLoading: isLoadingImg, 
          error: imgError, 
          setReloadKey 
  } = useFetchImageCats();
  const [isLoading, 
        setIsLoading
  ] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading || isLoadingFacts || isLoadingImg) {
    return <div className='loader-container'>
      <div className='loader'> </div>
    </div>;
  }

  if (imgError) {
    return <div>Error: {imgError.message}</div>;
  }

  const handleReload = () => {
    window.location.reload(); 
  }

  return (
    <main>
      <div className='all-container'>
        <h1>Learn Random Cat Facts</h1>
        <div className='image-container'>
          <CatImage src={catImageUrl}/>
        </div> 
        <CatFact text={fact}/>
        <Button onClick={handleReload}/>
      </div>
    </main>
  );
};
