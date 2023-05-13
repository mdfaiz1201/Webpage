const tableElement = document.querySelector(".stick_content");
const wrapElement = document.querySelector("#wrap");
const headlineElement = document.querySelector(".heading");
const firstWrapElement = document.querySelector("#first_wrap");

const headingObserver = new IntersectionObserver(
  function (entries) {
    const entry  = entries[0];
    if (entry.isIntersecting) {
      // observed element is intersecting with the viewport
      wrapElement.classList.remove("fixed");
      wrapElement.classList.add("fix_content");
      firstWrapElement.style.alignSelf = "self-start";
    }
    else{
      // observed element is not intersecting with the viewport
      wrapElement.classList.add("fixed");
    }
  },
  {
    // In the Viewport options for the observer
    root: null,
    threshold: 0,
    rootMargin: "-85px"
  }
);
headingObserver.observe(headlineElement);

const formElement = document.querySelector(".form-section");
const footermenuContentElement = document.querySelector(".foot_cont");

const formObserver = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];

    if (entry.isIntersecting) {
      wrapElement.classList.remove("fixed");
      firstWrapElement.style.alignSelf = "self-end";
    }
    else {
      wrapElement.classList.add("fixed");
    }
  },
  {
    // In the Viewport
    root: null,
    threshold: 0,
    rootMargin: "15px"
  }
);
formObserver.observe(formElement);

const header = document.querySelector(".main_header");

const NavColorObeserver = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];

    if (entry.isIntersecting) {
      header.classList.remove("colr_Nav");
    }
    else {
      header.classList.toggle("colr_Nav");
    }
  },
  {
    // In the Viewport
    root: null,
    threshold: 0,
    rootMargin: "-178px"
  }
);
NavColorObeserver.observe(headlineElement);

window.addEventListener("scroll", function () {
  if (window.pageYOffset < 299) {
    wrapElement.classList.remove("fixed");
    header.classList.remove("colr_Nav");
  }
});


const navElement = document.querySelector(".nav_his");
navElement.addEventListener("click", function () {
  contentListElement[5].click();
});

const homeElement = document.querySelector(".home");
window.onload = function () {
  homeElement.click();
};


const btnNavElement = document.querySelector(".button_nav");
const openElement = document.querySelector(".open");
const closeElement = document.querySelector(".close");

btnNavElement.addEventListener("click",()=>{
  if (openElement.classList.contains("d_none")){
    openElement.classList.remove("d_none")
    closeElement.classList.add("d_none")
    tableElement.style.transform = "translateX(100%)"
  }
  else {
    openElement.classList.add("d_none")
    closeElement.classList.remove("d_none")
    tableElement.style.transform = "translateX(0)"
  }
})

const answerElement = document.querySelectorAll(".answer");
const contentListElement = document.querySelectorAll(".content_li");
const menuContentElement = document.querySelectorAll(".cont_li");

function toggleItem(Element) {
  Element.forEach((elem) => {
    elem.addEventListener("click", () => {
      const current = elem;
      Element.forEach((elem, index) => {
        menuContentElement[index].style.padding = "4px 8px"; //Giving padding directly to menu contents
        if (current !== elem){
          elem.classList.remove("active");
          answerElement[index].classList.remove("pt_60");
        }
        else{
          current.classList.add("active");
          if (elem.innerText === "What is Blockchain?"){
            answerElement[index].classList.remove("pt_60");
          }
          else{
            answerElement[index].classList.add("pt_60");
          }
        }
      })
      btnNavElement.click(); //Once click menu bar close.
      })
    });
}

toggleItem(contentListElement);
toggleItem(menuContentElement);


/**************************The End***************************/