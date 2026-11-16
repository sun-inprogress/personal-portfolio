window.portfolioPresentations=[
 {id:'presentation-feixin',title:'飞芯电子公司介绍',slug:'feixin',pageCount:20,description:'企业介绍 · 产品介绍 · 市场应用',pptType:'企业介绍'},
 {id:'presentation-shuntian',title:'顺天装备企业介绍',slug:'shuntian',pageCount:29,description:'企业介绍 · 产品与装备 · 合作案例',pptType:'企业介绍'},
 {id:'presentation-airun',title:'艾润停车王企业介绍',slug:'airun',pageCount:46,description:'企业介绍 · 产品与服务 · 解决方案',pptType:'企业介绍'}
].map(w=>({...w,kind:'portfolio',workCategory:'PPT设计',cover:'assets/presentations/'+w.slug+'/cover.webp'}));
window.portfolioReportWorks=[{
 id:'presentation-wind-lidar-report',title:'测风雷达行业分析报告',description:'行业分析 · 市场与竞争格局',kind:'portfolio',workCategory:'PPT设计',pptType:'行业分析报告',pageCount:28,
 cover:'assets/presentations/wind-lidar/page-01.webp',
 images:Array.from({length:28},(_,i)=>`assets/presentations/wind-lidar/page-${String(i+1).padStart(2,'0')}.webp`),
 background:'这份报告围绕测风雷达行业展开，梳理市场规模、产品类型、竞争格局及相关行业信息，为市场研究与业务分析提供参考。',
 approach:'以章节组织研究内容，结合数据图表、产品与企业资料，运用蓝白配色和统一标题建立页面层次，呈现行业信息与分析重点。'
}];
