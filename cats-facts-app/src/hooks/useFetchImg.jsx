import { useState, useEffect } from 'react';

export const useFetchImageCats = () => {
  const [catImageUrl, 
        setCatImageUrl
  ] = useState('');
  const [catFact, 
        setCatFact
  ] = useState('');
  const [isLoadingImg, 
        setIsLoading
  ] = useState(false);
  const [error, 
        setError
  ] = useState(null);
  const [reloadKey, 
        setReloadKey
  ] = useState(false);

  const fetchData = async () => {
    try {
      if (isLoadingImg) return;

      setIsLoading(true);

      const factResponse = await 
      fetch('https://catfact.ninja/fact');
      if (!factResponse.ok) {
        throw new Error('Network response was not ok');
      }
      const factData = await factResponse.json();
      const firstFourWords = encodeURIComponent(
        factData.fact.split(' ')
        .slice(0, 4).join(' '));

      const imageResponse = await 
       fetch(`https://cataas.com/cat/says/${firstFourWords}?font=Impact&fontSize=30&fontColor=black&fontBackground=none&position=center`);
      if (!imageResponse.ok) {
        throw new Error('Network response was not ok');
      }
      const imageData = await imageResponse.blob();
      const imageUrl = URL.createObjectURL(imageData);

      setCatImageUrl(imageUrl);
      setCatFact(factData.fact);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [reloadKey]); 

  return {
    catImageUrl, 
    isLoadingImg, 
    catFact, 
    error, 
    setReloadKey 
  };
};
