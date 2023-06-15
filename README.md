# Twilio 利用料確認プログラム

Twilioの前月の利用料を抽出します。  
抽出条件は、`count`が0以上のものです。  
サブアカウントも対象になります。

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

## 実行例

```sh
npm run start

> usage-checker@1.0.0 start
> node check.js

🐞 Started...
pv-basic-rooms count:5 price:0
rooms-group-minutes count:86 price:2106.97092
sync count:869 price:203.56194
group-rooms count:149 price:2106.97092
group-rooms-participant-minutes count:86 price:2106.97092
phonenumbers-local count:2 price:299.45454
basic-peer-to-peer-rooms-participant-minutes count:5 price:0
video-rooms-turn-megabytes count:39 price:0
pv count:193 price:2106.97092
turnmegabytes count:39 price:0
phonenumbers count:2 price:299.45454
sync-endpoint-hours count:869 price:203.56194
pchat count:384 price:0
pchat-users count:74 price:0
group-rooms-data-track count:32 price:0
pchat-conv-med-storage count:310 price:0
🐞 Total price: 9436
```
