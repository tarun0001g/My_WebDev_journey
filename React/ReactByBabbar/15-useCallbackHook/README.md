


useCallback is a React hook used to remember (memoize) a function so that it is not recreated on every render.
useCallback is a React hook that memoizes functions to prevent unnecessary re-creation and re-rendering.

It helps improve performance by preventing unnecessary function re-creation.

Why use useCallback?
->Prevent unnecessary re-renders
->Pass stable functions to child components
->Optimize performance in large apps

SYNTAX:
const memoizedFunction = useCallback(Fn, [dependencies]);

->Function is created only when dependencies change
->Otherwise, the same function reference is reused









