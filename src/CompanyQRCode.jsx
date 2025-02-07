import React from 'react';
import QRCode from 'qrcode.react';

const CompanyQRCode = () => {
  const companyLogoUrl = 'https://skygardenwe.blob.core.windows.net/media/profiles/142519-34d7d8be90c144f7975225b2f7521312.jpg';
  const qrValue = "https://thenovaplus.com/profile/6753fcb71e64cdab6c29bc62";

  return (
    <div className="qrcode-container flex items-center justify-center p-4">
      <div className="qrcode-wrapper relative rounded-full border-8 border-blue-500 p-2 bg-white shadow-lg" style={{ width: 280, height: 280 }}>
        <QRCode
          value={qrValue}
          size={256}
          level="H"
          includeMargin={false}
          bgColor="transparent"
          // Embed the logo directly into the QR code canvas
          renderAs="canvas" // Important: Use canvas rendering for custom drawing
          beforeDraw={(canvas) => {
            const ctx = canvas.getContext('2d');
            const img = new Image();
            img.src = companyLogoUrl;

            img.onload = () => {
              const logoSize = 40; // Adjust logo size as needed
              const x = (canvas.width - logoSize) / 2;
              const y = (canvas.height - logoSize) / 2;

              // Clear a small area in the center for the logo.  This is crucial
              ctx.fillStyle = 'white'; // Match the QR code background
              ctx.fillRect(x - 2, y - 2, logoSize + 4, logoSize + 4); // Slightly larger clear

              ctx.drawImage(img, x, y, logoSize, logoSize);
            };
          }}
        />
        <div className="scan-text text-center mt-2 font-bold text-blue-600">Scan Me</div>
      </div>
    </div>
  );
};

export default CompanyQRCode;