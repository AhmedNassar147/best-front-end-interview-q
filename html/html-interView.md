* What does a `doctype` do?
    `The DTD specifies the rules for the markup language, so that the browsers render the content correctly`

* How do you serve a page with content in multiple languages?
    1-`Google Translate website tools.`
    2- `in lang for html tag then define the secondry languages in other tags`

* What kind of things must you be wary of when design or developing for multilingual sites?
    `users native languages word length , font size  and text direction will affect on layout`

* What are `data` attributes good for?
    1- `The data-* attributes is used to store custom data private to the page or application.`
    2- `The stored (custom) data can then be used in the page's JavaScript to create a more engaging user experience (without any Ajax calls or server-side database queries)`

* Consider HTML5 as an open web platform. What are the building blocks of HTML5?
    1- Semantics:
      `allowing you to describe more precisely what your content is. => (form, table,article,header,footer) Clearly defines its content`
    2- Offline and storage:
       `allowing webpages to store data on the client-side locally and operate offline more efficiently.`
    3- Multimedia: ` making video and audio`.
    4- `geolocation API.`
    5- `web worker API.`
    7-`File API`

* Describe the difference between a `cookie`, `sessionStorage` and `localStorage`.
      1- localStorage: `stores data with no expiration date, and gets cleared only JavaScript, or clearing the Browser can only be read on client-side`
      2- sessionStorage: `similar to localStorage but expires when the browser closed (not the tab) can only be read on client-side`.
      3- Cookie: `stores data that has to be sent back to the server with subsequent requests. Its expiration varies based on the type and the expiration          duration can be set from either server-side or client-side` 

* Describe the difference between <script>, <script async> and <script defer>.
    1-script `interpretor will parse the html code till hit the js so will pause the html parser and dwonload js fils and excute before parsing is resumed.`
    2-script async: `downloads the file during HTML parsing and will pause the HTML parser to execute it when it has finished downloading.`
    3-script defer:`downloads the file during HTML parsing and will only execute it after the parser has completed.`

* Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?
    1- `stylesheets in HEAD makes pages appear to be loading faster. This is because putting stylesheets in the HEAD allows the page to render progressively`.
    2- expeception: `should use deffer as attr in script tage`

* What is progressive rendering?
    1- `Progressive rendering is the name given to techniques used to render content for display as quickly as possible`.
    2- Examples of such techniques:
        `Lazy loading of images where (typically) some javascript will load an image when it comes into the browsers viewport instead of loading all images at page load.`

* Why you would use a `srcset` attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.
      `Srcset is a new attribute which allows you to specify different kind of images for different screen-sizes/orientation/display-types. you just provide a lot of different images separating them with a comma like this: srcset="image.jpg 160w, image2.jpg 320w, image3.jpg 2x"`
  