import React, { useRef } from 'react';
import QRCode from 'qrcode.react';
import html2canvas from 'html2canvas';

const CompanyQRCode = () => {
  const companyLogoUrl = 'https://pbs.twimg.com/profile_images/965891564437467137/vl8OQ7w1_400x400.jpg';
  const qrCodeRef = useRef(null);

  // Function to download the QR code and logo as a PNG image
  const downloadImage = async () => {
    const element = qrCodeRef.current;

    try {
      const canvas = await html2canvas(element, { scale: 3, useCORS: true });
      const image = canvas.toDataURL('image/png');

      // Create a link to trigger the download
      const link = document.createElement('a');
      link.href = image;
      link.download = 'Verified_Novaplus_Seller.png';
      link.click();
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 auto', position: 'relative', maxWidth: '500px' }}>
      <div
        ref={qrCodeRef}
        className="qrcode-wrapper-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: '3px solid green',
          padding: '20px',
          backgroundColor: '#fff',
        }}
      >
        {/* QR Code Section */}
        <div className="qrcode-wrapper" style={{ textAlign: 'center', marginRight: '20px' }}>
          <QRCode value="https://thenovaplus.com/profile/675bea19763d0bdf3af27fc5" size={120} />
        </div>

        {/* Logo and Message Section */}
        <div className="logo-message-wrapper" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={companyLogoUrl}
            alt="Company Logo"
            style={{ width: '100px', margin: '10px' }}
          />
          <h2 style={{ fontSize: '16px',  color: '#333' }}>VERIFIED NOVAPLUS SELLER</h2>
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={downloadImage}
        style={{
          marginTop: '20px',
          backgroundColor: '#007BFF',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Download as PNG
      </button>
    </div>
  );
};

export default CompanyQRCode;
