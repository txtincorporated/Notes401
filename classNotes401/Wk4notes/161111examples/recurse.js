function recurse(input, max) {
  log ('before ', input);
  if(input < max) {
    log (recurse(input + 1, max));
  }
  return 'after ' + input;
}

log(recurse(1, 3));