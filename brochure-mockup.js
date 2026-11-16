(() => {
 const images={'brochure-shuntian-energy':'assets/brochures/shuntian/open-mockup.webp','brochure-feixin-product':'assets/brochures/feixin/open-mockup.webp'};
 window.makeBrochureMockup=work=>{
  if(work?.id==='brochure-airun-company'){
   const frame=document.createElement('div');frame.className='brochure-mockup brochure-airun-preview';frame.setAttribute('role','img');frame.setAttribute('aria-label',work.title+'内页展开展示');
   const spread=document.createElement('div');spread.className='brochure-airun-spread';const image=document.createElement('img');image.src='assets/brochures/airun/page-05.webp';image.alt='';image.loading='lazy';image.decoding='async';spread.append(image);frame.append(spread);return frame;
  }
  const src=images[work?.id];if(!src)return null;
  const frame=document.createElement('div');frame.className='brochure-mockup brochure-generated';frame.setAttribute('role','img');frame.setAttribute('aria-label',work.title+'翻页样机，完整原页面见详情');
  const img=document.createElement('img');img.className='brochure-mockup-image';img.src=src;img.alt='';img.loading='lazy';img.decoding='async';
  frame.append(img);return frame;
 };
})();
