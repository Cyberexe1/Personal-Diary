import React from 'react';
import { Calendar, Tag, Trash2 } from 'lucide-react';
import { formatDate } from '../lib/utils';
import type { DiaryEntry as DiaryEntryType } from '../store/diary';

interface DiaryEntryProps {
  entry: DiaryEntryType;
  onDelete: (id: string) => void;
  onClick: (id: string) => void;
}

export function DiaryEntry({ entry, onDelete, onClick }: DiaryEntryProps) {
  const moodEmoji = {
    happy: '😊',
    sad: '😢',
    neutral: '😐',
    excited: '🎉',
    anxious: '😰',
  };

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 mb-4 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => onClick(entry.id)}
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-4">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
          {entry.title}
        </h3>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(entry.id);
          }}
          className="self-end sm:self-auto text-gray-400 hover:text-red-500 transition-colors"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
        {entry.content}
      </p>
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{formatDate(new Date(entry.date))}</span>
          </div>
          {entry.mood && (
            <div className="text-lg" title={entry.mood}>
              {moodEmoji[entry.mood]}
            </div>
          )}
        </div>
        
        {entry.tags.length > 0 && (
          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4" />
            <div className="flex flex-wrap gap-2">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}