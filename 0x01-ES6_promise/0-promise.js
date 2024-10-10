function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API response with a timeout
    setTimeout(() => {
      const success = true; // Change this to false to simulate an error
      if (success) {
        resolve('API response received!');
      } else {
        reject(new Error('API call failed.'));
      }
    }, 1000); // Simulate a 1-second delay
  });
}

// Export the function
export default getResponseFromAPI;
