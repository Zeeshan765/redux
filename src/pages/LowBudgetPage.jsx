import React, { useState } from 'react';
import './LowBudgetPage.css';
import SingleLowBudget from './SingleLowBudget';
import budgetdata from './budgetdata';

const LowBudgetPage = () => {
  const [menuData, setMenuData] = useState(budgetdata);

  return (
    <>
      <h1>Low budgetPage</h1>
      <div className='Lowbudget-container'>
        {menuData
          .filter((data) => data.category === 'Low Budget')
          .map((data, index) => (
            <SingleLowBudget key={index} data={data} />
          ))}
      </div>
    </>
  );
};

export default LowBudgetPage;
