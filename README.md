# Telegram бот фильтр мата

Телеграм бот на JavaScript и фреймворке grammY js для фильтрации нецензурной лексики (мата) в чатах Telegram.

## Структура проекта
- `index.js` - Главный файл с логикой бота.
- `banword.txt` - База данных матерных слов и нецензурных выражений.

## Логика работы бота
Все сообщения пользователей сверяются с базой матерных слов `banword.txt` и в случае совпадения сообщение удаляется, пользователю приходит сообщение о недопустимости данных сообщений.

## Демо бота
Обзор возможностей бота и инструкция по настройке - [Смотреть на YouTube](https://youtu.be/UrtMJoF_gbk)

## Деплой бота на сервер
Видео-гайд по деплою Telegram бота на сервер - [Смотреть на YouTube](https://youtu.be/vPqAYdjkm4o)  

* Установим Git и обновим компоненты системы
```bash
sudo apt update
sudo apt install git
```

* Клонируем репозиторий с ботом на сервер:
```bash
git clone https://github.com/FilimonovAlexey/anti-spam-telegram-bot.git
```

* Переходим в папку проекта:
```bash
cd anti-spam-telegram-bot
```

* Устанавливаем Node.js и пакетный менеджер npm
```bash
sudo apt install nodejs
sudo apt install npm
```

* Обновим Node js и npm, после выполняем перезапуск сервера
```bash
sudo npm install -g n
sudo n stable
```
* Устанавливаем все зависимости
```bash
cd anti-spam-telegram-bot
npm i
```

* Создаем глобальную переменную
```bash
nano .env
```

* Создаем внутри файлов .env две переменные
```bash
BOT_API_KEY=''
```

* Устанавливаем pm2 для запуска бота
```bash
npm i pm2 -g
```

* Запуск бота на сервере
```bash
pm2 start index.js
```

## Документация по grammy js

[Документация grammy js](https://grammy.dev/guide/)


## Автор

- [@FilimonovAlexey](https://github.com/FilimonovAlexey)