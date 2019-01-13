# Step Bar Style

登録フォームやオンラインショッピングでよく見るステップタイプのプログレスバーを自作  

<img src="https://user-images.githubusercontent.com/23710529/51089986-af101980-17b8-11e9-850b-3a09cfb6aaaa.png" />

# インストール

1. [tatsuteb/StepBarStyle](https://github.com/tatsuteb/StepBarStyle.git) をクローン

1. インストール
    > ```npm install```

1. ビルド
    > ```npm run build```  
    > ```npm run buildRelease```

1. 自分のプロジェクトにコピー  
    > ```./dist/css/step-bar.css```  
    > ```./dist/css/step-bar.min.css```

1. リンクを張る
    > ```<link rel="stylesheet" href="./css/step-bar.css">```  
    > ```<link rel="stylesheet" href="./css/step-bar.min.css">```

# マークアップ

詳しくは、 [./demo/index.html](./demo/index.html) 参照

```html
<!-- ステップのタイトルが上、補足が下に配置される例 -->
<ul class="step-bar">
    <li class="step">
        <span class="step__title">カート</span>
        <p class="step__text">商品確認</p>
    </li>
    <li class="step is-active">
        <span class="step__title">ログイン</span>
        <p class="step__text">本人確認</p>
    </li>
    <li class="step">
        <span class="step__title">お支払方法</span>
    </li>
    <li class="step">
        <span class="step__title">購入確認</span>
    </li>
    <li class="step">
        <span class="step__title">完了</span>
        <p class="step__text">ありがとうございます</p>
    </li>
</ul>
```

# カスタマイズ

```scss
// In your custom.scss

// 1. _variables.scss にある変数を上書きする
$num-background-active-color: #a1e600;
$num-border-active-color: #a1e600;

// 2. step-bar.scss をインポートする
@import './scss/step-bar';
```
