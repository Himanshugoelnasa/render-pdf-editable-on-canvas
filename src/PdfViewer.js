// src/PdfViewer.js
import React, { useEffect, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';

pdfjsLib.GlobalWorkerOptions.workerSrc = `http://localhost:3000//pdf.worker.js`;

const PdfViewer = ({ url }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise.then((pdf) => {
      pdf.getPage(1).then((page) => {
        const scale = 1.5;
        const viewport = page.getViewport({ scale });
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };
        page.render(renderContext);
      });
    });
  }, [url]);

  return <canvas ref={canvasRef}></canvas>;
};

export default PdfViewer;
