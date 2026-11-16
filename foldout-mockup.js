(() => {
 const images={'foldout-flow-plate':'flow-plate-mockup.webp','foldout-flow-equipment':'flow-equipment-mockup.webp','foldout-hydrogen':'hydrogen-mockup.webp','foldout-electrolyzer':'electrolyzer-mockup.webp','foldout-venue-parking':'venues-mockup.webp'};
 const singleSheets=new Set(['foldout-flow-equipment','foldout-hydrogen','foldout-electrolyzer']);
 window.makeFoldoutMockup=work=>{
  if(work?.foldType){
   const root=document.createElement('div');root.className='foldout-mockup foldout-real-composition foldout-'+work.foldType;root.setAttribute('role','img');root.setAttribute('aria-label',work.title+'折页展开与封面展示');
   const spread=document.createElement('div');spread.className='foldout-real-spread';
   if(['foldout-parking-charge','foldout-shopping-mall'].includes(work.id)){
    spread.classList.add('reference-fold-spread');const count=work.foldType==='bi'?2:4;const side=work.foldType==='quad'?work.images[0]:work.images[1];
    for(let i=0;i<count;i++){const panel=document.createElement('span');panel.className='reference-fold-panel';panel.style.backgroundImage=`url("${side}")`;panel.style.backgroundSize=`${count*100}% ${work.foldType==='quad'?200:100}%`;panel.style.backgroundPosition=`${i*100/(count-1)}% ${work.foldType==='quad'?'top':'center'}`;spread.append(panel)}
   }else spread.style.backgroundImage=`url("${work.foldType==='quad'?work.images[0]:work.images[1]}")`;
   const front=document.createElement('div');front.className='foldout-real-front';front.style.backgroundImage=`url("${work.images[0]}")`;
   root.append(spread,front);return root;
  }
  if(singleSheets.has(work?.id)&&work.cover){
   const root=document.createElement('div');root.className='foldout-mockup single-sheet-mockup';root.setAttribute('role','img');root.setAttribute('aria-label',work.title+'单页正反面展示');
   for(const side of ['front','back']){const sheet=document.createElement('div');sheet.className='single-sheet '+side;sheet.style.backgroundImage=`url("${work.cover}")`;root.append(sheet)}
   return root;
  }
  const file=images[work?.id];if(!file)return null;
  const root=document.createElement('div');root.className='foldout-mockup foldout-generated';root.setAttribute('role','img');root.setAttribute('aria-label',work.title+'折页样机，完整原图见详情');
  const img=document.createElement('img');img.className='foldout-generated-image';img.src='assets/foldouts/'+file;img.alt='';img.loading='lazy';img.decoding='async';
  root.append(img);return root;
 };
})();
