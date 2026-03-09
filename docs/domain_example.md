# 🛒 Domain-Driven Design Example: Inventory & Stock Management

This document demonstrates how the Observer pattern can be used as **Domain Events** in a Domain-Driven Design (DDD) approach.

---

## 🧠 What is the Domain?

The **Domain** represents the core business logic of the application.

In this example:
- The domain is **Product Inventory Management**
- It handles rules like:
  - Stock cannot go below zero
  - Stock updates must trigger reactions

👉 The domain does NOT care about:
- UI (DOM)
- API calls
- Notifications

It only enforces business rules.

---

## 🔔 What is an Observer?

An **Observer** is a function that reacts to changes in the domain.

When the domain changes state:
- It **notifies observers**
- Observers decide what to do

Examples:
- Show a message in the UI
- Log data
- Trigger alerts

---

## 🧩 Where Does Logic Live?

### ✅ Domain Layer (`/domain`)
Contains:
- Business rules
- State changes

Example:
```js
product.reduceStock(5);