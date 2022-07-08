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
  threshold: 0,
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
