const header=document.getElementById('header');const menu=document.querySelector('.menu-button');const nav=document.querySelector('.nav-links');window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>40));if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}))}const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));document.getElementById('year').textContent=new Date().getFullYear();
// Creative Collaborations video modal
const videoModal = document.getElementById("video-modal");
const videoModalIframe = document.getElementById("video-modal-iframe");
const videoModalClose = document.querySelector(".video-modal-close");
const videoModalBackdrop = document.querySelector(".video-modal-backdrop");
const videoTriggers = document.querySelectorAll(".video-modal-trigger");

videoTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();

    const videoId = trigger.dataset.video;

    videoModalIframe.src =
      `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    videoModal.classList.add("open");
    videoModal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
  });
});

function closeVideoModal() {
  videoModal.classList.remove("open");
  videoModal.setAttribute("aria-hidden", "true");

  // Stops the YouTube video when modal closes
  videoModalIframe.src = "";

  document.body.style.overflow = "";
}

videoModalClose.addEventListener("click", closeVideoModal);
videoModalBackdrop.addEventListener("click", closeVideoModal);

// Allow Escape key to close video
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && videoModal.classList.contains("open")) {
    closeVideoModal();
  }
});
