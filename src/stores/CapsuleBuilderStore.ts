import {create} from 'zustand';

type Capsule = {
  year: string | null;
  subject: string | null;
  title: string | null;
  keywords: string | null;
  contentType: string | null;
  content: string | null;
  song: string | null;
  friends: string | null;
  isPrivate: boolean;
  openTime: Date | null;
};

const InitCapsule: Capsule = {
  year: null,
  subject: null,
  title: null,
  keywords: null,
  contentType: null,
  content: null,
  song: null,
  friends: null,
  isPrivate: true,
  openTime: null,
};

export interface CapsuleBuilderState {
  capsule: Capsule;
  updateCapsule: (props: Partial<Capsule>) => void;
  clear: () => void;
}

export const useCapsuleBuilderStore = create<CapsuleBuilderState>(set => ({
  capsule: {
    year: null,
    subject: null,
    title: null,
    keywords: null,
    contentType: null,
    content: null,
    song: null,
    friends: null,
    isPrivate: true,
    openTime: null,
  },
  updateCapsule: props =>
    set(state => ({capsule: {...state.capsule, ...props}})),
  clear: () => set(() => ({capsule: InitCapsule})),
}));
