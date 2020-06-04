import {Spinner} from "./modules.ts";

const spinner = Spinner.getInstance();

let counter = 1;
await spinner.start('running step ' + counter);

const timer = setInterval(async () => {
    counter++;

    if (counter > 3) {
        clearInterval(timer);
        await spinner.succeed();
        return;
    }

    // Perform long running steps
    await spinner.setText('running step ' + counter);
    
}, 2000)