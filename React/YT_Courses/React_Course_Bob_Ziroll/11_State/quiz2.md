1. You have 2 options for what you can pass in to a state setter function (e.g. `set Count`). What are they?
a. new value of state (setCount(42))
b. Callback function - whatever the callback function returns === new value of state

2. When would you want to pass the first option (from anwer above) to the state setter function?
Whenever you don't need the previous value of state to determine what the new value of state should be.

3. When would you wnat to pass the second option (from answer above) to the state setter function?
Whenever you DO need the previous value to determine the new value.