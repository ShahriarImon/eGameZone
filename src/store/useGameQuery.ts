import { create } from "zustand";

interface GameQuery {
  genres?: number;
  searchText?: string;
  orderedBy?: string;
  platform?: string;
  pageNo?: string;
  totalPage?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenres: (genres: number) => void;
  setOrderedBy: (orderedBy: string) => void;
  setSearchText: (searchText: string) => void;
  setPlatform: (platform: string) => void;
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
  setPlatform: (platform) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platform } })),
}));

export default useGameQuery;
