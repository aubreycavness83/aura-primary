function initCarousel() {
  const carouselElement = document.querySelector("#customSlider");

  if (!carouselElement || !window.bootstrap?.Carousel) {
    return;
  }

  new bootstrap.Carousel(carouselElement, {
    interval: 4000,
    wrap: true,
    touch: true,
  });

  carouselElement.addEventListener("slide.bs.carousel", (event) => {
    console.log("Moving to slide index:", event.to);
  });
}

async function loadNavbar() {
  const placeholder = document.getElementById("navbar-placeholder");

  if (!placeholder) {
    return;
  }

  try {
    const response = await fetch("navbar.html");

    if (!response.ok) {
      throw new Error(`Failed to load navbar: ${response.status}`);
    }

    placeholder.innerHTML = await response.text();
  } catch (error) {
    console.error("Navbar load failed.", error);
  }
}

function initServiceFaq() {
  const faqQuestions = document.querySelectorAll(".service-faq__question");

  if (!faqQuestions.length) {
    return;
  }

  faqQuestions.forEach((questionButton) => {
    questionButton.addEventListener("click", () => {
      const answer = questionButton.nextElementSibling;
      const isExpanded =
        questionButton.getAttribute("aria-expanded") === "true";

      questionButton.setAttribute("aria-expanded", String(!isExpanded));

      if (answer) {
        answer.hidden = isExpanded;
      }
    });
  });
}

async function loadFooter() {
  const placeholderFooter = document.getElementById("footer-placeholder");

  if (!placeholderFooter) {
    return;
  }

  try {
    const response = await fetch("footer.html");

    if (!response.ok) {
      throw new Error(`Failed to load footer: ${response.status}`);
    }

    placeholderFooter.innerHTML = await response.text();
  } catch (error) {
    console.error("Footer load failed.", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initCarousel();
  loadNavbar();
  initServiceFaq();
  loadFooter();
});
