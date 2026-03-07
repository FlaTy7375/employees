# Employees Management System

Приложение для управления сотрудниками с аутентификацией и полным CRUD функционалом.

## Технологии

### Backend
- Node.js + Express
- Prisma ORM
- SQLite
- JWT для аутентификации
- bcrypt для хеширования паролей

### Frontend
- React 19
- TypeScript
- Redux Toolkit + RTK Query
- React Router
- Ant Design
- Vite

## Функционал

- Регистрация и авторизация пользователей
- Просмотр списка сотрудников
- Добавление новых сотрудников
- Редактирование данных сотрудников
- Удаление сотрудников
- Защищенные роуты (требуется авторизация)

## Установка и запуск

### Backend

```bash
# Установка зависимостей
npm install

# Настройка базы данных
npx prisma generate
npx prisma db push

# Запуск сервера в режиме разработки
npm run dev

# Или обычный запуск
npm run server
```

Сервер запустится на `http://localhost:8000`

### Frontend

```bash
cd client

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev
```

Фронтенд запустится на `http://localhost:5173`

## Переменные окружения

Создайте файл `.env` в корне проекта:

```env
PORT=8000
DATABASE_URL="file:./prisma/dev.db"
JWT_SECRET="your-secret-key-here"
```

## Структура проекта

```
employees/
├── controllers/        # Контроллеры для обработки запросов
├── middleware/         # Middleware для аутентификации
├── routes/            # Определение роутов API
├── prisma/            # Схема и миграции базы данных
├── client/            # React приложение
│   ├── src/
│   │   ├── app/           # Redux store и API сервисы
│   │   ├── components/    # React компоненты
│   │   ├── features/      # Redux slices
│   │   ├── pages/         # Страницы приложения
│   │   └── middleware/    # Redux middleware
└── .env               # Переменные окружения
```

## API Endpoints

### Аутентификация
- `POST /api/user/register` - Регистрация
- `POST /api/user/login` - Вход
- `GET /api/user/current` - Получить текущего пользователя

### Сотрудники
- `GET /api/employees` - Список всех сотрудников
- `GET /api/employees/:id` - Получить сотрудника по ID
- `POST /api/employees/add` - Добавить сотрудника
- `PUT /api/employees/edit/:id` - Редактировать сотрудника
- `POST /api/employees/remove/:id` - Удалить сотрудника

Все роуты сотрудников требуют JWT токен в заголовке `Authorization: Bearer <token>`

## Разработка

Для удобной разработки используйте nodemon для автоматической перезагрузки сервера:

```bash
npm run dev
```

## Автор

Максим
