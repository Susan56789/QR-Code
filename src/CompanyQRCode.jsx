import React from 'react';
import QRCode from 'qrcode.react';


const CompanyQRCode = () => {
  const companyLogoUrl = 'https://skygardenwe.blob.core.windows.net/media/profiles/142519-34d7d8be90c144f7975225b2f7521312.jpg';

  return (
    <div className="qrcode-container">

      <div className="qrcode-wrapper">
      <img src={companyLogoUrl} alt="Company Logo" />
      {/* <h2>SCAN ME</h2> */}
        <QRCode value="https://thenovaplus.com/profile/6753fcb71e64cdab6c29bc62"  size={256}/>
        <div className="scan-text">Scan Me</div>
      </div>

    </div>
  );
};

export default CompanyQRCode;