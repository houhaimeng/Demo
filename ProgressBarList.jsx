import React from 'react';

const ProgressBarList = ({ progressList }) => {
  const labelStyle = {
    display: 'inline-block',
    width: '120px',
    textAlign: 'right',
    marginRight: '10px'
  };
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {progressList.map((item, index) => (
        <div key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
         
          {item.filename && <div style={labelStyle}>{item.filename}</div>}
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow={item.percentage}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{
                width: '280px',
                height: '10px',
                backgroundColor: '#eee',
                borderRadius: '10px',
                overflow: 'hidden',
                marginRight: '10px'
              }}
            >
            {/* 进度部分 */}
            <div
              className="progress-bar-inner"
              style={{
                height: '100%',
                width: `${item.percentage}%`,
                backgroundColor: item.color,
              }}
            ></div>
          </div>

          {/* 百分比文本 */}
          <span>{item.percentage}%</span>
        </div>
      ))}
    </div>
  );
};

export default ProgressBarList;