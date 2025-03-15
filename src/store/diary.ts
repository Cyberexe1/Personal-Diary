import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type DiaryEntry = {
  id: string;
  title: string;
  content: string;
  date: Date;
  mood: 'happy' | 'sad' | 'neutral' | 'excited' | 'anxious';
  tags: string[];
  attachments: Array<{
    type: 'image' | 'pdf';
    name: string;
    url: string;
  }>;
};

interface DiaryState {
  entries: DiaryEntry[];
  addEntry: (entry: Omit<DiaryEntry, 'id'>) => void;
  updateEntry: (id: string, entry: Partial<DiaryEntry>) => void;
  deleteEntry: (id: string) => void;
  getEntry: (id: string) => DiaryEntry | undefined;
}

export const useDiaryStore = create<DiaryState>()(
  persist(
    (set, get) => ({
      entries: [],
      addEntry: (entry) => {
        const newEntry = {
          ...entry,
          id: crypto.randomUUID(),
        };
        set((state) => ({
          entries: [newEntry, ...state.entries],
        }));
      },
      updateEntry: (id, updatedEntry) => {
        set((state) => ({
          entries: state.entries.map((entry) =>
            entry.id === id ? { ...entry, ...updatedEntry } : entry
          ),
        }));
      },
      deleteEntry: (id) => {
        set((state) => ({
          entries: state.entries.filter((entry) => entry.id !== id),
        }));
      },
      getEntry: (id) => {
        return get().entries.find((entry) => entry.id === id);
      },
    }),
    {
      name: 'diary-storage',
    }
  )
);