var submit = blessed.button({
    parent: form,
    mouse: true,
    keys: true,
    shrink: true,
    padding: {
      left: 1,
      right: 1
    },
    left: 0,
    top: 0,
    name: 'so la la la la',
    content: 'soooo',
    style: {
      bg: 'blue',
      focus: {
        bg: 'red'
      },
      hover: {
        bg: 'red'
      }
    }
  });

  var cancel = blessed.button({
    parent: form,
    mouse: true,
    keys: true,
    shrink: true,
    padding: {
      left: 1,
      right: 1
    },
    left: 10,
    top: 0,
    name: 'cancel',
    content: 'cancel',
    style: {
      bg: 'blue',
      focus: {
        bg: 'red'
      },
      hover: {
        bg: 'red'
      }
    }
  });

  var next = blessed.button({
    parent: form,
    mouse: true,
    keys: true,
    shrink: true,
    padding: {
      left: 1,
      right: 1
    },
    left: 20,
    top: 0,
    name: 'next',
    content: 'next',
    style: {
      bg: 'blue',
      focus: {
        bg: 'red'
      },
      hover: {
        bg: 'red'
      }
    }
  });

  submit.on('press', function () {
    form.submit();
  });

  cancel.on('press', function () {
    form.submit();
  });

  next.on('press', function () {
    form.submit();
  });



  form.on('submit', function (data) {
    form.setContent('Submitted.');

    debugger
    screen.render();
  });

  form.on('next', function (data) {
    form.setContent('Submitted.');

    debugger
    screen.render();
  });

  form.on('reset', function (data) {
    form.setContent('Canceled.');
    screen.render();
  });

  submit.focus();