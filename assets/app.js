/* CLAUDIA BRAGA® — app.js (comportamentos compartilhados) */
(function(){
  "use strict";
  const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;

  /* loader */
  addEventListener("load",()=>{const l=document.getElementById("loader"); if(l) setTimeout(()=>l.classList.add("done"),350);});

  /* header sólido no scroll */
  const hd=document.querySelector("header");
  if(hd) addEventListener("scroll",()=>hd.classList.toggle("scrolled",scrollY>40),{passive:true});

  /* menu mobile */
  const burger=document.querySelector(".burger"), mob=document.querySelector(".mobile-menu");
  if(burger&&mob){
    burger.addEventListener("click",()=>{burger.classList.toggle("open");mob.classList.toggle("open");
      document.body.style.overflow=mob.classList.contains("open")?"hidden":"";});
    mob.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
      burger.classList.remove("open");mob.classList.remove("open");document.body.style.overflow="";}));
  }

  /* reveal on scroll */
  const io=new IntersectionObserver((es)=>es.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}
  }),{threshold:.15});
  document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

  /* hero slider */
  document.querySelectorAll(".hero .slides").forEach(slides=>{
    const items=[...slides.querySelectorAll(".slide")];
    if(items.length<2) return;
    const dotsWrap=slides.closest(".hero").querySelector(".dots");
    let i=0;
    if(dotsWrap) items.forEach((_,k)=>{const b=document.createElement("button");
      if(!k)b.classList.add("active");b.addEventListener("click",()=>go(k));dotsWrap.appendChild(b);});
    const dots=dotsWrap?[...dotsWrap.children]:[];
    function go(n){items[i].classList.remove("active");dots[i]&&dots[i].classList.remove("active");
      i=n;items[i].classList.add("active");dots[i]&&dots[i].classList.add("active");}
    if(!reduce) setInterval(()=>go((i+1)%items.length),6000);
  });

  /* counters */
  const cio=new IntersectionObserver((es)=>es.forEach(e=>{
    if(!e.isIntersecting)return;const el=e.target,to=+el.dataset.to;
    if(reduce){el.textContent=to;cio.unobserve(el);return;}
    let n=0;const step=Math.max(1,Math.round(to/30));
    const t=setInterval(()=>{n+=step;if(n>=to){n=to;clearInterval(t);}el.textContent=n;},34);
    cio.unobserve(el);
  }),{threshold:.6});
  document.querySelectorAll(".count").forEach(el=>cio.observe(el));

  /* depoimentos */
  document.querySelectorAll(".testi").forEach(t=>{
    const items=[...t.querySelectorAll(".item")],nav=t.querySelector(".nav");let i=0;
    items.forEach((_,k)=>{const b=document.createElement("button");if(!k)b.classList.add("active");
      b.addEventListener("click",()=>go(k));nav&&nav.appendChild(b);});
    const dots=nav?[...nav.children]:[];
    function go(n){items[i].classList.remove("active");dots[i]&&dots[i].classList.remove("active");
      i=n;items[i].classList.add("active");dots[i]&&dots[i].classList.add("active");}
    if(!reduce&&items.length>1) setInterval(()=>go((i+1)%items.length),7000);
  });

  /* parallax sutil em .banda .bg */
  if(!reduce) addEventListener("scroll",()=>{
    document.querySelectorAll(".banda").forEach(b=>{
      const r=b.getBoundingClientRect(),p=(innerHeight-r.top)/(innerHeight+r.height);
      const bg=b.querySelector(".bg");if(bg)bg.style.transform=`translateY(${(p-.5)*60}px) scale(1.1)`;
    });
  },{passive:true});

  /* lightbox */
  const lb=document.getElementById("lightbox");
  if(lb){const img=lb.querySelector("img");
    document.querySelectorAll(".gallery a").forEach(a=>a.addEventListener("click",e=>{
      e.preventDefault();img.src=a.getAttribute("href")||a.querySelector("img").src;lb.classList.add("open");}));
    lb.addEventListener("click",()=>lb.classList.remove("open"));
    addEventListener("keydown",e=>{if(e.key==="Escape")lb.classList.remove("open");});
  }
})();
