import { createContext, useContext } from 'react';

export const ArticlesContext = createContext();

export const useArticles = () => {
   return useContext(ArticlesContext)
}