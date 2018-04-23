if (process.env.SKIP_WRAP != 'true'){
  const originalProcessExit = process.exit;
  process.exit = function(code){
    console.log('should I stay or sould I go?', code, new Error())
    if (new Error().stack.includes('node_modules/mocha/bin/_mocha')){
      originalProcessExit(code);
    }
  }
}
