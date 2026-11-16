if (window.__SITE_DATA__?.profile) {
  for (const lang of ['zh','en']) {
    const data=profileData[lang], p=window.__SITE_DATA__.profile;
    if(p.name){data.site.logo='SUN · IN PROGRESS';data.hero.title='Hi, '+p.name;data.footer.copy='© '+new Date().getFullYear();}
    if(p.slogan)data.hero.slogan=p.slogan;
    if(p.intro)data.hero.desc=p.intro;
    if(p.about)data.about.body=p.about;
  }
}
const state = {
  lang: "zh",
};

const $ = (selector) => document.querySelector(selector);

const t = (path) =>
  path.split(".").reduce((value, key) => value?.[key], profileData[state.lang]) || "";

const renderLinkedList = (selector, items) => {
  const target = $(selector);
  if (!target) return;
  target.innerHTML = items.map((item) => `<a href="#">${item}</a>`).join("、");
};

const renderArticles = () => {
  const target = $("#articleList");
  if (!target) return;

  target.innerHTML = profileData[state.lang].articles.items
    .map((item) => {
      const isImagePath = /\.(png|jpe?g|webp|gif)$/iu.test(item.image || "");
      const thumbClass = isImagePath ? "" : item.image || "";
      const thumbStyle = isImagePath ? ` style="background-image: url('${item.image}')"` : "";
      return `
        <article class="article-item">
          <a class="article-copy" href="#">
            <h3>${item.title}<span>→</span></h3>
            <p class="article-excerpt">${item.excerpt}</p>
            <p class="article-meta">${item.date} · ${item.minutes}</p>
          </a>
          <a class="article-thumb ${thumbClass}" href="#" aria-label="${item.title}"${thumbStyle}></a>
        </article>
      `;
    })
    .join("");
};

const renderProjects = () => {
  const target = $("#projectGrid");
  if (!target || window.__SITE_DATA__) return;

  target.innerHTML = profileData[state.lang].projects.items
    .map(
      (item) => `
        <a class="project-card" href="#">
          <strong>${item.name}</strong>
          <span>${item.desc}</span>
        </a>
      `,
    )
    .join("");
};

const renderFriends = () => {
  const target = $("#friendGrid");
  if (!target) return;

  target.innerHTML = profileData[state.lang].friends.items
    .map((item) => `<a href="#">${item}</a>`)
    .join("");
};

const renderCollections = () => {
  const data = profileData[state.lang];
  if (!window.__SITE_DATA__) {
    renderLinkedList("#categoryList", data.articles.categories);
    renderLinkedList("#tagList", data.articles.tags);
    renderArticles();
  }
  renderProjects();
  renderFriends();
};

const setLanguage = (lang) => {
  state.lang = lang;
  localStorage.setItem("site-lang", lang);
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  const languageLabel = document.querySelector(".lang-toggle .translate-mark");
  if (languageLabel) languageLabel.textContent = lang === "zh" ? "中文 / EN" : "EN / 中文";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    if (node.dataset.i18n === "hero.slogan" && window.__SITE_DATA__?.profile?.slogan) return;
    node.textContent = t(node.dataset.i18n);
  });

  renderCollections();
};

setLanguage(state.lang);
