// Initialize Swiper
const heroSwiper = new Swiper(".hero-slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

// Initialize Testimonials Slider
// Initialize Testimonials Slider with custom classes
var testimonialSwiper = new Swiper(".testimonial-slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  // Custom class configuration
  slideClass: "testimonial-swiper-slide", // Your custom slide class
  wrapperClass: "swiper-wrapper", // Keep default wrapper class
});

// Counter Animation
const counters = document.querySelectorAll(".counter");

function animateCounter(counter) {
  const target = parseInt(counter.getAttribute("data-target"));
  const count = parseInt(counter.innerText);
  const increment = target / 200;

  if (count < target) {
    counter.innerText = Math.ceil(count + increment);
    setTimeout(() => animateCounter(counter), 1);
  } else {
    counter.innerText = target;
  }
}

// Intersection Observer for counters
const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
};

const counterObserver = new IntersectionObserver(observerCallback, {
  threshold: 0.5,
});

counters.forEach((counter) => counterObserver.observe(counter));

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

// Mobile Navigation
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger?.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))?.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Initialize Courses Slider
const coursesSlider = new Swiper(".courses-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const courseDetailsData = {
  "BSc Computer Science": {
    duration: "3 years",
    level: "Undergraduate",
    modules: [
      "Programming Fundamentals",
      "Data Structures and Algorithms",
      "Database Systems",
      "Web Development",
      "Software Engineering",
      "Computer Networks",
    ],
    careers: [
      "Software Developer",
      "Systems Analyst",
      "Database Administrator",
      "Web Developer",
    ],
  },
  "BBA Business Administration": {
    duration: "3 years",
    level: "Undergraduate",
    modules: [
      "Business Management",
      "Marketing Principles",
      "Financial Accounting",
      "Business Ethics",
      "Strategic Management",
      "Human Resource Management",
    ],
    careers: [
      "Business Manager",
      "Marketing Executive",
      "HR Manager",
      "Business Consultant",
    ],
  },
  "MSc Data Science": {
    duration: "2 years",
    level: "Postgraduate",
    modules: [
      "Machine Learning",
      "Statistical Analysis",
      "Big Data Analytics",
      "Data Visualization",
      "Deep Learning",
      "Natural Language Processing",
    ],
    careers: [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Business Intelligence Analyst",
    ],
  },
  // Add more course details as needed
};

function loadCourseDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const courseName = urlParams.get("course");
  const courseContent = document.getElementById("courseContent");

  const courseDetails = courseData[courseName] || {
    duration: "2-3 years",
    level: "Various",
    modules: ["Module information coming soon"],
    careers: ["Career information coming soon"],
  };

  courseContent.innerHTML = `
          <div class="course-header">
              <h1 class="course-title">${courseName}</h1>
              <div class="course-info">
                  <div class="info-card">
                      <h3><i class="fas fa-clock"></i> Duration</h3>
                      <p>${courseDetails.duration}</p>
                  </div>
                  <div class="info-card">
                      <h3><i class="fas fa-graduation-cap"></i> Level</h3>
                      <p>${courseDetails.level}</p>
                  </div>
              </div>
          </div>

          <div class="course-content">
              <h2>Course Modules</h2>
              <ul class="module-list">
                  ${courseDetails.modules
                    .map(
                      (module) => `
                      <li><i class="fas fa-book"></i> ${module}</li>
                  `
                    )
                    .join("")}
              </ul>

              <h2 style="margin-top: 2rem;">Career Opportunities</h2>
              <ul class="module-list">
                  ${courseDetails.careers
                    .map(
                      (career) => `
                      <li><i class="fas fa-briefcase"></i> ${career}</li>
                  `
                    )
                    .join("")}
              </ul>

              <a href="contact.html" class="apply-button">Apply Now</a>
          </div>
      `;

  // Update page title
  document.title = `${courseName} - EduHub`;
}

