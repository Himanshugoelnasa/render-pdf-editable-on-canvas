import React from 'react';

const TextFormatting = ({ element, updateElementStyle, removeElement }) => {
  const toggleStyle = (style) => {
    const newStyle = { ...element.style };
    newStyle[style] = !newStyle[style];
    updateElementStyle(element.id, newStyle);
  };

  return (
    <div className="text-formatting">
      <button onClick={() => toggleStyle('bold')}>Bold</button>
      <button onClick={() => toggleStyle('italic')}>Italic</button>
      <button onClick={() => toggleStyle('underline')}>Underline</button>
      <button onClick={() => removeElement(element.id)}>Remove</button>
    </div>
  );
};

export default TextFormatting;
