import React from 'react';

import loadingIcon from 'assets/images/loading.gif';
import './loading.scss';

export function Loading() {
  return (
    <div className="loading-page">
      <img className="loader-icon" src={loadingIcon} alt="loading" />
    </div>
  );
}
