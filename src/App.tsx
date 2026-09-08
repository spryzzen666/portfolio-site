import { useState } from 'react';
import { projects } from './data';
import './styles.css';

type Lang = 'ru' | 'kk';

const WA_NUMBER = '77714548696';
const waLink = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const skills = [
  { name: 'React', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'JavaScript', level: 85 },
  { name: 'HTML / CSS', level: 90 },
  { name: 'Node.js / Express', level: 78 },
  { name: 'SQLite / SQL', level: 75 },
];

interface Service {
  id: string;
  price: string;
  priceNote: string;
  features: string[];
}

const services: Service[] = [
  { id: 'landing', price: '60 000 ₸', priceNote: 'from', features: ['f_landing1', 'f_landing2', 'f_landing3'] },
  { id: 'business', price: '100 000 ₸', priceNote: 'from', features: ['f_business1', 'f_business2', 'f_business3'] },
  { id: 'webapp', price: '200 000 ₸', priceNote: 'from', features: ['f_webapp1', 'f_webapp2', 'f_webapp3'] },
  { id: 'support', price: '15 000 ₸', priceNote: 'perMonth', features: ['f_support1', 'f_support2', 'f_support3'] },
];

const translations = {
  ru: {
    navCta: 'Заказать',
    badge: 'Открыт для заказов',
    eyebrow: 'Привет, я',
    title: 'Веб-разработчик',
    heroDesc:
      'Создаю <strong>чистые, быстрые, современные</strong> сайты и веб-приложения на React, TypeScript и Node.js — от одностраничного лендинга до полноценного продукта с базой данных и аккаунтами пользователей.',
    stat1: 'проектов сдано',
    stat2: 'React · Node · SQL',
    stat3: 'адаптивный дизайн',
    seeWork: 'Мои работы',
    getInTouch: 'Написать в WhatsApp',
    pricing: 'Услуги и цены',
    pricingDesc: 'Фиксированная цена без скрытых платежей. Первая консультация — бесплатно.',
    services: ['Лендинг / визитка', 'Сайт для бизнеса', 'Веб-приложение', 'Поддержка / подписка'],
    serviceDescs: [
      'Страница под ключ, которая продаёт: быстро, красиво, на телефоне и компьютере.',
      'Многостраничный сайт с формой заявок и готовый к продвижению.',
      'Система с аккаунтами, базой данных и автоматизацией ваших процессов.',
      'Обновления, правки и приоритетная поддержка каждый месяц.',
    ],
    priceFrom: 'от',
    pricePerMonth: 'в месяц',
    order: 'Заказать в WhatsApp',
    work: 'Мои работы',
    workDesc: 'Посмотрите живые образцы. Каждый проект — реально работающий продукт по ссылке.',
    skillsTitle: 'Навыки',
    contactTitle: 'Давайте создадим что-то вместе',
    contactText: 'Есть проект? Свяжитесь со мной — отвечаю быстро и бесплатно консультирую.',
    orderBtn: 'Заказать сайт',
    f_landing1: 'Одна страница, адаптивная вёрстка',
    f_landing2: 'Форма заявки / WhatsApp-кнопка',
    f_landing3: 'Быстрая загрузка и базовое SEO',
    f_business1: 'Каталог / услуги / о компании',
    f_business2: 'Форма заявок и подключение к WhatsApp',
    f_business3: 'Кнопки соцсетей, карта, контакты',
    f_webapp1: 'Аккаунты, сессии, база данных',
    f_webapp2: 'REST API и админ-панель',
    f_webapp3: 'Автоматизация рутинных процессов',
    f_support1: 'Правки и обновления сайта',
    f_support2: 'Резервное копирование',
    f_support3: 'Приоритетная поддержка',
    waHero: 'Здравствуйте! Хочу заказать сайт.',
    waCard: 'Здравствуйте! Интересует услуга',
    projectNote: 'Резюме: 3+ проекта, полный стек, работаю с бизнесом.',
    project_task:
      'Full-stack планировщик задач: регистрация и вход, сессии, REST API, пароли зашифрованы scrypt, данные в SQLite.',
    project_fx:
      'Конвертер валют с актуальными курсами, кэшированием и киберпанк-анимацией на Canvas.',
    project_innoverse:
      'Двуязычный (RU/ҚАЗ) лендинг школы программирования с WhatsApp-формой заявок и SEO.',
  },
  kk: {
    navCta: 'Тапсырыс',
    badge: 'Тапсырыстарға ашықпын',
    eyebrow: 'Сәлем, мен',
    title: 'Веб-әзірлеуші',
    heroDesc:
      'React, TypeScript және Node.js көмегімен <strong>таза, жылдам, заманауи</strong> сайттар мен веб-қосымшалар жасаймын — бір беттік лендингтен бастап дерекқор мен пайдаланушы аккаунттары бар толыққанды өнімге дейін.',
    stat1: 'аяқталған жоба',
    stat2: 'React · Node · SQL',
    stat3: 'адаптивті дизайн',
    seeWork: 'Менің жұмыстарым',
    getInTouch: 'WhatsApp-қа жазу',
    pricing: 'Қызметтер мен бағалар',
    pricingDesc: 'Белгіленген баға, жасырын төлемдер жоқ. Алғашқы кеңес — тегін.',
    services: ['Лендинг / визитка', 'Бизнес сайт', 'Веб-қосымша', 'Қолдау / жазылым'],
    serviceDescs: [
      'Сататын дайын бет: жылдам, әдемі, телефон мен компьютерде.',
      'Көп бетті сайт, өтінім формасы және алға жылжуға дайын.',
      'Аккаунттар, дерекқор және процестерді автоматтандыру жүйесі.',
      'Әр ай сайын жаңартулар, түзетулер және айрықша қолдау.',
    ],
    priceFrom: 'бастап',
    pricePerMonth: 'айына',
    order: 'WhatsApp-та тапсырыс беру',
    work: 'Менің жұмыстарым',
    workDesc: 'Тірі мысалдарды қараңыз. Әр жоба — сілтеме бойынша шынымен жұмыс істейтін өнім.',
    skillsTitle: 'Дағдылар',
    contactTitle: 'Бірге бір нәрсе жасайық',
    contactText: 'Жоба бар ма? Хабарласыңыз — тез жауап беремін, тегін кеңес беремін.',
    orderBtn: 'Сайтқа тапсырыс беру',
    f_landing1: 'Бір бет, адаптивті дизайн',
    f_landing2: 'Өтінім формасы / WhatsApp-батырмасы',
    f_landing3: 'Жылдам жүктелу және базалық SEO',
    f_business1: 'Каталог / қызметтер / компания туралы',
    f_business2: 'Өтінім формасы және WhatsApp-қа қосу',
    f_business3: 'Әлеуметтік желілер, карта, байланыстар',
    f_webapp1: 'Аккаунттар, сессиялар, дерекқор',
    f_webapp2: 'REST API және админ-панель',
    f_webapp3: 'Тұрақты процестерді автоматтандыру',
    f_support1: 'Сайтқа түзетулер мен жаңартулар',
    f_support2: 'Резервтік көшірме',
    f_support3: 'Айрықша қолдау',
    waHero: 'Сәлеметсізбе! Сайтқа тапсырыс бергім келеді.',
    waCard: 'Сәлеметсізбе! Қызмет қызықтырады',
    projectNote: 'Түйіндеме: 3+ жоба, толық стек, бизнеспен жұмыс істеймін.',
    project_task:
      'Толық циклді тапсырма жоспарлаушы: тіркелу және кіру, сессиялар, REST API, scrypt-пароль, SQLite дерекқоры.',
    project_fx:
      'Нақты бағамды валюта конвертері, кэштеу және Canvas-тағы киберпанк-анимация.',
    project_innoverse:
      'Бағдарламалау мектебінің қостілді (RU/ҚАЗ) лендингі: WhatsApp-өтінім формасы және SEO.',
  },
};

