/*
Code in Api.js

use export keywords
Ref : https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
 */
// define function asyncCall
// use async and await function method
// Reff: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

export const asyncCall = async () => {
    // apiurl = this is api url
    let apiurl = "http://localhost/wp_tester/wp-json/wp/v2/posts";
    try {
        // Call fetch api method like ajax type
        // response = resolved promise value holder
        const response = await fetch(apiurl).then(response => {
            // this return a promise | so resolve the promise here
            // then return json body
            return response.json();
        });
        // return your data
        return response;
    } catch (err) {
        // catch error
        console.log('fetch failed', err);
    }
}


// you can make own more custom function like above example in which you want to fetch data from some other api urls, or any kind of manipulation