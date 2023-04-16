import { jobsNames, jobJoiningDate, jobDescription } from "./data/jobs.js";

const addCompanyPosition = (job) => {
  const companyH2 = document.getElementById("company");
  companyH2.innerHTML = `Software Engineer <span class="company-name">@${
    job === "tech-hive"
      ? "Tech Hive"
      : job === "shoofdoctor"
      ? "Shoofdoctor"
      : "ITI"
  }</span>`;
};

const addCompanyPeriodWork = (job) => {
  const companyPeriod = document.getElementById("working-period");
  const companyFromTo = jobJoiningDate[job];
  companyPeriod.innerHTML = `${companyFromTo.from} - ${companyFromTo.to}`;
};

const addCompanyDescription = (job) => {
  const companyDescription = document.getElementById("accomplisments");
  companyDescription.innerHTML = "";
  const companyAccomplisments = jobDescription[job];
  companyAccomplisments.forEach((accomplisment) => {
    const li = document.createElement("li");
    li.innerHTML = accomplisment;
    companyDescription.appendChild(li);
  });
};

const jobs = jobsNames.map((job) => document.getElementById(job));
jobs.forEach((job) => {
  job.addEventListener("click", () => {
    job.classList.add("clicked");
    job.style.borderLeft = "2px solid #64ffda";
    if (job.id === "tech-hive") {
      jobs[0].style.borderLeft = "2px solid #233554";
      jobs[1].style.borderLeft = "2px solid #233554";
    }
    if (job.id === "shoofdoctor") {
      jobs[0].style.borderLeft = "2px solid #233554";
      jobs[2].style.borderLeft = "2px solid #233554";
    }
    if (job.id === "iti") {
      jobs[1].style.borderLeft = "2px solid #233554";
      jobs[2].style.borderLeft = "2px solid #233554";
    }
    addCompanyPosition(job.id);
    addCompanyPeriodWork(job.id);
    addCompanyDescription(job.id);
  });
});

const anim = anime.timeline({
  loop: true,
  direction: "alternate",
});

console.log(anim);

anim
  .add({
    targets: "#hexagon path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutQuart",
    duration: 2000,
    delay: function (el, i) {
      return i * 250;
    },
  })
  .add({
    targets: "#hexagon #F",
    duration: 1000,
    opacity: 1,
    easing: "easeInOutQuart",
  });
setTimeout(() => {
  document.getElementsByClassName("loader")[0].style.display = "none";
  document.getElementsByTagName("header")[0].style.display = "block";
  document.getElementsByTagName("main")[0].style.display = "block";
}, 4500)();
