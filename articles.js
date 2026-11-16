(() => {
  const defaults=['新闻动态','产品服务','行业观察','项目案例','年度大事记'];
  let articles=window.__SITE_DATA__?.articles || [];
  let category='';let showAll=false;
  const $=selector=>document.querySelector(selector);
  function makeFilter(label,active,onClick){const button=document.createElement('button');button.type='button';button.className='article-filter';button.textContent=label;button.setAttribute('aria-pressed',String(active));button.onclick=onClick;return button;}
  function render() {
    const categoryList=$('#categoryList');const list=$('#articleList');if(!list)return;
    categoryList.replaceChildren();list.replaceChildren();
    const categories=defaults;
    for(const name of categories){categoryList.append(makeFilter('#'+name,category===name,()=>{category=category===name?'':name;showAll=false;render();}));}
    const filtered=articles.filter(article=>!category||(article.categories||[article.category]).includes(category));
    if(!filtered.length){const empty=document.createElement('p');empty.className='article-empty';empty.textContent=articles.length?'没有符合条件的文章。':'文章正在整理中。';list.append(empty);}
    for(const article of (showAll?filtered:filtered.slice(0,5))){
      const row=document.createElement('article');row.className='article-item';
      const link=document.createElement('a');link.className='article-copy';link.href=article.url || 'article.html?id='+encodeURIComponent(article.id);if(article.url){link.target='_blank';link.rel='noopener noreferrer';}
      const title=document.createElement('h3');title.textContent=article.title+' →';
      const excerpt=document.createElement('p');excerpt.className='article-excerpt';excerpt.textContent=article.excerpt || '';
      const meta=document.createElement('p');meta.className='article-meta';meta.textContent=article.url?[(article.publishedAt?article.publishedAt+' 发布':article.date+' 收录'),article.publisher || '微信公众号'].join(' · '):article.date+' · '+article.minutes+' min';link.append(title,excerpt,meta);
      const thumb=document.createElement('a');thumb.href=link.href;thumb.className='article-thumb';thumb.setAttribute('aria-label',article.title);if(article.url){thumb.target='_blank';thumb.rel='noopener noreferrer';}if(article.cover){const image=document.createElement('img');image.width=140;image.height=120;image.loading='lazy';image.decoding='async';image.src=article.cover;image.alt='';image.referrerPolicy='no-referrer';image.style.cssText='width:100%;height:100%;object-fit:cover;border-radius:inherit';thumb.append(image);}else thumb.classList.add('thumb-2');
      row.append(link,thumb);list.append(row);
    }
    const action=$('[data-i18n="articles.viewAll"]');if(action){action.parentElement.hidden=filtered.length<=5;action.textContent=showAll?'收起文章':'查看所有文章';action.href='#articles';action.onclick=event=>{event.preventDefault();showAll=!showAll;render();};}
  }
  if(window.__SITE_DATA__){render();}
  else fetch('data/articles.json').then(response=>response.json()).then(data=>{articles=data;render();}).catch(()=>{$('#articleList').textContent='文章加载失败，请稍后重试。';});
})();
