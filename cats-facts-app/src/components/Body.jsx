import React from 'react';
import { useState, useEffect } from 'react';
import { useFetchFacts } from '../hooks/useFetch';
import { CatFact } from './CatFact';

export const Body = () => {
  const { fact, isLoadingFacts } = useFetchFacts();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading || isLoadingFacts) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h1>Learn Random Cat Facts</h1>
      <CatFact text={fact} />
    </main>
  );
};
