(() => {
  const preferenceKey='site-translation-language';
  const button=document.querySelector('.lang-toggle');
  const label=button?.querySelector('.translate-mark');
  let desired=localStorage.getItem(preferenceKey)==='english'?'english':'chinese_simplified';
  let loading;
  if(button){button.classList.add('ignore');button.setAttribute('aria-label','切换中文或英文 / Switch Chinese or English');}
  function updateLabel(){if(label)label.textContent=desired==='english'?'EN / 中文':'中文 / EN';}
  function message(text){
    let node=document.querySelector('#translation-status');
    if(!node){node=document.createElement('div');node.id='translation-status';node.className='translation-status ignore';node.setAttribute('role','status');document.body.append(node);}
    node.textContent=text;node.hidden=!text;
  }
  function loadTranslator(){
    if(loading)return loading;
    loading=new Promise((resolve,reject)=>{
      const script=document.createElement('script');
      script.src='https://res.wang.market/translate/translate.js';script.async=true;
      const timer=setTimeout(()=>reject(new Error('timeout')),12000);
      script.onload=()=>{clearTimeout(timer);window.translate?resolve(window.translate):reject(new Error('missing translator'));};
      script.onerror=()=>{clearTimeout(timer);reject(new Error('load failed'));};
      document.head.append(script);
    });
    return loading;
  }
  async function startTranslation(change){
    try{
      message('正在加载英文翻译…');
      const translator=await loadTranslator();
      translator.selectLanguageTag.show=false;
      translator.language.setLocal('chinese_simplified');
      translator.listener.start();
      if(change)translator.changeLanguage('english');else translator.execute();
      message('');
    }catch(error){
      desired='chinese_simplified';localStorage.setItem(preferenceKey,desired);loading=null;updateLabel();
      message('英文翻译暂时不可用，请稍后重试。');
    }
  }
  button?.addEventListener('click',()=>{
    if(desired==='english'){
      desired='chinese_simplified';localStorage.setItem(preferenceKey,desired);
      if(window.translate?.language?.clearCacheLanguage)window.translate.language.clearCacheLanguage();
      location.reload();return;
    }
    desired='english';localStorage.setItem(preferenceKey,desired);updateLabel();startTranslation(true);
  });
  updateLabel();
  if(desired==='english')startTranslation(false);
})();
