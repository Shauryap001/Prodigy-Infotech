/* ====  Core time logic  ==== */
let startTime, elapsed = 0, timerId, running = false;

/* DOM refs */
const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStop");
const lapBtn = document.getElementById("lap");
const resetBtn = document.getElementById("reset");
const lapsUl = document.getElementById("laps");

/* Format helper */
const format = ms => {
  const pad = n => n.toString().padStart(2, "0");
  const cent = Math.floor((ms % 1000) / 10); // hundredths
  const sec = Math.floor(ms / 1000) % 60;
  const min = Math.floor(ms / 60000) % 60;
  const hr  = Math.floor(ms / 3600000);
  return `${pad(hr)}:${pad(min)}:${pad(sec)}.${cent.toString().padStart(2,"0")}`;
};

/* Update loop */
function step(){
  elapsed = Date.now() - startTime;
  display.textContent = format(elapsed);
  timerId = requestAnimationFrame(step);
}

/* ====  Button handlers  ==== */
startStopBtn.onclick = () => {
  if(!running){
    startTime = Date.now() - elapsed; // resume support
    timerId = requestAnimationFrame(step);
    running = true;
    startStopBtn.textContent = "Pause";
    lapBtn.disabled = resetBtn.disabled = false;
  }else{
    cancelAnimationFrame(timerId);
    running = false;
    startStopBtn.textContent = "Start";
  }
};

lapBtn.onclick = () => {
  const li = document.createElement("li");
  li.textContent = format(elapsed);
  lapsUl.prepend(li);
};

resetBtn.onclick = () => {
  cancelAnimationFrame(timerId);
  elapsed = 0; running = false;
  display.textContent = "00:00:00.00";
  startStopBtn.textContent = "Start";
  lapBtn.disabled = resetBtn.disabled = true;
  lapsUl.innerHTML = "";
};
