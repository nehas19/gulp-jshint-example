## Setup
Install dependencies using `npm install`. That's it.

## Run
Execute only `gulp` from the root project directory.

The file at `src/js/frame-mngr.js` contains error and hence should log an error message as `JSHint has caught error` and immediately stop the gulp tasks' execution.

Remove/delete all code from the same file `src/js/frame-mngr.js` to check if everything works when there's no error. If you empty out the file content or delete the file itself. Things should work normally.
