const MAIN_TEXT = "🏠 Main Menu\n\nPlease select an option:";

function mainKeyboard() {
  return {
    keyboard: [
      [
        { text: "📊 Instruments" },
        { text: "📰 News" }
      ],
      [
        { text: "📚 Help" },
        { text: "🌐 Language" }
      ],
      [
        { text: "🆘 Support" }
      ]
    ],
    resize_keyboard: true,
    is_persistent: true
  };
}

function persianMainKeyboard() {
  return {
    keyboard: [
      [
        { text: "📊 ابزارها" },
        { text: "📰 اخبار" }
      ],
      [
        { text: "📚 راهنما" },
        { text: "🌐 زبان" }
      ],
      [
        { text: "🆘 پشتیبانی" }
      ]
    ],
    resize_keyboard: true,
    is_persistent: true
  };
}

function backKeyboardEnglish() {
  return {
    keyboard: [
      [
        { text: "🔙 Back" }
      ]
    ],
    resize_keyboard: true,
    is_persistent: true
  };
}

function backKeyboardPersian() {
  return {
    keyboard: [
      [
        { text: "🔙 بازگشت" }
      ]
    ],
    resize_keyboard: true,
    is_persistent: true
  };
}

function languageKeyboard() {
  return {
    keyboard: [
      [
        { text: "🇬🇧 English" },
        { text: "🇮🇷 فارسی" }
      ],
      [
        { text: "🔙 Back" }
      ]
    ],
    resize_keyboard: true,
    is_persistent: true
  };
}

function languageKeyboardPersian() {
  return {
    keyboard: [
      [
        { text: "🇬🇧 English" },
        { text: "🇮🇷 فارسی" }
      ],
      [
        { text: "🔙 بازگشت" }
      ]
    ],
    resize_keyboard: true,
    is_persistent: true
  };
}

function instrumentsKeyboard() {
  return {
    keyboard: [
      [
        { text: "Forex Major" },
        { text: "Crypto" }
      ],
      [
        { text: "Energy" },
        { text: "Metals" }
      ],
      [
        { text: "Indices" },
        { text: "Stocks" }
      ],
      [
        { text: "Other" }
      ],
      [
        { text: "🔙 Back" }
      ]
    ],
    resize_keyboard: true,
    is_persistent: true
  };
}

function instrumentsKeyboardPersian() {
  return {
    keyboard: [
      [
        { text: "فارکس میجر" },
        { text: "کریپتو" }
      ],
      [
        { text: "انرژی" },
        { text: "فلزات" }
      ],
      [
        { text: "شاخص‌ها" },
        { text: "سهام" }
      ],
      [
        { text: "سایر" }
      ],
      [
        { text: "🔙 بازگشت" }
      ]
    ],
    resize_keyboard: true,
    is_persistent: true
  };
}

