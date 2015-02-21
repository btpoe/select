# select
No frills styling native select inputs.

[View a demo](http://codepen.io/btpoe/details/VYxYyq)


## Setup

Simply call `$('select').customSelect();` in your javascript.

To avoid a flash of unstyled content, you can wrap the select in a div with the class `Select`.
Alternatively, if you have set the `component` option to something other than "Select", then you should wrap the select in a div with that class applied.

Additionally, if you with to pre-populate the value of the styled select, you can add a span with the class `Select-value`. It must be a sibling to the select input.

For example:
```html
<div class="Select">
    <select>
        ...
    </select>
    <span class="Select-value"></span>
</div>
```


## Options

The following are all available options and their defaults:
```javascript
$('select').customSelect(
    component: 'Select',
    valueClass: 'value'
);
```


## Events

If you change the value of the select box directly (using jQuery or native js) be sure to trigger the `change` event on the select element as well.