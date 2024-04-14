import React from 'react';
import { useState, useEffect } from 'react';
import { useFetchFacts } from '../hooks/useFetch';
//import { useFetchImageCats } from '../hooks/useFetchImg';
import { CatFact } from './CatFact';
//import { CatImage } from './CatImage';

export const Body = () => {
  const { fact, isLoading: isLoadingFacts } = useFetchFacts();
  //const { catImageUrl, isLoading: isLoadingImg } = useFetchImageCats();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading || isLoadingFacts /*|| isLoadingImg*/) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h1>Learn Random Cat Facts</h1>
      <CatImage src={catImageUrl}/>
      <CatFact text={fact} />
    </main>
  );
};
