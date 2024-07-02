// App.js
import React from 'react';
import PdfViewer from './PdfViewer';
import PdfTextLayer from './PdfTextLayer';
//import myPDF from 'http://localhost:3000/Sample-pdf-1.pdf'

const App = () => {
  //const pdfUrl = `http://localhost:3000/pdf-test.pdf`;
  const pdfUrl = `http://localhost:3000/Sample-pdf-1.pdf`;

  return (
    <div>
      {/* <PdfViewer url={pdfUrl} /> */}
      <PdfTextLayer url={pdfUrl} />
    </div>
  );
};

export default App;

