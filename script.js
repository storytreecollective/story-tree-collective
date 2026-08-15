const header=document.getElementById('header');const menu=document.querySelector('.menu-button');const nav=document.querySelector('.nav-links');window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>40));if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}))}const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));document.getElementById('year').textContent=new Date().getFullYear();
// =========================================
// CREATIVE COLLABORATIONS VIDEO MODAL
// =========================================

const videoModal = document.getElementById("video-modal");
const videoModalIframe = document.getElementById("video-modal-iframe");
const videoModalClose = document.querySelector(".video-modal-close");
const videoModalBackdrop = document.querySelector(".video-modal-backdrop");
const videoTriggers = document.querySelectorAll(".video-modal-trigger");

videoTriggers.forEach((trigger) => {
  trigger.addEventListener("click", function(event) {

    event.preventDefault();

    const videoId = this.dataset.video;

    videoModalIframe.src =
      `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

    videoModal.classList.add("is-open");
    videoModal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");
  });
});

function closeVideoModal() {
  videoModal.classList.remove("is-open");
  videoModal.setAttribute("aria-hidden", "true");
  videoModalIframe.src = "";
  document.body.classList.remove("modal-open");
}

videoModalClose.addEventListener("click", closeVideoModal);
videoModalBackdrop.addEventListener("click", closeVideoModal);

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    videoModal.classList.contains("is-open")
  ) {
    closeVideoModal();
  }
});
