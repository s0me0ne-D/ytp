# YTP

## 🚀 Tech Stack

### Core

- **[Next.js 16](https://nextjs.org)** - React framework for production
- **[React 19](https://react.dev)** - Library for building user interfaces
- **[TypeScript 5](https://www.typescriptlang.org)** - Typed JavaScript

### Styling

- **[Tailwind CSS 4](https://tailwindcss.com)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com)** - UI components built on Radix UI
- **[Radix UI](https://www.radix-ui.com)** - Primitives for accessible components
- **[Lucide React](https://lucide.dev)** - Icons
- **[class-variance-authority](https://cva.style)** - Component variant management
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes

### Forms & Validation

- **[React Hook Form](https://react-hook-form.com)** - Efficient form management
- **[Zod](https://zod.dev)** - TypeScript-first schema validation

### Code Quality

- **[ESLint 9](https://eslint.org)** - Linter for JavaScript/TypeScript
  - Airbnb style guide
  - TypeScript ESLint
  - React hooks rules
  - Prettier integration
- **[Prettier 3](https://prettier.io)** - Code formatter
- **[Husky](https://typicode.github.io/husky)** - Git hooks
- **[lint-staged](https://github.com/okonet/lint-staged)** - Lint staged files

## 📦 Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

## 🛠️ Available Commands

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Run production server
npm run start

# Lint code
npm run lint

# Auto-fix linting errors
npm run lint:fix

# Format code
npm run format
```

## 🚀 Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # React components
│   │   └── ui/          # shadcn/ui components
│   └── lib/             # Utilities and helpers
├── public/              # Static files
└── ...config files      # Configuration files
```

## 🔧 Configuration

Project is configured with:

- TypeScript strict mode
- ESLint with Airbnb style guide
- Prettier for consistent formatting
- Pre-commit hooks for automatic code checks
- PostCSS with Tailwind CSS

## 📝 Git Workflow

On every commit, the following run automatically:

- ESLint (auto-fix)
- Prettier (code formatting)

This ensures code consistency across the entire project.
