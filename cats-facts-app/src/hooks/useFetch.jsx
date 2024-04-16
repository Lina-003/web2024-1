import { useState, useEffect } from 'react';

export const useFetchFacts = () => {
  const [fact, 
        setFact
  ] = useState('');
  const [isLoadingFacts, 
        setLoadingFacts
  ] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await 
        fetch('https://catfact.ninja/fact?max_length=140');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFact(data.fact);
        setLoadingFacts(false);
      } catch (error) {
        console.error('Facts was not found, sorry :c', 
        error);
        setFact('unknown');
        setLoadingFacts(false);
      }
    };

    fetchData();
  }, []);

  return { fact, 
    isLoadingFacts 
  };
};
