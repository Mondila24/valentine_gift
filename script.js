document.addEventListener("DOMContentLoaded", () => {

/* STARS */
const sky = document.getElementById("sky");
for(let i = 0; i < 140; i++){
  let star = document.createElement("div");
  star.className = "star";
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  sky.appendChild(star);
}

/* SHOOTING STARS */
setInterval(() => {
  let s = document.createElement("div");
  s.className = "shoot";
  s.style.left = Math.random() * 100 + "vw";
  s.style.top = "0";
  sky.appendChild(s);
  setTimeout(() => s.remove(), 2000);
}, 3500);

/* ENVELOPE */
const envelope = document.getElementById("envelope");
const container = document.getElementById("container");
const music = document.getElementById("music");
const photo = document.getElementById("photo");
const ring = document.getElementById("ring");

console.log("DOM Elements:");
console.log("Envelope:", envelope);
console.log("Container:", container);
console.log("Music:", music);
console.log("Photo:", photo);
console.log("Ring:", ring);

if(envelope) {
  envelope.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("✓ Envelope clicked!");
    
    envelope.classList.add("openEnv");
    container.classList.add("show");
    
    // Try to play music
    try {
      music.play().catch(error => {
        console.log("Music autoplay blocked:", error);
        // Try muted playback first
        music.muted = true;
        music.play().then(() => {
          console.log("Playing music muted");
          setTimeout(() => {
            music.muted = false;
          }, 500);
        }).catch(e => console.log("Music play failed:", e));
      });
    } catch(e) {
      console.log("Music error:", e);
    }
    
    // Pop out the image and show the message
    setTimeout(() => {
      console.log("✓ Showing image and ring");
      if(photo) photo.classList.add("show");
      if(ring) ring.classList.add("show");
      typeMessage();
    }, 1000);
  });
} else {
  console.error("❌ Envelope element not found!");
}

/* GIFT */
const gift = document.getElementById("gift");

gift.addEventListener("click", () => {
  console.log("Gift clicked!");
  gift.classList.add("open");
});

/* TYPEWRITER LETTER */
const text = `My love ❤️,

You are the most beautiful miracle
that ever happened to my life.

Every smile of yours is my happiness,
every moment with you is my forever.

Today I give you my heart again…
and always.

Will you stay with me forever? 💖`;

function typeMessage(){
  const msg = document.getElementById("message");
  msg.innerHTML = ""; // Clear previous message
  let i = 0;
  function typing(){
    if(i < text.length){
      msg.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 35);
    }
  }
  typing();
}

/* HEARTS + PETALS */
setInterval(() => {
  let h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = "❤️";
  h.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 6000);
}, 300);

setInterval(() => {
  let p = document.createElement("div");
  p.className = "petal";
  p.innerHTML = "🌹";
  p.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(p);
  setTimeout(() => p.remove(), 8000);
}, 700);

}); // End of DOMContentLoaded
