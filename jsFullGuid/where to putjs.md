Putting your scripts at the bottom of the page body lets the browser load the page first.
 While a script is downloading, the browser will not start any other downloads. In addition all parsing and rendering activity might be blocked.

 An alternative is to use defer="true" in the script tag. The defer attribute specifies that the script should be executed after the page has finished parsing, but it only works for external scripts.