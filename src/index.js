const MAIN_TEXT = "🏠 Main Menu\n\nPlease select an option:";

function mainKeyboard() {
  return {
    inline_keyboard: [
      [
        { text: "📊 Instruments", callback_data: "instruments" },
        { text: "📰 News", callback_data: "news" }
      ],
      [
        { text: "📚 Help", callback_data: "help" },
        { text: "🌐 Language", callback_data: "language" }
      ],
      [
        { text: "🆘 Support", callback_data: "support" }
      ]
    ]
  };
}

function backKeyboard() {
  return {
    inline_keyboard: [
      [{ text: "🔙 Back", callback_data: "main_menu" }]
    ]
  };
}

function languageKeyboard() {
  return {
    inline_keyboard: [
      [
        { text: "🇬🇧 English", callback_data: "lang_en" },
        { text: "🇮🇷 فارسی", callback_data: "lang_fa" }
      ],
      [{ text: "🔙 Back", callback_data: "main_menu" }]
    ]
  };
}

function persianMainKeyboard() {
  return {
    inline_keyboard: [
      [
        { text: "📊 ابزارها", callback_data: "instruments_fa" },
        { text: "📰 اخبار", callback_data: "news_fa" }
      ],
      [
        { text: "📚 راهنما", callback_data: "help_fa" },
        { text: "🌐 زبان", callback_data: "language" }
      ],
      [
        { text: "🆘 پشتیبانی", callback_data: "support_fa" }
      ]
    ]
  };
}

function persianBackKeyboard() {
  return {
    inline_keyboard: [
      [{ text: "🔙 بازگشت", callback_data: "main_menu_fa" }]
    ]
  };
}

const pages = {
  instruments: {
    text:
      "📊 Instruments\n\n" +
      "Select an instrument:\n\n" +
      "• EURUSD\n" +
      "• GBPUSD\n" +
      "• USDJPY\n" +
      "• XAUUSD\n\n" +
      "More instruments can be added later.",
    keyboard: backKeyboard
  },
  news: {
    text:
      "📰 News\n\n" +
      "The news section is ready.\n\n" +
      "It can later be connected to a news API or your own data source.",
    keyboard: backKeyboard
  },
  help: {
    text:
      "📚 Help\n\n" +
      "Use the buttons below to navigate through the bot.\n\n" +
      "📊 Instruments — trading instruments\n" +
      "📰 News — news section\n" +
      "🌐 Language — language selection\n" +
      "🆘 Support — support information",
    keyboard: backKeyboard
  },
  support: {
    text:
      "🆘 Support\n\n" +
      "For support, contact the administrator.\n\n" +
      "Replace this text with your own support username, channel or contact information.",
    keyboard: backKeyboard
  }
};

async function telegram(env, method, body) {
  const response = await fetch(
    `https://api.telegram.org/bot${env.BOT_TOKEN}/${method}`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body)
    }
  );

  const data = await response.json();

  if (!data.ok) {
    console.error(`Telegram ${method} failed`, data);
  }

  return data;
}

async function sendMainMenu(env, chatId) {
  return telegram(env, "sendMessage", {
    chat_id: chatId,
    text: MAIN_TEXT,
    reply_markup: mainKeyboard()
  });
}

async function edit(env, query, text, keyboard) {
  return telegram(env, "editMessageText", {
    chat_id: query.message.chat.id,
    message_id: query.message.message_id,
    text,
    reply_markup: keyboard
  });
}

async function callbackAnswer(env, callbackQueryId) {
  return telegram(env, "answerCallbackQuery", {
    callback_query_id: callbackQueryId
  });
}

async function handleCallback(env, query) {
  await callbackAnswer(env, query.id);

  const data = query.data;

  if (data === "main_menu") {
    return edit(env, query, MAIN_TEXT, mainKeyboard());
  }

  if (data === "instruments_fa") {
    return edit(
      env,
      query,
      "📊 ابزارها\n\n" +
        "ابزارهای موجود:\n\n" +
        "• EURUSD\n" +
        "• GBPUSD\n" +
        "• USDJPY\n" +
        "• XAUUSD",
      persianBackKeyboard()
    );
  }

  if (data === "news_fa") {
    return edit(
      env,
      query,
      "📰 اخبار\n\nبخش اخبار آماده است و بعداً می‌توان آن را به API متصل کرد.",
      persianBackKeyboard()
    );
  }

  if (data === "help_fa") {
    return edit(
      env,
      query,
      "📚 راهنما\n\nاز دکمه‌های منو برای استفاده از بات استفاده کنید.",
      persianBackKeyboard()
    );
  }

  if (data === "support_fa") {
    return edit(
      env,
      query,
      "🆘 پشتیبانی\n\nاطلاعات تماس پشتیبانی را می‌توانید در همین Worker تغییر دهید.",
      persianBackKeyboard()
    );
  }

  if (data === "main_menu_fa") {
    return edit(
      env,
      query,
      "🏠 منوی اصلی\n\nلطفاً یک گزینه را انتخاب کنید:",
      persianMainKeyboard()
    );
  }

  if (data === "instruments" || data === "news" || data === "help" || data === "support") {
    const page = pages[data];
    return edit(env, query, page.text, page.keyboard());
  }

  if (data === "language") {
    return edit(
      env,
      query,
      "🌐 Language\n\nPlease select your language:",
      languageKeyboard()
    );
  }

  if (data === "lang_en") {
    return edit(env, query, "🇬🇧 English selected.\n\n" + MAIN_TEXT, mainKeyboard());
  }

  if (data === "lang_fa") {
    return edit(
      env,
      query,
      "🇮🇷 فارسی انتخاب شد.\n\n🏠 منوی اصلی\n\nلطفاً یک گزینه را انتخاب کنید:",
      persianMainKeyboard()
    );
  }

  return null;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/") {
      return new Response("Telegram bot is running on Cloudflare Workers.");
    }

    if (request.method !== "POST" || url.pathname !== "/webhook") {
      return new Response("Not Found", { status: 404 });
    }

    const secret = request.headers.get("X-Telegram-Bot-Api-Secret-Token");
    if (env.WEBHOOK_SECRET && secret !== env.WEBHOOK_SECRET) {
      return new Response("Unauthorized", { status: 401 });
    }

    let update;
    try {
      update = await request.json();
    } catch {
      return new Response("Bad Request", { status: 400 });
    }

    try {
      if (update.message?.text === "/start") {
        await sendMainMenu(env, update.message.chat.id);
      } else if (update.callback_query) {
        await handleCallback(env, update.callback_query);
      }
    } catch (error) {
      console.error("Update processing error:", error);
      // Return 200 so Telegram does not repeatedly resend a malformed update.
    }

    return new Response("OK");
  }
};