type Dict = typeof translations.ru;

const projectDescKeys: Record<string, keyof Dict> = {
  'Task Manager': 'project_task',
  'FX-TERMINAL 3025': 'project_fx',
  Innoverse: 'project_innoverse',
};

export default function App() {
  const [lang, setLang] = useState<Lang>('ru');
  const t: Dict = translations[lang];

  return (
    <div className="wrap">
      <header className="nav">
        <span className="logo">AD<span className="dot">.</span></span>
        <div className="nav-right">
          <div className="lang-switch" role="group" aria-label="Language">
            <button
              type="button"
              className={`lang-btn${lang === 'ru' ? ' active' : ''}`}
              onClick={() => setLang('ru')}
            >
              RU
            </button>
            <button
              type="button"
              className={`lang-btn${lang === 'kk' ? ' active' : ''}`}
              onClick={() => setLang('kk')}
            >
              ҚАЗ
            </button>
          </div>
          <a className="nav-cta" href={waLink(t.waHero)} target="_blank" rel="noreferrer">
            {t.navCta}
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-badge">
            <span className="pulse-dot" />
            {t.badge}
          </div>
          <p className="eyebrow">{t.eyebrow}</p>
          <h1 className="hero-name">Asankhan Dauletov</h1>
          <h2 className="hero-title">{t.title}</h2>
          <p className="hero-desc" dangerouslySetInnerHTML={{ __html: t.heroDesc }} />
          <div className="hero-stats">
            <div className="hero-stat"><strong>3+</strong><span>{t.stat1}</span></div>
            <div className="hero-stat"><strong>Full-stack</strong><span>{t.stat2}</span></div>
            <div className="hero-stat"><strong>100%</strong><span>{t.stat3}</span></div>
          </div>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">{t.seeWork}</a>
            <a className="btn btn-wa" href={waLink(t.waHero)} target="_blank" rel="noreferrer">
              <WhatsAppIcon />
              {t.getInTouch}
            </a>
          </div>
        </section>

        {/* SERVICES + PRICING */}
        <section className="section" id="pricing">
          <h2 className="section-title">{t.pricing}</h2>
          <p className="section-desc">{t.pricingDesc}</p>
          <div className="price-grid">
            {services.map((s, i) => (
              <article className="price-card" key={s.id}>
                <h3>{t.services[i]}</h3>
                <p className="price-card-desc">{t.serviceDescs[i]}</p>
                <div className="price">
                  <span className="price-value">{s.price}</span>
                  <span className="price-note">
                    {s.priceNote === 'from' ? t.priceFrom : t.pricePerMonth}
                  </span>
                </div>
                <ul className="price-features">
                  {s.features.map((f) => (
                    <li key={f}>{t[f as keyof Dict] as unknown as string}</li>
                  ))}
                </ul>
                <a
                  className="btn btn-primary btn-block"
                  href={waLink(`${t.waCard} «${t.services[i]}»`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.order}
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* WORK */}
        <section className="section" id="work">
          <h2 className="section-title">{t.work}</h2>
          <p className="section-desc">{t.workDesc}</p>
          <div className="project-list">
            {projects.map((p) => (
              <article className="project" key={p.title}>
                <div className="project-info">
                  <h3>{p.title}</h3>
                  <p className="project-desc">{t[projectDescKeys[p.title]] as unknown as string}</p>
                  <div className="stack">
                    {p.stack.map((s) => (
                      <span className="chip" key={s}>{s}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a className="btn btn-small btn-primary" href={p.url} target="_blank" rel="noreferrer">
                      {lang === 'ru' ? 'Живой сайт' : 'Тірі сайт'}
                    </a>
                    <a className="btn btn-small btn-ghost" href={p.repo} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="project-note">{t.projectNote}</p>
        </section>

        {/* SKILLS */}
        <section className="section" id="skills">
          <h2 className="section-title">{t.skillsTitle}</h2>
          <div className="skills">
            {skills.map((s) => (
              <div className="skill" key={s.name}>
                <span className="skill-name">{s.name}</span>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* CONTACT / FOOTER */}
      <footer className="contact" id="contact">
        <h2 className="section-title">{t.contactTitle}</h2>
        <p className="contact-text">{t.contactText}</p>
        <div className="contact-buttons">
          <a className="btn btn-primary btn-lg" href="mailto:dauletovasankhan@gmail.com">
            dauletovasankhan@gmail.com
          </a>
          <a className="btn btn-wa btn-lg" href={waLink(t.waHero)} target="_blank" rel="noreferrer">
            <WhatsAppIcon />
            {t.orderBtn}
          </a>
        </div>
        <div className="contact-links">
          <a href="https://github.com/spryzzen666" target="_blank" rel="noreferrer">GitHub</a>
          <span className="sep">·</span>
          <span className="lang-switch lang-switch-inline">
            <button
              type="button"
              className={`lang-btn${lang === 'ru' ? ' active' : ''}`}
              onClick={() => setLang('ru')}
            >
              RU
            </button>
            <button
              type="button"
              className={`lang-btn${lang === 'kk' ? ' active' : ''}`}
              onClick={() => setLang('kk')}
            >
              ҚАЗ
            </button>
          </span>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Asankhan Dauletov</p>
      </footer>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="wa-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}