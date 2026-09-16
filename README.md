# Telegram Main Menu Bot — Cloudflare Workers + GitHub Actions

این نسخه برای اجرا **بدون VPS و بدون روشن بودن ویندوز** ساخته شده است.

## معماری

```text
Telegram
   │
   │ HTTPS Webhook
   ▼
Cloudflare Worker
   │
   └── Telegram Bot API
          ▲
          │
     GitHub Actions
     (Deploy + Webhook)
```

بات با Webhook کار می‌کند؛ بنابراین نیازی به Python polling، VPS یا کامپیوتر روشن نیست.

Cloudflare Worker درخواست HTTPS را در `fetch()` دریافت می‌کند و به Telegram Bot API پاسخ می‌دهد.

## منوی فعلی

```text
🏠 Main Menu

┌──────────────────┬──────────────────┐
│ 📊 Instruments   │ 📰 News          │
├──────────────────┼──────────────────┤
│ 📚 Help          │ 🌐 Language      │
├──────────────────┴──────────────────┤
│              🆘 Support              │
└──────────────────────────────────────┘
```

دکمه `📁 Files / My Files` عمداً حذف شده است.

## راه‌اندازی بدون VPS

### 1. ساخت Bot

در Telegram وارد `@BotFather` شوید:

```text
/newbot
```

Token را دریافت کنید.

### 2. پروژه را در GitHub قرار دهید

تمام فایل‌های این پروژه را در یک repository جدید قرار دهید.

مثلاً:

```text
telegram-main-menu-bot
```

Branch اصلی:

```text
main
```

### 3. ساخت Cloudflare API Token

در Cloudflare یک API Token بسازید که برای Deploy کردن Worker توسط Wrangler مناسب باشد.

همچنین Account ID حساب Cloudflare را بردارید.

### 4. GitHub Secrets

در:

```text
Repository
→ Settings
→ Secrets and variables
→ Actions
→ New repository secret
```

این 4 Secret را بسازید:

```text
BOT_TOKEN
CLOUDFLARE_API_TOKEN
CLOUDFLARE_ACCOUNT_ID
WEBHOOK_SECRET
```

### 5. WEBHOOK_URL

بعد از اینکه Worker را برای اولین بار Deploy کردی، URL Worker را مشخص کن.

مثلاً:

```text
https://telegram-main-menu-bot.example.workers.dev
```

سپس Secret زیر را نیز بساز:

```text
WEBHOOK_URL
```

مقدارش باید فقط Base URL باشد، بدون `/webhook`.

مثال:

```text
https://telegram-main-menu-bot.example.workers.dev
```

Workflow خودش این را تبدیل می‌کند به:

```text
https://telegram-main-menu-bot.example.workers.dev/webhook
```

### نکته مهم برای اولین Deploy

چون `WEBHOOK_URL` قبل از اولین Deploy باید مشخص باشد، ساده‌ترین روش این است:

1. Worker را یک بار از Cloudflare Dashboard بساز/Deploy کن یا URL موردنظر را مشخص کن.
2. URL را در `WEBHOOK_URL` قرار بده.
3. سپس Push به GitHub انجام بده.
4. GitHub Actions بقیه کارها را انجام می‌دهد.

## GitHub Actions چه کار می‌کند؟

هر بار که به `main` Push کنی:

1. Repository را دریافت می‌کند.
2. Node.js را راه‌اندازی می‌کند.
3. Wrangler را نصب می‌کند.
4. Worker را Deploy می‌کند.
5. `BOT_TOKEN` را به صورت Secret روی Worker تنظیم می‌کند.
6. `WEBHOOK_SECRET` را روی Worker تنظیم می‌کند.
7. Webhook تلگرام را تنظیم می‌کند.

## اجرای دستی

از GitHub:

```text
Actions
→ Deploy Telegram Bot to Cloudflare
→ Run workflow
```

## امنیت

هیچ Token یا Secret را داخل `src/index.js` قرار نده.

این پروژه از:

```text
BOT_TOKEN
WEBHOOK_SECRET
```

به عنوان Cloudflare Worker Secrets استفاده می‌کند.

همچنین Telegram هنگام ارسال Webhook، مقدار `X-Telegram-Bot-Api-Secret-Token` را می‌فرستد و Worker آن را بررسی می‌کند.

## توسعه بعدی

این معماری آماده اضافه کردن قابلیت‌های زیر است:

- 📊 Instruments واقعی
- 📰 News API
- 👤 User management
- 🌐 ذخیره زبان کاربر
- 🗄️ Cloudflare D1
- ⚡ Cloudflare KV
- 📥 دریافت URL فایل
- 📤 ارسال فایل به Telegram
- 🔗 سیستم لینک دانلود
- 👨‍💼 پنل Admin
- 📢 ارسال پیام همگانی
- 📦 مدیریت فایل‌های بزرگ

برای عملیات زمان‌بندی‌شده نیز می‌توان Cron Trigger اضافه کرد؛ مثلاً برای بروزرسانی اخبار یا پردازش‌های دوره‌ای.
