A personal project for trying new/latest technologies.

![Project preview](./preview.jpg 'Project preview')

## 💻 Development

### Scripts

#### Development

| Script          | Description                            |
| --------------- | -------------------------------------- |
| `npm run dev`   | Starts Next.js development server.     |
| `npm run build` | Creates a production build of Next.js. |
| `npm start`     | Serves production build locally.       |

#### Testing & Linting

| Script                 | Description                                           |
| ---------------------- | ----------------------------------------------------- |
| `npm run typecheck`    | Runs TypeScript and checks typing of source code.     |
| `npm run lint`         | Runs ESLint and lints all code.                       |
| `npm run format`       | Runs Prettier and formats all code.                   |
| `npm run format:check` | Runs Prettier and checks all code for bad formatting. |

### Environment variables

#### Client side

| Name                  | Description  |
| --------------------- | ------------ |
| `NEXT_PUBLIC_API_URL` | Base API URL |

#### Build

| Name      | Description                            |
| --------- | -------------------------------------- |
| `ANALYZE` | Analyzes the output bundle when `true` |
