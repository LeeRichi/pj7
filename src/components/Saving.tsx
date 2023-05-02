import React, { useState } from 'react';

type SavingProps = {
  savings: number;
  setSavings: React.Dispatch<React.SetStateAction<number>>;
};

type ProgressBarProps = {
  percentage: number;
}

const ProgressBar = ({ percentage }: ProgressBarProps) => {
  return (
    <div>
      <progress max='100' value={percentage} />
    </div>
  )
}


const Saving = ({ savings, setSavings }: SavingProps) =>
{
    const [target, setTarget] = useState(0)
    const [handletarget, setHandleTarget] = useState(0)

    const [percentage, setPercentage] = useState(0)


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHandleTarget(Number(event.target.value));
  };

  const handleReset = () => {
      setTarget(handletarget);
      setHandleTarget(0);
      if (target > 0) {
        setPercentage(savings/target*100);
      }
      
  };
    
  return (
    <div>
      <label htmlFor='savings'>Set target:</label>
      <input
        type='number'
        id='target'
        name='target'
        value={handletarget}
        onChange={handleInputChange}
      />
        <button onClick={handleReset}>Reset</button>
        current saving: {savings}
        <br />
        target: {target}
        <br />
        Progress: {percentage}%
    
        <ProgressBar percentage={percentage}/>
    </div>
  );
};

export default Saving;
