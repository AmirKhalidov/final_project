import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

interface FiltersState {
  searchValue: string;
  minYear: number;
  maxYear: number;
  minAge: number;
  maxAge: number;
  nationality: string;
  club: string;
  position: string;
  competition: string;

  // Actions
  setSearchValue: (value: string) => void;
  setYearRange: (min: number, max: number) => void;
  setAgeRange: (min: number, max: number) => void;
  setNationality: (value: string) => void;
  setClub: (value: string) => void;
  setPosition: (value: string) => void;
  setCompetition: (value: string) => void;
  
  // Utility actions
  resetFilters: () => void;
  setFromSearchParams: (params: URLSearchParams) => void;
  getSearchParamsObject: () => Record<string, string>;
}

const defaultValues = {
  searchValue: '',
  minYear: 1982,
  maxYear: 2008,
  minAge: 16,
  maxAge: 41,
  nationality: '',
  club: '',
  position: '',
  competition: '',
};

export const useFiltersStore = create<FiltersState>()(
  subscribeWithSelector((set, get) => ({
    ...defaultValues,

    setSearchValue: (value: string) => set({ searchValue: value }),
    
    setYearRange: (min: number, max: number) => set({ minYear: min, maxYear: max }),
    
    setAgeRange: (min: number, max: number) => set({ minAge: min, maxAge: max }),
    
    setNationality: (value: string) => set({ nationality: value }),
    
    setClub: (value: string) => set({ club: value }),
    
    setPosition: (value: string) => set({ position: value }),
    
    setCompetition: (value: string) => set({ competition: value }),

    resetFilters: () => set(defaultValues),

    setFromSearchParams: (params: URLSearchParams) => {
      set({
        searchValue: params.get('search') || defaultValues.searchValue,
        minYear: Number(params.get('minYear')) || defaultValues.minYear,
        maxYear: Number(params.get('maxYear')) || defaultValues.maxYear,
        minAge: Number(params.get('minAge')) || defaultValues.minAge,
        maxAge: Number(params.get('maxAge')) || defaultValues.maxAge,
        nationality: params.get('nationality') || defaultValues.nationality,
        club: params.get('club') || defaultValues.club,
        position: params.get('position') || defaultValues.position,
        competition: params.get('competition') || defaultValues.competition,
      });
    },

    getSearchParamsObject: () => {
      const state = get();
      const params: Record<string, string> = {};
      
      if (state.searchValue) params.search = state.searchValue;
      if (state.minYear !== defaultValues.minYear) params.minYear = String(state.minYear);
      if (state.maxYear !== defaultValues.maxYear) params.maxYear = String(state.maxYear);
      if (state.minAge !== defaultValues.minAge) params.minAge = String(state.minAge);
      if (state.maxAge !== defaultValues.maxAge) params.maxAge = String(state.maxAge);
      if (state.nationality) params.nationality = state.nationality;
      if (state.club) params.club = state.club;
      if (state.position) params.position = state.position;
      if (state.competition) params.competition = state.competition;
      
      return params;
    },
  }))
);