# tagbuildr.js
Library agnostic utility to create DOM elements and add children elements with little effort.

tagbuildr.js uses a simple declarative syntax, allowing for quick DOM element creation and template building.

## Usage

### Create an h2 element with some text
```javascript
//tagbuildr adds the alias tb as the main factory function
var title = tb('h2.title', 'My shiny new title');
console.log(title); //<h2 class="title">My shiny new title</div>
```

### Create a more complex element with multiple children elements
```javascript
var content = /* some ajax result or hardcoded data */

var article = tb('article.my-article', [
    tb('h2.article__title', content.title),
    tb('div.article__content', content.body),
    tb('footer.article__footer', [
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

### Handle attributes on an element

Seperate each attribute using the pipe '|' symbol and in this manner: 
```javascript 
'attribute-name=attribute value|other-attr=other value'
```

e.g:
```javascript
var img = tb('img.my-image|src=http://mydomain.com/img/logo.png|alt=my nice image');
console.log(img);
//<img class="my-image" src="http://mydomain.com/img/logo.png" alt="my nice image" />

```

### Note: Classes and Id must be used FIRST
e.g.
```javascript
//not valid
tb('div|data-my-attr=value.my-class#my-id');

//valid
tb('div.my-class#myid|data-my-attr=value');

```

## Why should I use tagbuildr.js?
There are usually multiple times throughout a project where you need to add some dynamic data that needs to be wrapped in some HTML.

If you're not using any large front end framework like React or Angular, the pure js way would go something like this:

```javascript
var content = /* some data */;

//create article wrapper
var wrapper = document.createElement('article');
wrapper.className = 'my-article';

//create img
var img = document.createElement('img');
img.className = 'article__img';
img.src = content.featuredImg;

//create title
var title = document.createElement('h2');
title.className = 'article__title title';
title.innerHTML = content.title;

//create content container
var contentBody = document.createElement('div');
contentBody.className = 'article__content';
contentBody.innerHTML = content.body;

//append to wrapper
wrapper.appendChild(img);
wrapper.appendChild(title);
wrapper.appendChild(contentBody);

//add to body
document.body.appendChild(wrapper);

```

Pretty verbose, right?
Alternatively you can straight up write the HTML as a string:

```javascript

var html = '<article class="my-article">' +
                '<img class="article__img" src="' + content.featuredImg + '" />' +
                '<h2 class="article__title title">' + content.title + '</h2>' +
                '<div class="article__content">' + content.body + '</div>' +
            '</article>';

document.body.insertAdjacentHTML('beforeend', html);

```

Not bad, but still pretty fiddly and prone to human errors.
Even if you're using a library like jQuery, you're still going to have to write out the annoying html strings:

```javascript

var article = $('<article class="my-article"></article>')
                .append('<img class="article_img" src="'+ content.featuredImg +'" />')
                .append('<h2 class="article__title title">' + content.title + '</h2>')
                .append('<div class="article__content">' + content.body + '</div>');

$('body').append(article);

```

Now consider the tagbuildr.js way:

```javascript

//Use css selector style declaration for classes and Ids. 
//Use a simple 'attr=value' syntax for attributes separated by a pipe "|"
var article = tb('article.my-article', [
    tb('img.article__img|src=' + content.featuredImg),
    tb('h2.article__title.title', content.title),
    tb('div.article__body', content.body)
]);

document.body.appendChild(article);

```

Quick, clean, and easy. 
tagbuildr.js allows you to create reusable components without the need for transpilers, libraries, or any other build process:

```javascript

function article(content) {
    return tb('article.my-article', [
        tb('img.article__img|src=' + content.featuredImg),
        tb('h2.article__title.title', content.title),
        tb('div.article__body', content.body)
    ]);
}

//make an ajax call to get more articles
ajax.get('/articles/page/2')
    .then(function(articleDataArray) {
        var targetElement = document.getElementById('my-element');
        //append the articles to a targetelement using the article Component function above
        articleDataArray.forEach(function(articleData) {
            targetElement.appendChild(article(articleData));
        });
    })


```

## Browser support

tagbuildr.js will work in any browser that supports native ES5 features. For the all lingering IE, this means IE9+.
