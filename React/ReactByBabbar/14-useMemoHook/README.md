
Explanation:
When we click on increment it updates setCount and entire App() fn will be re-rendered also expensive fn is also re-executed unnecessarily that is why increment becomes slower.

useMemo prvents fn to re-render for same value

Syntax:
const cachedValue = useMemo(calculateValue, dependencies)
const cachedValue = useMemo(CalculatingFn, dependentVariable)









