/*import { useState, useEffect } from 'react';

export const useFetchImageCats = () => {
  const [catImageUrl, setCatImageUrl] = useState('');
  const [catFact, setCatFact] = useState('');
  const [isLoadingImg, setIsLoading] = useState(false);
  const [reloadKey, setReloadKey] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isLoadingImg) return;

        setIsLoading(true);

        const factResponse = await fetch('https://catfact.ninja/fact');
        if (!factResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const factData = await factResponse.json();
        const firstFourWords = factData.fact.split(' ').slice(0, 4).join(' ');

        const imageResponse = await fetch(`https://cataas.com/cat/says/${firstFourWords}?json=true`);
        if (!imageResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const imageData = await imageResponse.json();

        setCatImageUrl(imageData.url);
        setCatFact(factData.fact);
        setIsLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [reloadKey, isLoadingImg]); 

  return { catImageUrl, isLoadingImg, catFact, setReloadKey };
};
*/