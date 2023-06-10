import {create} from 'zustand';

type SearchBoard = {
  year: string;
  subject: string | null;
};

const InitSearchBoard: SearchBoard = {
  year: '2010',
  subject: null,
};

export interface BoardState {
  searchBoard: SearchBoard;
  updateSearchBoard: (props: Partial<SearchBoard>) => void;
  clear: () => void;
}

export const useBoardStore = create<BoardState>(set => ({
  searchBoard: InitSearchBoard,
  updateSearchBoard: props =>
    set(state => ({searchBoard: {...state.searchBoard, ...props}})),
  clear: () => set(() => ({searchBoard: InitSearchBoard})),
}));
