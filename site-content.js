(async()=>{
  let profile=window.__SITE_DATA__?.profile || {}; let works=window.__SITE_DATA__?.works || [];
  const setText=(selector,value)=>{if(value){const element=document.querySelector(selector);if(element)element.textContent=value;}};
  function render(){
    setText('[data-i18n="site.logo"]','SUN · IN PROGRESS');
    setText('[data-i18n="hero.title"]',profile.name ? 'Hi, '+profile.name : '');
    setText('[data-i18n="hero.slogan"]',profile.slogan);
    const slogan=document.querySelector('.hero-slogan');
    if(slogan){
      const parts=slogan.textContent.split('·').map(part=>part.trim()).filter(Boolean);
      if(parts.length>1){
        slogan.replaceChildren();
        parts.forEach((part,index)=>{
          if(index){const dot=document.createElement('span');dot.textContent='·';dot.setAttribute('aria-hidden','true');slogan.append(dot);}
          const label=document.createElement('span');label.textContent=part;slogan.append(label);
        });
        slogan.setAttribute('aria-label',parts.join('，'));
      }else{slogan.removeAttribute('aria-label');}
    }
    setText('[data-i18n="hero.desc"]',profile.intro);
    setText('[data-i18n="about.body"]',profile.about);
    setText('[data-i18n="footer.copy"]','© '+new Date().getFullYear());
    const grid=document.querySelector('#projectGrid');
    if(!grid)return;
    grid.replaceChildren();
    const projects=works.filter(work=>(work.kind||'project')==='project');
    if(!projects.length)return;
    for(const work of projects){
      const link=document.createElement('a');link.className='project-card';link.href='work.html?id='+encodeURIComponent(work.id);
      if(work.cover){const img=document.createElement('img');img.width=360;img.height=180;img.loading='lazy';img.decoding='async';img.src=work.cover;img.alt='';img.style.cssText='width:100%;height:180px;object-fit:cover;border-radius:6px;margin-bottom:14px';link.append(img);}
      const title=document.createElement('strong');title.textContent=work.title;const desc=document.createElement('span');desc.textContent=work.description;link.append(title,desc);grid.append(link);
    }
    const button=document.querySelector('[data-i18n="projects.viewAll"]');if(button)button.closest('.section-action').hidden=true;
  }
  if(window.__SITE_DATA__){render();return;}
  try{const responses=await Promise.all([fetch('data/profile.json'),fetch('data/works.json')]);if(responses.some(r=>!r.ok))throw new Error('服务不可用');[profile,works]=await Promise.all(responses.map(r=>r.json()));render();}catch(error){console.error('内容加载失败',error);}
})();
