// Normal Function That Returns a Promise
function walk() {
  return new Promise((resolve) => {
      resolve("You Walked");
  });
}

// async Function That Returns a Promise by Default
async function run() {
    return "You Ran";
}

async function check() {
  // Resolving The Normal Function Promise
  let walked = await walk();
  console.log(walked); // output : You Walked
  
  // Resoloving The async Function Promise
  let ran = await run();
  console.log(ran); // output : You Ran
}
check();
