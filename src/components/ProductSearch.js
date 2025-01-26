import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../App';

const ProductSearch = ({ searchTerm, setSearchTerm }) => {
  const { isDarkTheme } = useContext(ThemeContext);

  // TODO: Exercice 2.1 - Utiliser le LanguageContext
  
  // TODO: Exercice 1.2 - Utiliser le hook useDebounce
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setSearchTerm(debouncedSearchTerm);
    },1000);
    return ()=> clearTimeout(timer);
  },[debouncedSearchTerm,setSearchTerm]);
  return (
    <div className="mb-4">
      <input
        type="text"
        value={debouncedSearchTerm}
        onChange={(e) => setDebouncedSearchTerm(e.target.value)} // met à jour searchItem dans le parent
        placeholder="Rechercher un produit..."
        className={`form-control ${isDarkTheme ? 'bg-dark text-light' : ''}`}
      />
    </div>
  );
};

export default ProductSearch;