// src/setupPdfWorker.js
export default function setupPdfWorker() {
    return new Promise((resolve, reject) => {
      import('pdfjs-dist/build/pdf.worker.entry').then((workerModule) => {
        resolve(workerModule.default);
      }).catch((err) => {
        reject(err);
      });
    });
  }


  
  