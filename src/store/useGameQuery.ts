import { create } from "zustand";

interface GameQuery {
  genres?: number;
  searchText?: string;
  orderedBy?: string;
  platforms?: number;
  pageNo?: string;
  totalPage?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenres: (genres: number) => void;
  setOrderedBy: (orderedBy: string) => void;
  setSearchText: (searchText: string) => void;
  setPlatforms: (platforms: number) => void;
}
const useGameQuery = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) =>
    set(() => ({
      gameQuery: { searchText },
    })),
  setGenres: (genres) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, genres: genres },
    })),
  setOrderedBy: (orderedBy) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, orderedBy },
    })),
  setPlatforms: (platforms) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platforms } })),
}));

export default useGameQuery;
