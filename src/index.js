const MAIN_TEXT = "🏠 Main Menu\n\nPlease select an option:";

// Temporary language storage (will be replaced with KV later)
const userLanguage = new Map();

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
      [{ text: "🔙 Back" }]
    ],
    resize_keyboard: true,
    is_persistent: true
  };
}

function backKeyboardPersian() {
  return {
    keyboard: [
      [{ text: "🔙 بازگشت" }]
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

// ===================== Instruments Categories =====================

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
        { text: "🔙 Back" },
        { text: "🏠 Main Menu" }
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
        { text: "🔙 بازگشت" },
        { text: "🏠 منوی اصلی" }
      ]
    ],
    resize_keyboard: true,
    is_persistent: true
  };
}

// ===================== Sub Menus =====================

function forexMajorKeyboard() {
  return {
    keyboard: [
      [
        { text: "EURUSD" },
        { text: "GBPUSD" }
      ],
      [
        { text: "AUDUSD" },
        { text: "NZDUSD" }
      ],
      [
        { text: "USDCAD" },
        { text: "USDJPY" }
      ],
      [
        { text: "USDCHF" }
      ],
      [
        { text: "🔙 Back" },
        { text: "🏠 Main Menu" }
      ]
    ],
    resize_keyboard: true,
    is_persistent: true
  };
}

function cryptoKeyboard() {
  return {
    keyboard: [
      [
        { text: "BTCUSD" },
        { text: "ETHUSD" }
      ],
      [
        { text: "🔙 Back" },
        { text: "🏠 Main Menu" }
      ]
    ],
    resize_keyboard: true,
    is_persistent: true
  };
}

function energyKeyboard() {
  return {
    keyboard: [
      [
        { text: "Gas oil" },
        { text: "US Brent Crude Oil" }
      ],
      [
        { text: "US Light Crude Oil" },
        { text: "Natural Gas" }
      ],
      [
        { text: "🔙 Back" },
        { text: "🏠 Main Menu" }
      ]
    ],
    resize_keyboard: true,
    is_persistent: true
  };
}

function metalsKeyboard() {
  return {
    keyboard: [
      [
        { text: "GOLD" },
        { text: "SILVER" }
      ],
      [
        { text: "🔙 Back" },
        { text: "🏠 Main Menu" }
      ]
    ],
    resize_keyboard: true,
    is_persistent: true
  };
}

function indicesKeyboard() {
  return {
    keyboard: [
      [
        { text: "US Dollar Index" },
        { text: "USA 30 Index" }
      ],
      [
        { text: "USA 100 Index" },
        { text: "USA 500 Index" }
      ],
      [
        { text: "🔙 Back" },
        { text: "🏠 Main Menu" }
      ]
    ],
    resize_keyboard: true,
    is_persistent: true
  };
}

function stocksKeyboard() {
  return {
    keyboard: [
      [
        { text: "APPLE INC" },
        { text: "AMAZON" }
      ],
      [
        { text: "GOOGLE" },
        { text: "JPMORGAN" }
      ],
      [
        { text: "🔙 Back" },
        { text: "🏠 Main Menu" }
      ]
    ],
    resize_keyboard: true,
    is_persistent: true
  };
}

// ===================== Channel Links =====================

