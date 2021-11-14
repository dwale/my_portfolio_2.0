const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});
const body = document.body;
const lightSwitch = document.getElementById("light");
const darkSwitch = document.getElementById("dark");
const clickSound = document.getElementById("click");
clickSound.volume = 0.1;

lightSwitch.addEventListener("click", () => {
  clickSound.play();

  turnOnTheLights();
});
darkSwitch.addEventListener("click", () => {
  console.log(clickSound);
  clickSound.play();
  goDark();
});

//set color on dark theme

function goDark() {
  console.log("dark");
  document.documentElement.style.setProperty("--icon_fill_color", "#ffffff");
  document.documentElement.style.setProperty(
    "--main_body_background_color",
    "#020a13"
  );
  document.documentElement.style.setProperty("--main_text_color", "#ffffff");
  darkSwitch.style.visibility = "hidden";
  lightSwitch.style.visibility = "visible";

  console.log(lightSwitch, darkSwitch);
}

function turnOnTheLights() {
  console.log("light");

  document.documentElement.style.setProperty("--icon_fill_color", "#000000");
  document.documentElement.style.setProperty(
    "--main_body_background_color",
    "#ffffff"
  );
  document.documentElement.style.setProperty("--main_text_color", "#000000");
  darkSwitch.style.visibility = "visible";
  lightSwitch.style.visibility = "hidden";
}

// const skillsPath = {
//   curviness: 10,
//   autoRotate: true,
//   values: [
//     { x: 100, y: -30 },
//     { x: 300, y: 90 },
//     { x: 1100, y: 90 },
//     { x: window.innerWidth, y: -150 },
//   ],
// };

// const tween = new TimelineLite();

// tween.add(
//   TweenLite.to(".work__skills", 1, {
//     bezier: skillsPath,
//     ease: Power1.easeInOut,
//   })
// );

// const controller = new ScrollMagic.Controller();

// const skills_container = new ScrollMagic.Scene({
//   triggerElement: ".work__animate",
//   duration: 1000,
//   triggerHook: 0,
// })
//   .setTween(tween)
//   .setPin(".work__animate")
//   .addTo(controller);

//loader
gsap.registerPlugin(ScrollTrigger);

let timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".banner",
    start: "0%",
    end: "100%",
    scrub: true,
    markers: true,
    pin: true,
  },
});

timeline.fromTo(
  ".banner",
  { clipPath: "circle(20%)" },
  { clipPath: "circle(75%)", duration: 1 }
);

timeline.fromTo(
  ".loader",
  { scale: 1 },
  { scale: 0, opacity: 0, duration: 1 },
  "-=1"
);
timeline.fromTo(".banner__text", { opacity: 0 }, { opacity: 1, duration: 4 });
timeline.fromTo(
  ".banner__image",
  { opacity: 0 },
  { opacity: 1, duration: 4 },
  "-=4"
);
