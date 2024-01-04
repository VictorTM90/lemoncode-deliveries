const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
  await delay(time);
  console.log(message);
};

const triggers = [
  async () => await showMessage([200, "third"]),
  async () => await showMessage([100, "second"]),
];

const run =  async (triggers) => {
  const [first, second] = triggers;
  const lastExecution = ()=> new Promise(resolve => console.log("first"));
  first()
    .then(res => second())
    .then(res =>  lastExecution())
    .catch(err => console.log(err))
};
// run(triggers);