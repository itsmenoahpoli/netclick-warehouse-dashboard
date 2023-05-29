import React from "react";

import BRAND_LOGO from "~/assets/brand/netclick-tech-ph.png";

type TProps = {
  height?: number;
  width?: number;
};

export const BrandLogo: React.FC<TProps> = (props) => {
  const height = props.height ?? 100;
  const width = props.height ?? 120;

  return (
    <div className="brand-logo-wrapper">
      <img
        src={BRAND_LOGO}
        alt="brand-logo.png"
        className="brand-logo-wrapper__image"
        style={{
          height: `${height}px`,
          width: `${width}px`,
        }}
      />
    </div>
  );
};
