const config = {
    binaryThresh: 0.5,
    hiddenLayers: [3],
    activation: 'sigmoid',
    leakyReluAlpha: 0.01,
    iterations: 5000
};





// ---------- GUESS NUMBER ----------

// const net = new brain.recurrent.RNN(config);

// net.train([
//   { input: [0, 0], output: [0] },
//   { input: [0, 1], output: [1] },
//   { input: [1, 0], output: [1] },
//   { input: [1, 1], output: [0] },
// ]
// // ,{iterations: 5000}
// );

// const output = net.run([0, 0]);

// console.log(output) 





// ---------- WHICH CATEGORY IS THAT? ----------

const net = new brain.recurrent.LSTM();

net.train([
  { input: "Excel shows me an error", output: 'software' },
  { input: "My computer won't run", output: 'hardware' },
  { input: "program", output: "software" },
  { input: "power supply", output: "hardware" },
  { input: "drive", output: "hardware" },
  { input: "Code", output: "software" },
  { input: "I found some errors in the code", output: "software" },
  { input: "I extended the memory", output: "hardware" },
  { input: "I tested the code", output: "software" }
],{iterations: 100});

const output = net.run('My power supply has failed');

console.log(`Category: ${output}`)





// ---------- WHICH CATEGORY IS THAT? SECOND ----------

// const data = [
//     { "text": "Excel shows me an error", "category": "software" },
//     { "text": "My computer won't run", "category": "hardware" },
//     { "text": "program", "category": "software" },
//     { "text": "power supply", "category": "hardware" },
//     { "text": "drive", "category": "hardware" },
//     { "text": "Code", "category": "software" },
//     { "text": "I found some errors in the code", "category": "software" },
//     { "text": "I extended the memory", "category": "hardware" },
//     { "text": "I tested the code", "category": "software" }
//   ]

// const net = new brain.recurrent.LSTM();

// const trainingData = data.map(item => ({
//     input: item.text,
//     output: item.category
// }));

// net.train(trainingData, {
//     iterations: 2000
// });

// const output = net.run('My power supply has failed');

// console.log(`Category: ${output}`)