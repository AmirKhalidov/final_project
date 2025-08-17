import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

interface FiltersState {
  hydrated: boolean;
  searchValue: string;
  minYear: number;
  maxYear: number;
  minAge: number;
  maxAge: number;
  nationality: string;
  club: string;
  position: string;
  competition: string;
  minCarries: number;
  maxCarries: number;
  minPrgC: number;
  maxPrgC: number;
  minPrgDist: number;
  maxPrgDist: number;
  minPrgR: number;
  maxPrgR: number;
  minMis: number;
  maxMis: number;
  minDis: number;
  maxDis: number;
  minAtt: number;
  maxAtt: number;
  minSucc: number;
  maxSucc: number;
  minSuccPct: number;
  maxSuccPct: number;
  minAtt3rd: number;
  maxAtt3rd: number;
  minAttPen: number;
  maxAttPen: number;

  // Actions
  setHydrated: (value: boolean) => void;
  setSearchValue: (value: string) => void;
  setYearRange: (min: number, max: number) => void;
  setAgeRange: (min: number, max: number) => void;
  setNationality: (value: string) => void;
  setClub: (value: string) => void;
  setPosition: (value: string) => void;
  setCompetition: (value: string) => void;
  setCarriesRange: (min: number, max: number) => void;
  setPrgCRange: (min: number, max: number) => void;
  setPrgDistRange: (min: number, max: number) => void;
  setPrgRRange: (min: number, max: number) => void;
  setMisRange: (min: number, max: number) => void;
  setDisRange: (min: number, max: number) => void;
  setAttRange: (min: number, max: number) => void;
  setSuccRange: (min: number, max: number) => void;
  setSuccPctRange: (min: number, max: number) => void;
  setAtt3rdRange: (min: number, max: number) => void;
  setAttPenRange: (min: number, max: number) => void;

  // Utility actions
  resetFilters: () => void;
  setFromSearchParams: (params: URLSearchParams) => void;
  getSearchParamsObject: () => Record<string, string>;
}

export const defaultValues = {
  hydrated: false,
  searchValue: "",
  minYear: 1982,
  maxYear: 2008,
  minAge: 16,
  maxAge: 41,
  nationality: "",
  club: "",
  position: "",
  competition: "",
  minCarries: 0,
  maxCarries: 2399,
  minPrgC: 0,
  maxPrgC: 213,
  minPrgDist: 0,
  maxPrgDist: 25308,
  minPrgR: 0,
  maxPrgR: 488,
  minMis: 0,
  maxMis: 117,
  minDis: 0,
  maxDis: 94,
  minAtt: 0,
  maxAtt: 3652,
  minSucc: 0,
  maxSucc: 161,
  minSuccPct: 0,
  maxSuccPct: 100,
  minAtt3rd: 0,
  maxAtt3rd: 27,
  minAttPen: 0,
  maxAttPen: 356,
};

