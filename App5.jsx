import React from 'react';
import { Flex, Space } from 'antd';
import ProgressBarList from './ProgressBarList';

const App = () => {
  const progressData = [
    { filename: 'HUB Master', percentage: 10, color: 'green' },
    { filename: 'HUB Enabler',percentage: 20, color: 'green' },
    { filename: 'CDP',percentage: 75, color: 'green' },
    { filename: 'HIE',percentage: 75, color: 'green' },
  ];
  const progressData1 = [
    { percentage: 10, color: 'red' },
    { percentage: 20, color: 'red' },
    { percentage: 75, color: 'red' },
    { percentage: 75, color: 'red' },
  ];
    const progressData2 = [
    { percentage: 10, color: 'yellow' },
    { percentage: 20, color: 'yellow' },
    { percentage: 75, color: 'yellow' },
    { percentage: 75, color: 'yellow' },
  ];
  return <Flex>
    {/* <div></div> */}
    {/* <div> */}
    <div style={{ textAlign: 'right' }}>
      <div style={{ fontWeight: 'bold', paddingRight: '20px'}}>Success</div>
      <ProgressBarList progressList={progressData} />
    </div>
    <div style={{ textAlign: 'right' }}>
      <div style={{ fontWeight: 'bold' , paddingRight: '20px'}}>Failed</div>
      <ProgressBarList progressList={progressData1} />
    </div>
    <div style={{ textAlign: 'right' }}>
      <div style={{ fontWeight: 'bold', paddingRight: '20px' }}>Pending</div>
      <ProgressBarList progressList={progressData2} />
    </div>
    {/* </div> */}
  </Flex>
};


export default App;  