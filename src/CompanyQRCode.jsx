import React from 'react';
import QRCode from 'qrcode.react';


const CompanyQRCode = () => {
  const companyLogoUrl = 'https://thenovaplus.com/logo/header-logo.svg';

  return (
    <div className="qrcode-container">

      <div className="qrcode-wrapper">
      <img src={companyLogoUrl} alt="Company Logo" />
      {/* <h2>SCAN ME</h2> */}
        <QRCode value="https://play.google.com/store/apps/details?id=com.thenovaplus&hl=en"  size={256}/>
        <div className="scan-text">Scan Me</div>
      </div>

    </div>
  );
};

export default CompanyQRCode;