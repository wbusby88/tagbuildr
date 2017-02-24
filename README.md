# tag-js
Utility to create DOM elements and add children elements with little effort

Tag.js uses a simple declarative syntax, allowing for quick DOM element creation and template building.

##Examples

###Create an h2 element with some text
```javascript
var title = Tag('h2.title', 'My shiny new title');
console.log(title); //<h2 class="title">My shiny new title</div>
```

###Create a more complex element with multiple children elements
```javascript
var content = /* some ajax result or hardcoded data */

var article = Tag('article.my-article', [
    Tag('h2.article__title', content.title),
    Tag('div.article__content, content.body'),
    Tag('footer.article__footer', [
        'Article written by: ',
        content.author.name
    ])
]);

console.log(article);
//<article class="my-article">
//  <h2 class="article__title">some title from content.title</h2>
//  <div class="article__content">some content from content.body</div>
//  <footer class="article__footer>Article written by: Some author from content.author.name</footer>
//</article>

//add article to the existing dom
document.body.appendChild(article);
  
```

###Handle attributes on an element

Seperate each attribute using the pipe '|' symbol and in this manner: `javascript 'attribute-name=attribute value|other-attr=other value'`

e.g:
```javascript
var img = Tag('img.my-image|src=http://mydomain.com/img/logo.png|alt=my nice image');
console.log(img);
//<img class="my-image" src="http://mydomain.com/img/logo.png" alt="my nice image" />

```

###Note: Classes and Id must be used FIRST
e.g.
```javascript
//not valid
Tag('div|data-my-attr=value.my-class#my-id');

//valid
Tag('div.my-class#myid|data-my-attr=value');


