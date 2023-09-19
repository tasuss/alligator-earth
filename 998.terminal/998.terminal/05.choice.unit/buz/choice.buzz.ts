

export const initChoice = (cpy: ChoiceModel, bal: ChoiceBit, ste: State) => {
  debugger
  return cpy;
};

export const updateChoice = (cpy: ChoiceModel, bal: ChoiceBit, ste: State) => {
  return cpy;
};


export const openChoice = (cpy: ChoiceModel, bal: ChoiceBit, ste: State) => {

  let blessed = ste.value.terminal.blessed;
  let screen = ste.value.terminal.screen;

  var form = blessed.form({
    parent: screen,
    keys: true,
    left: 0,
    top: 0,
    width: 30,
    height: 1,
    bg: 'green',
    content: ''
  });

  if ( bal.lst == null) bal.lst = [];

  bal.lst = []

  bal.lst.forEach( (a)=>{

  })

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

  screen.key('left', () => form.focusPrevious())
  screen.key('right', () => form.focusNext())

  screen.render();

  return cpy;
};


export const keyChoice = (cpy: ChoiceModel, bal: ChoiceBit, ste: State) => {


  let blessed = ste.value.terminal.blessed;
  let screen = ste.value.terminal.screen;

  let menubar = blessed.listbar({
    parent: screen,
    keys: true,
    bottom: 0,
    left: 0,
    height: 1,
    style: { item: { fg: "yellow" }, selected: { fg: "yellow" } },
    commands: {
      Login: {
        keys: ["l", "L"],
        callback: () => {
          debugger
        }
      },
      "Toggle Autotrading": {
        keys: ["a", "A"],
        callback: () => {
          debugger
        }
      },
      "Make a Trade": {
        keys: ["t", "T"],
        callback: () => {
          debugger
        }
      },
      Help: {
        keys: ["h", "H"],
        callback: () => {

          debugger

        }
      },
      Logout: {
        keys: ["o", "O"],
        callback: () => { debugger }
      },
      Exit: {
        keys: ["C-c", "escape"],
        callback: () => process.exit(0)
      }
    }
  });


  screen.render();


  return cpy;
};


export const towerChoice = (cpy: ChoiceModel, bal:ChoiceBit, ste: State) => {
 
 return cpy;
 };
import { ChoiceModel } from "../choice.model";
import ChoiceBit from "../fce/choice.bit";
import State from "../../99.core/state";