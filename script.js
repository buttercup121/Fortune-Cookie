const fortunes = [
  "Your positivity is your superpower.",
  "Good news is on its way.",
  "A faithful friend supports you.",
  "Greatness awaits — after snacks.",
  "A thrilling time is near.",
  "Smile! It confuses people.",
  "Adventure brings happiness.",
  "Your fortune is in another cookie.",
  "Now is the time to try.",
  "Your secrets are safe. Probably.",
  "Every flower blooms in time.",
  "You'll step on something soft.",
  "A surprise is waiting for you.",
  "Believe in yourself.",
  "Happiness starts within.",
  "Good vibes are coming.",
  "Courage brings rewards.",
  "Create your own future.",
  "Inspiration is coming.",
  "Today is your lucky day!",
  "Patience will pay off.",
  "Try a new hobby soon.",
  "You're more capable than you know.",
  "Compliments are on the way!",
  "Good things come to coders.",
  "You'll crush obstacles soon.",
  "Make a wise decision today.",
  "A calm mind is power.",
  "Your creativity will shine.",
  "Someone is thinking of you.",
  "A donut a day brings joy.",
  "Be brave. Try something new.",
  "Your kindness will return.",
  "Big things start small.",
  "You’re glowing with energy.",
  "High-five kind of day!",
  "Nap and let dreams come.",
  "You're someone's plot twist.",
  "Confidence suits you well.",
  "Cocoa fixes almost anything.",
  "Something wonderful is near.",
  "You're doing just fine.",
  "You light up the room.",
  "Unexpected laughs coming soon.",
  "Magic is in your moments.",
  "Kindness echoes far.",
  "Keep going — you're close.",
  "Great hair days ahead!",
  "Your inner child wants cookies."
];


let img= document.querySelector(".cookie");
let crack=document.querySelector(".cracked");
let text= document.querySelector(".text");
let btn=document.querySelector(".btn");
let btn2=document.querySelector(".btn2");

btn.addEventListener("click",()=>{
    img.style.opacity="0";
    crack.style.opacity="1";
    let random=Math.floor(Math.random()*fortunes.length);
    text.style.opacity="1";
    text.innerText= fortunes[random];
    btn2.style.opacity="1";
    btn.style.opacity="0";


});

btn2.addEventListener("click",()=>{
  img.style.opacity="1";
    crack.style.opacity="0";
     text.style.opacity="0";
     btn2.style.opacity="0";
    btn.style.opacity="1";
 
})