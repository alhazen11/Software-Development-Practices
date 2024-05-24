function processUserData(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user && user.name && user.email) {
        resolve("User data processed successfully.");
      } else {
        reject(new Error("Missing required user data."));
      }
    }, 1000);
  });
}

const userData = {
  name: "John Doe",
};

processUserData(userData).then((message) => {
  console.log(message);
});
