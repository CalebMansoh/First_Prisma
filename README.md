# Prisma PostgreSQL Project

A simple Node.js and TypeScript project using Prisma ORM 7 and PostgreSQL.

## Technologies Used

- Node.js
- TypeScript
- Prisma ORM 7
- PostgreSQL
- Prisma PostgreSQL Adapter
- tsx

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate into the project

```bash
cd prisma
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root:

```env
DATABASE_URL="YOUR_POSTGRESQL_CONNECTION_URL"
```

Replace the placeholder with your own database connection URL.

### 5. Generate Prisma Client

```bash
npx prisma generate
```

### 6. Run the project

```bash
npx tsx index.ts
```

## Project Structure

```text
prisma/
├── generated/
├── prisma/
│   └── schema.prisma
├── index.ts
├── prisma.config.ts
├── package.json
├── tsconfig.json
├── .env
├── .gitignore
└── README.md
```

## Security

Never upload your `.env` file or expose your database credentials.

## Author

Caleb