import React from "react";

import BRAND_LOGO from "~/assets/brand-logo.png";

type TProps = {
  height?: number;
  width?: number;
};

export const BrandLogo: React.FC<TProps> = (props) => {
  const height = props.height ?? 100;
  const width = props.height ?? 100;

  return (
    <div className="brand-logo-wrapper">
      <img
        src={BRAND_LOGO}
        alt="brand-logo.png"
        className="brand-logo-wrapper__image"
        height={height}
        width={width}
      />
    </div>
  );
};
