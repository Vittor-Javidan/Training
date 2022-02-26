1. What does the `.map()` array mathod do?
Returns a new array. What gets returned from the callback funtion provided is placed at the same index in the new array.
Usually we take the items from the original array and modify them.

2. What do we usually use `.map()` for in React?
Converts an array of raw data into an array of JSX elememts that can be displayed on the page.

3. Why is using `.map()` better than just creating the components manually by typing then out?
It makes our code more "self-sustaining", not requiring additional changes whenever the data changes