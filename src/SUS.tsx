import React from 'react';
import './styles/styles.css';

interface SUSInterface {
  result: number;
}

const SUS = ({ result }: SUSInterface) => {
  const data = [
    { number: 0 },
    { number: 10 },
    { number: 20, marker: 'Worst imaginable' },
    { number: 30, marker: 'Poor' },
    { number: 40 },
    { number: 50, marker: 'Ok' },
    { number: 60 },
    { number: 70, marker: 'Good' },
    { number: 80 },
    { number: 90 },
    { number: 100, marker: 'Best imaginable' },
  ];
  return (
    <div className='flex flex-col justify-start items-start w-[615px]'>
      <div className='flex h-[220px]'>
        {data.map((item) => {
          return (
            <SusBall
              key={item.number}
              number={item.number.toString()}
              marker={item?.marker ? true : false}
              markerText={item?.marker}
              result={result >= item.number && result < item.number + 10 ? result : undefined}
            />
          );
        })}
      </div>
      <div className='flex w-full gap-1 text-center py-2 pl-1 font-bold text-white'>
        <span className='p-2 w-[50%] bg-red-500'>Not acceptable</span>
        <span className='p-2 bg-yellow-500 w-[18%]'>Marginal</span>
        <span className='p-2 bg-green-500 w-[32%]'>Acceptable</span>
      </div>
    </div>
  );
};

interface SusBallInterface {
  number: string;
  marker?: boolean;
  markerText?: string;
  result?: number;
}

const SusBall = ({ number, marker = false, markerText, result }: SusBallInterface) => {
  let color = 'green';
  if (result && result < 50) {
    color = 'red';
  } else if (result && result < 70) {
    color = 'yellow';
  }
  return (
    <div className='flex justify-center items-center'>
      <div className='p-1'>
        <div className='bg-gray-300 rounded-full h-10 w-10 flex justify-center items-center'>
          <span>{number}</span>
        </div>
      </div>
      <div className='flex flex-col items-center justify-start w-2 h-36'>
        <div className='h-20 flex flex-col items-center justify-center'>
          {result && (
            <>
              <div
                className={`bg-${color}-500 h-10 w-10 rounded-full flex justify-center items-center`}
              >
                <span className='text-white'>{result}</span>
              </div>
              <div className={`h-10 w-2 bg-${color}-500 rounded-b-full`}></div>
            </>
          )}
        </div>
        <div className='h-10'>
          {marker && (
            <div className='flex flex-col items-center justify-center w-2'>
              <div className='w-1 h-1 rounded-full bg-blue-500'></div>
              <div className='h-10 w-[0.5px] bg-blue-500'></div>
              <div className='w-2 h-2 rounded-full bg-blue-500'></div>
              <div className='text-center'>{markerText}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SUS;
