# Twilio 利用料確認プログラム

Twilioの前月の利用料を抽出します。  
抽出条件は、`count`が0以上のものです。

## インストール

```sh
git clone https://github.com/mobilebiz/usage-checker.git
cd usage-checker
npm install
```

## 実行

```sh
npm run start
```

`totalPrice`は、各行の`price`を小数点切り上げしてから集計したものです。  
ただし、重複している項目もあるため、結果は正確ではありません。
