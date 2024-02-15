# Hackathon 2023 Сахалин - Проект "Мечты"

## О проекте

Проект "Мечты" создан для участия в хакатоне 2023 года на Сахалине. Цель проекта - анализ тональности русскоязычного текста с использованием нейросетевых моделей.

## Технологии

- **Frontend:** Разработан с использованием React для построения динамичного и интерактивного пользовательского интерфейса.

- **Backend:** В качестве серверной части используется Node.js с использованием Express. Для анализа тональности текста используется Python-скрипт с использованием библиотек Dostoevsky и Aiogram для Telegram-бота.

## Основные функции

1. **Анализ тональности текста:** Пользователи могут загружать текстовые данные, а затем получать анализ тональности в различных аспектах.

2. **Интеграция с Telegram:** Создан Telegram-бот, который позволяет пользователям получать анализ тональности текста прямо в мессенджере.

3. **Обработка CSV-файлов:** Пользователи могут загружать CSV-файлы, которые автоматически преобразуются в формат, понятный для анализа тональности.

## Запуск проекта

1. Установите зависимости для frontend и backend:

   ```bash
   cd frontend
   npm install

   cd backend
   npm install
   ```

2. Запустите frontend и backend:

   ```bash
   # В папке frontend
   npm start

   # В папке backend
   npm start
   ```
