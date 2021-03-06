---
layout: page
title: "JavaScript array_intersect_uassoc function"
comments: true
sharing: true
footer: true
alias:
- /functions/view/array_intersect_uassoc:321
- /functions/view/array_intersect_uassoc
- /functions/view/321
- /functions/array_intersect_uassoc:321
- /functions/321
---
<!-- Generated by Rakefile:build -->
A JavaScript equivalent of PHP's array_intersect_uassoc

{% codeblock array/array_intersect_uassoc.js lang:js https://raw.github.com/kvz/phpjs/master/functions/array/array_intersect_uassoc.js raw on github %}
function array_intersect_uassoc (arr1) {
  // From: http://phpjs.org/functions
  // +   original by: Brett Zamir (http://brett-zamir.me)
  // *     example 1: $array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
  // *     example 1: $array2 = {a: 'GREEN', B: 'brown', 0: 'yellow', 1: 'red'}
  // *     example 1: array_intersect_uassoc($array1, $array2, function (f_string1, f_string2){var string1 = (f_string1+'').toLowerCase(); var string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 == string2) return 0; return -1;});
  // *     returns 1: {b: 'brown'}
  var retArr = {},
    arglm1 = arguments.length - 1,
    arglm2 = arglm1 - 1,
    cb = arguments[arglm1],
    k1 = '',
    i = 1,
    arr = {},
    k = '';

  cb = (typeof cb === 'string') ? this.window[cb] : (Object.prototype.toString.call(cb) === '[object Array]') ? this.window[cb[0]][cb[1]] : cb;

  arr1keys: for (k1 in arr1) {
    arrs: for (i = 1; i < arglm1; i++) {
      arr = arguments[i];
      for (k in arr) {
        if (arr[k] === arr1[k1] && cb(k, k1) === 0) {
          if (i === arglm2) {
            retArr[k1] = arr1[k1];
          }
          // If the innermost loop always leads at least once to an equal value, continue the loop until done
          continue arrs;
        }
      }
      // If it reaches here, it wasn't found in at least one array, so try next value
      continue arr1keys;
    }
  }

  return retArr;
}
{% endcodeblock %}

 - [Raw function on GitHub](https://github.com/kvz/phpjs/blob/master/functions/array/array_intersect_uassoc.js)

Please note that php.js uses JavaScript objects as substitutes for PHP arrays, they are 
the closest match to this hashtable-like data structure. 

Please also note that php.js offers community built functions and goes by the 
[McDonald's Theory](https://medium.com/what-i-learned-building/9216e1c9da7d). We'll put online 
functions that are far from perfect, in the hopes to spark better contributions. 
Do you have one? Then please just: 

 - [Edit on GitHub](https://github.com/kvz/phpjs/edit/master/functions/array/array_intersect_uassoc.js)

### Example 1
This code
{% codeblock lang:js example %}
$array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
$array2 = {a: 'GREEN', B: 'brown', 0: 'yellow', 1: 'red'}
array_intersect_uassoc($array1, $array2, function (f_string1, f_string2){var string1 = (f_string1+'').toLowerCase(); var string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 == string2) return 0; return -1;});
{% endcodeblock %}

Should return
{% codeblock lang:js returns %}
{b: 'brown'}
{% endcodeblock %}


### Other PHP functions in the array extension
{% render_partial _includes/custom/array.html %}
