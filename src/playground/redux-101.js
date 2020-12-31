import { createStore } from 'redux';


//action generator for increment
const incrementCount = ({incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

//action generator for decrement
const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

//action generator for set
const setCount = ({count}) => ({
    type: 'SET',
    count
})

//action generator for reset
const resetCount = () => ({
    type: 'RESET'
});

const store = createStore((state = { count: 0}, action ) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }; 
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.setTo
            }
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
});

//Gets called every time the store changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCount({ incrementBy: 5}));

//when you are done tracking the state
//unsubscribe();

store.dispatch(incrementCount());

//reset the count
store.dispatch(resetCount());

//decrement the count
store.dispatch(decrementCount());

//decrement the count
store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: 101}));



