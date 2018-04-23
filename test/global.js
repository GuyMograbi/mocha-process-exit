if (process.env.WITH_PROCESS_EXIT_WRAPPER){
  const originalProcessExit = process.exit;
  process.exit = function(code){
    console.log('should I stay or should I go now?', code, new Error())
    if (new Error().stack.includes('node_modules/mocha/bin/_mocha')){
      originalProcessExit(code);
    }
  }
}
