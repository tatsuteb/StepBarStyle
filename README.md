# Step Bar Style

This is the style of the step type progress bar used in registration forms, online shopping sites, etc.  

<img src="https://user-images.githubusercontent.com/23710529/51326046-9b62fc80-1ab1-11e9-96fd-a75c5cc6f36a.png" />

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

By overriding the _variables.scss variable and customizing it, it is also possible to change the paint or border.
