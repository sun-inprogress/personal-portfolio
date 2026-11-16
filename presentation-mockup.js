(() => {
 const covers={
  '0254ba4a-cb59-41ab-84d2-5e5a71924d97':'feixin',
  '2187f400-641a-49ce-a47e-b11b2586b223':'shuntian',
  '0a331c44-2e0a-4652-8c39-9d9152fee17c':'airun'
 };
 window.makePresentationMockup=(work)=>{
  if(work?.id==='presentation-wind-lidar-report'){
   const root=document.createElement('div');root.className='presentation-mockup radar-presentation-mockup';root.setAttribute('role','img');root.setAttribute('aria-label',work.title+'电脑样机与六张内容页预览');
   const chassis=document.createElement('img');chassis.className='mockup-chassis';chassis.src='assets/portfolio-categories/ppt-selected.webp';chassis.alt='';chassis.loading='lazy';
   const screen=document.createElement('img');screen.className='mockup-screen';screen.src='assets/presentations/wind-lidar/page-01.webp';screen.alt='';screen.loading='lazy';
   const pages=document.createElement('div');pages.className='mockup-pages';
   for(const n of [3,4,5,6,8,9]){const image=document.createElement('img');image.src=`assets/presentations/wind-lidar/page-${String(n).padStart(2,'0')}.webp`;image.alt='';image.loading='lazy';image.decoding='async';pages.append(image)}
   root.append(chassis,screen,pages);return root;
  }
  const slug=covers[work.id];if(!slug)return null;
  const image=document.createElement('img');image.className='presentation-grid-cover';image.src='assets/presentations/'+slug+'/cover.webp';image.alt=work.title+'九宫格页面预览';image.loading='lazy';image.decoding='async';return image;
 };
})();
