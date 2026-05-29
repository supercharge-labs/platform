# Supercharge

Supercharge is an **AI WhatsApp automation** platform for businesses. The bot runs on WhatsApp Business API (or compatible webhooks), backed by your own server and AI layer, so conversations stay fast, on-brand, and measurable.

This repository ships the **Supercharge web app** (Next.js). The sections below describe **how the product is designed to work end-to-end**, including sales, support, bookings, and **stablecoin payments on Solana** (for example USDC).

---

## How the WhatsApp bot fits together

| Area | What the bot does |
|------|-------------------|
| **Sales** | Qualifies leads, answers product questions, sends quotes or links, and nudges follow-ups based on intent. |
| **Customer service** | Handles FAQs, order status, and common issues; escalates to a human in WhatsApp when confidence is low or the user asks for a person. |
| **Booking** | Collects date, time, party size, or service type; checks availability against your calendar or booking API; confirms or suggests alternatives. |
| **Payments** | When it is time to pay, the bot shares a **Solana** payment step (wallet pay or a hosted checkout that settles on-chain in **stablecoins** like USDC). |

Flow in one sentence: **WhatsApp message → your webhook → AI + business rules → reply (text, media, or payment link / deep link) → optional on-chain settlement on Solana.**

---

## Sales

1. **Inbound**: A prospect messages your WhatsApp number; the webhook receives the message payload.
2. **Understanding**: The assistant classifies intent (pricing, demo, compare plans, etc.) and pulls approved snippets from your knowledge base.
3. **Conversion**: It can send structured replies (lists, buttons), links to your site, or hand off to sales with full chat context.

---

## Customer service

1. **First response**: Instant answers for repeated questions (shipping, returns, hours) using your approved content.
2. **Safe boundaries**: Sensitive actions (refunds, account changes) can be restricted to verified flows or human agents.
3. **Handoff**: The bot can tag the thread or notify Slack/email so your team continues in the same WhatsApp chat.

---

## Booking

1. **Discovery**: The bot asks short, guided questions until it has enough to check availability.
2. **Availability**: Your backend checks Google Calendar, Cal.com, a custom API, or a simple database of slots.
3. **Confirmation**: The user gets a clear confirmation message; reminders can be sent before the appointment.

---

## Processing payments in Solana stablecoins

Stablecoins on Solana (commonly **USDC**, sometimes **USDT** or others) give you fast settlement and predictable value in dollars (or the pegged asset).

**Typical pattern:**

1. **Quote**: The bot confirms amount, currency (e.g. USDC), and what is being purchased or booked.
2. **Payment request**: Your backend creates a **unique payment intent** (amount + recipient wallet + memo/reference tied to the order or booking ID).
3. **User pays**: The customer pays from any Solana wallet (Phantom, Backpack, etc.) by scanning a QR, opening a link, or pasting an address **you** display in a secure channel (in-app page or carefully formatted WhatsApp message).
4. **Verification**: A **worker or webhook** listens to Solana RPC (or an indexer) for the transaction to the merchant wallet (or program) and matches `memo` / amount to the order.
5. **Fulfillment**: Once confirmed (and after your chosen confirmation depth), WhatsApp sends a receipt message and you unlock the product, booking, or service.

**Operational notes:**

- Store **RPC URL** and **merchant treasury** in environment variables; never commit keys or mnemonics.
- Prefer **unique references** (order IDs in memo or a dedicated payment record) so one tx maps to one sale.
- For production, consider **payment links** that open a small hosted checkout (this repo can be extended) so users are not copying long addresses by hand in WhatsApp.

---

## Environment variables

When you add Solana and WhatsApp integrations to this project, you will typically need variables such as:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_RPC_URL` | Solana RPC endpoint for reads and (from server) confirmation. |
| `NEXT_PUBLIC_PROGRAM_AUTHORITY` or merchant wallet | Where stablecoin payments are received (name depends on your program or simple wallet flow). |
| WhatsApp / Meta tokens | Webhook verify token, access token, phone number ID (set via your backend or server-only env). |

Exact names depend on how you implement webhooks; keep secrets **server-side** only.

---

## Tech stack (this repo)

- **Framework**: [Next.js](https://nextjs.org)
- **Language**: TypeScript
- **Styling**: Tailwind CSS

Solana and WhatsApp SDKs are not bundled yet; add them when you wire webhooks and on-chain verification.

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Contributing

Issues and pull requests are welcome.

## License

MIT (unless otherwise specified in the repository).
