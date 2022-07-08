// Webfont Loader
WebFont.load({
  google: {
    families: ["Inter"],
  },
});

// Get Current Date for Footer
const currentDateSpan = document.querySelector("#currentDate");

const now = new Date();
currentDateSpan.textContent = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "full",
}).format(now);

// Handle Responsive Menu
const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");

menuBtn.addEventListener(
  "click",
  () => {
    menu.classList.toggle("show-menu");
  },
  false
);

/** Banner Display */
const banner = document.querySelector("#banner");
// Show banner if today is Friday
if (now.getDay() === 5) {
  banner.classList.remove("hide");
} else {
  banner.classList.add("hide");
}

// Get all images to be replaced
const imagesToLoad = document.querySelectorAll("[data-src]");

// function to load the actual image
const loadImages = (img) => {
  img.setAttribute("src", img.getAttribute("data-src"));
  img.onload = () => {
    img.removeAttribute("data-src");
  };
};

const imageOptions = {
  threshold: 1,
  rootMargin: "0px 0px 50px 0px",
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imageOptions);
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

// Storm severity levels
function adjustLevel(level) {
  document.getElementById("severityValue").innerHTML = level;
}
