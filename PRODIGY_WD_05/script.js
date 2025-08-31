/* ==== Hard-coded weather data (Gujarat + global) ==== */
const DATA = {
  // Gujarat
  ahmedabad:   { name:"Ahmedabad, IN",   icon:"01d", desc:"clear sky",  temp:34, wind:3.2 },
  gandhinagar: { name:"Gandhinagar, IN", icon:"02d", desc:"few clouds", temp:33, wind:2.8 },
  surat:       { name:"Surat, IN",       icon:"03d", desc:"scattered",  temp:31, wind:3.5 },
  vadodara:    { name:"Vadodara, IN",    icon:"04d", desc:"overcast",   temp:30, wind:4.0 },
  rajkot:      { name:"Rajkot, IN",      icon:"10d", desc:"light rain", temp:29, wind:3.1 },

  // Global samples
  delhi:  { name:"Delhi, IN",  icon:"01d", desc:"clear sky",  temp:33, wind:2.9 },
  london: { name:"London, UK", icon:"04d", desc:"overcast",   temp:18, wind:4.1 },
  tokyo:  { name:"Tokyo, JP",  icon:"10d", desc:"light rain", temp:27, wind:3.3 }
};

/* ==== DOM refs ==== */
const form   = document.getElementById("form");
const cityEl = document.getElementById("city");
const loadEl = document.getElementById("loading");
const cardEl = document.getElementById("card");
const locEl  = document.getElementById("location");
const dateEl = document.getElementById("date");
const iconEl = document.getElementById("icon");
const tempEl = document.getElementById("temp");
const descEl = document.getElementById("desc");
const windEl = document.getElementById("wind");

/* ==== Helpers ==== */
const formatDate = () =>
  new Date().toLocaleString("en-IN",{weekday:"long",hour:"2-digit",minute:"2-digit"});

function render(cityKey){
  const d = DATA[cityKey];
  const wiggle = Math.round((Math.random()*2-1)); // ±1 °C variation
  locEl.textContent = d.name;
  dateEl.textContent = formatDate();
  iconEl.src = `https://openweathermap.org/img/wn/${d.icon}@2x.png`;
  iconEl.alt = d.desc;
  tempEl.textContent = `${d.temp + wiggle}°C`;
  descEl.textContent = d.desc;
  windEl.textContent = `Wind: ${d.wind} m/s`;
}

/* ==== Events ==== */
form.addEventListener("submit",e=>{
  e.preventDefault();
  cardEl.classList.add("hidden");
  loadEl.classList.remove("hidden");

  setTimeout(()=>{
    render(cityEl.value);
    loadEl.classList.add("hidden");
    cardEl.classList.remove("hidden");
  },1200);           // fake latency
});

/* First view */
render("ahmedabad");
cardEl.classList.remove("hidden");
