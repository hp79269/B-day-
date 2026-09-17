
document.addEventListener("DOMContentLoaded",()=>{
  const flames=document.querySelectorAll(".flame");
  const btn=document.getElementById("wishBtn");
  flames.forEach(f=>f.addEventListener("click",()=>{f.classList.add("off"); checkFlames()}));
  if(btn) btn.addEventListener("click",()=>{
    flames.forEach(f=>f.classList.add("off")); checkFlames();
  });
  function checkFlames(){
    if(document.querySelectorAll(".flame:not(.off)").length===0){
      const s=document.getElementById("surprise");
      if(s){s.style.display="block"; confetti();}
    }
  }
  window.confetti=function(){
    for(let i=0;i<65;i++){
      const e=document.createElement("span");
      e.textContent=["💜","💗","✨","🌸","🦋"][Math.floor(Math.random()*5)];
      Object.assign(e.style,{position:"fixed",left:Math.random()*100+"vw",top:"-30px",fontSize:(12+Math.random()*18)+"px",zIndex:99,pointerEvents:"none"});
      document.body.appendChild(e);
      const x=(Math.random()-.5)*180;
      e.animate([{transform:"translate(0,0) rotate(0)",opacity:1},{transform:`translate(${x}px,105vh) rotate(540deg)`,opacity:0}],{duration:2200+Math.random()*1600,easing:"ease-in"}).onfinish=()=>e.remove();
    }
  };
});
