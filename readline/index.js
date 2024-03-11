// Import required module
const readline = require('readline');
const Solution = () => {
  // Write your code here
 const qInterface=  readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  qInterface.question("Enter the first number: ", (num1)=>{
    qInterface.question("Enter the Second number: ", (num2)=>{
      const Maxi = Math.max(Number(num1),Number(num2));
      console.log("The maximum of the two numbers is:", Maxi);
    })
  })
};

Solution();
module.exports = Solution;
