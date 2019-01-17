# Step Bar Style

This is the style of the step type progress bar used in registration forms, online shopping sites, etc.  

<img src="https://user-images.githubusercontent.com/23710529/51089986-af101980-17b8-11e9-850b-3a09cfb6aaaa.png" />

# How to install

```
npm i teb-step-bar
```

# How to use

For details see [./demo/index.html](./demo/index.html)

```html
<!-- Example where title is above number, detail is under number -->
<ul class="step-bar">
    <li class="step">
        <span class="step__title">Cart</span>
        <p class="step__text">Comfirm Items</p>
    </li>
    <li class="step is-active">
        <span class="step__title">Log in</span>
        <p class="step__text">Identification</p>
    </li>
    <li class="step">
        <span class="step__title">Payment</span>
    </li>
    <li class="step">
        <span class="step__title">Purchase</span>
    </li>
    <li class="step">
        <span class="step__title">Complete</span>
        <p class="step__text">Thank you!</p>
    </li>
</ul>
```

# How to customize

```scss
// In your custom.scss

// 1. Overwrite variables in _variables.scss
$num-background-active-color: #a1e600;
$num-border-active-color: #a1e600;

// 2. Import step-bar.scss
@import './scss/step-bar';
```
