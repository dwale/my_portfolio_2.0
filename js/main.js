const cursor = document.querySelector(".cursor");

// gsap.registerPlugin(ScrollTrigger);

// let sections = gsap.utils.toArray(".work__card");

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".container",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1),
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     end: "+=3500",
//   },
// });
gsap.to(".icon", { duration: 2, x: 300 });

gsap.to(".icon", { duration: 3, rotation: 360, scale: 0.5 });

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
