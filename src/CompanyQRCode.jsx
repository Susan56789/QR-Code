import React from 'react';
import QRCode from 'qrcode.react';

const CompanyQRCode = () => {
  const companyLogoUrl = 'https://quirkwebstudios.netlify.app/images/logo.png';



  return (
    <div className="qrcode-container">

      <div className="qrcode-wrapper">
        <img src={companyLogoUrl} alt="Company Logo" />
        <h2>QUIRKWEB STUDIOS</h2>
        <QRCode value="https://quirkwebstudios.netlify.app/" size={256} />
        <div className="scan-text">Scan Me</div>
      </div>



    </div>
  );
};

export default CompanyQRCode;
