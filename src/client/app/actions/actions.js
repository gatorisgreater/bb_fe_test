import 'isomorphic-fetch';

export const TRANSFER_MONEY = 'TRANSFER_MONEY';
export const transferMoney = (merchant, amount, date) => ({
    type: TRANSFER_MONEY,
    merchant,
    amount,
    date
});
