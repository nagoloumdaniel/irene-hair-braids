import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const QRCodeGenerator = () => {
  const [url, setUrl] = useState('https://exemple.com'); // URL par défaut

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">QR Code Generator</h1>

      {/* Formulaire pour entrer une URL */}
      <div className="mb-4">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border border-gray-300 rounded-md p-2 text-lg w-full"
          placeholder="Enter URL"
        />
      </div>

      {/* QR Code personnalisé */}
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <QRCode
          value={url} // Lien associé au QR Code
          size={256} // Taille du QR Code
          bgColor={"#ffffff"} // Couleur d'arrière-plan
          fgColor={"#000000"} // Couleur du code
          level={"H"} // Niveau de correction d'erreur (H pour haut)
          includeMargin={true} // Ajoute des marges
        />
      </div>

      {/* Afficher l'URL actuelle */}
      <div className="mt-4">
        <p className="text-sm text-gray-600">QR Code for: <a href={url} target="_blank" className="text-blue-600 underline">{url}</a></p>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
