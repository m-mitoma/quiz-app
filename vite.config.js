// vite.config.js
import { defineConfig, loadEnv } from "vite"; // loadEnv をインポート
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // 関数形式に修正し、'mode' を受け取る
  // loadEnv を使用して環境変数を読み込む
  // mode: 現在の環境モード ('development' or 'production')
  // process.cwd(): 環境変数を読み込むためのルートディレクトリ（現在の作業ディレクトリ）
  // '': プレフィックスなしのすべての環境変数を読み込む（VERCELのようなシステム環境変数も含む）
  const env = loadEnv(mode, process.cwd(), "");

  // 読み込んだ環境変数から VERCEL をチェック
  const isVercel = !!env.VERCEL; // env.VERCEL が '1' なら true、undefined なら false

  return {
    plugins: [react()],
    // base パスを設定
    base: isVercel ? "/" : "/quiz-app/", // ここはあなたの意図に合わせて '/memolist1-app/' か '/quiz-app/' か選択
  };
});
