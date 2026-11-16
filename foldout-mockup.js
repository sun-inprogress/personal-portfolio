(() => {
 const images={'foldout-flow-plate':'flow-plate-mockup.webp','foldout-flow-equipment':'flow-equipment-mockup.webp','foldout-hydrogen':'hydrogen-mockup.webp','foldout-electrolyzer':'electrolyzer-mockup.webp','foldout-venue-parking':'venues-mockup.webp'};
 const foldPreview={"assets/foldouts/parking-charge-front.jpg":"assets/optimized-v2/foldout-parking-charge-front.webp","assets/foldouts/parking-charge-inside.jpg":"assets/optimized-v2/foldout-parking-charge-inside.webp","assets/foldouts/prince-front.jpg":"assets/optimized-v2/foldout-prince-front.webp","assets/foldouts/prince-inside.jpg":"assets/optimized-v2/foldout-prince-inside.webp","assets/foldouts/shopping-mall.jpg":"assets/optimized-v2/foldout-shopping-mall.webp"};
 const observer='IntersectionObserver' in window?new IntersectionObserver(entries=>{for(const entry of entries){if(!entry.isIntersecting)continue;for(const node of entry.target.querySelectorAll('[data-preview-background]')){node.style.backgroundImage=`url("${node.dataset.previewBackground}")`;delete node.dataset.previewBackground}observer.unobserve(entry.target)}},{rootMargin:'500px 0px'}):null;
 const bg=(element,src)=>{element.dataset.previewBackground=foldPreview[src]||src};
 const watch=root=>{if(observer)observer.observe(root);else for(const node of root.querySelectorAll('[data-preview-background]')){node.style.backgroundImage=`url("${node.dataset.previewBackground}")`;delete node.dataset.previewBackground}};
 const singleSheets=new Set(['foldout-flow-equipment','foldout-hydrogen','foldout-electrolyzer']);
 window.makeFoldoutMockup=work=>{
  if(work?.foldType){
   const root=document.createElement('div');root.className='foldout-mockup foldout-real-composition foldout-'+work.foldType;root.setAttribute('role','img');root.setAttribute('aria-label',work.title+'折页展开与封面展示');
   const spread=document.createElement('div');spread.className='foldout-real-spread';
   if(['foldout-parking-charge','foldout-shopping-mall'].includes(work.id)){
    spread.classList.add('reference-fold-spread');const count=work.foldType==='bi'?2:4;const side=work.foldType==='quad'?work.images[0]:work.images[1];
    for(let i=0;i<count;i++){const panel=document.createElement('span');panel.className='reference-fold-panel';bg(panel,side);panel.style.backgroundSize=`${count*100}% ${work.foldType==='quad'?200:100}%`;panel.style.backgroundPosition=`${i*100/(count-1)}% ${work.foldType==='quad'?'top':'center'}`;spread.append(panel)}
   }else bg(spread,work.foldType==='quad'?work.images[0]:work.images[1]);
   const front=document.createElement('div');front.className='foldout-real-front';bg(front,work.images[0]);
   root.append(spread,front);watch(root);return root;
  }
  if(singleSheets.has(work?.id)&&work.cover){
   const root=document.createElement('div');root.className='foldout-mockup single-sheet-mockup';root.setAttribute('role','img');root.setAttribute('aria-label',work.title+'单页正反面展示');
   for(const side of ['front','back']){const sheet=document.createElement('div');sheet.className='single-sheet '+side;bg(sheet,work.cover);root.append(sheet)}
   watch(root);return root;
  }
  const file=images[work?.id];if(!file)return null;
  const root=document.createElement('div');root.className='foldout-mockup foldout-generated';root.setAttribute('role','img');root.setAttribute('aria-label',work.title+'折页样机，完整原图见详情');
  const img=document.createElement('img');img.className='foldout-generated-image';img.src='assets/foldouts/'+file;img.alt='';img.loading='lazy';img.decoding='async';
  root.append(img);return root;
 };
})();
