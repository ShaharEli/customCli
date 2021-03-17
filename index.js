const inquirer = require("inquirer");
const createComponent = require("./createComponent");
const pwd = process.cwd();
const argv = process.argv.slice(2);
console.log(argv);

const cli = async () => {
  if (argv[0] === "cc") {
    if (argv[1]) {
      const [_, componentName, ...rest] = argv;
      createComponent(componentName, rest);
      return;
    } else {
      const { name } = await inquirer.prompt([
        {
          name: "name",
          message: "What name should we call the component?",
        },
      ]);
      const [_, ...rest] = argv;
      createComponent(name, rest);
    }
  }
};

cli();
