# 📊 Affiliate Plans Table

Интерактивная таблица планов и фактов по доходам и активным партнёрам.
Проект реализован на React + TypeScript с использованием Tailwind CSS 4.

---

## 🚀 Старт проекта

### Требования:

- Установлена Node.js версии 20 или выше ([скачать](https://nodejs.org/))
- Установлен Git ([скачать](https://git-scm.com/))

### Шаги:

1. Склонируйте репозиторий:
   ```bash
   git clone https://github.com/your-username/affiliate-plans-table.git
   cd affiliate-plans-table
   ```

### 📦 Установка зависимостей

```bash
npm install
# или
yarn install
```

### ▶️ Запуск в dev-режиме

```bash
npm run dev
# или
yarn dev
```

---

## 🌈 Особенности

- ✅ React + TypeScript
- ✅ Tailwind CSS 4 (новый формат темизации через `@tailwind` и `content`)
- ✅ Декомпозированные компоненты: `PlanCell`, `TableCell`, `TableHeader`, `Controls`
- ✅ Управление состоянием через `useState`
- ✅ Адаптивный UI и поддержка навигации по месяцам

---

## 🎨 Tailwind 4 особенности

> Tailwind v4 использует PostCSS-плагин с новым способом подключения.

- ✅ Подключение через `tailwind.config.js` с использованием `content: ['./src/**/*.{ts,tsx}']`
- ✅ Полная поддержка новых color tokens (`text-slate-800`, `bg-slate-100` и др.)
- ✅ Нет необходимости подключать `@tailwind base` вручную — достаточно `@tailwind utilities`

---

## 🗂 Структура проекта

```
src/
├── api/                # Работа с API
├── components/         # Компоненты UI
├── hooks/              # Пользовательские хуки
├── types/              # Типы TypeScript
├── utils/              # Вспомогательные функции
├── App.tsx             # Точка входа
└── main.tsx            # Bootstrap React
```

---

## 🧪 Будущие улучшения

- 📅 Добавить выбор года
- ✏️ Inline-редактирование данных
- 📈 Визуализация (графики)

---

## 👨‍💻 Автор

- Aleksey Ovchinnikov
