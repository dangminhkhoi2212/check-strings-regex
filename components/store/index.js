import { create } from 'zustand';

export const useGrammar = create((set) => ({
    resultCheck: false,
    paths: [],
    grammarShape: { V: [], T: [], P: [], S: '' },
    stringSets: [],
    setResultCheck: (value) => set({ resultCheck: value }),
    setGrammarShape: (value) => set({ grammarShape: value }),
    setStringSets: (value) => set({ stringSets: value }),
    setPaths: (value) => set({ paths: value }),
}));
