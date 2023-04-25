// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled.",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz.',
  },
];

// select UI elements

const userImage = document.querySelector('#person-img'),
      userName = document.querySelector('#author'),
      userJob = document.querySelector('#job'),
      userTestimonial = document.querySelector('#info');

const prevBtn = document.querySelector('.prev-btn'),
      nextBtn = document.querySelector('.next-btn');

console.log(userName.innerText);

// Logic

let testimonialCounter = 0;

window.addEventListener('DOMContentLoaded', displayTestimonial(testimonialCounter));

prevBtn.addEventListener('click', function(){
  testimonialCounter--;  
  if (testimonialCounter < 0) {
    testimonialCounter = reviews.length -1;
  }
  displayTestimonial(testimonialCounter);
});


nextBtn.addEventListener('click', function(){
  testimonialCounter++;  
  if (testimonialCounter > (reviews.length - 1)) {
    testimonialCounter = 0;
  }
  displayTestimonial(testimonialCounter);
});

function displayTestimonial(counter) {
  let activeUser = reviews[counter];
  userImage.setAttribute('src', activeUser.img);
  userName.innerText = activeUser.name;
  userJob.innerText = activeUser.job;
  userTestimonial.innerText = activeUser.text;
}