# 📈 xchange-rates

[![View on npm](https://img.shields.io/badge/npm-xchange--rates-red?logo=npm)](https://www.npmjs.com/package/xchange-rates)
[![npm version](https://img.shields.io/npm/v/xchange-rates)](https://www.npmjs.com/package/xchange-rates)
[![npm downloads](https://img.shields.io/npm/dm/xchange-rates)](https://www.npmjs.com/package/xchange-rates)

A lightweight Node.js package and CLI tool to fetch **real-time currency exchange rates** between any two currencies.
Exchange rate data is updated daily and served directly via **CDN** for **fast and reliable access**.

---

☕ *This package runs on caffeine. If it helped you, consider buying me a coffee.*

[![Buy Me A Coffee](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWkwc2F5dnVma3dmbDZoOXp2YWdrdnV0NHhhYmpzNXRnZWN6OWF4MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/7kZE0z52Sd9zSESzDA/giphy.gif)](https://www.buymeacoffee.com/jayadevpanthaplavil)

---

## ✨ Features

* Fetch live exchange rates between **any two supported currencies**
* Data refreshed **daily** via CDN
* Works both as **Node.js library** and **CLI tool**
* Simple, lightweight, no API key required 🚀
* Unlimited data fetches

---

## 📦 Installation

```bash
npm install xchange-rates
```

Or with yarn:

```bash
yarn add xchange-rates
```

---

## 🚀 Usage

### In Node.js

```js
import { xchangerate } from "xchange-rates";

(async () => {
  const result = await xchangerate("USD", "INR");
  console.log(result);
})();
```

**Output:**

```json
{
  "date": "2025-08-17",
  "base": "USD",
  "target": "INR",
  "rate": 87.51385
}
```

---

### In CLI

```bash
xchangerate USD INR
```

**Output:**

```json
{
  "date": "2025-08-17",
  "base": "USD",
  "target": "INR",
  "rate": 87.51385
}
```

---

## 🌍 Supported Currencies

This package supports **~180 currency codes** including **official national currencies, regional currencies, financial instruments, precious metals, and cryptocurrencies**.  

## 📊 At a Glance  

- **🌐 Total codes listed:** ~180  
- **🏳️ Country & territory currencies:** ~150  
- **🤝 Regional/shared currencies:** 5+  
- **💰 Precious metals / commodities:** 3 (Gold, Silver, etc.)  
- **₿ Cryptocurrencies:** 1 (Bitcoin)  
- **🏦 Supranational / financial instruments:** 1 (IMF SDR)  
- **📜 Obsolete / replaced codes:** 5+  


---

## 🏳️ National & Territory Currencies  

Most of the list are official national or territory currencies. Examples:  

- **USD** – United States Dollar 🇺🇸  
- **INR** – Indian Rupee 🇮🇳  
- **JPY** – Japanese Yen 🇯🇵  
- **GBP** – British Pound Sterling 🇬🇧  
- **AUD** – Australian Dollar 🇦🇺  
- **CAD** – Canadian Dollar 🇨🇦  
- …and 140+ more, including currencies of smaller nations and overseas territories (e.g., **AWG** – Aruban Florin, **FKP** – Falkland Islands Pound).  

---

## 🤝 Regional / Shared Currencies  

- **EUR** – Euro (27 EU countries and territories) 🇪🇺  
- **XAF** – CFA Franc BEAC (Central Africa)  
- **XOF** – CFA Franc BCEAO (West Africa)  
- **XPF** – CFP Franc (French overseas territories)  
- **XCD** – East Caribbean Dollar  

---

## 💰 Precious Metals / Commodities  

- **XAU** – Gold (troy ounce)  
- **XAG** – Silver (troy ounce)  
- **XDR** – IMF Special Drawing Rights (supranational reserve asset)  

---

## ₿ Cryptocurrency  

- **BTC** – Bitcoin  

---

## 📜 Obsolete / Replaced  

Some codes are obsolete or updated:  

- **BYR** – Old Belarusian Ruble → replaced by **BYN**  
- **STD** – Old São Tomé and Príncipe Dobra → replaced by **STN**  
- **ZMK** – Old Zambian Kwacha → replaced by **ZMW**  
- **SLL** – Old Sierra Leonean Leone → replaced by **SLE**  
- **PEN** – Nuevo Sol → now **Sol**, still uses PEN  

---

## 📖 Standard Reference  

All codes follow **ISO 4217**:  

- 3-letter codes (e.g., **USD, INR, EUR**).  
- The first two letters usually represent the country (per ISO 3166), and the third the currency (e.g., **IN** + **R** = INR).  
- Codes beginning with **X** are reserved for **non-sovereign currencies, precious metals, supranational assets, or crypto**.  

---

<details>
<summary>Click to expand</summary>

**AED** – United Arab Emirates Dirham  
**AFN** – Afghan Afghani  
**ALL** – Albanian Lek  
**AMD** – Armenian Dram  
**ANG** – Netherlands Antillean Guilder  
**AOA** – Angolan Kwanza  
**ARS** – Argentine Peso  
**AUD** – Australian Dollar  
**AWG** – Aruban Florin  
**AZN** – Azerbaijani Manat  
**BAM** – Bosnia-Herzegovina Convertible Mark  
**BBD** – Barbadian Dollar  
**BDT** – Bangladeshi Taka  
**BGN** – Bulgarian Lev  
**BHD** – Bahraini Dinar  
**BIF** – Burundian Franc  
**BMD** – Bermudan Dollar  
**BND** – Brunei Dollar  
**BOB** – Bolivian Boliviano  
**BRL** – Brazilian Real  
**BSD** – Bahamian Dollar  
**BTC** – Bitcoin  
**BTN** – Bhutanese Ngultrum  
**BWP** – Botswanan Pula  
**BYN** – New Belarusian Ruble  
**BYR** – Belarusian Ruble  
**BZD** – Belize Dollar  
**CAD** – Canadian Dollar  
**CDF** – Congolese Franc  
**CHF** – Swiss Franc  
**CLF** – Chilean Unit of Account (UF)  
**CLP** – Chilean Peso  
**CNY** – Chinese Yuan  
**CNH** – Chinese Yuan Offshore  
**COP** – Colombian Peso  
**CRC** – Costa Rican Colón  
**CUC** – Cuban Convertible Peso  
**CUP** – Cuban Peso  
**CVE** – Cape Verdean Escudo  
**CZK** – Czech Republic Koruna  
**DJF** – Djiboutian Franc  
**DKK** – Danish Krone  
**DOP** – Dominican Peso  
**DZD** – Algerian Dinar  
**EGP** – Egyptian Pound  
**ERN** – Eritrean Nakfa  
**ETB** – Ethiopian Birr  
**EUR** – Euro  
**FJD** – Fijian Dollar  
**FKP** – Falkland Islands Pound  
**GBP** – British Pound Sterling  
**GEL** – Georgian Lari  
**GGP** – Guernsey Pound  
**GHS** – Ghanaian Cedi  
**GIP** – Gibraltar Pound  
**GMD** – Gambian Dalasi  
**GNF** – Guinean Franc  
**GTQ** – Guatemalan Quetzal  
**GYD** – Guyanese Dollar  
**HKD** – Hong Kong Dollar  
**HNL** – Honduran Lempira  
**HRK** – Croatian Kuna  
**HTG** – Haitian Gourde  
**HUF** – Hungarian Forint  
**IDR** – Indonesian Rupiah  
**ILS** – Israeli New Sheqel  
**IMP** – Manx Pound  
**INR** – Indian Rupee  
**IQD** – Iraqi Dinar  
**IRR** – Iranian Rial  
**ISK** – Icelandic Króna  
**JEP** – Jersey Pound  
**JMD** – Jamaican Dollar  
**JOD** – Jordanian Dinar  
**JPY** – Japanese Yen  
**KES** – Kenyan Shilling  
**KGS** – Kyrgystani Som  
**KHR** – Cambodian Riel  
**KMF** – Comorian Franc  
**KPW** – North Korean Won  
**KRW** – South Korean Won  
**KWD** – Kuwaiti Dinar  
**KYD** – Cayman Islands Dollar  
**KZT** – Kazakhstani Tenge  
**LAK** – Laotian Kip  
**LBP** – Lebanese Pound  
**LKR** – Sri Lankan Rupee  
**LRD** – Liberian Dollar  
**LSL** – Lesotho Loti  
**LYD** – Libyan Dinar  
**MAD** – Moroccan Dirham  
**MDL** – Moldovan Leu  
**MGA** – Malagasy Ariary  
**MKD** – Macedonian Denar  
**MMK** – Myanma Kyat  
**MNT** – Mongolian Tugrik  
**MOP** – Macanese Pataca  
**MRU** – Mauritanian Ouguiya  
**MUR** – Mauritian Rupee  
**MVR** – Maldivian Rufiyaa  
**MWK** – Malawian Kwacha  
**MXN** – Mexican Peso  
**MYR** – Malaysian Ringgit  
**MZN** – Mozambican Metical  
**NAD** – Namibian Dollar  
**NGN** – Nigerian Naira  
**NIO** – Nicaraguan Córdoba  
**NOK** – Norwegian Krone  
**NPR** – Nepalese Rupee  
**NZD** – New Zealand Dollar  
**OMR** – Omani Rial  
**PAB** – Panamanian Balboa  
**PEN** – Peruvian Nuevo Sol  
**PGK** – Papua New Guinean Kina  
**PHP** – Philippine Peso  
**PKR** – Pakistani Rupee  
**PLN** – Polish Zloty  
**PYG** – Paraguayan Guarani  
**QAR** – Qatari Rial  
**RON** – Romanian Leu  
**RSD** – Serbian Dinar  
**RUB** – Russian Ruble  
**RWF** – Rwandan Franc  
**SAR** – Saudi Riyal  
**SBD** – Solomon Islands Dollar  
**SCR** – Seychellois Rupee  
**SDG** – South Sudanese Pound  
**SEK** – Swedish Krona  
**SGD** – Singapore Dollar  
**SHP** – Saint Helena Pound  
**SLE / SLL** – Sierra Leonean Leone  
**SOS** – Somali Shilling  
**SRD** – Surinamese Dollar  
**STD / STN** – São Tomé and Príncipe Dobra  
**SVC** – Salvadoran Colón  
**SYP** – Syrian Pound  
**SZL** – Swazi Lilangeni  
**THB** – Thai Baht  
**TJS** – Tajikistani Somoni  
**TMT** – Turkmenistani Manat  
**TND** – Tunisian Dinar  
**TOP** – Tongan Paʻanga  
**TRY** – Turkish Lira  
**TTD** – Trinidad and Tobago Dollar  
**TWD** – New Taiwan Dollar  
**TZS** – Tanzanian Shilling  
**UAH** – Ukrainian Hryvnia  
**UGX** – Ugandan Shilling  
**USD** – United States Dollar  
**UYU** – Uruguayan Peso  
**UZS** – Uzbekistan Som  
**VES** – Sovereign Bolivar  
**VND** – Vietnamese Dong  
**VUV** – Vanuatu Vatu  
**WST** – Samoan Tala  
**XAF** – CFA Franc BEAC  
**XAG** – Silver (troy ounce)  
**XAU** – Gold (troy ounce)  
**XCD** – East Caribbean Dollar  
**XCG** – Caribbean Guilder  
**XDR** – Special Drawing Rights  
**XOF** – CFA Franc BCEAO  
**XPF** – CFP Franc  
**YER** – Yemeni Rial  
**ZAR** – South African Rand  
**ZMK / ZMW** – Zambian Kwacha  
**ZWL** – Zimbabwean Dollar  

</details>

---

## 🔗 Data Source

All exchange rates are updated daily and served from CDN:  
👉 [https://cdn.jsdelivr.net/npm/xchange-rates@latest/v1/currencies.json](https://cdn.jsdelivr.net/npm/xchange-rates@latest/v1/currencies.json)

---

## 📜 License

[ISC](./LICENSE) – © Jayadev Panthaplavil