// Load course details when the page loads
document.addEventListener("DOMContentLoaded", loadCourseDetails);

const courseData = {
  Undergraduate: [
    "BSc Computer Science",
    "BBA Business Administration",
    "BSc Mechanical Engineering",
    "BA English Literature",
  ],
  Postgraduate: [
    "MSc Data Science",
    "MBA Finance",
    "MSc Civil Engineering",
    "MA Applied Linguistics",
  ],
  Top_Up: ["BSc Nursing Top Up", "BA Business Management Top Up"],
  Diploma: [
    "Diploma in Graphic Design",
    "Diploma in Cyber Security",
    "Diploma in Digital Marketing",
  ],
};

const courseDescriptions = {
  "BSc Computer Science":
    "A comprehensive program covering programming, algorithms, and software development.",
  "BBA Business Administration":
    "Learn business principles, management, and organizational leadership.",
  "BSc Mechanical Engineering":
    "Study mechanics, thermodynamics, and machine design.",
  "BA English Literature":
    "Explore classic and contemporary literature, writing, and critical analysis.",
  "MSc Data Science":
    "Advanced study in data analytics, machine learning, and statistical analysis.",
  "MBA Finance":
    "Master's program in financial management, investment, and business strategy.",
  "MSc Civil Engineering":
    "Advanced studies in structural engineering and construction management.",
  "MA Applied Linguistics":
    "Study language acquisition, teaching methods, and linguistic analysis.",
  "BSc Nursing Top Up": "Advanced nursing practice and healthcare management.",
  "BA Business Management Top Up":
    "Advanced business studies and strategic management.",
  "Diploma in Graphic Design":
    "Learn digital design, typography, and visual communication.",
  "Diploma in Cyber Security":
    "Study network security, ethical hacking, and cyber defense.",
  "Diploma in Digital Marketing":
    "Learn social media marketing, SEO, and digital advertising.",
};

function getRandomImage() {
  const images = [
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
  ];
  return images[Math.floor(Math.random() * images.length)];
}

function createCourseCard(course) {
  return `
          <div class="course-card">
              <div class="course-image" style="background-image: url('${getRandomImage()}')"></div>
              <div class="course-details">
                  <h3>${course}</h3>
                  <p>${courseDescriptions[course]}</p>
                  <a href="course-details.html?course=${encodeURIComponent(
                    course
                  )}" class="view-details">View Details</a>
              </div>
          </div>
      `;
}

function updateCourses() {
  const program = document.getElementById("program").value;
  const coursesGrid = document.getElementById("coursesGrid");

  let html = "";

  if (program === "") {
    // Show all courses
    Object.values(courseData)
      .flat()
      .forEach((course) => {
        html += createCourseCard(course);
      });
  } else if (courseData[program]) {
    // Show courses for selected program
    courseData[program].forEach((course) => {
      html += createCourseCard(course);
    });
  }

  if (html === "") {
    html =
      '<div class="no-courses">No courses found for the selected criteria.</div>';
  }

  coursesGrid.innerHTML = html;
}

// Initialize courses on page load
document.addEventListener("DOMContentLoaded", updateCourses);

lucide.createIcons();

// Function to update the course dropdown based on selected program
function updateCourseOptions() {
  const program = document.getElementById("program").value;
  const courseDropdown = document.getElementById("course");

  // Clear existing options
  courseDropdown.innerHTML = '<option value="">Select a Course</option>';

  if (program && courseData[program]) {
    courseData[program].forEach((course) => {
      const option = document.createElement("option");
      option.value = course;
      option.textContent = course;
      courseDropdown.appendChild(option);
    });
  }
}

// Function to redirect to the course detail page
function redirectToCourse() {
  const selectedCourse = document.getElementById("course").value;
  if (selectedCourse) {
    window.location.href = `course-details.html?course=${encodeURIComponent(
      selectedCourse
    )}`;
  } else {
    alert("Please select a course first.");
  }
}
