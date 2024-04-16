import React from 'react';
import './Body.css'
import { useState, useEffect } from 'react';
import { useFetchFacts } from '../../hooks/useFetch';
import { useFetchImageCats } from '../../hooks/useFetchImg';
import { CatFact } from '../CatFact';
import { CatImage } from '../CatImage';
import { Button } from '../Button/Button';

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
    return <div className='loader'>Loading...</div>;
  }

  if (imgError) {
    return <div>Error: {imgError.message}</div>;
  }

  const handleReload = () => {
    window.location.reload(); 
  }

  return (
    <main>
      <h1>Learn Random Cat Facts</h1>
      <CatImage src={catImageUrl}/>
      <CatFact text={fact}/>
      <Button onClick={handleReload}/>
    </main>
  );
};
