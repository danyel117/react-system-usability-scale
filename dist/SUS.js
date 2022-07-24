import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from 'react/jsx-runtime';
import './styles/styles.css';
const SUS = ({ result }) => {
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
  return _jsxs('div', {
    className: 'flex flex-col justify-start items-start w-[615px]',
    children: [
      _jsx('div', {
        className: 'flex h-[220px]',
        children: data.map((item) => {
          return _jsx(
            SusBall,
            {
              number: item.number.toString(),
              marker: item?.marker ? true : false,
              markerText: item?.marker,
              result: result >= item.number && result < item.number + 10 ? result : undefined,
            },
            item.number
          );
        }),
      }),
      _jsxs('div', {
        className: 'flex w-full gap-1 text-center py-2 pl-1 font-bold text-white',
        children: [
          _jsx('span', { className: 'p-2 w-[50%] bg-red-500', children: 'Not acceptable' }),
          _jsx('span', { className: 'p-2 bg-yellow-500 w-[18%]', children: 'Marginal' }),
          _jsx('span', { className: 'p-2 bg-green-500 w-[32%]', children: 'Acceptable' }),
        ],
      }),
    ],
  });
};
const SusBall = ({ number, marker = false, markerText, result }) => {
  let color = 'green';
  if (result && result < 50) {
    color = 'red';
  } else if (result && result < 70) {
    color = 'yellow';
  }
  return _jsxs('div', {
    className: 'flex justify-center items-center',
    children: [
      _jsx('div', {
        className: 'p-1',
        children: _jsx('div', {
          className: 'bg-gray-300 rounded-full h-10 w-10 flex justify-center items-center',
          children: _jsx('span', { children: number }),
        }),
      }),
      _jsxs('div', {
        className: 'flex flex-col items-center justify-start w-2 h-36',
        children: [
          _jsx('div', {
            className: 'h-20 flex flex-col items-center justify-center',
            children:
              result &&
              _jsxs(_Fragment, {
                children: [
                  _jsx('div', {
                    className: `bg-${color}-500 h-10 w-10 rounded-full flex justify-center items-center`,
                    children: _jsx('span', { className: 'text-white', children: result }),
                  }),
                  _jsx('div', { className: `h-10 w-2 bg-${color}-500 rounded-b-full` }),
                ],
              }),
          }),
          _jsx('div', {
            className: 'h-10',
            children:
              marker &&
              _jsxs('div', {
                className: 'flex flex-col items-center justify-center w-2',
                children: [
                  _jsx('div', { className: 'w-1 h-1 rounded-full bg-blue-500' }),
                  _jsx('div', { className: 'h-10 w-[0.5px] bg-blue-500' }),
                  _jsx('div', { className: 'w-2 h-2 rounded-full bg-blue-500' }),
                  _jsx('div', { className: 'text-center', children: markerText }),
                ],
              }),
          }),
        ],
      }),
    ],
  });
};
export default SUS;
