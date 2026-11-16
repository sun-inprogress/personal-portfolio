(() => {
 const works=[
  {id:'editorial-seasonal-posters',title:'节日与节气海报设计',description:'节日海报 · 品牌传播',background:'围绕国庆、元旦、劳动节和立冬等节点，设计适用于企业线上传播的节日与节气海报。',approach:'结合不同节日的视觉元素与品牌识别，分别运用文字、色彩、产品及场景画面组织构图，在保持主题辨识度的同时，适配竖版传播场景。',layout:'posters',images:['media/9f4c9520-16f3-45dd-b906-bf4cd2137d4c.jpg','media/549ade4d-e0f9-4220-bed0-88cfba669712.jpg','media/3e5718f3-19dc-403d-96c8-9e1f14961ddf.jpg','media/51e12e57-561d-44ba-a1f3-468476798ea2.jpg']},
  {id:'editorial-salon-campaign',title:'数智化创新沙龙 · 邀请函与活动图文',description:'活动宣传 · 邀请函与长图',background:'围绕艾润停车王与用友联合举办的数智化创新主题沙龙，展示活动邀请函与活动后图文宣传设计。',approach:'以统一的蓝色视觉语言贯穿活动前后的传播资料；邀请函集中呈现活动主题、时间及流程，活动图文通过标题、现场照片和正文分区梳理分享内容。',layout:'long',images:['media/3e6c3abd-313f-40cd-aebf-233e64657345.jpg','media/79302de7-63f4-42b1-b0da-7842299326bb.jpg']},
  {id:'editorial-event-news',title:'活动与企业动态长图设计',description:'宣传长图 · 活动与企业动态',background:'以生态沙龙、渠道活动和企业合作动态为主题，通过长图呈现活动信息、现场照片与相关内容。',approach:'结合各主题设置标题、图片和文字区块，运用不同的品牌配色及层级关系组织信息，适配移动端长图阅读与传播。',layout:'long',images:['media/ea1281b8-d12a-4e05-9e28-f7a5eb6dea40.jpg','media/6846efeb-4c3c-4a3b-a016-ea4ff00fd45b.jpg','media/4991a1e3-53c2-4b7f-9fac-16970a2420f9.jpg','media/67f8271a-c442-4297-917d-4dc1c8fe53ec.jpg']},
  {id:'editorial-irain-time',title:'iRain TIME 电子月刊',description:'电子月刊 · 封面与传播',background:'这份电子月刊以企业月度内容为主题，采用封面和二维码入口的形式进行线上传播。',approach:'以蓝色建筑画面和刊物名称构建封面识别，在传播页面中安排刊物信息与二维码，方便移动端查看。',layout:'single',images:['assets/editorial/irain-time-share.png','assets/editorial/irain-time-issue-6.jpg']}
 ];
 window.portfolioEditorial=works.map(w=>({...w,kind:'portfolio',workCategory:'平面视觉设计',categoryType:'海报及长图文',cover:w.images[0]}));
 const originalEditorialImages=new Set(works.flatMap(w=>w.images));
 const variant=(src,kind)=>'assets/optimized/'+src.split('/').pop().replace(/\.[^.]+$/,'')+'-'+kind+'.webp';
 window.editorialDisplayImage=src=>originalEditorialImages.has(src)&&src.startsWith('media/')?variant(src,'display'):src;
 window.makeEditorialCover=work=>{
  if(!work?.id?.startsWith('editorial-'))return null;
  const root=document.createElement('div');root.className='editorial-cover'+(work.id==='editorial-irain-time'?' is-magazine':work.layout==='single'?' is-single':'');root.setAttribute('role','img');root.setAttribute('aria-label',work.title+'作品预览');
  work.images.slice(0,work.id==='editorial-irain-time'?2:work.layout==='single'?1:4).forEach(src=>{const cell=document.createElement('div');cell.className='editorial-cover-cell';const img=document.createElement('img');img.src=originalEditorialImages.has(src)?variant(src,'preview'):src;img.alt='';img.loading='lazy';img.decoding='async';cell.append(img);root.append(cell)});return root;
 };

})();
