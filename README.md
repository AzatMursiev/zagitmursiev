# Сайт писателя Загита Мурсиева

Одностраничный сайт татарского писателя Загита Мурсиева (Заһит Мурсиев): об авторе, книги, новая книга, заказ книг через WhatsApp / Telegram / почту, форма обратной связи. Два языка: русский и татарский.

Сайт статический (HTML, CSS, JavaScript), без сборки.

## Структура

- `docs/` — сам сайт, его раздаёт GitHub Pages
  - `index.html` — разметка
  - `styles.css` — стили
  - `app.js` — тексты на двух языках, книги, переключатель языка, окно заказа, форма
  - `images/` — фото автора и обложки
  - `CNAME` — домен `zagitmursiev.ru`
- `design/` — исходный макет из Claude Design и переписка по нему

## Как поменять контакты для заказа

В начале `docs/app.js`, объект `CONTACTS`: почта, номер WhatsApp (только цифры) и имя в Telegram (без @).

## Публикация (GitHub Pages)

1. Settings → Pages → Source: «Deploy from a branch», ветка `main`, папка `/docs`.
2. DNS домена `zagitmursiev.ru` у регистратора:
   - A-записи `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - CNAME `www` → `azatmursiev.github.io`
3. Settings → Pages → Custom domain: `zagitmursiev.ru`, затем включить «Enforce HTTPS».
