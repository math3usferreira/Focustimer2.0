import {
} from "./elements.js";

export default function Sound() {
  const buttonPressAudio = new Audio(
    "./assets/button-press.wav"
  );

  const KitchenTimer = new Audio(
    "./assets/kichen-timer.mp3"
  );

  const bgForest = new Audio(
    "./assets/Floresta.wav"
  );


  bgForest.loop = true;

  const bgRain = new Audio(
    "./assets/Chuva.wav"
  );

 

  bgRain.loop = true;

  const bgCoffee = new Audio(
    "./assets/Cafeteria.wav"
  );



  bgCoffee.loop = true;

  const bgFireplace = new Audio(
    "./assets/Lareira.wav"
  );

  bgFireplace.loop = true;

  function pressSound() {
    buttonPressAudio.play();
  }

  function timeOut() {
    KitchenTimer.play();
  }

  return {
    bgForest,
    bgRain,
    bgCoffee,
    bgFireplace,
    pressSound,
    timeOut,
  };
}