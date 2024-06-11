# Raspberry Pi RGB LED コントローラー クライアント

このプロジェクトは、Raspberry Pi に接続された RGB LED の状態を制御するための React Native アプリケーションです。アプリケーションは Raspberry Pi サーバーと通信し、LED の色変更を行います。

## スクリーンショット

![ホーム画面](path/to/home_screen.png)
![LEDコントロール](path/to/led_control.png)

## インストール方法

### 必要な環境
- Node.js
- npm または yarn
- React Native CLI
- Android または iOS デバイス（エミュレータでも可）

### インストール手順

1.	リポジトリをクローン
```bash
git clone https://github.com/Y-eng-com/pi-rgb-led-client.git
cd pi-rgb-led-client
```
2.	依存関係をインストール
```bash
npm install
```
3.	開発サーバーを起動
```bash
npm start
```
4.	アプリをエミュレータまたは実機で起動
	•	Android:
```bash
npm run android
```
	•	iOS:
```bash
npm run ios
```



1. リポジトリをクローン
   ```bash
   git clone https://github.com/Y-eng-com/pi-rgb-led-client.git
   cd pi-rgb-led-client
   ```

2.	依存関係をインストール
   ```bash
   npm install
   ```

3.	サーバーを起動
   ```bash
   npm start

4.	アプリをエミュレータまたは実機で起動
	•	Android:
      ```bash
      npm run android

	•	iOS:
      ```bash
      npm run android

## 使い方

	1.	スマートフォンで React Native アプリを開きます。
	2.	ボタンを使って、Raspberry Pi に接続された RGB LED を制御します。
	3.	ボタンを押すと、LED の色が変更されます。

## 使用技術

	•	React Native
	•	Axios

## 貢献方法

貢献は大歓迎です！以下の手順に従ってください：

	1.	リポジトリをフォークします。
	2.	新しいブランチを作成します (git checkout -b feature-branch)。
	3.	変更をコミットします (git commit -m 'Add new feature')。
	4.	ブランチにプッシュします (git push origin feature-branch)。
	5.	新しいプルリクエストを作成します。

## ライセンス

このプロジェクトは MIT ライセンスの下でライセンスされています。詳細については LICENSE ファイルを参照してください。

## トラブルシューティング

### LED が反応しない

	•	Raspberry Pi が接続され、サーバーが実行されていることを確認してください。
	•	GPIO 接続を確認してください。
	•	React Native アプリが正しく Raspberry Pi に接続されていることを確認してください。

### アプリが起動時にクラッシュする

	•	すべての依存関係がインストールされていることを確認してください。
	•	コンソールのエラーメッセージを確認し、指示された問題を解決してください。

## デモ