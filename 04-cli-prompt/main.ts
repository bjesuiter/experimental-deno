import Ask from 'https://deno.land/x/ask/mod.ts';

const ask = new Ask();

const answers = await ask.prompt([
    {
      name: 'name',
      type: 'input',
      message: 'Name:'
    },
    {
      name: 'confirm',
      type: 'confirm',
      message: 'Is this correct?:'
    }
  ]);

  if (answers.confirm) {
      console.log(`Hello ${answers.name}!`);
  }

  console.log(`Hello "Not-${answers.name}"!`);

