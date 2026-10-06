(function () {
  'use strict';

  // Contacts for book orders and the feedback form.
  var CONTACTS = {
    email: 'azatmursiev@yandex.ru',
    whatsapp: '79930503377', // digits only, international format
    telegram: 'azatmursiev'  // username without @
  };

  var T = {
    ru: {
      name: 'Загит Мурсиев', navAbout: 'Об авторе', navBooks: 'Книги', navNew: 'Новая книга', navContacts: 'Контакты',
      heroKicker: 'Татарский писатель · Башкортостан',
      quote: 'Китап — белем чишмәсе. Книга — родник знаний',
      quoteSrc: 'татарская народная пословица',
      heroBtnBooks: 'Книги автора', heroBtnNew: 'Новая книга',
      aboutTitle: 'Об авторе',
      about1: 'Загит Мурсиев родился в 1950 году в деревне Абуталипово Караидельского района Башкортостана. Член Союза писателей Республики Башкортостан.',
      about2: '32 года работал журналистом районной газеты «Караидель». Лауреат премии имени Гаяна Лукманова.',
      about3: 'Пишет прозу, стихи, юмористические произведения и книги для детей. Его фольклорные записи вошли в академический свод «Татарское народное творчество» (тома 13–14, Казань).',
      f: [['1950', 'год рождения'], ['32 года', 'в газете «Караидель»'], ['Премия', 'имени Гаяна Лукманова'], ['Тт. 13–14', 'свода «Татарское народное творчество»']],
      booksTitle: 'Книги', booksCount: '6 книг', orderBtn: 'Заказать книгу', pub: 'Издательство уточняется', year: 'Год уточняется',
      newKicker: 'Новая книга', newSub: 'Мои земляки, мои детки',
      newDesc: 'Стихи и рассказы для детей — о деревне, о земляках, о том, что важно беречь с малых лет.',
      contactsTitle: 'Написать автору', contactsLead: 'Вопрос, отзыв о книге или приглашение на встречу — автор обязательно ответит.',
      fName: 'Ваше имя', fContact: 'Телефон или e-mail', fMsg: 'Сообщение', fSend: 'Отправить',
      sentMsg: 'Спасибо! Откроется ваша почта с готовым письмом — просто нажмите «Отправить».', sentAgain: 'Написать ещё',
      mTitle: 'Заказ книги', mText: 'Готовый текст (можно изменить):', mChoose: 'Куда отправить заказ?', mEmail: 'Почта',
      mTgNote: 'Для Telegram текст копируется автоматически — вставьте его в чат.', mCopied: 'Текст скопирован.',
      close: 'Закрыть',
      orderMsg: function (b) { return 'Здравствуйте! Хочу заказать книгу «' + b + '».\nКоличество: 1 шт.\nМоё имя: \nГород и адрес доставки: \nТелефон: '; },
      mailSubj: function (b) { return 'Заказ книги «' + b + '»'; },
      fbSubj: 'Сообщение с сайта'
    },
    tt: {
      name: 'Заһит Мурсиев', navAbout: 'Автор турында', navBooks: 'Китаплар', navNew: 'Яңа китап', navContacts: 'Элемтә',
      heroKicker: 'Татар язучысы · Башкортстан',
      quote: 'Китап — белем чишмәсе',
      quoteSrc: 'халык мәкале',
      heroBtnBooks: 'Автор китаплары', heroBtnNew: 'Яңа китап',
      aboutTitle: 'Автор турында',
      about1: 'Заһит Мурсиев 1950 елда Башкортстанның Кариҗидел районы Әбүталип авылында туган. Башкортстан Республикасы Язучылар берлеге әгъзасы.',
      about2: '32 ел «Кариҗидел» район газетасында журналист булып эшләгән. Гаян Лукманов исемендәге бүләк лауреаты.',
      about3: 'Проза, шигырьләр, юмористик әсәрләр һәм балалар өчен китаплар яза. Аның фольклор язмалары «Татар халык иҗаты» академик җыентыгына кергән (13–14 томнар, Казан).',
      f: [['1950', 'туган елы'], ['32 ел', '«Кариҗидел» газетасында'], ['Бүләк', 'Гаян Лукманов исемендәге'], ['13–14 т.', '«Татар халык иҗаты» җыентыгы']],
      booksTitle: 'Китаплар', booksCount: '6 китап', orderBtn: 'Китап заказ итү', pub: 'Нәшрият төгәлләнә', year: 'Елы төгәлләнә',
      newKicker: 'Яңа китап', newSub: 'Балалар өчен шигырьләр һәм хикәяләр',
      newDesc: 'Балалар өчен шигырьләр һәм хикәяләр — авыл, авылдашлар һәм кечкенәдән үк кадерләргә тиешле нәрсәләр турында.',
      contactsTitle: 'Авторга язу', contactsLead: 'Сорау, китап турында фикер яки очрашуга чакыру — автор һичшиксез җавап бирер.',
      fName: 'Исемегез', fContact: 'Телефон яки e-mail', fMsg: 'Хат', fSend: 'Җибәрү',
      sentMsg: 'Рәхмәт! Әзер хат белән почтагыз ачылыр — «Җибәрү»гә басыгыз.', sentAgain: 'Тагын язу',
      mTitle: 'Китап заказы', mText: 'Әзер текст (үзгәртергә мөмкин):', mChoose: 'Заказны кая җибәрергә?', mEmail: 'Почта',
      mTgNote: 'Telegram өчен текст автоматик рәвештә күчерелә — аны чатка куегыз.', mCopied: 'Текст күчерелде.',
      close: 'Ябу',
      orderMsg: function (b) { return 'Исәнмесез! «' + b + '» китабын заказ итәсем килә.\nСаны: 1 данә.\nИсемем: \nШәһәр һәм адрес: \nТелефон: '; },
      mailSubj: function (b) { return '«' + b + '» китабына заказ'; },
      fbSubj: 'Сайттан хат'
    }
  };

  var BOOKS = [
    { id: 'mahabbat', title: 'Мәхәббәтне рәнҗетмәгез', year: 2004, ru: ['Не обижайте любовь', 'Рассказы и стихи о любви, верности и человеческих чувствах.'], tt: ['Мәхәббәтне рәнҗетмәгез', 'Мәхәббәт, тугрылык һәм кеше хисләре турында хикәяләр һәм шигырьләр.'] },
    { id: 'sandugach', title: 'Сандугач бүләге', year: 2007, ru: ['Подарок соловья', 'Сборник прозы и поэзии о родной деревне и её людях.'], tt: ['Сандугач бүләге', 'Туган авыл һәм аның кешеләре турында проза һәм поэзия җыентыгы.'] },
    { id: 'altyn', title: 'Алтын курай', year: null, ru: ['Золотой курай', 'Произведения, навеянные песенной и народной традицией края.'], tt: ['Алтын курай', 'Төбәкнең җыр һәм халык традицияләреннән илһамланган әсәрләр.'] },
    { id: 'usal', title: 'Усал китап', year: 2018, ru: ['Сердитая книга', 'Юмористические рассказы — с улыбкой о жизни и людях.'], tt: ['Усал китап', 'Юмористик хикәяләр — тормыш һәм кешеләр турында елмаеп.'] },
    { id: 'soltanyar', title: 'Солтанъяр', year: 2019, ru: ['Солтанъяр', 'Проза о судьбах земляков и памяти родного края.'], tt: ['Солтанъяр', 'Авылдашлар язмышы һәм туган як хәтере турында проза.'] },
    { id: 'balkon', title: 'Балкондагы баш', year: 2023, ru: ['Голова на балконе', 'Новая книга юмора и сатиры.'], tt: ['Балкондагы баш', 'Юмор һәм сатираның яңа китабы.'] }
  ];
  var NEW_TITLE = 'Авылдашларым, балакайларым';

  var lang = 'ru';
  var currentOrder = null;
  var lastFocus = null;

  function $(id) { return document.getElementById(id); }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function renderFacts(t) {
    var box = $('facts');
    box.textContent = '';
    t.f.forEach(function (f) {
      var d = el('div', 'fact');
      d.appendChild(el('div', 'fact-big', f[0]));
      d.appendChild(el('div', 'fact-small', f[1]));
      box.appendChild(d);
    });
  }

  function renderBooks(t) {
    var grid = $('books-grid');
    grid.textContent = '';
    BOOKS.forEach(function (b) {
      var card = el('article', 'book');

      var cover = el('div', 'book-cover');
      var img = el('img');
      img.src = 'images/cover-' + b.id + '.webp';
      img.alt = b.title;
      img.loading = 'lazy';
      cover.appendChild(img);
      card.appendChild(cover);

      var info = el('div', 'book-info');
      info.appendChild(el('div', 'book-meta', (b.year || t.year) + ' · ' + t.pub));
      info.appendChild(el('h3', 'book-title', b.title));
      info.appendChild(el('div', 'book-sub', b[lang][0] === b.title ? '' : b[lang][0]));
      info.appendChild(el('p', 'book-desc', b[lang][1]));
      card.appendChild(info);

      var btn = el('button', 'btn-order');
      btn.type = 'button';
      btn.appendChild(document.createTextNode(t.orderBtn + ' '));
      var arrow = el('span', null, '→');
      arrow.setAttribute('aria-hidden', 'true');
      btn.appendChild(arrow);
      btn.addEventListener('click', function () { openOrder(b.title); });
      card.appendChild(btn);

      grid.appendChild(card);
    });
  }

  function applyLang(l) {
    lang = l;
    var t = T[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (n) {
      n.textContent = t[n.getAttribute('data-i18n')];
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (n) {
      n.alt = t[n.getAttribute('data-i18n-alt')];
    });
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    $('order-close').setAttribute('aria-label', t.close);
    renderFacts(t);
    renderBooks(t);
  }

  function setLang(l) {
    applyLang(l);
    try { localStorage.setItem('zm-lang', l); } catch (e) {}
  }

  // Order modal

  function updateOrderLinks() {
    var t = T[lang];
    var text = $('order-text').value;
    var wa = CONTACTS.whatsapp.replace(/\D/g, '');
    var tg = CONTACTS.telegram.replace(/^@/, '');
    $('order-wa').href = 'https://wa.me/' + wa + '?text=' + encodeURIComponent(text);
    $('order-tg').href = 'https://t.me/' + tg;
    $('order-mail').href = 'mailto:' + CONTACTS.email +
      '?subject=' + encodeURIComponent(currentOrder ? t.mailSubj(currentOrder) : '') +
      '&body=' + encodeURIComponent(text);
  }

  function openOrder(title) {
    currentOrder = title;
    lastFocus = document.activeElement;
    $('order-book').textContent = title;
    $('order-text').value = T[lang].orderMsg(title);
    $('order-copied').hidden = true;
    updateOrderLinks();
    $('order-modal').hidden = false;
    $('order-close').focus();
  }

  function closeOrder() {
    if ($('order-modal').hidden) return;
    $('order-modal').hidden = true;
    currentOrder = null;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function copyOrderText() {
    var text = $('order-text').value;
    try {
      if (navigator.clipboard) navigator.clipboard.writeText(text);
    } catch (e) {}
    $('order-copied').hidden = false;
  }

  // Feedback form: no backend, so it opens the visitor's mail client.

  function submitForm(e) {
    e.preventDefault();
    var form = e.target;
    var t = T[lang];
    var body = form.msg.value + '\n\n— ' + form.name.value + '\n' + form.contact.value;
    window.open('mailto:' + CONTACTS.email + '?subject=' + encodeURIComponent(t.fbSubj) +
      '&body=' + encodeURIComponent(body), '_blank');
    form.hidden = true;
    $('sent-box').hidden = false;
  }

  function resetForm() {
    var form = $('contact-form');
    form.reset();
    form.hidden = false;
    $('sent-box').hidden = true;
  }

  // Init

  var saved = null;
  try { saved = localStorage.getItem('zm-lang'); } catch (e) {}
  applyLang(saved === 'tt' || saved === 'ru' ? saved : 'ru');
  $('year').textContent = new Date().getFullYear();

  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
  });
  $('order-new').addEventListener('click', function () { openOrder(NEW_TITLE); });
  $('order-close').addEventListener('click', closeOrder);
  $('order-modal').addEventListener('click', function (e) {
    if (e.target === e.currentTarget) closeOrder();
  });
  $('order-text').addEventListener('input', updateOrderLinks);
  $('order-tg').addEventListener('click', copyOrderText);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeOrder(); setMenu(false); }
  });

  // Mobile menu (☰)

  var header = document.querySelector('.site-header');
  function setMenu(open) {
    header.classList.toggle('menu-open', open);
    $('menu-btn').setAttribute('aria-expanded', String(open));
  }
  $('menu-btn').addEventListener('click', function () {
    setMenu(!header.classList.contains('menu-open'));
  });
  $('site-nav').addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });
  document.addEventListener('click', function (e) {
    if (!header.contains(e.target)) setMenu(false);
  });
  $('contact-form').addEventListener('submit', submitForm);
  $('send-again').addEventListener('click', resetForm);
})();
