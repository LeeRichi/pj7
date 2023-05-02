import React, { useState } from 'react';

type SavingProps = {
  savings: number;
  setSavings: React.Dispatch<React.SetStateAction<number>>;
};

const Saving = ({ savings, setSavings }: SavingProps) =>
{
    const [target, setTarget] = useState(0)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTarget(Number(event.target.value));
  };

  const handleReset = () => {
    setTarget(0);
  };
    
  return (
    <div>
      <label htmlFor='savings'>Set target:</label>
      <input
        type='number'
        id='target'
        name='target'
        value={target}
        onChange={handleInputChange}
      />
        <button onClick={handleReset}>Reset</button>
        current saving: {savings}
        <br />
        target: {target}
        <br />

    
      <progress max='100' value={savings} />
    </div>
  );
};

export default Saving;
