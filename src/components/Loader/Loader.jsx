import { ProgressBar } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ProgressBar
      height="80"
      width="120"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor="#d0e700"
      barColor="#08069b"
    />
  );
};
// змінити кольор
