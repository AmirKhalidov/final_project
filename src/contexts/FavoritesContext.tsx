import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Player } from '@/types/Player';

interface FavoritesContextType {
  favorites: Player[];
  addToFavorites: (player: Player) => void;
  removeFromFavorites: (playerId: number) => void;
  isFavorited: (playerId: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Player[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteItems');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteItems', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (player: Player) => {
    setFavorites(prev => [...prev, player]);
  };

  const removeFromFavorites = (playerId: number) => {
    setFavorites(prev => prev.filter(p => p.Rk !== playerId));
  };

  const isFavorited = (playerId: number) => {
    return favorites.some(p => p.Rk === playerId);
  };

  return (
    <FavoritesContext.Provider value={{
      favorites,
      addToFavorites,
      removeFromFavorites,
      isFavorited
    }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}