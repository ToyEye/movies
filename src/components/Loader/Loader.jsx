import React from 'react';
import { Blocks } from 'react-loader-spinner';

import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
      />
    </LoaderWrapper>
  );
};

export default Loader;
