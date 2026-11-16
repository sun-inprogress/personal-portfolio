(async()=>{
  const title=document.querySelector('#articleTitle');
  try{
    const id=new URLSearchParams(location.search).get('id');
    if(!/^[0-9a-f-]{36}$/.test(id || ''))throw new Error('文章不存在');
    const response=await fetch('data/articles/'+encodeURIComponent(id)+'.json');if(!response.ok)throw new Error('文章不存在或已删除');const article=await response.json();
    title.textContent=article.title;document.title=article.title+' · 文章';document.querySelector('#articleInfo').textContent=article.date+' · '+article.category+' · '+article.minutes+' min';
    if(article.cover){const cover=document.querySelector('#articleCover');cover.src=article.cover;cover.alt=article.title;cover.hidden=false;}
    const body=document.querySelector('#articleBody');
    for(const block of article.content.split(/\n\s*\n/)){for(const part of block.split(/\n(?=#{1,2}\s)/)){const heading=part.match(/^(#{1,2})\s+([^\n]+)(?:\n([\s\S]*))?$/);if(heading){const element=document.createElement(heading[1].length===1?'h2':'h3');element.textContent=heading[2];body.append(element);if(heading[3]){const paragraph=document.createElement('p');paragraph.textContent=heading[3];body.append(paragraph);}}else{const paragraph=document.createElement('p');paragraph.textContent=part;body.append(paragraph);}}}
    const tags=document.querySelector('#articleTags');for(const tag of article.tags){const item=document.createElement('span');item.textContent=tag;tags.append(item);}
  }catch(error){title.textContent=error.message || '文章加载失败，请稍后重试';}
})();
