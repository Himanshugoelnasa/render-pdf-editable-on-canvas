// PdfTextLayer.js
import React, { useEffect, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import Draggable from 'react-draggable';
import { useDrop } from "react-dnd";
import { useDrag } from 'react-dnd';

pdfjsLib.GlobalWorkerOptions.workerSrc = `http://localhost:3000//pdf.worker.js`;

const PdfTextLayer = ({ url }) => {
  const [textItems, setTextItems] = useState([]);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'input',
    // item: { type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  useEffect(() => {
    const loadingTask = pdfjsLib.getDocument(url);
    console.log('loadingTask',loadingTask);
    loadingTask.promise.then((pdf) => {
      pdf.getPage(1).then((page) => {
        page.getTextContent().then((textContent) => {
            console.log('textContent',textContent);
          setTextItems(textContent.items);
        });
      });
    }).catch((error) => {
      console.error('Error loading PDF:', error);
    });
  }, [url]);

  return (
    <div>
      {textItems.map((item, index) => (
        <Draggable >
          <div key={index} draggable
          ref={drag}
            contentEditable
            className="draggable-input"
            style={{
                opacity: isDragging ? 0.5 : 1,
              position: 'absolute',
              left: `${item.transform[4]}px`,
              top: `${item.transform[5] - item.height}px`,
              fontSize: `${item.height}px`,
              fontFamily: item.fontName,
            }}
          >
            {item.str}
          </div>
          </Draggable>
      ))}
    </div>
  );
};

export default PdfTextLayer; // Ensure the component is exported correctly
