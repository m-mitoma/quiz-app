// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  const isVercelProduction =
    process.env.VERCEL_ENV === "production" || process.env.VERCEL_URL;

  let base = "/"; // Vercelの本番デプロイ用（ルート）

  if (command === "serve") {
    // ローカル開発用
    base = "/quiz-app/";
  }

  console.log(`Vite base path set to: ${base}`);

  return {
    plugins: [react()],
    base: base, // ★Viteのベースパスを設定★
    build: {
      // outDir など、他のビルド設定
    },
  };
});
