import React, { useState } from 'react';
import { DiaryEditor } from './components/DiaryEditor';
import { DiaryEntry } from './components/DiaryEntry';
import { LandingPage } from './components/LandingPage';
import type { DiaryEntry as DiaryEntryType } from './store/diary';

export default function App() {
  const [showDiary, setShowDiary] = useState(false);
  const [entries, setEntries] = useState<DiaryEntryType[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingEntry, setEditingEntry] = useState<DiaryEntryType | undefined>();

  const handleSaveEntry = (entry: Omit<DiaryEntryType, 'id'>) => {
    if (editingEntry) {
      setEntries(entries.map(e => e.id === editingEntry.id ? { ...entry, id: editingEntry.id } : e));
    } else {
      setEntries([...entries, { ...entry, id: crypto.randomUUID() }]);
    }
    setIsEditing(false);
    setEditingEntry(undefined);
  };

  const handleDeleteEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  const handleEditEntry = (id: string) => {
    const entry = entries.find(e => e.id === id);
    if (entry) {
      setEditingEntry(entry);
      setIsEditing(true);
    }
  };

  if (!showDiary) {
    return <LandingPage onOpenDiary={() => setShowDiary(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Diary</h1>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            New Entry
          </button>
        </div>

        {entries.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
              No entries yet. Start writing your first diary entry!
            </p>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg"
            >
              Create First Entry
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {entries.map(entry => (
              <DiaryEntry
                key={entry.id}
                entry={entry}
                onDelete={handleDeleteEntry}
                onClick={handleEditEntry}
              />
            ))}
          </div>
        )}

        {isEditing && (
          <DiaryEditor
            entry={editingEntry}
            onSave={handleSaveEntry}
            onClose={() => {
              setIsEditing(false);
              setEditingEntry(undefined);
            }}
          />
        )}
      </div>
    </div>
  );
}