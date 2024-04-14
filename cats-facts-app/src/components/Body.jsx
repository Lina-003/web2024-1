import { apiFact } from "../services/api-facts";
import { useEffect, useState } from "react";
import React from 'react'
import { CatFact } from "./CatFact";

export const Body = () => {
    const [fact, setFact] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const factResponse = async () => {
      setIsLoading(true);
      try {
        const factResponse = await apiFact();
        setFact(factResponse);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      factResponse();
    }, 
    []);
  
    return (
      <main>
        <h1>
          Learn Random Cat Fact
        </h1>
        <CatFact text={fact}/>
      </main>
    );
  };
  