const CHANNEL_LINKS = {
  // Forex Major
  "EURUSD": "https://t.me/EURUSD_TickData",
  "GBPUSD": "https://t.me/EURUSD_TickData",
  "AUDUSD": "https://t.me/AUDUSD_TICKDATA",
  "NZDUSD": "https://t.me/NZDUSD_TICKDATA",
  "USDCAD": "https://t.me/USDCAD_TICKDATA",
  "USDJPY": "https://t.me/USDJPY_TICKDATA",
  "USDCHF": "https://t.me/USDCHF_TICKDATA",

  // Crypto
  "BTCUSD": "https://t.me/BTCUSD_TICKDATA",
  "ETHUSD": "https://t.me/ETHUSD_TICKDATA",

  // Energy
  "Gas oil": "https://t.me/GASOIL_TICKDATA",
  "US Brent Crude Oil": "https://t.me/brentoil_tickdata",
  "US Light Crude Oil": "https://t.me/lightcmdusd_TickData",
  "Natural Gas": "https://t.me/gascmdusd_TICKDATA",

  // Metals
  "GOLD": "https://t.me/XAUUSD_TICKDATA",
  "SILVER": "https://t.me/XAGUSD_TICKDATA",

  // Indices
  "US Dollar Index": "https://t.me/US_Dollar_Index_TickData",
  "USA 30 Index": "https://t.me/USA30Index_TickData",
  "USA 100 Index": "https://t.me/us100index_Tickdata",
  "USA 500 Index": "https://t.me/USA500Index_TickData",

  // Stocks
  "APPLE INC": "https://t.me/APPLE_Tickdata",
  "AMAZON": "https://t.me/+LbpEtwR3ldkzYjNk",
  "GOOGLE": "https://t.me/+eyBV9WXZY5szZWZk",
  "JPMORGAN": "https://t.me/+bcUxbhH0rDA5MDA0"
};

// ===================== Telegram Helper =====================

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

// ===================== Send Menus =====================

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

async function sendEnglishHelp(env, chatId) {
  return telegram(env, "sendMessage", {
    chat_id: chatId,
    text: "📚 Help\n\nUse the buttons below to navigate through the bot.\n\n📊 Instruments — trading instruments\n📰 News — news section\n🌐 Language — language selection\n🆘 Support — support information",
    reply_markup: backKeyboardEnglish()
  });
}

async function sendPersianHelp(env, chatId) {
  return telegram(env, "sendMessage", {
    chat_id: chatId,
    text: "📚 راهنما\n\nاز دکمه‌های منو برای استفاده از بات استفاده کنید.\n\n📊 ابزارها — ابزارهای معاملاتی\n📰 اخبار — بخش اخبار\n🌐 زبان — انتخاب زبان\n🆘 پشتیبانی — اطلاعات پشتیبانی",
    reply_markup: backKeyboardPersian()
  });
}

async function sendEnglishSupport(env, chatId) {
  return telegram(env, "sendMessage", {
    chat_id: chatId,
    text: "🆘 Support\n\nFor support, contact the administrator.\n\nReplace this text with your own support username, channel or contact information.",
    reply_markup: backKeyboardEnglish()
  });
}

async function sendPersianSupport(env, chatId) {
  return telegram(env, "sendMessage", {
    chat_id: chatId,
    text: "🆘 پشتیبانی\n\nاطلاعات تماس پشتیبانی را می‌توانید در همین Worker تغییر دهید.",
    reply_markup: backKeyboardPersian()
  });
}

// ===================== Handle Messages =====================