async function telegram(env, method, body) {
  const response = await fetch(
    `https://api.telegram.org/bot${env.BOT_TOKEN}/${method}`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
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

async function sendPersianMainMenu(env, chatId) {
  return telegram(env, "sendMessage", {
    chat_id: chatId,
    text: "🏠 منوی اصلی\n\nلطفاً یک گزینه را انتخاب کنید:",
    reply_markup: persianMainKeyboard()
  });
}

async function sendEnglishInstruments(env, chatId) {
  return telegram(env, "sendMessage", {
    chat_id: chatId,
    text: "📊 Instruments\n\nPlease select a category:",
    reply_markup: instrumentsKeyboard()
  });
}

async function sendPersianInstruments(env, chatId) {
  return telegram(env, "sendMessage", {
    chat_id: chatId,
    text: "📊 ابزارها\n\nلطفاً یک دسته‌بندی را انتخاب کنید:",
    reply_markup: instrumentsKeyboardPersian()
  });
}

async function sendEnglishNews(env, chatId) {
  return telegram(env, "sendMessage", {
    chat_id: chatId,
    text:
      "📰 News\n\n" +
      "The news section is ready.\n\n" +
      "It can later be connected to a news API or your own data source.",
    reply_markup: backKeyboardEnglish()
  });
}

async function sendPersianNews(env, chatId) {
  return telegram(env, "sendMessage", {
    chat_id: chatId,
    text:
      "📰 اخبار\n\n" +
      "بخش اخبار آماده است و بعداً می‌توان آن را به API متصل کرد.",
    reply_markup: backKeyboardPersian()
  });
}

async function sendEnglishHelp(env, chatId) {
  return telegram(env, "sendMessage", {
    chat_id: chatId,
    text:
      "📚 Help\n\n" +
      "Use the buttons below to navigate through the bot.\n\n" +
      "📊 Instruments — trading instruments\n" +
      "📰 News — news section\n" +
      "🌐 Language — language selection\n" +
      "🆘 Support — support information",
    reply_markup: backKeyboardEnglish()
  });
}

async function sendPersianHelp(env, chatId) {
  return telegram(env, "sendMessage", {
    chat_id: chatId,
    text:
      "📚 راهنما\n\n" +
      "از دکمه‌های منو برای استفاده از بات استفاده کنید.\n\n" +
      "📊 ابزارها — ابزارهای معاملاتی\n" +
      "📰 اخبار — بخش اخبار\n" +
      "🌐 زبان — انتخاب زبان\n" +
      "🆘 پشتیبانی — اطلاعات پشتیبانی",
    reply_markup: backKeyboardPersian()
  });
}

async function sendEnglishSupport(env, chatId) {
  return telegram(env, "sendMessage", {
    chat_id: chatId,
    text:
      "🆘 Support\n\n" +
      "For support, contact the administrator.\n\n" +
      "Replace this text with your own support username, channel or contact information.",
    reply_markup: backKeyboardEnglish()
  });
}

async function sendPersianSupport(env, chatId) {
  return telegram(env, "sendMessage", {
    chat_id: chatId,
    text:
      "🆘 پشتیبانی\n\n" +
      "اطلاعات تماس پشتیبانی را می‌توانید در همین Worker تغییر دهید.",
    reply_markup: backKeyboardPersian()
  });
}

async function handleMessage(env, message) {
  const chatId = message.chat.id;
  const text = message.text;

  if (!text) {
    return;
  }

  // /start
  if (text === "/start") {
    await sendMainMenu(env, chatId);
    return;
  }

  // =========================
  // English menu
  // =========================

  if (text === "📊 Instruments") {
    await sendEnglishInstruments(env, chatId);
    return;
  }

  if (text === "📰 News") {
    await sendEnglishNews(env, chatId);
    return;
  }

  if (text === "📚 Help") {
    await sendEnglishHelp(env, chatId);
    return;
  }

  if (text === "🆘 Support") {
    await sendEnglishSupport(env, chatId);
    return;
  }

  if (text === "🌐 Language") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "🌐 Language\n\nPlease select your language:",
      reply_markup: languageKeyboard()
    });
    return;
  }

  if (text === "🔙 Back") {
    await sendMainMenu(env, chatId);
    return;
  }

  // =========================
  // Language
  // =========================

  if (text === "🇬🇧 English") {
    await sendMainMenu(env, chatId);
    return;
  }

  if (text === "🇮🇷 فارسی") {
    await sendPersianMainMenu(env, chatId);
    return;
  }

  // =========================
  // Persian menu
  // =========================

  if (text === "📊 ابزارها") {
    await sendPersianInstruments(env, chatId);
    return;
  }

  if (text === "📰 اخبار") {
    await sendPersianNews(env, chatId);
    return;
  }

  if (text === "📚 راهنما") {
    await sendPersianHelp(env, chatId);
    return;
  }

  if (text === "🆘 پشتیبانی") {
    await sendPersianSupport(env, chatId);
    return;
  }

  if (text === "🌐 زبان") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "🌐 زبان\n\nلطفاً زبان موردنظر را انتخاب کنید:",
      reply_markup: languageKeyboardPersian()
    });
    return;
  }

  if (text === "🔙 بازگشت") {
    await sendPersianMainMenu(env, chatId);
    return;
  }

  // =========================
  // Instruments Categories (English)
  // =========================

  if (text === "Forex Major") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "📊 Forex Major\n\n• EURUSD\n• GBPUSD\n• USDJPY\n• USDCHF\n• AUDUSD\n• USDCAD\n• NZDUSD",
      reply_markup: instrumentsKeyboard()
    });
    return;
  }

  if (text === "Crypto") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "📊 Crypto\n\n• BTCUSD\n• ETHUSD\n• XRPUSD\n• SOLUSD\n• BNBUSD",
      reply_markup: instrumentsKeyboard()
    });
    return;
  }

  if (text === "Energy") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "📊 Energy\n\n• USOIL\n• UKOIL\n• NATGAS",
      reply_markup: instrumentsKeyboard()
    });
    return;
  }

  if (text === "Metals") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "📊 Metals\n\n• XAUUSD (Gold)\n• XAGUSD (Silver)\n• XPTUSD (Platinum)\n• XPDUSD (Palladium)",
      reply_markup: instrumentsKeyboard()
    });
    return;
  }

  if (text === "Indices") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "📊 Indices\n\n• USA30\n• USA100\n• USA500\n• US2000\n• GER40\n• UK100\n• JPN225",
      reply_markup: instrumentsKeyboard()
    });
    return;
  }

  if (text === "Stocks") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "📊 Stocks\n\n• AAPL\n• GOOGL\n• TSLA\n• AMZN\n• META\n• MSFT\n• NVDA",
      reply_markup: instrumentsKeyboard()
    });
    return;
  }

  if (text === "Other") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "📊 Other\n\n• DXY (Dollar Index)\n• VIX\n• Other instruments...",
      reply_markup: instrumentsKeyboard()
    });
    return;
  }

  // =========================
  // Instruments Categories (Persian)
  // =========================

  if (text === "فارکس میجر") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "📊 فارکس میجر\n\n• EURUSD\n• GBPUSD\n• USDJPY\n• USDCHF\n• AUDUSD\n• USDCAD\n• NZDUSD",
      reply_markup: instrumentsKeyboardPersian()
    });
    return;
  }

  if (text === "کریپتو") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "📊 کریپتو\n\n• BTCUSD\n• ETHUSD\n• XRPUSD\n• SOLUSD\n• BNBUSD",
      reply_markup: instrumentsKeyboardPersian()
    });
    return;
  }

  if (text === "انرژی") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "📊 انرژی\n\n• USOIL\n• UKOIL\n• NATGAS",
      reply_markup: instrumentsKeyboardPersian()
    });
    return;
  }

  if (text === "فلزات") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "📊 فلزات\n\n• XAUUSD (طلا)\n• XAGUSD (نقره)\n• XPTUSD (پلاتین)\n• XPDUSD (پالادیوم)",
      reply_markup: instrumentsKeyboardPersian()
    });
    return;
  }

  if (text === "شاخص‌ها") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "📊 شاخص‌ها\n\n• USA30\n• USA100\n• USA500\n• US2000\n• GER40\n• UK100\n• JPN225",
      reply_markup: instrumentsKeyboardPersian()
    });
    return;
  }

  if (text === "سهام") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "📊 سهام\n\n• AAPL\n• GOOGL\n• TSLA\n• AMZN\n• META\n• MSFT\n• NVDA",
      reply_markup: instrumentsKeyboardPersian()
    });
    return;
  }

  if (text === "سایر") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "📊 سایر\n\n• DXY (شاخص دلار)\n• VIX\n• سایر ابزارها...",
      reply_markup: instrumentsKeyboardPersian()
    });
    return;
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Health check
    if (request.method === "GET" && url.pathname === "/") {
      return new Response(
        "Telegram bot is running on Cloudflare Workers."
      );
    }

    // Telegram webhook
    if (request.method !== "POST" || url.pathname !== "/webhook") {
      return new Response("Not Found", {
        status: 404
      });
    }

    // Verify Telegram webhook secret
    const secret = request.headers.get(
      "X-Telegram-Bot-Api-Secret-Token"
    );

    if (
      env.WEBHOOK_SECRET &&
      secret !== env.WEBHOOK_SECRET
    ) {
      return new Response("Unauthorized", {
        status: 401
      });
    }

    let update;

    try {
      update = await request.json();
    } catch {
      return new Response("Bad Request", {
        status: 400
      });
    }

    try {
      // Normal messages
      if (update.message) {
        await handleMessage(env, update.message);
      }

    } catch (error) {
      console.error(
        "Update processing error:",
        error
      );

      // Return 200 so Telegram does not repeatedly
      // resend the same update.
    }

    return new Response("OK");
  }
};
