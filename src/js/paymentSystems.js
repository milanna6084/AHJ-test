export default [
  {
    name: 'visa',
    cardLength: /1[369]/,
    cardReg: /^4\d*$/,
  },
  {
    name: 'master-card',
    cardLength: /16/,
    cardReg: /^5[1-5]\d*$/,
  },
  {
    name: 'american-express',
    cardLength: /15/,
    cardReg: /^3[74]\d*$/,
  },
  {
    name: 'mir',
    cardLength: /16/,
    cardReg: /^220\d*$/,
  },
  {
    name: 'diners-club',
    cardLength: /14/,
    cardReg: /^36\d*$/,
  },
  {
    name: 'discover',
    cardLength: /1[69]/,
    cardReg: /^6(011|5|4[4-9])\d*$/,
  },
  {
    name: 'jsb',
    cardLength: /1[69]/,
    cardReg: /^3[58]\d*$/,
  },
];