async function handleMessage(env, message) {
  const chatId = message.chat.id;
  const text = message.text;

  if (!text) return;

  // /start
  if (text === "/start") {
    await sendMainMenu(env, chatId);
    return;
  }

  // =========================
  // English Main Menu
  // =========================

  if (text === "📊 Instruments") {
    await sendEnglishInstruments(env, chatId);
    return;
  }

  if (text === "📰 News") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "📰 Economic Calendar\n\nLatest Forex Factory calendar data is available for download.\n\nClick the button below to get the CSV file:",
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "📥 Download Calendar",
              url: "https://github.com/janickfarrell/newfac/releases/download/calendar-data/forexfactory_calendar.csv"
            }
          ]
        ]
      }
    });
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

  // =========================
  // Language Switch
  // =========================

  if (text === "🇬🇧 English") {
    userLanguage.set(chatId, "en");
    await sendMainMenu(env, chatId);
    return;
  }

  if (text === "🇮🇷 فارسی") {
    userLanguage.set(chatId, "fa");
    await sendPersianMainMenu(env, chatId);
    return;
  }

  // =========================
  // Persian Main Menu
  // =========================

  if (text === "📊 ابزارها") {
    await sendPersianInstruments(env, chatId);
    return;
  }

  if (text === "📰 اخبار") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "📰 تقویم اقتصادی\n\nآخرین داده‌های تقویم فارکس فکتوری آماده دانلود است.\n\nبرای دریافت فایل CSV روی دکمه زیر کلیک کنید:",
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "📥 دانلود تقویم",
              url: "https://github.com/janickfarrell/newfac/releases/download/calendar-data/forexfactory_calendar.csv"
            }
          ]
        ]
      }
    });
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

  // =========================
  // Instruments Categories (English)
  // =========================

  if (text === "Forex Major") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "📊 Forex Major\n\nSelect an instrument:",
      reply_markup: forexMajorKeyboard()
    });
    return;
  }

  if (text === "Crypto") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "📊 Crypto\n\nSelect an instrument:",
      reply_markup: cryptoKeyboard()
    });
    return;
  }

  if (text === "Energy") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "📊 Energy\n\nSelect an instrument:",
      reply_markup: energyKeyboard()
    });
    return;
  }

  if (text === "Metals") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "📊 Metals\n\nSelect an instrument:",
      reply_markup: metalsKeyboard()
    });
    return;
  }

  if (text === "Indices") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "📊 Indices\n\nSelect an instrument:",
      reply_markup: indicesKeyboard()
    });
    return;
  }

  if (text === "Stocks") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "📊 Stocks\n\nSelect an instrument:",
      reply_markup: stocksKeyboard()
    });
    return;
  }

  // =========================
  // Instruments Categories (Persian)
  // =========================

  if (text === "فارکس میجر") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "📊 فارکس میجر\n\nیک ابزار را انتخاب کنید:",
      reply_markup: forexMajorKeyboard()
    });
    return;
  }

  if (text === "کریپتو") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "📊 کریپتو\n\nیک ابزار را انتخاب کنید:",
      reply_markup: cryptoKeyboard()
    });
    return;
  }

  if (text === "انرژی") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "📊 انرژی\n\nیک ابزار را انتخاب کنید:",
      reply_markup: energyKeyboard()
    });
    return;
  }

  if (text === "فلزات") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "📊 فلزات\n\nیک ابزار را انتخاب کنید:",
      reply_markup: metalsKeyboard()
    });
    return;
  }

  if (text === "شاخص‌ها") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "📊 شاخص‌ها\n\nیک ابزار را انتخاب کنید:",
      reply_markup: indicesKeyboard()
    });
    return;
  }

  if (text === "سهام") {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "📊 سهام\n\nیک ابزار را انتخاب کنید:",
      reply_markup: stocksKeyboard()
    });
    return;
  }

  // =========================
  // Channel Links (Instruments)
  // =========================

  if (CHANNEL_LINKS[text]) {
    const lang = userLanguage.get(chatId) || "fa"; // پیش‌فرض فارسی

    let messageText = "";

    if (lang === "en") {
      messageText = `Channel for downloading data of ${text}:\n\n${CHANNEL_LINKS[text]}\n\nClick the link above to join.`;
    } else {
      messageText = `کانال مربوط به دانلود دیتای ${text}:\n\n${CHANNEL_LINKS[text]}\n\nبرای ورود روی لینک بالا کلیک کنید.`;
    }

    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: messageText,
      disable_web_page_preview: false
    });
    return;
  }

  // =========================
  // Navigation Buttons
  // =========================

  // English
  if (text === "🔙 Back") {
    await sendEnglishInstruments(env, chatId);
    return;
  }

  if (text === "🏠 Main Menu") {
    await sendMainMenu(env, chatId);
    return;
  }

  // Persian
  if (text === "🔙 بازگشت") {
    await sendPersianInstruments(env, chatId);
    return;
  }

  if (text === "🏠 منوی اصلی") {
    await sendPersianMainMenu(env, chatId);
    return;
  }
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
      if (update.message) {
        await handleMessage(env, update.message);
      }
    } catch (error) {
      console.error("Update processing error:", error);
    }

    return new Response("OK");
  }
};
