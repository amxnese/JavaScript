new Promise((resolved) => {
  setTimeout(() => {
    console.log("1 second passed");
    resolved();
  }, 1000);
})
  .then(() => {
    return new Promise((resolved) => {
      setTimeout(() => {
        console.log("2 seconds passed");
        resolved();
      }, 1000);
    });
  })
  .then(() => {
    return new Promise(() => {
      setTimeout(() => {
        console.log("3 seconds passed");
      }, 1000);
    });
  });
