var noQuiet = process.argv.some(function (arg) {
  return arg === '--no-quiet' ||
    arg === '--noq' ||
    arg === 'watch' ||
    arg === '--verbose' ||
    arg === '-v';
});

if (!noQuiet) {
  var originalWrite = process.stdout.write.bind(process.stdout);

  var output = '';
  process.stdout.write = function () {
    originalWrite('.');
    // originalWrite.apply(1, arguments);
    output += Array.prototype.join.call(arguments, '');
  };
  var interval;
  var originalExit = process.exit;
  function exit(exitCode) {
    clearInterval(interval);
    process.emit('timegruntexit', exitCode);
  }

  interval = setInterval(function () {
    process.exit = exit;
  }, 1);
  process.exit = exit;

  process.on('SIGINT', function () {
    process.exit();
  });

  process.once('timegruntexit', function (exitCode) {
    clearInterval(interval);
    process.exit = originalExit;

    process.stdout.write = originalWrite;

    if (exitCode) {
      process.stdout.write('\n' + output);
    } else {
      process.stdout.write('\n');
    }

    process.exit(exitCode);
  });
}
