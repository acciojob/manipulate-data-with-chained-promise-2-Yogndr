const outputDiv = document.getElementById("output");

function manipulateArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 0); // Initial delay is zero, only transformations are delayed
  })
  .then((arr) => {
    // Filter even numbers after 1 second
    return new Promise((resolve) => {
      setTimeout(() => {
        const evens = arr.filter(num => num % 2 === 0);
        outputDiv.textContent = evens.join(",");
        resolve(evens);
      }, 1000);
    });
  })
  .then((evens) => {
    // Multiply even numbers by 2 after 2 more seconds
    return new Promise((resolve) => {
      setTimeout(() => {
        const doubled = evens.map(num => num * 2);
        outputDiv.textContent = doubled.join(",");
        resolve(doubled);
      }, 2000);
    });
  });
}

// Call the function when the page loads
manipulateArray();
