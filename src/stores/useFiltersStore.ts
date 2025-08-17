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
  minSucc: number;
  maxSucc: number;
  minSuccPct: number;
  maxSuccPct: number;
  minAtt3rd: number;
  maxAtt3rd: number;
  minAttPen: number;
  maxAttPen: number;
  minSh: number;
  maxSh: number;
  minSoT: number;
  maxSoT: number;
  minSoTPct: number;
  maxSoTPct: number;
  minSh90: number;
  maxSh90: number;
  minSoT90: number;
  maxSoT90: number;
  minGls: number;
  maxGls: number;
  minGlsMinusPK: number;
  maxGlsMinusPK: number;
  minGlsMinusxG: number;
  maxGlsMinusxG: number;
  minGlsPerSh: number;
  maxGlsPerSh: number;
  minGlsPerSoT: number;
  maxGlsPerSoT: number;
  minGplusA: number;
  maxGplusA: number;
  minGplusAminusPK: number;
  maxGplusAminusPK: number;
  minOG: number;
  maxOG: number;
  minxG: number;
  maxxG: number;
  minnpxG: number;
  maxnpxG: number;
  minAst: number;
  maxAst: number;
  minxA: number;
  maxxA: number;
  minxAG: number;
  maxxAG: number;
  minKP: number;
  maxKP: number;
  minSCA: number;
  maxSCA: number;
  minSCA90: number;
  maxSCA90: number;
  minGCA: number;
  maxGCA: number;
  minGCA90: number;
  maxGCA90: number;
  minCmp: number;
  maxCmp: number;
  minCmpPct: number;
  maxCmpPct: number;
  minAtt: number;
  maxAtt: number;
  minTB: number;
  maxTB: number;
  minPPA: number;
  maxPPA: number;
  minCrs: number;
  maxCrs: number;
  minCrsPA: number;
  maxCrsPA: number;
  minSw: number;
  maxSw: number;
  minTO: number;
  maxTO: number;
  minTkl: number;
  maxTkl: number;
  minTklW: number;
  maxTklW: number;
  minTklInt: number;
  maxTklInt: number;
  minTklPct: number;
  maxTklPct: number;
  minInt: number;
  maxInt: number;
  minBlocks: number;
  maxBlocks: number;
  minClr: number;
  maxClr: number;
  minErr: number;
  maxErr: number;
  minLost: number;
  maxLost: number;
  minWon: number;
  maxWon: number;
  minWonPct: number;
  maxWonPct: number;
  minFld: number;
  maxFld: number;
  minFls: number;
  maxFls: number;
  minCrdY: number;
  maxCrdY: number;
  minCrdR: number;
  maxCrdR: number;
  min2CrdY: number;
  max2CrdY: number;
  minPKwon: number;
  maxPKwon: number;
  minPKcon: number;
  maxPKcon: number;
  minCS: number;
  maxCS: number;
  minCSPct: number;
  maxCSPct: number;
  minSaves: number;
  maxSaves: number;
  minSavePct: number;
  maxSavePct: number;
  minGA: number;
  maxGA: number;
  minGA90: number;
  maxGA90: number;
  minSoTA: number;
  maxSoTA: number;
  minPSxG: number;
  maxPSxG: number;
  minPSxGPlusMinus: number;
  maxPSxGPlusMinus: number;
  minPKA: number;
  maxPKA: number;
  minPKsv: number;
  maxPKsv: number;
  minAvgDist: number;
  maxAvgDist: number;
  minAvgLen: number;
  maxAvgLen: number;
  minLaunchPct: number;
  maxLaunchPct: number;
  minMP: number;
  maxMP: number;
  minMin: number;
  maxMin: number;
  minMinPct: number;
  maxMinPct: number;
  minStarts: number;
  maxStarts: number;
  minIn: number;
  maxIn: number;
  minMnPerMP: number;
  maxMnPerMP: number;
  minMnPerStart: number;
  maxMnPerStart: number;
  minMnPerSub: number;
  maxMnPerSub: number;
  minUnSub: number;
  maxUnSub: number;
  minPPM: number;
  maxPPM: number;
  minRec: number;
  maxRec: number;
  minRecov: number;
  maxRecov: number;
  minTouches: number;
  maxTouches: number;
  minFK: number;
  maxFK: number;
  minCK: number;
  maxCK: number;
  minTI: number;
  maxTI: number;
  minLive: number;
  maxLive: number;
  minDead: number;
  maxDead: number;

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
  setSuccRange: (min: number, max: number) => void;
  setSuccPctRange: (min: number, max: number) => void;
  setAtt3rdRange: (min: number, max: number) => void;
  setAttPenRange: (min: number, max: number) => void;
  setShRange: (min: number, max: number) => void;
  setSoTRange: (min: number, max: number) => void;
  setSoTPctRange: (min: number, max: number) => void;
  setSh90Range: (min: number, max: number) => void;
  setSoT90Range: (min: number, max: number) => void;
  setGlsRange: (min: number, max: number) => void;
  setGlsMinusPKRange: (min: number, max: number) => void;
  setGlsMinusxGRange: (min: number, max: number) => void;
  setGlsPerShRange: (min: number, max: number) => void;
  setGlsPerSoTRange: (min: number, max: number) => void;
  setGplusARange: (min: number, max: number) => void;
  setGplusAminusPKRange: (min: number, max: number) => void;
  setOGRange: (min: number, max: number) => void;
  setxGRange: (min: number, max: number) => void;
  setnpxGRange: (min: number, max: number) => void;
  setAstRange: (min: number, max: number) => void;
  setxARange: (min: number, max: number) => void;
  setxAGRange: (min: number, max: number) => void;
  setKPRange: (min: number, max: number) => void;
  setSCARange: (min: number, max: number) => void;
  setSCA90Range: (min: number, max: number) => void;
  setGCARange: (min: number, max: number) => void;
  setGCA90Range: (min: number, max: number) => void;
  setCmpRange: (min: number, max: number) => void;
  setCmpPctRange: (min: number, max: number) => void;
  setAttRange: (min: number, max: number) => void;
  setTBRange: (min: number, max: number) => void;
  setPPARange: (min: number, max: number) => void;
  setCrsRange: (min: number, max: number) => void;
  setCrsPARange: (min: number, max: number) => void;
  setSwRange: (min: number, max: number) => void;
  setTORange: (min: number, max: number) => void;
  setTklRange: (min: number, max: number) => void;
  setTklWRange: (min: number, max: number) => void;
  setTklIntRange: (min: number, max: number) => void;
  setTklPctRange: (min: number, max: number) => void;
  setIntRange: (min: number, max: number) => void;
  setBlocksRange: (min: number, max: number) => void;
  setClrRange: (min: number, max: number) => void;
  setErrRange: (min: number, max: number) => void;
  setLostRange: (min: number, max: number) => void;
  setWonRange: (min: number, max: number) => void;
  setWonPctRange: (min: number, max: number) => void;
  setFldRange: (min: number, max: number) => void;
  setFlsRange: (min: number, max: number) => void;
  setCrdYRange: (min: number, max: number) => void;
  setCrdRRange: (min: number, max: number) => void;
  set2CrdYRange: (min: number, max: number) => void;
  setPKwonRange: (min: number, max: number) => void;
  setPKconRange: (min: number, max: number) => void;
  setCSRange: (min: number, max: number) => void;
  setCSPctRange: (min: number, max: number) => void;
  setSavesRange: (min: number, max: number) => void;
  setSavePctRange: (min: number, max: number) => void;
  setGARange: (min: number, max: number) => void;
  setGA90Range: (min: number, max: number) => void;
  setSoTARange: (min: number, max: number) => void;
  setPSxGRange: (min: number, max: number) => void;
  setPSxGPlusMinusRange: (min: number, max: number) => void;
  setPKARange: (min: number, max: number) => void;
  setPKsvRange: (min: number, max: number) => void;
  setAvgDistRange: (min: number, max: number) => void;
  setAvgLenRange: (min: number, max: number) => void;
  setLaunchPctRange: (min: number, max: number) => void;
  setMPRange: (min: number, max: number) => void;
  setMinRange: (min: number, max: number) => void;
  setMinPctRange: (min: number, max: number) => void;
  setStartsRange: (min: number, max: number) => void;
  setInRange: (min: number, max: number) => void;
  setMnPerMPRange: (min: number, max: number) => void;
  setMnPerStartRange: (min: number, max: number) => void;
  setMnPerSubRange: (min: number, max: number) => void;
  setUnSubRange: (min: number, max: number) => void;
  setPPMRange: (min: number, max: number) => void;
  setRecRange: (min: number, max: number) => void;
  setRecovRange: (min: number, max: number) => void;
  setTouchesRange: (min: number, max: number) => void;
  setFKRange: (min: number, max: number) => void;
  setCKRange: (min: number, max: number) => void;
  setTIRange: (min: number, max: number) => void;
  setLiveRange: (min: number, max: number) => void;
  setDeadRange: (min: number, max: number) => void;

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
  minSucc: 0,
  maxSucc: 161,
  minSuccPct: 0,
  maxSuccPct: 100,
  minAtt3rd: 0,
  maxAtt3rd: 27,
  minAttPen: 0,
  maxAttPen: 356,
  minSh: 0,
  maxSh: 152,
  minSoT: 0,
  maxSoT: 75,
  minSoTPct: 0,
  maxSoTPct: 100,
  minSh90: 0,
  maxSh90: 90,
  minSoT90: 0,
  maxSoT90: 90,
  minGls: 0,
  maxGls: 31,
  minGlsMinusPK: 0,
  maxGlsMinusPK: 24,
  minGlsMinusxG: 0,
  maxGlsMinusxG: 8.3,
  minGlsPerSh: 0,
  maxGlsPerSh: 1,
  minGlsPerSoT: 0,
  maxGlsPerSoT: 1,
  minGplusA: 0,
  maxGplusA: 47,
  minGplusAminusPK: 0,
  maxGplusAminusPK: 2.65,
  minOG: 0,
  maxOG: 3,
  minxG: 0,
  maxxG: 27.1,
  minnpxG: 0,
  maxnpxG: 24,
  minAst: 0,
  maxAst: 18,
  minxA: 0,
  maxxA: 12.6,
  minxAG: 0,
  maxxAG: 14.2,
  minKP: 0,
  maxKP: 95,
  minSCA: 0,
  maxSCA: 202,
  minSCA90: 0,
  maxSCA90: 48.46,
  minGCA: 0,
  maxGCA: 29,
  minGCA90: 0,
  maxGCA90: 12.86,
  minCmp: 0,
  maxCmp: 3269,
  minCmpPct: 0,
  maxCmpPct: 100,
  minAtt: 0,
  maxAtt: 3652,
  minTB: 0,
  maxTB: 33,
  minPPA: 0,
  maxPPA: 111,
  minCrs: 0,
  maxCrs: 269,
  minCrsPA: 0,
  maxCrsPA: 33,
  minSw: 0,
  maxSw: 50,
  minTO: 0,
  maxTO: 38,
  minTkl: 0,
  maxTkl: 133,
  minTklW: 0,
  maxTklW: 80,
  minTklInt: 0,
  maxTklInt: 181,
  minTklPct: 0,
  maxTklPct: 100,
  minInt: 0,
  maxInt: 72,
  minBlocks: 0,
  maxBlocks: 75,
  minClr: 0,
  maxClr: 249,
  minErr: 0,
  maxErr: 10,
  minLost: 0,
  maxLost: 63,
  minWon: 0,
  maxWon: 164,
  minWonPct: 0,
  maxWonPct: 100,
  minFld: 0,
  maxFld: 18,
  minFls: 0,
  maxFls: 83,
  minCrdY: 0,
  maxCrdY: 15,
  minCrdR: 0,
  maxCrdR: 3,
  min2CrdY: 0,
  max2CrdY: 2,
  minPKwon: 0,
  maxPKwon: 5,
  minPKcon: 0,
  maxPKcon: 4,
  minCS: 0,
  maxCS: 16,
  minCSPct: 0,
  maxCSPct: 200,
  minSaves: 0,
  maxSaves: 150,
  minSavePct: 0,
  maxSavePct: 100,
  minGA: 0,
  maxGA: 77,
  minGA90: 0,
  maxGA90: 4.58,
  minSoTA: 0,
  maxSoTA: 209,
  minPSxG: 0,
  maxPSxG: 73.5,
  minPSxGPlusMinus: 0,
  maxPSxGPlusMinus: 14.6,
  minPKA: 0,
  maxPKA: 13,
  minPKsv: 0,
  maxPKsv: 4,
  minAvgDist: 2,
  maxAvgDist: 28,
  minAvgLen: 6,
  maxAvgLen: 56.3,
  minLaunchPct: 0,
  maxLaunchPct: 92.3,
  minMP: 1,
  maxMP: 38,
  minMin: 1,
  maxMin: 3420,
  minMinPct: 0,
  maxMinPct: 100,
  minStarts: 0,
  maxStarts: 38,
  minIn: 0,
  maxIn: 29,
  minMnPerMP: 1,
  maxMnPerMP: 90,
  minMnPerStart: 9,
  maxMnPerStart: 90,
  minMnPerSub: 1,
  maxMnPerSub: 76,
  minUnSub: 0,
  maxUnSub: 37,
  minPPM: 0,
  maxPPM: 3,
  minRec: 0,
  maxRec: 3047,
  minRecov: 0,
  maxRecov: 254,
  minTouches: 0,
  maxTouches: 3867,
  minFK: 0,
  maxFK: 20,
  minCK: 0,
  maxCK: 140,
  minTI: 0,
  maxTI: 399,
  minLive: 0,
  maxLive: 3354,
  minDead: 0,
  maxDead: 462,
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

    setSuccRange: (min, max) => set({ minSucc: min, maxSucc: max }),

    setSuccPctRange: (min, max) => set({ minSuccPct: min, maxSuccPct: max }),

    setAtt3rdRange: (min, max) => set({ minAtt3rd: min, maxAtt3rd: max }),

    setAttPenRange: (min, max) => set({ minAttPen: min, maxAttPen: max }),

    setShRange: (min, max) => set({ minSh: min, maxSh: max }),

    setSoTRange: (min, max) => set({ minSoT: min, maxSoT: max }),

    setSoTPctRange: (min, max) => set({ minSoTPct: min, maxSoTPct: max }),

    setSh90Range: (min, max) => set({ minSh90: min, maxSh90: max }),

    setSoT90Range: (min, max) => set({ minSoT90: min, maxSoT90: max }),

    setGlsRange: (min, max) => set({ minGls: min, maxGls: max }),
    setGlsMinusPKRange: (min, max) =>
      set({ minGlsMinusPK: min, maxGlsMinusPK: max }),
    setGlsMinusxGRange: (min, max) =>
      set({ minGlsMinusxG: min, maxGlsMinusxG: max }),
    setGlsPerShRange: (min, max) => set({ minGlsPerSh: min, maxGlsPerSh: max }),
    setGlsPerSoTRange: (min, max) =>
      set({ minGlsPerSoT: min, maxGlsPerSoT: max }),
    setGplusARange: (min, max) => set({ minGplusA: min, maxGplusA: max }),
    setGplusAminusPKRange: (min, max) =>
      set({ minGplusAminusPK: min, maxGplusAminusPK: max }),
    setOGRange: (min, max) => set({ minOG: min, maxOG: max }),
    setxGRange: (min, max) => set({ minxG: min, maxxG: max }),
    setnpxGRange: (min, max) => set({ minnpxG: min, maxnpxG: max }),

    setAstRange: (min, max) => set({ minAst: min, maxAst: max }),
    setxARange: (min, max) => set({ minxA: min, maxxA: max }),
    setxAGRange: (min, max) => set({ minxAG: min, maxxAG: max }),
    setKPRange: (min, max) => set({ minKP: min, maxKP: max }),
    setSCARange: (min, max) => set({ minSCA: min, maxSCA: max }),
    setSCA90Range: (min, max) => set({ minSCA90: min, maxSCA90: max }),
    setGCARange: (min, max) => set({ minGCA: min, maxGCA: max }),
    setGCA90Range: (min, max) => set({ minGCA90: min, maxGCA90: max }),

    setCmpRange: (min, max) => set({ minCmp: min, maxCmp: max }),
    setCmpPctRange: (min, max) => set({ minCmpPct: min, maxCmpPct: max }),
    setAttRange: (min, max) => set({ minAtt: min, maxAtt: max }),
    setTBRange: (min, max) => set({ minTB: min, maxTB: max }),
    setPPARange: (min, max) => set({ minPPA: min, maxPPA: max }),
    setCrsRange: (min, max) => set({ minCrs: min, maxCrs: max }),
    setCrsPARange: (min, max) => set({ minCrsPA: min, maxCrsPA: max }),
    setSwRange: (min, max) => set({ minSw: min, maxSw: max }),
    setTORange: (min, max) => set({ minTO: min, maxTO: max }),

    setTklRange: (min, max) => set({ minTkl: min, maxTkl: max }),
    setTklWRange: (min, max) => set({ minTklW: min, maxTklW: max }),
    setTklIntRange: (min, max) => set({ minTklInt: min, maxTklInt: max }),
    setTklPctRange: (min, max) => set({ minTklPct: min, maxTklPct: max }),
    setIntRange: (min, max) => set({ minInt: min, maxInt: max }),
    setBlocksRange: (min, max) => set({ minBlocks: min, maxBlocks: max }),
    setClrRange: (min, max) => set({ minClr: min, maxClr: max }),
    setErrRange: (min, max) => set({ minErr: min, maxErr: max }),
    setLostRange: (min, max) => set({ minLost: min, maxLost: max }),
    setWonRange: (min, max) => set({ minWon: min, maxWon: max }),
    setWonPctRange: (min, max) => set({ minWonPct: min, maxWonPct: max }),
    setFldRange: (min, max) => set({ minFld: min, maxFld: max }),
    setFlsRange: (min, max) => set({ minFls: min, maxFls: max }),
    setCrdYRange: (min, max) => set({ minCrdY: min, maxCrdY: max }),
    setCrdRRange: (min, max) => set({ minCrdR: min, maxCrdR: max }),
    set2CrdYRange: (min, max) => set({ min2CrdY: min, max2CrdY: max }),
    setPKwonRange: (min, max) => set({ minPKwon: min, maxPKwon: max }),
    setPKconRange: (min, max) => set({ minPKcon: min, maxPKcon: max }),

    setCSRange: (min, max) => set({ minCS: min, maxCS: max }),
    setCSPctRange: (min, max) => set({ minCSPct: min, maxCSPct: max }),
    setSavesRange: (min, max) => set({ minSaves: min, maxSaves: max }),
    setSavePctRange: (min, max) => set({ minSavePct: min, maxSavePct: max }),
    setGARange: (min, max) => set({ minGA: min, maxGA: max }),
    setGA90Range: (min, max) => set({ minGA90: min, maxGA90: max }),
    setSoTARange: (min, max) => set({ minSoTA: min, maxSoTA: max }),
    setPSxGRange: (min, max) => set({ minPSxG: min, maxPSxG: max }),
    setPSxGPlusMinusRange: (min, max) =>
      set({ minPSxGPlusMinus: min, maxPSxGPlusMinus: max }),
    setPKARange: (min, max) => set({ minPKA: min, maxPKA: max }),
    setPKsvRange: (min, max) => set({ minPKsv: min, maxPKsv: max }),
    setAvgDistRange: (min, max) => set({ minAvgDist: min, maxAvgDist: max }),
    setAvgLenRange: (min, max) => set({ minAvgLen: min, maxAvgLen: max }),
    setLaunchPctRange: (min, max) =>
      set({ minLaunchPct: min, maxLaunchPct: max }),

    setMPRange: (min, max) => set({ minMP: min, maxMP: max }),
    setMinRange: (min, max) => set({ minMin: min, maxMin: max }),
    setMinPctRange: (min, max) => set({ minMinPct: min, maxMinPct: max }),
    setStartsRange: (min, max) => set({ minStarts: min, maxStarts: max }),
    setInRange: (min, max) => set({ minIn: min, maxIn: max }),
    setMnPerMPRange: (min, max) => set({ minMnPerMP: min, maxMnPerMP: max }),
    setMnPerStartRange: (min, max) =>
      set({ minMnPerStart: min, maxMnPerStart: max }),
    setMnPerSubRange: (min, max) => set({ minMnPerSub: min, maxMnPerSub: max }),
    setUnSubRange: (min, max) => set({ minUnSub: min, maxUnSub: max }),

    setPPMRange: (min, max) => set({ minPPM: min, maxPPM: max }),
    setRecRange: (min, max) => set({ minRec: min, maxRec: max }),
    setRecovRange: (min, max) => set({ minRecov: min, maxRecov: max }),
    setTouchesRange: (min, max) => set({ minTouches: min, maxTouches: max }),
    setFKRange: (min, max) => set({ minFK: min, maxFK: max }),
    setCKRange: (min, max) => set({ minCK: min, maxCK: max }),
    setTIRange: (min, max) => set({ minTI: min, maxTI: max }),
    setLiveRange: (min, max) => set({ minLive: min, maxLive: max }),
    setDeadRange: (min, max) => set({ minDead: min, maxDead: max }),

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
        minSh: Number(params.get("minSh")) || defaultValues.minSh,
        maxSh: Number(params.get("maxSh")) || defaultValues.maxSh,
        minSoT: Number(params.get("minSoT")) || defaultValues.minSoT,
        maxSoT: Number(params.get("maxSoT")) || defaultValues.maxSoT,
        minSoTPct: Number(params.get("minSoTPct")) || defaultValues.minSoTPct,
        maxSoTPct: Number(params.get("maxSoTPct")) || defaultValues.maxSoTPct,
        minSh90: Number(params.get("minSh90")) || defaultValues.minSh90,
        maxSh90: Number(params.get("maxSh90")) || defaultValues.maxSh90,
        minSoT90: Number(params.get("minSoT90")) || defaultValues.minSoT90,
        maxSoT90: Number(params.get("maxSoT90")) || defaultValues.maxSoT90,

        minGls: Number(params.get("minGls")) || defaultValues.minGls,
        maxGls: Number(params.get("maxGls")) || defaultValues.maxGls,
        minGlsMinusPK:
          Number(params.get("minGlsMinusPK")) || defaultValues.minGlsMinusPK,
        maxGlsMinusPK:
          Number(params.get("maxGlsMinusPK")) || defaultValues.maxGlsMinusPK,
        minGlsMinusxG:
          Number(params.get("minGlsMinusxG")) || defaultValues.minGlsMinusxG,
        maxGlsMinusxG:
          Number(params.get("maxGlsMinusxG")) || defaultValues.maxGlsMinusxG,
        minGlsPerSh:
          Number(params.get("minGlsPerSh")) || defaultValues.minGlsPerSh,
        maxGlsPerSh:
          Number(params.get("maxGlsPerSh")) || defaultValues.maxGlsPerSh,
        minGlsPerSoT:
          Number(params.get("minGlsPerSoT")) || defaultValues.minGlsPerSoT,
        maxGlsPerSoT:
          Number(params.get("maxGlsPerSoT")) || defaultValues.maxGlsPerSoT,
        minGplusA: Number(params.get("minGplusA")) || defaultValues.minGplusA,
        maxGplusA: Number(params.get("maxGplusA")) || defaultValues.maxGplusA,
        minGplusAminusPK:
          Number(params.get("minGplusAminusPK")) ||
          defaultValues.minGplusAminusPK,
        maxGplusAminusPK:
          Number(params.get("maxGplusAminusPK")) ||
          defaultValues.maxGplusAminusPK,
        minOG: Number(params.get("minOG")) || defaultValues.minOG,
        maxOG: Number(params.get("maxOG")) || defaultValues.maxOG,
        minxG: Number(params.get("minxG")) || defaultValues.minxG,
        maxxG: Number(params.get("maxxG")) || defaultValues.maxxG,
        minnpxG: Number(params.get("minnpxG")) || defaultValues.minnpxG,
        maxnpxG: Number(params.get("maxnpxG")) || defaultValues.maxnpxG,

        minAst: Number(params.get("minAst")) || defaultValues.minAst,
        maxAst: Number(params.get("maxAst")) || defaultValues.maxAst,
        minxA: Number(params.get("minxA")) || defaultValues.minxA,
        maxxA: Number(params.get("maxxA")) || defaultValues.maxxA,
        minxAG: Number(params.get("minxAG")) || defaultValues.minxAG,
        maxxAG: Number(params.get("maxxAG")) || defaultValues.maxxAG,
        minKP: Number(params.get("minKP")) || defaultValues.minKP,
        maxKP: Number(params.get("maxKP")) || defaultValues.maxKP,
        minSCA: Number(params.get("minSCA")) || defaultValues.minSCA,
        maxSCA: Number(params.get("maxSCA")) || defaultValues.maxSCA,
        minSCA90: Number(params.get("minSCA90")) || defaultValues.minSCA90,
        maxSCA90: Number(params.get("maxSCA90")) || defaultValues.maxSCA90,
        minGCA: Number(params.get("minGCA")) || defaultValues.minGCA,
        maxGCA: Number(params.get("maxGCA")) || defaultValues.maxGCA,
        minGCA90: Number(params.get("minGCA90")) || defaultValues.minGCA90,
        maxGCA90: Number(params.get("maxGCA90")) || defaultValues.maxGCA90,

        minCmp: Number(params.get("minCmp")) || defaultValues.minCmp,
        maxCmp: Number(params.get("maxCmp")) || defaultValues.maxCmp,
        minCmpPct: Number(params.get("minCmpPct")) || defaultValues.minCmpPct,
        maxCmpPct: Number(params.get("maxCmpPct")) || defaultValues.maxCmpPct,
        minAtt: Number(params.get("minAtt")) || defaultValues.minAtt,
        maxAtt: Number(params.get("maxAtt")) || defaultValues.maxAtt,
        minTB: Number(params.get("minTB")) || defaultValues.minTB,
        maxTB: Number(params.get("maxTB")) || defaultValues.maxTB,
        minPPA: Number(params.get("minPPA")) || defaultValues.minPPA,
        maxPPA: Number(params.get("maxPPA")) || defaultValues.maxPPA,
        minCrs: Number(params.get("minCrs")) || defaultValues.minCrs,
        maxCrs: Number(params.get("maxCrs")) || defaultValues.maxCrs,
        minCrsPA: Number(params.get("minCrsPA")) || defaultValues.minCrsPA,
        maxCrsPA: Number(params.get("maxCrsPA")) || defaultValues.maxCrsPA,
        minSw: Number(params.get("minSw")) || defaultValues.minSw,
        maxSw: Number(params.get("maxSw")) || defaultValues.maxSw,
        minTO: Number(params.get("minTO")) || defaultValues.minTO,
        maxTO: Number(params.get("maxTO")) || defaultValues.maxTO,

        minTkl: Number(params.get("minTkl")) || defaultValues.minTkl,
        maxTkl: Number(params.get("maxTkl")) || defaultValues.maxTkl,
        minTklW: Number(params.get("minTklW")) || defaultValues.minTklW,
        maxTklW: Number(params.get("maxTklW")) || defaultValues.maxTklW,
        minTklInt: Number(params.get("minTklInt")) || defaultValues.minTklInt,
        maxTklInt: Number(params.get("maxTklInt")) || defaultValues.maxTklInt,
        minTklPct: Number(params.get("minTklPct")) || defaultValues.minTklPct,
        maxTklPct: Number(params.get("maxTklPct")) || defaultValues.maxTklPct,
        minInt: Number(params.get("minInt")) || defaultValues.minInt,
        maxInt: Number(params.get("maxInt")) || defaultValues.maxInt,
        minBlocks: Number(params.get("minBlocks")) || defaultValues.minBlocks,
        maxBlocks: Number(params.get("maxBlocks")) || defaultValues.maxBlocks,
        minClr: Number(params.get("minClr")) || defaultValues.minClr,
        maxClr: Number(params.get("maxClr")) || defaultValues.maxClr,
        minErr: Number(params.get("minErr")) || defaultValues.minErr,
        maxErr: Number(params.get("maxErr")) || defaultValues.maxErr,
        minLost: Number(params.get("minLost")) || defaultValues.minLost,
        maxLost: Number(params.get("maxLost")) || defaultValues.maxLost,
        minWon: Number(params.get("minWon")) || defaultValues.minWon,
        maxWon: Number(params.get("maxWon")) || defaultValues.maxWon,
        minWonPct: Number(params.get("minWonPct")) || defaultValues.minWonPct,
        maxWonPct: Number(params.get("maxWonPct")) || defaultValues.maxWonPct,
        minFld: Number(params.get("minFld")) || defaultValues.minFld,
        maxFld: Number(params.get("maxFld")) || defaultValues.maxFld,
        minFls: Number(params.get("minFls")) || defaultValues.minFls,
        maxFls: Number(params.get("maxFls")) || defaultValues.maxFls,
        minCrdY: Number(params.get("minCrdY")) || defaultValues.minCrdY,
        maxCrdY: Number(params.get("maxCrdY")) || defaultValues.maxCrdY,
        minCrdR: Number(params.get("minCrdR")) || defaultValues.minCrdR,
        maxCrdR: Number(params.get("maxCrdR")) || defaultValues.maxCrdR,
        min2CrdY: Number(params.get("min2CrdY")) || defaultValues.min2CrdY,
        max2CrdY: Number(params.get("max2CrdY")) || defaultValues.max2CrdY,
        minPKwon: Number(params.get("minPKwon")) || defaultValues.minPKwon,
        maxPKwon: Number(params.get("maxPKwon")) || defaultValues.maxPKwon,
        minPKcon: Number(params.get("minPKcon")) || defaultValues.minPKcon,
        maxPKcon: Number(params.get("maxPKcon")) || defaultValues.maxPKcon,

        minCS: Number(params.get("minCS")) || defaultValues.minCS,
        maxCS: Number(params.get("maxCS")) || defaultValues.maxCS,
        minCSPct: Number(params.get("minCSPct")) || defaultValues.minCSPct,
        maxCSPct: Number(params.get("maxCSPct")) || defaultValues.maxCSPct,
        minSaves: Number(params.get("minSaves")) || defaultValues.minSaves,
        maxSaves: Number(params.get("maxSaves")) || defaultValues.maxSaves,
        minSavePct:
          Number(params.get("minSavePct")) || defaultValues.minSavePct,
        maxSavePct:
          Number(params.get("maxSavePct")) || defaultValues.maxSavePct,
        minGA: Number(params.get("minGA")) || defaultValues.minGA,
        maxGA: Number(params.get("maxGA")) || defaultValues.maxGA,
        minGA90: Number(params.get("minGA90")) || defaultValues.minGA90,
        maxGA90: Number(params.get("maxGA90")) || defaultValues.maxGA90,
        minSoTA: Number(params.get("minSoTA")) || defaultValues.minSoTA,
        maxSoTA: Number(params.get("maxSoTA")) || defaultValues.maxSoTA,
        minPSxG: Number(params.get("minPSxG")) || defaultValues.minPSxG,
        maxPSxG: Number(params.get("maxPSxG")) || defaultValues.maxPSxG,
        minPSxGPlusMinus:
          Number(params.get("minPSxGPlusMinus")) ||
          defaultValues.minPSxGPlusMinus,
        maxPSxGPlusMinus:
          Number(params.get("maxPSxGPlusMinus")) ||
          defaultValues.maxPSxGPlusMinus,
        minPKA: Number(params.get("minPKA")) || defaultValues.minPKA,
        maxPKA: Number(params.get("maxPKA")) || defaultValues.maxPKA,
        minPKsv: Number(params.get("minPKsv")) || defaultValues.minPKsv,
        maxPKsv: Number(params.get("maxPKsv")) || defaultValues.maxPKsv,
        minAvgDist:
          Number(params.get("minAvgDist")) || defaultValues.minAvgDist,
        maxAvgDist:
          Number(params.get("maxAvgDist")) || defaultValues.maxAvgDist,
        minAvgLen: Number(params.get("minAvgLen")) || defaultValues.minAvgLen,
        maxAvgLen: Number(params.get("maxAvgLen")) || defaultValues.maxAvgLen,
        minLaunchPct:
          Number(params.get("minLaunchPct")) || defaultValues.minLaunchPct,
        maxLaunchPct:
          Number(params.get("maxLaunchPct")) || defaultValues.maxLaunchPct,

        minMP: Number(params.get("minMP")) || defaultValues.minMP,
        maxMP: Number(params.get("maxMP")) || defaultValues.maxMP,
        minMin: Number(params.get("minMin")) || defaultValues.minMin,
        maxMin: Number(params.get("maxMin")) || defaultValues.maxMin,
        minMinPct: Number(params.get("minMinPct")) || defaultValues.minMinPct,
        maxMinPct: Number(params.get("maxMinPct")) || defaultValues.maxMinPct,
        minStarts: Number(params.get("minStarts")) || defaultValues.minStarts,
        maxStarts: Number(params.get("maxStarts")) || defaultValues.maxStarts,
        minIn: Number(params.get("minIn")) || defaultValues.minIn,
        maxIn: Number(params.get("maxIn")) || defaultValues.maxIn,
        minMnPerMP:
          Number(params.get("minMnPerMP")) || defaultValues.minMnPerMP,
        maxMnPerMP:
          Number(params.get("maxMnPerMP")) || defaultValues.maxMnPerMP,
        minMnPerStart:
          Number(params.get("minMnPerStart")) || defaultValues.minMnPerStart,
        maxMnPerStart:
          Number(params.get("maxMnPerStart")) || defaultValues.maxMnPerStart,
        minMnPerSub:
          Number(params.get("minMnPerSub")) || defaultValues.minMnPerSub,
        maxMnPerSub:
          Number(params.get("maxMnPerSub")) || defaultValues.maxMnPerSub,
        minUnSub: Number(params.get("minUnSub")) || defaultValues.minUnSub,
        maxUnSub: Number(params.get("maxUnSub")) || defaultValues.maxUnSub,

        minPPM: Number(params.get("minPPM")) || defaultValues.minPPM,
        maxPPM: Number(params.get("maxPPM")) || defaultValues.maxPPM,
        minRec: Number(params.get("minRec")) || defaultValues.minRec,
        maxRec: Number(params.get("maxRec")) || defaultValues.maxRec,
        minRecov: Number(params.get("minRecov")) || defaultValues.minRecov,
        maxRecov: Number(params.get("maxRecov")) || defaultValues.maxRecov,
        minTouches:
          Number(params.get("minTouches")) || defaultValues.minTouches,
        maxTouches:
          Number(params.get("maxTouches")) || defaultValues.maxTouches,
        minFK: Number(params.get("minFK")) || defaultValues.minFK,
        maxFK: Number(params.get("maxFK")) || defaultValues.maxFK,
        minCK: Number(params.get("minCK")) || defaultValues.minCK,
        maxCK: Number(params.get("maxCK")) || defaultValues.maxCK,
        minTI: Number(params.get("minTI")) || defaultValues.minTI,
        maxTI: Number(params.get("maxTI")) || defaultValues.maxTI,
        minLive: Number(params.get("minLive")) || defaultValues.minLive,
        maxLive: Number(params.get("maxLive")) || defaultValues.maxLive,
        minDead: Number(params.get("minDead")) || defaultValues.minDead,
        maxDead: Number(params.get("maxDead")) || defaultValues.maxDead,
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
      if (state.minSh !== defaultValues.minSh)
        params.minSh = String(state.minSh);
      if (state.maxSh !== defaultValues.maxSh)
        params.maxSh = String(state.maxSh);
      if (state.minSoT !== defaultValues.minSoT)
        params.minSoT = String(state.minSoT);
      if (state.maxSoT !== defaultValues.maxSoT)
        params.maxSoT = String(state.maxSoT);
      if (state.minSoTPct !== defaultValues.minSoTPct)
        params.minSoTPct = String(state.minSoTPct);
      if (state.maxSoTPct !== defaultValues.maxSoTPct)
        params.maxSoTPct = String(state.maxSoTPct);
      if (state.minSh90 !== defaultValues.minSh90)
        params.minSh90 = String(state.minSh90);
      if (state.maxSh90 !== defaultValues.maxSh90)
        params.maxSh90 = String(state.maxSh90);
      if (state.minSoT90 !== defaultValues.minSoT90)
        params.minSoT90 = String(state.minSoT90);
      if (state.maxSoT90 !== defaultValues.maxSoT90)
        params.maxSoT90 = String(state.maxSoT90);

      if (state.minGls !== defaultValues.minGls)
        params.minGls = String(state.minGls);
      if (state.maxGls !== defaultValues.maxGls)
        params.maxGls = String(state.maxGls);
      if (state.minGlsMinusPK !== defaultValues.minGlsMinusPK)
        params.minGlsMinusPK = String(state.minGlsMinusPK);
      if (state.maxGlsMinusPK !== defaultValues.maxGlsMinusPK)
        params.maxGlsMinusPK = String(state.maxGlsMinusPK);
      if (state.minGlsMinusxG !== defaultValues.minGlsMinusxG)
        params.minGlsMinusxG = String(state.minGlsMinusxG);
      if (state.maxGlsMinusxG !== defaultValues.maxGlsMinusxG)
        params.maxGlsMinusxG = String(state.maxGlsMinusxG);
      if (state.minGlsPerSh !== defaultValues.minGlsPerSh)
        params.minGlsPerSh = String(state.minGlsPerSh);
      if (state.maxGlsPerSh !== defaultValues.maxGlsPerSh)
        params.maxGlsPerSh = String(state.maxGlsPerSh);
      if (state.minGlsPerSoT !== defaultValues.minGlsPerSoT)
        params.minGlsPerSoT = String(state.minGlsPerSoT);
      if (state.maxGlsPerSoT !== defaultValues.maxGlsPerSoT)
        params.maxGlsPerSoT = String(state.maxGlsPerSoT);
      if (state.minGplusA !== defaultValues.minGplusA)
        params.minGplusA = String(state.minGplusA);
      if (state.maxGplusA !== defaultValues.maxGplusA)
        params.maxGplusA = String(state.maxGplusA);
      if (state.minGplusAminusPK !== defaultValues.minGplusAminusPK)
        params.minGplusAminusPK = String(state.minGplusAminusPK);
      if (state.maxGplusAminusPK !== defaultValues.maxGplusAminusPK)
        params.maxGplusAminusPK = String(state.maxGplusAminusPK);
      if (state.minOG !== defaultValues.minOG)
        params.minOG = String(state.minOG);
      if (state.maxOG !== defaultValues.maxOG)
        params.maxOG = String(state.maxOG);
      if (state.minxG !== defaultValues.minxG)
        params.minxG = String(state.minxG);
      if (state.maxxG !== defaultValues.maxxG)
        params.maxxG = String(state.maxxG);
      if (state.minnpxG !== defaultValues.minnpxG)
        params.minnpxG = String(state.minnpxG);
      if (state.maxnpxG !== defaultValues.maxnpxG)
        params.maxnpxG = String(state.maxnpxG);

      if (state.minAst !== defaultValues.minAst)
        params.minAst = String(state.minAst);
      if (state.maxAst !== defaultValues.maxAst)
        params.maxAst = String(state.maxAst);
      if (state.minxA !== defaultValues.minxA)
        params.minxA = String(state.minxA);
      if (state.maxxA !== defaultValues.maxxA)
        params.maxxA = String(state.maxxA);
      if (state.minxAG !== defaultValues.minxAG)
        params.minxAG = String(state.minxAG);
      if (state.maxxAG !== defaultValues.maxxAG)
        params.maxxAG = String(state.maxxAG);
      if (state.minKP !== defaultValues.minKP)
        params.minKP = String(state.minKP);
      if (state.maxKP !== defaultValues.maxKP)
        params.maxKP = String(state.maxKP);
      if (state.minSCA !== defaultValues.minSCA)
        params.minSCA = String(state.minSCA);
      if (state.maxSCA !== defaultValues.maxSCA)
        params.maxSCA = String(state.maxSCA);
      if (state.minSCA90 !== defaultValues.minSCA90)
        params.minSCA90 = String(state.minSCA90);
      if (state.maxSCA90 !== defaultValues.maxSCA90)
        params.maxSCA90 = String(state.maxSCA90);
      if (state.minGCA !== defaultValues.minGCA)
        params.minGCA = String(state.minGCA);
      if (state.maxGCA !== defaultValues.maxGCA)
        params.maxGCA = String(state.maxGCA);
      if (state.minGCA90 !== defaultValues.minGCA90)
        params.minGCA90 = String(state.minGCA90);
      if (state.maxGCA90 !== defaultValues.maxGCA90)
        params.maxGCA90 = String(state.maxGCA90);

      if (state.minCmp !== defaultValues.minCmp)
        params.minCmp = String(state.minCmp);
      if (state.maxCmp !== defaultValues.maxCmp)
        params.maxCmp = String(state.maxCmp);
      if (state.minCmpPct !== defaultValues.minCmpPct)
        params.minCmpPct = String(state.minCmpPct);
      if (state.maxCmpPct !== defaultValues.maxCmpPct)
        params.maxCmpPct = String(state.maxCmpPct);
      if (state.minAtt !== defaultValues.minAtt)
        params.minAtt = String(state.minAtt);
      if (state.maxAtt !== defaultValues.maxAtt)
        params.maxAtt = String(state.maxAtt);
      if (state.minTB !== defaultValues.minTB)
        params.minTB = String(state.minTB);
      if (state.maxTB !== defaultValues.maxTB)
        params.maxTB = String(state.maxTB);
      if (state.minPPA !== defaultValues.minPPA)
        params.minPPA = String(state.minPPA);
      if (state.maxPPA !== defaultValues.maxPPA)
        params.maxPPA = String(state.maxPPA);
      if (state.minCrs !== defaultValues.minCrs)
        params.minCrs = String(state.minCrs);
      if (state.maxCrs !== defaultValues.maxCrs)
        params.maxCrs = String(state.maxCrs);
      if (state.minCrsPA !== defaultValues.minCrsPA)
        params.minCrsPA = String(state.minCrsPA);
      if (state.maxCrsPA !== defaultValues.maxCrsPA)
        params.maxCrsPA = String(state.maxCrsPA);
      if (state.minSw !== defaultValues.minSw)
        params.minSw = String(state.minSw);
      if (state.maxSw !== defaultValues.maxSw)
        params.maxSw = String(state.maxSw);
      if (state.minTO !== defaultValues.minTO)
        params.minTO = String(state.minTO);
      if (state.maxTO !== defaultValues.maxTO)
        params.maxTO = String(state.maxTO);

      if (state.minTkl !== defaultValues.minTkl)
        params.minTkl = String(state.minTkl);
      if (state.maxTkl !== defaultValues.maxTkl)
        params.maxTkl = String(state.maxTkl);
      if (state.minTklW !== defaultValues.minTklW)
        params.minTklW = String(state.minTklW);
      if (state.maxTklW !== defaultValues.maxTklW)
        params.maxTklW = String(state.maxTklW);
      if (state.minTklInt !== defaultValues.minTklInt)
        params.minTklInt = String(state.minTklInt);
      if (state.maxTklInt !== defaultValues.maxTklInt)
        params.maxTklInt = String(state.maxTklInt);
      if (state.minTklPct !== defaultValues.minTklPct)
        params.minTklPct = String(state.minTklPct);
      if (state.maxTklPct !== defaultValues.maxTklPct)
        params.maxTklPct = String(state.maxTklPct);
      if (state.minInt !== defaultValues.minInt)
        params.minInt = String(state.minInt);
      if (state.maxInt !== defaultValues.maxInt)
        params.maxInt = String(state.maxInt);
      if (state.minBlocks !== defaultValues.minBlocks)
        params.minBlocks = String(state.minBlocks);
      if (state.maxBlocks !== defaultValues.maxBlocks)
        params.maxBlocks = String(state.maxBlocks);
      if (state.minClr !== defaultValues.minClr)
        params.minClr = String(state.minClr);
      if (state.maxClr !== defaultValues.maxClr)
        params.maxClr = String(state.maxClr);
      if (state.minErr !== defaultValues.minErr)
        params.minErr = String(state.minErr);
      if (state.maxErr !== defaultValues.maxErr)
        params.maxErr = String(state.maxErr);
      if (state.minLost !== defaultValues.minLost)
        params.minLost = String(state.minLost);
      if (state.maxLost !== defaultValues.maxLost)
        params.maxLost = String(state.maxLost);
      if (state.minWon !== defaultValues.minWon)
        params.minWon = String(state.minWon);
      if (state.maxWon !== defaultValues.maxWon)
        params.maxWon = String(state.maxWon);
      if (state.minWonPct !== defaultValues.minWonPct)
        params.minWonPct = String(state.minWonPct);
      if (state.maxWonPct !== defaultValues.maxWonPct)
        params.maxWonPct = String(state.maxWonPct);
      if (state.minFld !== defaultValues.minFld)
        params.minFld = String(state.minFld);
      if (state.maxFld !== defaultValues.maxFld)
        params.maxFld = String(state.maxFld);
      if (state.minFls !== defaultValues.minFls)
        params.minFls = String(state.minFls);
      if (state.maxFls !== defaultValues.maxFls)
        params.maxFls = String(state.maxFls);
      if (state.minCrdY !== defaultValues.minCrdY)
        params.minCrdY = String(state.minCrdY);
      if (state.maxCrdY !== defaultValues.maxCrdY)
        params.maxCrdY = String(state.maxCrdY);
      if (state.minCrdR !== defaultValues.minCrdR)
        params.minCrdR = String(state.minCrdR);
      if (state.maxCrdR !== defaultValues.maxCrdR)
        params.maxCrdR = String(state.maxCrdR);
      if (state.min2CrdY !== defaultValues.min2CrdY)
        params.min2CrdY = String(state.min2CrdY);
      if (state.max2CrdY !== defaultValues.max2CrdY)
        params.max2CrdY = String(state.max2CrdY);
      if (state.minPKwon !== defaultValues.minPKwon)
        params.minPKwon = String(state.minPKwon);
      if (state.maxPKwon !== defaultValues.maxPKwon)
        params.maxPKwon = String(state.maxPKwon);
      if (state.minPKcon !== defaultValues.minPKcon)
        params.minPKcon = String(state.minPKcon);
      if (state.maxPKcon !== defaultValues.maxPKcon)
        params.maxPKcon = String(state.maxPKcon);

      if (state.minTkl !== defaultValues.minTkl)
        params.minTkl = String(state.minTkl);
      if (state.maxTkl !== defaultValues.maxTkl)
        params.maxTkl = String(state.maxTkl);
      if (state.minTklW !== defaultValues.minTklW)
        params.minTklW = String(state.minTklW);
      if (state.maxTklW !== defaultValues.maxTklW)
        params.maxTklW = String(state.maxTklW);
      if (state.minTklInt !== defaultValues.minTklInt)
        params.minTklInt = String(state.minTklInt);
      if (state.maxTklInt !== defaultValues.maxTklInt)
        params.maxTklInt = String(state.maxTklInt);
      if (state.minTklPct !== defaultValues.minTklPct)
        params.minTklPct = String(state.minTklPct);
      if (state.maxTklPct !== defaultValues.maxTklPct)
        params.maxTklPct = String(state.maxTklPct);
      if (state.minInt !== defaultValues.minInt)
        params.minInt = String(state.minInt);
      if (state.maxInt !== defaultValues.maxInt)
        params.maxInt = String(state.maxInt);
      if (state.minBlocks !== defaultValues.minBlocks)
        params.minBlocks = String(state.minBlocks);
      if (state.maxBlocks !== defaultValues.maxBlocks)
        params.maxBlocks = String(state.maxBlocks);
      if (state.minClr !== defaultValues.minClr)
        params.minClr = String(state.minClr);
      if (state.maxClr !== defaultValues.maxClr)
        params.maxClr = String(state.maxClr);
      if (state.minErr !== defaultValues.minErr)
        params.minErr = String(state.minErr);
      if (state.maxErr !== defaultValues.maxErr)
        params.maxErr = String(state.maxErr);
      if (state.minLost !== defaultValues.minLost)
        params.minLost = String(state.minLost);
      if (state.maxLost !== defaultValues.maxLost)
        params.maxLost = String(state.maxLost);
      if (state.minWon !== defaultValues.minWon)
        params.minWon = String(state.minWon);
      if (state.maxWon !== defaultValues.maxWon)
        params.maxWon = String(state.maxWon);
      if (state.minWonPct !== defaultValues.minWonPct)
        params.minWonPct = String(state.minWonPct);
      if (state.maxWonPct !== defaultValues.maxWonPct)
        params.maxWonPct = String(state.maxWonPct);
      if (state.minFld !== defaultValues.minFld)
        params.minFld = String(state.minFld);
      if (state.maxFld !== defaultValues.maxFld)
        params.maxFld = String(state.maxFld);
      if (state.minFls !== defaultValues.minFls)
        params.minFls = String(state.minFls);
      if (state.maxFls !== defaultValues.maxFls)
        params.maxFls = String(state.maxFls);
      if (state.minCrdY !== defaultValues.minCrdY)
        params.minCrdY = String(state.minCrdY);
      if (state.maxCrdY !== defaultValues.maxCrdY)
        params.maxCrdY = String(state.maxCrdY);
      if (state.minCrdR !== defaultValues.minCrdR)
        params.minCrdR = String(state.minCrdR);
      if (state.maxCrdR !== defaultValues.maxCrdR)
        params.maxCrdR = String(state.maxCrdR);
      if (state.min2CrdY !== defaultValues.min2CrdY)
        params.min2CrdY = String(state.min2CrdY);
      if (state.max2CrdY !== defaultValues.max2CrdY)
        params.max2CrdY = String(state.max2CrdY);
      if (state.minPKwon !== defaultValues.minPKwon)
        params.minPKwon = String(state.minPKwon);
      if (state.maxPKwon !== defaultValues.maxPKwon)
        params.maxPKwon = String(state.maxPKwon);
      if (state.minPKcon !== defaultValues.minPKcon)
        params.minPKcon = String(state.minPKcon);
      if (state.maxPKcon !== defaultValues.maxPKcon)
        params.maxPKcon = String(state.maxPKcon);

      if (state.minCS !== defaultValues.minCS)
        params.minCS = String(state.minCS);
      if (state.maxCS !== defaultValues.maxCS)
        params.maxCS = String(state.maxCS);
      if (state.minCSPct !== defaultValues.minCSPct)
        params.minCSPct = String(state.minCSPct);
      if (state.maxCSPct !== defaultValues.maxCSPct)
        params.maxCSPct = String(state.maxCSPct);
      if (state.minSaves !== defaultValues.minSaves)
        params.minSaves = String(state.minSaves);
      if (state.maxSaves !== defaultValues.maxSaves)
        params.maxSaves = String(state.maxSaves);
      if (state.minSavePct !== defaultValues.minSavePct)
        params.minSavePct = String(state.minSavePct);
      if (state.maxSavePct !== defaultValues.maxSavePct)
        params.maxSavePct = String(state.maxSavePct);
      if (state.minGA !== defaultValues.minGA)
        params.minGA = String(state.minGA);
      if (state.maxGA !== defaultValues.maxGA)
        params.maxGA = String(state.maxGA);
      if (state.minGA90 !== defaultValues.minGA90)
        params.minGA90 = String(state.minGA90);
      if (state.maxGA90 !== defaultValues.maxGA90)
        params.maxGA90 = String(state.maxGA90);
      if (state.minSoTA !== defaultValues.minSoTA)
        params.minSoTA = String(state.minSoTA);
      if (state.maxSoTA !== defaultValues.maxSoTA)
        params.maxSoTA = String(state.maxSoTA);
      if (state.minPSxG !== defaultValues.minPSxG)
        params.minPSxG = String(state.minPSxG);
      if (state.maxPSxG !== defaultValues.maxPSxG)
        params.maxPSxG = String(state.maxPSxG);
      if (state.minPSxGPlusMinus !== defaultValues.minPSxGPlusMinus)
        params.minPSxGPlusMinus = String(state.minPSxGPlusMinus);
      if (state.maxPSxGPlusMinus !== defaultValues.maxPSxGPlusMinus)
        params.maxPSxGPlusMinus = String(state.maxPSxGPlusMinus);
      if (state.minPKA !== defaultValues.minPKA)
        params.minPKA = String(state.minPKA);
      if (state.maxPKA !== defaultValues.maxPKA)
        params.maxPKA = String(state.maxPKA);
      if (state.minPKsv !== defaultValues.minPKsv)
        params.minPKsv = String(state.minPKsv);
      if (state.maxPKsv !== defaultValues.maxPKsv)
        params.maxPKsv = String(state.maxPKsv);
      if (state.minAvgDist !== defaultValues.minAvgDist)
        params.minAvgDist = String(state.minAvgDist);
      if (state.maxAvgDist !== defaultValues.maxAvgDist)
        params.maxAvgDist = String(state.maxAvgDist);
      if (state.minAvgLen !== defaultValues.minAvgLen)
        params.minAvgLen = String(state.minAvgLen);
      if (state.maxAvgLen !== defaultValues.maxAvgLen)
        params.maxAvgLen = String(state.maxAvgLen);
      if (state.minLaunchPct !== defaultValues.minLaunchPct)
        params.minLaunchPct = String(state.minLaunchPct);
      if (state.maxLaunchPct !== defaultValues.maxLaunchPct)
        params.maxLaunchPct = String(state.maxLaunchPct);

      if (state.minMP !== defaultValues.minMP)
        params.minMP = String(state.minMP);
      if (state.maxMP !== defaultValues.maxMP)
        params.maxMP = String(state.maxMP);
      if (state.minMin !== defaultValues.minMin)
        params.minMin = String(state.minMin);
      if (state.maxMin !== defaultValues.maxMin)
        params.maxMin = String(state.maxMin);
      if (state.minMinPct !== defaultValues.minMinPct)
        params.minMinPct = String(state.minMinPct);
      if (state.maxMinPct !== defaultValues.maxMinPct)
        params.maxMinPct = String(state.maxMinPct);
      if (state.minStarts !== defaultValues.minStarts)
        params.minStarts = String(state.minStarts);
      if (state.maxStarts !== defaultValues.maxStarts)
        params.maxStarts = String(state.maxStarts);
      if (state.minIn !== defaultValues.minIn)
        params.minIn = String(state.minIn);
      if (state.maxIn !== defaultValues.maxIn)
        params.maxIn = String(state.maxIn);
      if (state.minMnPerMP !== defaultValues.minMnPerMP)
        params.minMnPerMP = String(state.minMnPerMP);
      if (state.maxMnPerMP !== defaultValues.maxMnPerMP)
        params.maxMnPerMP = String(state.maxMnPerMP);
      if (state.minMnPerStart !== defaultValues.minMnPerStart)
        params.minMnPerStart = String(state.minMnPerStart);
      if (state.maxMnPerStart !== defaultValues.maxMnPerStart)
        params.maxMnPerStart = String(state.maxMnPerStart);
      if (state.minMnPerSub !== defaultValues.minMnPerSub)
        params.minMnPerSub = String(state.minMnPerSub);
      if (state.maxMnPerSub !== defaultValues.maxMnPerSub)
        params.maxMnPerSub = String(state.maxMnPerSub);
      if (state.minUnSub !== defaultValues.minUnSub)
        params.minUnSub = String(state.minUnSub);
      if (state.maxUnSub !== defaultValues.maxUnSub)
        params.maxUnSub = String(state.maxUnSub);

      if (state.minPPM !== defaultValues.minPPM)
        params.minPPM = String(state.minPPM);
      if (state.maxPPM !== defaultValues.maxPPM)
        params.maxPPM = String(state.maxPPM);
      if (state.minRec !== defaultValues.minRec)
        params.minRec = String(state.minRec);
      if (state.maxRec !== defaultValues.maxRec)
        params.maxRec = String(state.maxRec);
      if (state.minRecov !== defaultValues.minRecov)
        params.minRecov = String(state.minRecov);
      if (state.maxRecov !== defaultValues.maxRecov)
        params.maxRecov = String(state.maxRecov);
      if (state.minTouches !== defaultValues.minTouches)
        params.minTouches = String(state.minTouches);
      if (state.maxTouches !== defaultValues.maxTouches)
        params.maxTouches = String(state.maxTouches);
      if (state.minFK !== defaultValues.minFK)
        params.minFK = String(state.minFK);
      if (state.maxFK !== defaultValues.maxFK)
        params.maxFK = String(state.maxFK);
      if (state.minCK !== defaultValues.minCK)
        params.minCK = String(state.minCK);
      if (state.maxCK !== defaultValues.maxCK)
        params.maxCK = String(state.maxCK);
      if (state.minTI !== defaultValues.minTI)
        params.minTI = String(state.minTI);
      if (state.maxTI !== defaultValues.maxTI)
        params.maxTI = String(state.maxTI);
      if (state.minLive !== defaultValues.minLive)
        params.minLive = String(state.minLive);
      if (state.maxLive !== defaultValues.maxLive)
        params.maxLive = String(state.maxLive);
      if (state.minDead !== defaultValues.minDead)
        params.minDead = String(state.minDead);
      if (state.maxDead !== defaultValues.maxDead)
        params.maxDead = String(state.maxDead);

      return params;
    },
  }))
);
