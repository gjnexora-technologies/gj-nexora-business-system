import React, { useState } from 'react';
import { useDemo } from '../../context/DemoContext';
import { Edit2, Check } from 'lucide-react';

interface LiveEditableTextProps {
  id: string;
  defaultText: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  className?: string;
}

export const LiveEditableText: React.FC<LiveEditableTextProps> = ({
  id,
  defaultText,
  as: Component = 'p',
  className = '',
}) => {
  const { isLiveEditMode, customOverrides, setCustomOverride } = useDemo();
  const [isEditing, setIsEditing] = useState(false);
  
  const currentText = customOverrides[id] !== undefined ? customOverrides[id] : defaultText;
  const [tempText, setTempText] = useState(currentText);

  if (isLiveEditMode && isEditing) {
    return (
      <span className="inline-flex items-center gap-1.5 w-full">
        <input
          type="text"
          value={tempText}
          onChange={(e) => setTempText(e.target.value)}
          className="w-full px-2 py-1 bg-amber-50 border-2 border-amber-400 rounded text-sm text-[#111827] focus:outline-none"
          autoFocus
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setCustomOverride(id, tempText);
              setIsEditing(false);
            } else if (e.key === 'Escape') {
              setTempText(currentText);
              setIsEditing(false);
            }
          }}
        />
        <button
          onClick={() => {
            setCustomOverride(id, tempText);
            setIsEditing(false);
          }}
          className="p-1 bg-amber-500 text-white rounded hover:bg-amber-600 shrink-0"
          title="Save Copy"
        >
          <Check className="w-3.5 h-3.5" />
        </button>
      </span>
    );
  }

  return (
    <Component
      className={`${className} ${
        isLiveEditMode
          ? 'cursor-pointer hover:outline-dashed hover:outline-2 hover:outline-amber-400 rounded px-1 transition-all relative group'
          : ''
      }`}
      onClick={() => {
        if (isLiveEditMode) {
          setTempText(currentText);
          setIsEditing(true);
        }
      }}
      title={isLiveEditMode ? 'Click to edit copy' : undefined}
    >
      {currentText}
      {isLiveEditMode && (
        <span className="hidden group-hover:inline-flex ml-1.5 p-0.5 bg-amber-200 text-amber-900 rounded text-[10px] align-middle">
          <Edit2 className="w-2.5 h-2.5" />
        </span>
      )}
    </Component>
  );
};
