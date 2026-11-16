(() => {
 const pages=(slug,count)=>Array.from({length:count},(_,i)=>`assets/brochures/${slug}/page-${String(i+1).padStart(2,'0')}.webp`);
 window.portfolioBrochures=[
  {id:'brochure-shuntian-energy',title:'顺天装备储能液流电池行业装备宣传册',description:'产品宣传册 · 行业装备与解决方案',background:'这本宣传册围绕储能液流电池行业装备展开，系统展示企业介绍、液流电池极板、生产线及相关设备，为客户了解产品和装备方案提供图文资料。',approach:'以企业介绍和产品目录建立阅读路径，按设备类别组织内容；内页结合设备图片、产品概述、特点与参数，采用统一的绿色视觉元素与中英文标题，便于连续阅读与查找。',count:15,slug:'shuntian'},
  {id:'brochure-airun-company',title:'艾润停车王企业宣传册',description:'产品宣传册 · 企业介绍与智慧停车方案',background:'这本企业宣传册围绕艾润停车王的智慧停车业务，展示企业介绍、停车管理平台、硬件产品、服务方案和应用案例。',approach:'以企业与产品体系为线索，结合目录、系统架构、产品图片和场景案例分章节展示；运用蓝白配色、信息图表与统一的版面结构，方便读者了解与查阅。',count:29,slug:'airun'},
  {id:'brochure-feixin-product',title:'飞芯电子产品手册',description:'产品宣传册 · 光学传感器与产品系列',background:'这本产品手册介绍飞芯电子的产品体系，围绕测距、激光雷达及相干传感等系列，整理产品矩阵、应用场景和技术资料。',approach:'以产品分类与目录搭建内容结构，结合产品矩阵、产品图片、特点、尺寸及参数表展开介绍；整体以蓝白配色和统一的版式语言呈现，突出产品信息的层次与查阅便利。',count:20,slug:'feixin'}
 ].map(w=>({...w,kind:'portfolio',workCategory:'平面视觉设计',categoryType:'产品宣传册',cover:`assets/brochures/${w.slug}/page-01.webp`,images:pages(w.slug,w.count)}));
 window.portfolioFoldouts=[
  {id:'foldout-flow-plate',title:'液流电池极板产品折页',file:'flow-plate.webp',description:'产品折页 · 结构与应用',background:'这份产品折页围绕液流电池极板及电堆配套方案，集中呈现产品介绍、技术特点、应用领域、检测资料与交付服务，为客户了解产品提供直观的宣传资料。',approach:'以产品主体为视觉中心，将产品简介、结构示意、技术要点和规格信息分区排列；通过图示、参数表与图文模块构建阅读层次，使较复杂的产品信息更易查阅。'},
  {id:'foldout-flow-equipment',title:'储能液流电池行业装备宣传单页',file:'flow-equipment.webp',description:'产品单页 · 产线与设备',background:'这份宣传单页面向储能液流电池行业装备的产品展示，集中介绍相关产线及设备，便于客户快速了解企业的产品范围。',approach:'以产线和设备分类组织内容，使用统一的图片卡片、图标及简短说明建立清晰的信息层次，结合中英文标题和蓝白色系保持页面整体一致。'},
  {id:'foldout-hydrogen',title:'氢能燃料电池行业装备宣传单页',file:'hydrogen.webp',description:'产品单页 · 产线与设备',background:'这份宣传单页围绕氢能燃料电池行业装备，以产品图片与简要说明展示相关产线和设备，用于集中介绍企业的装备产品。',approach:'按照产线与单机设备划分信息，采用统一的图文卡片、图标及中英文标题，让不同产品的名称、外观与功能说明形成清晰、连贯的阅读路径。'},
  {id:'foldout-electrolyzer',title:'PEM/AEM 电解槽行业装备宣传单页',file:'electrolyzer.webp',description:'产品单页 · 产线与设备',background:'这份宣传单页面向 PEM/AEM 电解槽行业装备的宣传展示，汇集相关产线与设备图片及功能说明，为产品介绍提供图文资料。',approach:'延续系列宣传单页的蓝白视觉语言，以产线及设备类别进行分组，结合产品图、图标和简要说明，增强不同产品之间的辨识度与阅读效率。'},
  {id:'foldout-venue-parking',title:'大型场馆停车解决方案折页',file:'venues.webp',description:'产品折页 · 场景解决方案',background:'这份折页围绕大型场馆停车场景，介绍停车管理需求、解决方案、功能列表和应用案例，帮助读者从具体场景理解相关服务。',approach:'从场馆使用特征和常见需求切入，结合技术方案、功能图标、案例图片与表格组织信息；通过分栏与蓝白色彩统一不同内容，使场景、功能和案例的关系更加清楚。'}
 ].map(w=>({...w,kind:'portfolio',workCategory:'平面视觉设计',categoryType:'产品宣传折页',cover:'assets/foldouts/'+w.file,images:['assets/foldouts/'+w.file]}));
 window.portfolioFoldouts.push(...[
  {id:'foldout-parking-charge',title:'停车与充电一体化解决方案折页',description:'产品折页 · 停车与充电',cover:'assets/foldouts/parking-charge-front.jpg',images:['assets/foldouts/parking-charge-front.jpg','assets/foldouts/parking-charge-inside.jpg'],background:'这份对折页围绕停车与充电一体化解决方案，介绍行业需求、方案优势、主要功能及充电硬件产品。',approach:'以蓝白色调建立统一视觉，通过图文分区、功能图示和产品图片组织内容，帮助读者快速了解方案与应用。',foldType:'bi'},
  {id:'foldout-prince-series',title:'停车王子系列产品折页',description:'产品折页 · 停车产品与功能',cover:'assets/foldouts/prince-front.jpg',images:['assets/foldouts/prince-front.jpg','assets/foldouts/prince-inside.jpg'],background:'这份三折页介绍停车王子系列产品，展示硬件设备、技术参数、停车管理软件功能及企业信息。',approach:'按照封面、产品介绍和功能说明组织阅读顺序，运用蓝白色彩、产品图片及分栏表格，让信息清晰易查。',foldType:'tri'},
  {id:'foldout-shopping-mall',title:'商业综合体停车解决方案折页',description:'产品折页 · 场景解决方案',cover:'assets/foldouts/shopping-mall.jpg',images:['assets/foldouts/shopping-mall.jpg'],background:'这份折页面向商业综合体停车场景，展示停车管理需求、技术方案、功能服务和实际案例。',approach:'围绕场景需求展开，通过分栏排版、功能图标、案例图片和表格，将解决方案和服务内容分层呈现。',foldType:'quad'}
 ].map(w=>({...w,kind:'portfolio',workCategory:'平面视觉设计',categoryType:'产品宣传折页'})));
 const foldoutOrder=['foldout-flow-plate','foldout-parking-charge','foldout-shopping-mall','foldout-venue-parking','foldout-flow-equipment','foldout-hydrogen','foldout-electrolyzer','foldout-prince-series'];
 window.portfolioFoldouts.sort((a,b)=>foldoutOrder.indexOf(a.id)-foldoutOrder.indexOf(b.id));

})();
