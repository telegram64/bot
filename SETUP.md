# راه‌اندازی سریع

## GitHub Secrets

این مقادیر را در Repository Secrets قرار دهید:

| Secret | مقدار |
|---|---|
| BOT_TOKEN | Token دریافتی از BotFather |
| CLOUDFLARE_API_TOKEN | API Token کلودفلر برای Deploy |
| CLOUDFLARE_ACCOUNT_ID | Account ID کلودفلر |
| WEBHOOK_SECRET | یک رشته تصادفی طولانی |
| WEBHOOK_URL | آدرس Worker بدون `/webhook` |

مثال:

```text
WEBHOOK_URL=https://telegram-main-menu-bot.your-subdomain.workers.dev
```

## ترتیب کار

```text
1. GitHub repository بساز
2. فایل‌های پروژه را Push کن
3. Cloudflare Worker URL را مشخص کن
4. GitHub Secrets را بساز
5. Actions → Deploy Telegram Bot to Cloudflare
6. /start را در Telegram بفرست
```

## بررسی Webhook

در مرورگر:

```text
https://api.telegram.org/botYOUR_TOKEN/getWebhookInfo
```

Token واقعی خودت را جایگزین کن.

باید URL مربوط به Worker را نشان دهد.

## حذف Webhook

اگر لازم شد:

```text
https://api.telegram.org/botYOUR_TOKEN/deleteWebhook
```

یا با curl:

```bash
curl -X POST "https://api.telegram.org/botYOUR_TOKEN/deleteWebhook"
```
