const message = `hey tanvi ❤️

i know i hurt you with my words and my behaviour

i'm truly sorry

you deserve patience kindness and love from me every single day

i never want to be the reason your beautiful smile fades

your smile lights up my whole world

your eyes are the prettiest i've ever looked into

you look beautiful in every picture and even more beautiful in real life

i'll keep learning from my mistakes and becoming someone who makes you feel safe loved and appreciated

i love you more than words can ever explain ❤️`;

function startLove() {
  document.getElementById("main").classList.remove("hidden");
  document.getElementById("main").scrollIntoView({ behavior: "smooth" });

  let i = 0;
  const typing = document.getElementById("typing");
  typing.innerHTML = "";

  const interval = setInterval(() => {
    typing.innerHTML += message.charAt(i);
    i++;
    if (i >= message.length) clearInterval(interval);
  }, 35);
}

function playSong() {
  const music = document.getElementById("music");
  if (music) music.play().catch(() => {
    alert("Add your song file named 'earrings.mp3' to the repository first ❤️");
  });
}

function updateTimer() {
  const start = new Date("2026-01-24T14:47:00");
  const now = new Date();

  let diff = now - start;
  if (diff < 0) {
    document.getElementById("counter").innerHTML =
      "Every second brings us closer ❤️";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff %= (1000 * 60 * 60 * 24);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff %= (1000 * 60 * 60);

  const minutes = Math.floor(diff / (1000 * 60));
  diff %= (1000 * 60);

  const seconds = Math.floor(diff / 1000);

  document.getElementById("counter").innerHTML =
    `${days} Days ❤️ ${hours} Hours ❤️ ${minutes} Minutes ❤️ ${seconds} Seconds`;
}

setInterval(updateTimer, 1000);
updateTimer();
