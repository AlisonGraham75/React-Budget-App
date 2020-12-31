import { createStore, combineReducers } from 'redux';

const demoState = {
    expenses: [{
        id: 'fkjdofi',
        description: 'January Rent',
        notes: 'This was the final paymnet for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent', 
        sortBy: 'amount', //Date or amount
        startDate: undefined,
        endDate: undefined
    }
};