import { sub } from 'date-fns';
import { createStore, createHook } from 'react-sweet-state';

export enum Ranking {
  Gold = 'gold',
  Silver = 'silver',
  Bronze = 'bronze',
}

export enum Position {
  Keeper = 'keeper',
  Defense = 'defense',
  Mid = 'mid',
  Attack = 'attack',
}

const initialState = {
  // Dates
  fromDate: sub(new Date(), { days: 7 }),
  toDate: new Date(),

  // Data
  ranking: Ranking.Bronze,
  position: Position.Mid,
  notes: 'Example note',
};

type State = typeof initialState;

const Store = createStore({
  // value of the store on initialisation
  initialState,
  // actions that trigger store mutation
  actions: {
    setFilters: (newState: Partial<State>) => ({ setState }) => {
      setState(newState);
    },
  },
  // optional, mostly used for easy debugging
  name: 'counter',
});

export const useFilters = createHook(Store);
