import React from 'react';
import { inject } from 'mobx-react';

const Title = (props) => {
  return (
    <div>
      Your expenses: {props.expenses}
      <button onClick={props.add}>Add</button>
    </div>
  );
};

export default inject(stores => ({
  expenses: stores.rootStore.investmentStore.expenses,
  add: stores.rootStore.investmentStore.addExpenses,
}))(Title);