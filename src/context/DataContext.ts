"use client"
import { createContext, useContext } from "react"

interface Episodes {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

interface Characters {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
    episode: string[];
  
  }
interface DataContextType {
    infoEpisodes: Episodes[];
    allEpisodes: Episodes[];
    allCharacters: Characters[];
    infoCharacters: Characters[];
    homePage: number;
    charactersPage: number;
    searchItem: string;
    setSearchItem: (searchItem: string) => void;
    setHomePage: (homePage:number) => void;
    setCharactersPage: (charactersPage:number) => void;    
}

export const DataContext = createContext<DataContextType | undefined>(undefined); 

export const useFetchContent = () => {
    const context = useContext(DataContext);
    if(!context){
        throw new Error("UseFetchContext must be in a DataProvider");
    }
    return context;
}
