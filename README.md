# X Token Extractor 🔑

A Chrome Extension to extract `auth_token` and `ct0` cookies from X (Twitter).

---

## ✨ Features

- ✅ One-click extraction of `auth_token` and `ct0` from X.com
- ✅ Copy individual fields or all at once (`auth_token|ct0` format)
- ✅ Dark / Light mode toggle (remembers your preference)
- ✅ Clean status feedback — success & error states
- ✅ Minimal UI, no background permissions needed

---

## 🛠️ Installation

> Chrome Web Store not required — install manually in Developer Mode.

1. **Download or clone this repository:**
   ```sh
   git clone https://github.com/thog9/X-Token-extractor.git
   ```

2. **Open Chrome Extensions page:**
   ```
   chrome://extensions/
   ```

3. **Enable Developer Mode** (top-right toggle)

4. **Click "Load unpacked"** → select the cloned folder

5. The **X Token Extractor 1.0** icon will appear in your Chrome toolbar ✅

---

## 🚀 How to Use

### Step 1 — Log in to X.com

Make sure you are logged in at [https://x.com](https://x.com) in your Chrome browser.

### Step 2 — Open the Extension

Click the **THOG Tools** icon in the Chrome toolbar.

### Step 3 — Extract Token

Click **"Get Tokens"** — the extension will automatically read:

| Field | Description |
|---|---|
| `auth_token` | Your X session authentication token |
| `ct0` | Your X CSRF token |

### Step 4 — Copy & Use

- Click **"Copy All"** to copy in format: `auth_token|ct0`
- Or click the 📋 icon next to each field to copy individually

Paste into `tokenX.txt` for use with automation scripts:

```
auth_token_value|ct0_value
```

---

## 📁 File Structure

```
thog/
├── manifest.json     # Extension configuration (Manifest V3)
├── popup.html        # Extension UI
├── popup.js          # Logic: extract, copy, theme toggle
└── style.css         # Styling with dark/light theme support
```

---

## ⚠️ Notes

- This extension **only reads cookies** from `x.com` — it does **not** send data anywhere.
- Tokens are session-based and will change if you log out or clear cookies.
- Use extracted tokens responsibly and only for accounts you own.

---

## 📨 Contact

Connect with us for support or updates:

- **Telegram**: [thog099](https://t.me/thog099)
- **Channel**: [CHANNEL](https://t.me/thogairdrops)
- **Group**: [GROUP CHAT](https://t.me/thogchats)
- **X**: [Thog](https://x.com/thog099)

---

## ☕ Support Us

Love these tools? Fuel our work with a coffee!

🔗 BUYMECAFE: [BUY ME CAFE](https://buymecafe.vercel.app/)

🔗 WEBSITE: [BUY SCRIPTS](https://thogtoolhub.com/)
