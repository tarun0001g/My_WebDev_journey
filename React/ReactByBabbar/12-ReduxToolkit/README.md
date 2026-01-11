

Redux is a library used to manage global state in a React application.

👉 In simple words:
Redux helps you store and manage data that many components need to use.

--------------------------------------------------------------------------------------------------------------------------
🔗 Important React-Redux Hooks

🔹 useSelector : Used to read data from Redux store.
Ex. const count = useSelector(state => state.counter.count);

🔹 useDispatch : Used to send actions to Redux.
Ex. const dispatch = useDispatch();

--------------------------------------------------------------------------------------------------------------------------

// Steps - 
// 1. create store (in 'redux' folder)
// 2. wrap the App.js with Provider
// 3. create slice (in 'features' folder)
// 4. create Reducers in slice 
// 5. register the created reducers in the store
// 6. useSelector, dispatch 

// Whole path - 
// UI trigger -> Action dispatch -> store -> reducer -> state update in store -> UI update 
// ex- button click -> handlefunc() -> store -> increment() -> num+1 in store -> num+1 in UI

---------------------------------------------------------------------------------------------------------------------
1. First we will create the store -> store.js
using this web: https://redux-toolkit.js.org/introduction/why-rtk-is-redux-today

2. Provide the Redux Store to React
 now we will wrap the  <App/> component with  provider
 -> immport these: 
import { store } from './app/store' //path can be differ
import { Provider } from 'react-redux'
->now we will wrap it in <Provider store={store}><App /> </Provider>
---->we did this so that store will be accessible for every component of applicatiion

3. Create a Redux State Slice from: https://redux-toolkit.js.org/tutorials/quick-start

4. Add/Register Slice Reducers with the Store

 now we want to use the value of counterSlice instead of useState hook 
5. for that we will use useSelector() hook to get value from counter

6. Dispatch the action using useDispatch hook


