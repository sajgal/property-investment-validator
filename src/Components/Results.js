import React from 'react';
import { inject } from 'mobx-react';

const Results = (props) => {
  return (
    <div>
      Profit: {props.profit}
    </div>
  );
};

export default inject(stores => ({
  profit: stores.rootStore.investmentStore.profit,
}))(Results);