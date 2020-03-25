window.onscroll = () => { PROGRESS_BAR()} ;

const PROGRESS_BAR = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

const waypoint = new Waypoint({
  element: document.getElementById('about'),
  handler: () => {
    const containerWidth = document.getElementById('about').clientWidth;
    const whoweare = document.getElementById('whoweare');
    whoweare.classList.add('animate_right');
    const ourservices = document.getElementById('ourservices');
    if (containerWidth <= 425) {
      ourservices.classList.add('animate_left')
    }
    ourservices.classList.add('animate_top')
  },
  offset: '50%',
})

let TYPED = false;
const TYPED_CONTACT = new Waypoint({
  element: document.getElementById('contact'),
  handler: () => {
    if (!TYPED) {
      const options = {
        strings: ['Get in touch.'],
        typeSpeed: 40
      };
      const typed = document.getElementById('typed');
      new Typed('#typed', options);
      typed.classList.add('animate_fadein');
      TYPED = true;
    }
  },
  offset: '25%',
})
