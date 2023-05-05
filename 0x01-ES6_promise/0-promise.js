
Here's an example of how to create a Promise using the prototype function getResponseFromAPI():

javascript
Copy code
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Perform some asynchronous operation
    const data = { message: "Hello, world!" };
    resolve(data);

    // If the operation fails
    const error = "Failed to connect to API.";
    reject(error);
  });
}