export const useFiltersStore = create<FiltersState>()(
  subscribeWithSelector((set, get) => ({
    ...defaultValues,

    setSearchValue: (value: string) => set({ searchValue: value }),

    setYearRange: (min: number, max: number) =>
      set({ minYear: min, maxYear: max }),

    setAgeRange: (min: number, max: number) =>
      set({ minAge: min, maxAge: max }),

    setNationality: (value: string) => set({ nationality: value }),

    setClub: (value: string) => set({ club: value }),

    setPosition: (value: string) => set({ position: value }),

    setCompetition: (value: string) => set({ competition: value }),

    setCarriesRange: (min: number, max: number) =>
      set({ minCarries: min, maxCarries: max }),

    setPrgCRange: (min, max) => set({ minPrgC: min, maxPrgC: max }),

    setPrgDistRange: (min, max) => set({ minPrgDist: min, maxPrgDist: max }),

    setPrgRRange: (min, max) => set({ minPrgR: min, maxPrgR: max }),

    setMisRange: (min, max) => set({ minMis: min, maxMis: max }),

    setDisRange: (min, max) => set({ minDis: min, maxDis: max }),

    setAttRange: (min, max) => set({ minAtt: min, maxAtt: max }),

    setSuccRange: (min, max) => set({ minSucc: min, maxSucc: max }),

    setSuccPctRange: (min, max) => set({ minSuccPct: min, maxSuccPct: max }),

    setAtt3rdRange: (min, max) => set({ minAtt3rd: min, maxAtt3rd: max }),

    setAttPenRange: (min, max) => set({ minAttPen: min, maxAttPen: max }),

    resetFilters: () => set({ ...defaultValues, hydrated: true }),

    setHydrated: (value: boolean) => set({ hydrated: value }),

    setFromSearchParams: (params: URLSearchParams) => {
      set({
        searchValue: params.get("search") || defaultValues.searchValue,
        minYear: Number(params.get("minYear")) || defaultValues.minYear,
        maxYear: Number(params.get("maxYear")) || defaultValues.maxYear,
        minAge: Number(params.get("minAge")) || defaultValues.minAge,
        maxAge: Number(params.get("maxAge")) || defaultValues.maxAge,
        nationality: params.get("nationality") || defaultValues.nationality,
        club: params.get("club") || defaultValues.club,
        position: params.get("position") || defaultValues.position,
        competition: params.get("competition") || defaultValues.competition,
        minCarries:
          Number(params.get("minCarries")) || defaultValues.minCarries,
        maxCarries:
          Number(params.get("maxCarries")) || defaultValues.maxCarries,
        minPrgC: Number(params.get("minPrgC")) || defaultValues.minPrgC,
        maxPrgC: Number(params.get("maxPrgC")) || defaultValues.maxPrgC,
        minPrgDist:
          Number(params.get("minPrgDist")) || defaultValues.minPrgDist,
        maxPrgDist:
          Number(params.get("maxPrgDist")) || defaultValues.maxPrgDist,
        minPrgR: Number(params.get("minPrgR")) || defaultValues.minPrgR,
        maxPrgR: Number(params.get("maxPrgR")) || defaultValues.maxPrgR,
        minMis: Number(params.get("minMis")) || defaultValues.minMis,
        maxMis: Number(params.get("maxMis")) || defaultValues.maxMis,
        minDis: Number(params.get("minDis")) || defaultValues.minDis,
        maxDis: Number(params.get("maxDis")) || defaultValues.maxDis,
        minAtt: Number(params.get("minAtt")) || defaultValues.minAtt,
        maxAtt: Number(params.get("maxAtt")) || defaultValues.maxAtt,
        minSucc: Number(params.get("minSucc")) || defaultValues.minSucc,
        maxSucc: Number(params.get("maxSucc")) || defaultValues.maxSucc,
        minSuccPct:
          Number(params.get("minSuccPct")) || defaultValues.minSuccPct,
        maxSuccPct:
          Number(params.get("maxSuccPct")) || defaultValues.maxSuccPct,
        minAtt3rd: Number(params.get("minAtt3rd")) || defaultValues.minAtt3rd,
        maxAtt3rd: Number(params.get("maxAtt3rd")) || defaultValues.maxAtt3rd,
        minAttPen: Number(params.get("minAttPen")) || defaultValues.minAttPen,
        maxAttPen: Number(params.get("maxAttPen")) || defaultValues.maxAttPen,
      });
      set({ hydrated: true });
    },

    getSearchParamsObject: () => {
      const state = get();
      const params: Record<string, string> = {};

      if (state.searchValue) params.search = state.searchValue;
      if (state.minYear !== defaultValues.minYear)
        params.minYear = String(state.minYear);
      if (state.maxYear !== defaultValues.maxYear)
        params.maxYear = String(state.maxYear);
      if (state.minAge !== defaultValues.minAge)
        params.minAge = String(state.minAge);
      if (state.maxAge !== defaultValues.maxAge)
        params.maxAge = String(state.maxAge);
      if (state.nationality) params.nationality = state.nationality;
      if (state.club) params.club = state.club;
      if (state.position) params.position = state.position;
      if (state.competition) params.competition = state.competition;
      if (state.minCarries !== defaultValues.minCarries)
        params.minCarries = String(state.minCarries);
      if (state.maxCarries !== defaultValues.maxCarries)
        params.maxCarries = String(state.maxCarries);
      if (state.minPrgC !== defaultValues.minPrgC)
        params.minPrgC = String(state.minPrgC);
      if (state.maxPrgC !== defaultValues.maxPrgC)
        params.maxPrgC = String(state.maxPrgC);
      if (state.minPrgDist !== defaultValues.minPrgDist)
        params.minPrgDist = String(state.minPrgDist);
      if (state.maxPrgDist !== defaultValues.maxPrgDist)
        params.maxPrgDist = String(state.maxPrgDist);
      if (state.minPrgR !== defaultValues.minPrgR)
        params.minPrgR = String(state.minPrgR);
      if (state.maxPrgR !== defaultValues.maxPrgR)
        params.maxPrgR = String(state.maxPrgR);
      if (state.minMis !== defaultValues.minMis)
        params.minMis = String(state.minMis);
      if (state.maxMis !== defaultValues.maxMis)
        params.maxMis = String(state.maxMis);
      if (state.minDis !== defaultValues.minDis)
        params.minDis = String(state.minDis);
      if (state.maxDis !== defaultValues.maxDis)
        params.maxDis = String(state.maxDis);
      if (state.minAtt !== defaultValues.minAtt)
        params.minAtt = String(state.minAtt);
      if (state.maxAtt !== defaultValues.maxAtt)
        params.maxAtt = String(state.maxAtt);
      if (state.minSucc !== defaultValues.minSucc)
        params.minSucc = String(state.minSucc);
      if (state.maxSucc !== defaultValues.maxSucc)
        params.maxSucc = String(state.maxSucc);
      if (state.minSuccPct !== defaultValues.minSuccPct)
        params.minSuccPct = String(state.minSuccPct);
      if (state.maxSuccPct !== defaultValues.maxSuccPct)
        params.maxSuccPct = String(state.maxSuccPct);
      if (state.minAtt3rd !== defaultValues.minAtt3rd)
        params.minAtt3rd = String(state.minAtt3rd);
      if (state.maxAtt3rd !== defaultValues.maxAtt3rd)
        params.maxAtt3rd = String(state.maxAtt3rd);
      if (state.minAttPen !== defaultValues.minAttPen)
        params.minAttPen = String(state.minAttPen);
      if (state.maxAttPen !== defaultValues.maxAttPen)
        params.maxAttPen = String(state.maxAttPen);

      return params;
    },
  }))
);
