import Controls from "./actions.js";
import Timer from "./timer.js";
import Sound from "./sound.js";
import Events from "./events.js";
import "./toggle-mode.js";
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonMinus,
  displayMinutes,
  displaySeconds,
} from "./elements.js";

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonMinus,
});

const timer = Timer({
  displayMinutes,
  displaySeconds,
  resetControls: controls.reset,
});

const sound = Sound();

Events({ timer, sound, controls });

