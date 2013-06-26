bootstrap-wizard
================

Simple Wizard for Twitter Bootstrap


Minimal Markdown
-------------
```html
<div class="wizard">
  <fieldset data-step="1">
    <legend>1. Step</legend>
    Content Step 1
    <button>cancel</button>
    <button class="next">next</button>
  </fieldset>
  <fieldset data-step="2">
    <legend>2. Step</legend>
    Content Step 2
    <button class="previews">previews</button>
    <button class="next">next</button>
  </fieldset>
  <fieldset data-step="2">
    <legend>3. Step</legend>
    Content Step 3
    <button class="previews">previews</button>
    <button>save</button>
  </fieldset>
</div>
```


Load
-------------
```javascript
$(document).ready(function() {
  $('.wizard').wizard();
});
```


Preview
---------

![My image](http://farm4.staticflickr.com/3677/9145638577_c6f97a9e6b.jpg)



## License

### The MIT License (MIT)

Copyright (c) 2013 André Tarnowsky

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



