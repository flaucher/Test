

function _Browser(){
this.equal = function(value)
{
/// <summary> These methods will perform assertions on the specified target on the current element. The targets can be an attribute value, the element's inner text and a css property. Link:http://nightwatchjs.org/api#expect-matchers </summary>
/// <param name="value" optional="false" >  </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.contain = function(value)
{
/// <summary> These methods will perform assertions on the specified target on the current element. The targets can be an attribute value, the element's inner text and a css property. Link:http://nightwatchjs.org/api#expect-matchers </summary>
/// <param name="value" optional="false" >  </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.match = function(regex)
{
/// <summary> These methods will perform assertions on the specified target on the current element. The targets can be an attribute value, the element's inner text and a css property. Link:http://nightwatchjs.org/api#expect-matchers </summary>
/// <param name="regex" optional="false" >  </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.not = function()
{
/// <summary> Negates any of assertions following in the chain. Link:http://nightwatchjs.org/api#expect-negation </summary>

/// <returns type="_Browser">Browser instance</returns>
};

this.before = function(ms)
{
/// <summary> These methods perform the same thing which is essentially retrying the assertion for the given amount of time (in milliseconds). before or after can be chained to any assertion and thus adding retry capability. Link:http://nightwatchjs.org/api#expect-before </summary>
/// <param name="ms" optional="false" >  </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.after = function(ms)
{
/// <summary> These methods perform the same thing which is essentially retrying the assertion for the given amount of time (in milliseconds). before or after can be chained to any assertion and thus adding retry capability. Link:http://nightwatchjs.org/api#expect-before </summary>
/// <param name="ms" optional="false" >  </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.a = function(type, message)
{
/// <summary> Checks if the type (i.e. tag name) of a specified element is of an expected value. Link:http://nightwatchjs.org/api#expect-a </summary>
/// <param name="type" type="string" optional="false" > The expected type </param>
/// <param name="message" type="string" optional="true" > Optional log message to display in the output. If missing, one is displayed by default. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.attribute = function(attribute, message)
{
/// <summary> Checks if a given attribute of an element exists and optionally if it has the expected value. Link:http://nightwatchjs.org/api#expect-attribute </summary>
/// <param name="attribute" type="string" optional="false" > The attribute name </param>
/// <param name="message" type="string" optional="true" > Optional log message to display in the output. If missing, one is displayed by default. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.css = function(property, message)
{
/// <summary> Checks a given css property of an element exists and optionally if it has the expected value. Link:http://nightwatchjs.org/api#expect-css </summary>
/// <param name="property" type="string" optional="false" > The css property name </param>
/// <param name="message" type="string" optional="true" > Optional log message to display in the output. If missing, one is displayed by default.* </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.enabled = function()
{
/// <summary> Property that checks if an element is currently enabled. Link:http://nightwatchjs.org/api#expect-enabled </summary>

/// <returns type="_Browser">Browser instance</returns>
};

this.present = function()
{
/// <summary> Property that checks if an element is present in the DOM. Link:http://nightwatchjs.org/api#expect-present </summary>

/// <returns type="_Browser">Browser instance</returns>
};

this.selected = function()
{
/// <summary> Property that checks if an OPTION element, or an INPUT element of type checkbox or radio button is currently selected. Link:http://nightwatchjs.org/api#expect-selected </summary>

/// <returns type="_Browser">Browser instance</returns>
};

this.text = function()
{
/// <summary> Property that retrieves the text contained by an element. Can be chained to check if contains/equals/matches the specified text or regex. Link:http://nightwatchjs.org/api#expect-text </summary>

/// <returns type="_Browser">Browser instance</returns>
};

this.value = function()
{
/// <summary> Property that retrieves the value (i.e. the value attributed) of an element. Can be chained to check if contains/equals/matches the specified text or regex. Link:http://nightwatchjs.org/api#expect-value </summary>

/// <returns type="_Browser">Browser instance</returns>
};

this.visible = function()
{
/// <summary> Property that asserts the visibility of a specified element. Link:http://nightwatchjs.org/api#expect-visible </summary>

/// <returns type="_Browser">Browser instance</returns>
};

this.attributeContains = function(selector, attribute, expected, message)
{
/// <summary> Checks if the given attribute of an element contains the expected value. Link:http://nightwatchjs.org/api#assert-attributeContains </summary>
/// <param name="selector" type="string" optional="false" > The selector (CSS / Xpath) used to locate the element. </param>
/// <param name="attribute" type="string" optional="false" > The attribute name </param>
/// <param name="expected" type="string" optional="false" > The expected contained value of the attribute to check. </param>
/// <param name="message" type="string" optional="true" > Optional log message to display in the output. If missing, one is displayed by default. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.attributeEquals = function(cssSelector, attribute, expected, msg)
{
/// <summary> Checks if the given attribute of an element has the expected value. Link:http://nightwatchjs.org/api#assert-attributeEquals </summary>
/// <param name="cssSelector" type="string" optional="false" > The CSS selector used to locate the element. </param>
/// <param name="attribute" type="string" optional="false" > The attribute name </param>
/// <param name="expected" type="string" optional="false" > The expected value of the attribute to check. </param>
/// <param name="msg" type="string" optional="true" > Optional log message to display in the output. If missing, one is displayed by default. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.containsText = function(cssSelector, expectedText, msg)
{
/// <summary> Checks if the given element contains the specified text. Link:http://nightwatchjs.org/api#assert-containsText </summary>
/// <param name="cssSelector" type="string" optional="false" > The CSS selector used to locate the element. </param>
/// <param name="expectedText" type="string" optional="false" > The text to look for. </param>
/// <param name="msg" type="string" optional="true" > Optional log message to display in the output. If missing, one is displayed by default. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.cssClassPresent = function(cssSelector, className, msg)
{
/// <summary> Checks if the given element has the specified CSS class. Link:http://nightwatchjs.org/api#assert-cssClassPresent </summary>
/// <param name="cssSelector" type="string" optional="false" > The CSS selector used to locate the element. </param>
/// <param name="className" type="string" optional="false" > The CSS class to look for. </param>
/// <param name="msg" type="string" optional="true" > Optional log message to display in the output. If missing, one is displayed by default. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.cssClassNotPresent = function(cssSelector, className, msg)
{
/// <summary> Checks if the given element does not have the specified CSS class. Link:http://nightwatchjs.org/api#assert-cssClassNotPresent </summary>
/// <param name="cssSelector" type="string" optional="false" > The CSS selector used to locate the element. </param>
/// <param name="className" type="string" optional="false" > The CSS class to look for. </param>
/// <param name="msg" type="string" optional="true" > Optional log message to display in the output. If missing, one is displayed by default. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.cssProperty = function(cssSelector, cssProperty, expected, msg)
{
/// <summary> Checks if the specified css property of a given element has the expected value. Link:http://nightwatchjs.org/api#assert-cssProperty </summary>
/// <param name="cssSelector" type="string" optional="false" > The CSS selector used to locate the element. </param>
/// <param name="cssProperty" type="string" optional="false" > The CSS property. </param>
/// <param name="expected" type="string|number" optional="false" > The expected value of the css property to check. </param>
/// <param name="msg" type="string" optional="true" > Optional log message to display in the output. If missing, one is displayed by default. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.elementPresent = function(cssSelector, msg)
{
/// <summary> Checks if the given element exists in the DOM. Link:http://nightwatchjs.org/api#assert-elementPresent </summary>
/// <param name="cssSelector" type="string" optional="false" > The CSS selector used to locate the element. </param>
/// <param name="msg" type="string" optional="true" > Optional log message to display in the output. If missing, one is displayed by default. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.elementNotPresent = function(cssSelector, msg)
{
/// <summary> Checks if the given element does not exist in the DOM. Link:http://nightwatchjs.org/api#assert-elementNotPresent </summary>
/// <param name="cssSelector" type="string" optional="false" > The CSS selector used to locate the element. </param>
/// <param name="msg" type="string" optional="true" > Optional log message to display in the output. If missing, one is displayed by default. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.hidden = function(cssSelector, msg)
{
/// <summary> Checks if the given element is not visible on the page. Link:http://nightwatchjs.org/api#assert-hidden </summary>
/// <param name="cssSelector" type="string" optional="false" > The CSS selector used to locate the element. </param>
/// <param name="msg" type="string" optional="true" > Optional log message to display in the output. If missing, one is displayed by default. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.title = function(expected, msg)
{
/// <summary> Checks if the page title equals the given value. Link:http://nightwatchjs.org/api#assert-title </summary>
/// <param name="expected" type="string" optional="false" > The expected page title. </param>
/// <param name="msg" type="string" optional="true" > Optional log message to display in the output. If missing, one is displayed by default. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.urlContains = function(expectedText, msg)
{
/// <summary> Checks if the current URL contains the given value. Link:http://nightwatchjs.org/api#assert-urlContains </summary>
/// <param name="expectedText" type="string" optional="false" > The value expected to exist within the current URL. </param>
/// <param name="msg" type="string" optional="true" > Optional log message to display in the output. If missing, one is displayed by default. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.urlEquals = function(expected, msg)
{
/// <summary> Checks if the current url equals the given value. Link:http://nightwatchjs.org/api#assert-urlEquals </summary>
/// <param name="expected" type="string" optional="false" > The expected url. </param>
/// <param name="msg" type="string" optional="true" > Optional log message to display in the output. If missing, one is displayed by default. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.value = function(cssSelector, expectedText, msg)
{
/// <summary> Checks if the given form element's value equals the expected value. Link:http://nightwatchjs.org/api#assert-value </summary>
/// <param name="cssSelector" type="string" optional="false" > The CSS selector used to locate the element. </param>
/// <param name="expectedText" type="string" optional="false" > The expected text. </param>
/// <param name="msg" type="string" optional="true" > Optional log message to display in the output. If missing, one is displayed by default. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.valueContains = function(cssSelector, expectedText, msg)
{
/// <summary> Checks if the given form element's value contains the expected value. Link:http://nightwatchjs.org/api#assert-valueContains </summary>
/// <param name="cssSelector" type="string" optional="false" > The CSS selector used to locate the element. </param>
/// <param name="expectedText" type="string" optional="false" > The expected text. </param>
/// <param name="msg" type="string" optional="true" > Optional log message to display in the output. If missing, one is displayed by default. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.visible = function(cssSelector, msg)
{
/// <summary> Checks if the given element is visible on the page. Link:http://nightwatchjs.org/api#assert-visible </summary>
/// <param name="cssSelector" type="string" optional="false" > The CSS selector used to locate the element. </param>
/// <param name="msg" type="string" optional="true" > Optional log message to display in the output. If missing, one is displayed by default. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.clearValue = function(selector, callback)
{
/// <summary> Clear a textarea or a text input element's value. Uses elementIdValue protocol command. Link:http://nightwatchjs.org/api#clearValue </summary>
/// <param name="selector" type="string" optional="false" > The CSS/Xpath selector used to locate the element. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.click = function(selector, callback)
{
/// <summary> Simulates a click event on the given DOM element. Uses elementIdClick protocol command. Link:http://nightwatchjs.org/api#click </summary>
/// <param name="selector" type="string" optional="false" > The CSS/Xpath selector used to locate the element. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.closeWindow = function(callback)
{
/// <summary> Close the current window. This can be useful when you're working with multiple windows open (e.g. an OAuth login).Uses window protocol command. Link:http://nightwatchjs.org/api#closeWindow </summary>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.deleteCookie = function(The, callback)
{
/// <summary> Delete the cookie with the given name. This command is a no-op if there is no such cookie visible to the current page. Link:http://nightwatchjs.org/api#deleteCookie </summary>
/// <param name="The" type="cookieName" optional="false" > name of the cookie to delete. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.deleteCookies = function(callback)
{
/// <summary> Delete all cookies visible to the current page. Link:http://nightwatchjs.org/api#deleteCookies </summary>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.end = function(callback)
{
/// <summary> Ends the session. Uses session protocol command. Link:http://nightwatchjs.org/api#end </summary>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.getAttribute = function(selector, attribute, callback)
{
/// <summary> Retrieve the value of an attribute for a given DOM element. Uses elementIdAttribute protocol command. Link:http://nightwatchjs.org/api#getAttribute </summary>
/// <param name="selector" type="string" optional="false" > The CSS/Xpath selector used to locate the element. </param>
/// <param name="attribute" type="string" optional="false" > The attribute name to inspect. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.getCookie = function(name, callback)
{
/// <summary> Retrieve a single cookie visible to the current page. The cookie is returned as a cookie JSON object, as defined here. Link:http://nightwatchjs.org/api#getCookie </summary>
/// <param name="name" type="string" optional="false" > The cookie name. </param>
/// <param name="callback" type="function" optional="false" > The callback function which will receive the response as an argument. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.getCookies = function(callback)
{
/// <summary> Retrieve all cookies visible to the current page. The cookies are returned as an array of cookie JSON object, as defined here. Link:http://nightwatchjs.org/api#getCookies </summary>
/// <param name="callback" type="function" optional="false" > The callback function which will receive the response as an argument. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.getCssProperty = function(selector, cssProperty, callback)
{
/// <summary> Retrieve the value of a css property for a given DOM element. Uses elementIdCssProperty protocol command. Link:http://nightwatchjs.org/api#getCssProperty </summary>
/// <param name="selector" type="string" optional="false" > The CSS/Xpath selector used to locate the element. </param>
/// <param name="cssProperty" type="string" optional="false" > The CSS property to inspect. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.getElementSize = function(selector, callback)
{
/// <summary> Determine an element's size in pixels. Uses elementIdSize protocol command. Link:http://nightwatchjs.org/api#getElementSize </summary>
/// <param name="selector" type="string" optional="false" > The CSS/Xpath selector used to locate the element. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.getLocation = function(selector, callback)
{
/// <summary> Determine an element's location on the page. The point (0, 0) refers to the upper-left corner of the page. Link:http://nightwatchjs.org/api#getLocation </summary>
/// <param name="selector" type="string" optional="false" > The CSS/Xpath selector used to locate the element. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.getLocationInView = function(selector, callback)
{
/// <summary> Determine an element's location on the screen once it has been scrolled into view. Uses elementIdLocationInView protocol command. Link:http://nightwatchjs.org/api#getLocationInView </summary>
/// <param name="selector" type="string" optional="false" > The CSS/Xpath selector used to locate the element. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.getLog = function(typeString, callback)
{
/// <summary> Gets a log from selenium Link:http://nightwatchjs.org/api#getLog </summary>
/// <param name="typeString" type="string|function" optional="false" > Log type to request </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.getLogTypes = function(callback)
{
/// <summary> Gets the available log types Link:http://nightwatchjs.org/api#getLogTypes </summary>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.getTagName = function(selector, callback)
{
/// <summary> Query for an element's tag name. Uses elementIdName protocol command. Link:http://nightwatchjs.org/api#getTagName </summary>
/// <param name="selector" type="string" optional="false" > The CSS/Xpath selector used to locate the element. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.getText = function(selector, callback)
{
/// <summary> Returns the visible text for the element. Uses elementIdText protocol command. Link:http://nightwatchjs.org/api#getText </summary>
/// <param name="selector" type="string" optional="false" > The CSS/Xpath selector used to locate the element. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.getTitle = function(callback)
{
/// <summary> Returns the title of the current page. Uses title protocol command. Link:http://nightwatchjs.org/api#getTitle </summary>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.getValue = function(selector, callback)
{
/// <summary> Returns a form element current value. Uses elementIdValue protocol command. Link:http://nightwatchjs.org/api#getValue </summary>
/// <param name="selector" type="string" optional="false" > The CSS/Xpath selector used to locate the element. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.init = function(url)
{
/// <summary> This command is an alias to url and also a convenience method when called without any arguments in the sense that it performs a call to .url() with passing the value of launch_url field from the settings file.Uses url protocol command. Link:http://nightwatchjs.org/api#init </summary>
/// <param name="url" type="string" optional="true" > Url to navigate to. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.injectScript = function(scriptUrl, id, callback)
{
/// <summary> Utility command to load an external script into the page specified by url. Link:http://nightwatchjs.org/api#injectScript </summary>
/// <param name="scriptUrl" type="string" optional="false" > The script file url </param>
/// <param name="id" type="string" optional="true" > Dom element id to be set on the script tag. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.isLogAvailable = function(typeString, callback)
{
/// <summary> Utility command to test if the log type is available Link:http://nightwatchjs.org/api#isLogAvailable </summary>
/// <param name="typeString" type="string|function" optional="false" > Type of log to test </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.isVisible = function(selector, callback)
{
/// <summary> Determine if an element is currently displayed. Uses elementIdDisplayed protocol command. Link:http://nightwatchjs.org/api#isVisible </summary>
/// <param name="selector" type="string" optional="false" > The CSS/Xpath selector used to locate the element. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.maximizeWindow = function(callback)
{
/// <summary> Maximizes the current window. Link:http://nightwatchjs.org/api#maximizeWindow </summary>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.moveToElement = function(selector, xoffset, yoffset, callback)
{
/// <summary> Move the mouse by an offset of the specified element. Uses moveTo protocol command. Link:http://nightwatchjs.org/api#moveToElement </summary>
/// <param name="selector" type="string" optional="false" > The CSS/Xpath selector used to locate the element. </param>
/// <param name="xoffset" type="number" optional="false" > X offset to move to, relative to the top-left corner of the element. </param>
/// <param name="yoffset" type="number" optional="false" > Y offset to move to, relative to the top-left corner of the element. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.pause = function(ms, callback)
{
/// <summary> Suspends the test for the given time in milliseconds. If the milliseconds argument is missing it will suspend the test indefinitely Link:http://nightwatchjs.org/api#pause </summary>
/// <param name="ms" type="number" optional="false" > The number of milliseconds to wait. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.perform = function(callback)
{
/// <summary> A simple perform command which allows access to the "api" in a callback.Can be useful if you want to read variables set by other commands. Link:http://nightwatchjs.org/api#perform </summary>
/// <param name="callback" type="function" optional="false" > The function to run as part of the queue. Its signature can have up to two parameters. No parameters: callback runs and perform completes immediately at the end of the execution of the callback. One parameter: allows for asynchronous execution within the callback providing a done callback function for completion as the first argument. Two parameters: allows for asynchronous execution with the "api" object passed in as the first argument, followed by the done callback. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.resizeWindow = function(width, height, callback)
{
/// <summary> Resizes the current window. Link:http://nightwatchjs.org/api#resizeWindow </summary>
/// <param name="width" type="number" optional="false" > The new window width. </param>
/// <param name="height" type="number" optional="false" > The new window height. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.saveScreenshot = function(fileName, callback)
{
/// <summary> Take a screenshot of the current page and saves it as the given filename. Link:http://nightwatchjs.org/api#saveScreenshot </summary>
/// <param name="fileName" type="string" optional="false" > The complete path to the file name where the screenshot should be saved. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.setCookie = function(cookie, callback)
{
/// <summary> Set a cookie, specified as a cookie JSON object, as defined here. Link:http://nightwatchjs.org/api#setCookie </summary>
/// <param name="cookie" type="object" optional="false" > The cookie object. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.setValue = function(selector, value, callback)
{
/// <summary> See sessionsessionidelementidvalue Link:http://nightwatchjs.org/api#setValue </summary>
/// <param name="selector" type="string" optional="false" > The CSS/Xpath selector used to locate the element. </param>
/// <param name="value" type="string|array" optional="false" > The text to send to the element or key strokes. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.setWindowPosition = function(offsetX, offsetY, callback)
{
/// <summary> Sets the current window position. Link:http://nightwatchjs.org/api#setWindowPosition </summary>
/// <param name="offsetX" type="number" optional="false" > The new window offset x-position. </param>
/// <param name="offsetY" type="number" optional="false" > The new window offset y-position. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.submitForm = function(selector, callback)
{
/// <summary> Submit a FORM element. The submit command may also be applied to any element that is a descendant of a FORM element. Uses submit protocol command. Link:http://nightwatchjs.org/api#submitForm </summary>
/// <param name="selector" type="string" optional="false" > The CSS/Xpath selector used to locate the element. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.switchWindow = function(handleOrName, callback)
{
/// <summary> Change focus to another window. The window to change focus to may be specified by its server assigned window handle, or by the value of its name attribute. Link:http://nightwatchjs.org/api#switchWindow </summary>
/// <param name="handleOrName" type="string" optional="false" > The server assigned window handle or the name attribute. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.urlHash = function(hash)
{
/// <summary> Convenience method that adds the specified hash (i.e. url fragment) to the current value of the launch_url as set in nightwatch.json. Link:http://nightwatchjs.org/api#urlHash </summary>
/// <param name="hash" type="string" optional="false" > The hash to add/replace to the current url (i.e. the value set in the launch_url property in nightwatch.json). </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.useCss = function(callback)
{
/// <summary> Sets the locate strategy for selectors to css selector, therefore every following selector needs to be specified as css. Link:http://nightwatchjs.org/api#useCss </summary>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.useXpath = function(callback)
{
/// <summary> Sets the locate strategy for selectors to xpath, therefore every following selector needs to be specified as xpath. Link:http://nightwatchjs.org/api#useXpath </summary>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.waitForElementNotPresent = function(selector, time, abortOnFailure, callback, message)
{
/// <summary> Opposite of waitForElementPresent. Waits a given time in milliseconds for an element to be not present (i.e. removed) in the page before performing any other commands or assertions. Link:http://nightwatchjs.org/api#waitForElementNotPresent </summary>
/// <param name="selector" type="string" optional="false" > The selector (CSS / Xpath) used to locate the element. </param>
/// <param name="time" type="number" optional="false" > The number of milliseconds to wait. The runner performs repeated checks every 500 ms. </param>
/// <param name="abortOnFailure" type="boolean" optional="true" > By the default if the element is not found the test will fail. Set this to false if you wish for the test to continue even if the assertion fails. To set this globally you can define a property `abortOnAssertionFailure` in your globals. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <param name="message" type="string" optional="true" > Optional message to be shown in the output; the message supports two placeholders: %s for current selector and %d for the time (e.g. Element %s was not in the page for %d ms). </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.waitForElementNotVisible = function(selector, time, abortOnFailure, callback, message)
{
/// <summary> Opposite of waitForElementVisible. Waits a given time in milliseconds for an element to be not visible (i.e. hidden but existing) in the page before performing any other commands or assertions. Link:http://nightwatchjs.org/api#waitForElementNotVisible </summary>
/// <param name="selector" type="string" optional="false" > The selector (CSS / Xpath) used to locate the element. </param>
/// <param name="time" type="number" optional="false" > The number of milliseconds to wait. The runner performs repeated checks every 500 ms. </param>
/// <param name="abortOnFailure" type="boolean" optional="true" > By the default if the element is not found the test will fail. Set this to false if you wish for the test to continue even if the assertion fails. To set this globally you can define a property `abortOnAssertionFailure` in your globals. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <param name="message" type="string" optional="true" > Optional message to be shown in the output; the message supports two placeholders: %s for current selector and %d for the time (e.g. Element %s was not in the page for %d ms). </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.waitForElementPresent = function(selector, time, abortOnFailure, callback, message)
{
/// <summary> Waits a given time in milliseconds for an element to be present in the page before performing any other commands or assertions. Link:http://nightwatchjs.org/api#waitForElementPresent </summary>
/// <param name="selector" type="string" optional="false" > The selector (CSS / Xpath) used to locate the element. </param>
/// <param name="time" type="number" optional="false" > The number of milliseconds to wait. The runner performs repeated checks every 500 ms. </param>
/// <param name="abortOnFailure" type="boolean" optional="true" > By the default if the element is not found the test will fail. Set this to false if you wish for the test to continue even if the assertion fails. To set this globally you can define a property `abortOnAssertionFailure` in your globals. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <param name="message" type="string" optional="true" > Optional message to be shown in the output; the message supports two placeholders: %s for current selector and %d for the time (e.g. Element %s was not in the page for %d ms). </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.waitForElementVisible = function(selector, time, abortOnFailure, callback, message)
{
/// <summary> Waits a given time in milliseconds for an element to be visible in the page before performing any other commands or assertions. Link:http://nightwatchjs.org/api#waitForElementVisible </summary>
/// <param name="selector" type="string" optional="false" > The selector (CSS / Xpath) used to locate the element. </param>
/// <param name="time" type="number" optional="false" > The number of milliseconds to wait. The runner performs repeated checks every 500 ms. </param>
/// <param name="abortOnFailure" type="boolean" optional="true" > By the default if the element is not found the test will fail. Set this to false if you wish for the test to continue even if the assertion fails. To set this globally you can define a property `abortOnAssertionFailure` in your globals. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <param name="message" type="string" optional="true" > Optional message to be shown in the output; the message supports two placeholders: %s for current selector and %d for the time (e.g. Element %s was not in the page for %d ms). </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.acceptAlert = function(callback)
{
/// <summary> See /session/:sessionId/accept_alert Link:http://nightwatchjs.org/api#acceptAlert </summary>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.back = function(callback)
{
/// <summary> See /session/:sessionId/back Link:http://nightwatchjs.org/api#back </summary>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.contexts = function(callback)
{
/// <summary> Get a list of the available contexts. Link:http://nightwatchjs.org/api#contexts </summary>
/// <param name="callback" type="function" optional="false" > Callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.cookie = function(method, callbackOrCookie)
{
/// <summary> See /session/:sessionId/cookie Link:http://nightwatchjs.org/api#cookie </summary>
/// <param name="method" type="string" optional="false" > Http method </param>
/// <param name="callbackOrCookie" type="function|object" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.currentContext = function(callback)
{
/// <summary> Get current context. Link:http://nightwatchjs.org/api#currentContext </summary>
/// <param name="callback" type="function" optional="false" > Callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.dismissAlert = function(callback)
{
/// <summary> See /session/:sessionId/dismiss_alert Link:http://nightwatchjs.org/api#dismissAlert </summary>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.doubleClick = function(callback)
{
/// <summary> Double-clicks at the current mouse coordinates (set by moveto). Link:http://nightwatchjs.org/api#doubleClick </summary>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.element = function(using, value, callback)
{
/// <summary> See /session/:sessionId/element Link:http://nightwatchjs.org/api#element </summary>
/// <param name="using" type="string" optional="false" > The locator strategy to use. </param>
/// <param name="value" type="string" optional="false" > The search target. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.elementActive = function(callback)
{
/// <summary> See /session/:sessionId/element/active Link:http://nightwatchjs.org/api#elementActive </summary>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.elementIdAttribute = function(id, attributeName, callback)
{
/// <summary> See /session/:sessionId/element/:id/attribute/:name Link:http://nightwatchjs.org/api#elementIdAttribute </summary>
/// <param name="id" type="string" optional="false" > ID of the element to route the command to. </param>
/// <param name="attributeName" type="string" optional="false" > The attribute name </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.elementIdClear = function(id, callback)
{
/// <summary> See /session/:sessionId/element/:id/clear Link:http://nightwatchjs.org/api#elementIdClear </summary>
/// <param name="id" type="string" optional="false" > ID of the element to route the command to. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.elementIdClick = function(id, callback)
{
/// <summary> See /session/:sessionId/element/:id/click Link:http://nightwatchjs.org/api#elementIdClick </summary>
/// <param name="id" type="string" optional="false" > ID of the element to route the command to. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.elementIdCssProperty = function(id, cssPropertyName, callback)
{
/// <summary> See /session/:sessionId/element/:id/css/:propertyName Link:http://nightwatchjs.org/api#elementIdCssProperty </summary>
/// <param name="id" type="string" optional="false" > ID of the element to route the command to. </param>
/// <param name="cssPropertyName" type="string" optional="false" >  </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.elementIdDisplayed = function(id, callback)
{
/// <summary> See /session/:sessionId/element/:id/displayed Link:http://nightwatchjs.org/api#elementIdDisplayed </summary>
/// <param name="id" type="string" optional="false" > ID of the element to route the command to. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.elementIdElement = function(id, using, value, callback)
{
/// <summary> See /session/:sessionId/element/:id/element Link:http://nightwatchjs.org/api#elementIdElement </summary>
/// <param name="id" type="string" optional="false" > ID of the element to route the command to. </param>
/// <param name="using" type="string" optional="false" > The locator strategy to use. </param>
/// <param name="value" type="string" optional="false" > The search target. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.elementIdElements = function(id, using, value, callback)
{
/// <summary> See /session/:sessionId/element/:id/elements Link:http://nightwatchjs.org/api#elementIdElements </summary>
/// <param name="id" type="string" optional="false" > ID of the element to route the command to. </param>
/// <param name="using" type="string" optional="false" > The locator strategy to use. </param>
/// <param name="value" type="string" optional="false" > The search target. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.elementIdEnabled = function(id, callback)
{
/// <summary> See /session/:sessionId/element/:id/enabled Link:http://nightwatchjs.org/api#elementIdEnabled </summary>
/// <param name="id" type="string" optional="false" > ID of the element to route the command to. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.elementIdEquals = function(id, otherId, callback)
{
/// <summary> See /session/:sessionId/element/:id/equals/:other Link:http://nightwatchjs.org/api#elementIdEquals </summary>
/// <param name="id" type="string" optional="false" > ID of the element to route the command to. </param>
/// <param name="otherId" type="string" optional="false" > ID of the element to compare against. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.elementIdLocation = function(id, callback)
{
/// <summary> See /session/:sessionId/element/:id/location Link:http://nightwatchjs.org/api#elementIdLocation </summary>
/// <param name="id" type="string" optional="false" > ID of the element to route the command to. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.elementIdLocationInView = function(id, callback)
{
/// <summary> See /session/:sessionId/element/:id/location_in_view Link:http://nightwatchjs.org/api#elementIdLocationInView </summary>
/// <param name="id" type="string" optional="false" > ID of the element to route the command to. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.elementIdName = function(id, callback)
{
/// <summary> See /session/:sessionId/element/:id/name Link:http://nightwatchjs.org/api#elementIdName </summary>
/// <param name="id" type="string" optional="false" > ID of the element to route the command to. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.elementIdSelected = function(id, callback)
{
/// <summary> See /session/:sessionId/element/:id/selected Link:http://nightwatchjs.org/api#elementIdSelected </summary>
/// <param name="id" type="string" optional="false" > ID of the element to route the command to. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.elementIdSize = function(id, callback)
{
/// <summary> See /session/:sessionId/element/:id/size Link:http://nightwatchjs.org/api#elementIdSize </summary>
/// <param name="id" type="string" optional="false" > ID of the element to route the command to. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.elementIdText = function(id, callback)
{
/// <summary> See /session/:sessionId/element/:id/text Link:http://nightwatchjs.org/api#elementIdText </summary>
/// <param name="id" type="string" optional="false" > ID of the element to route the command to. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.elementIdValue = function(id, value, callback)
{
/// <summary> See /session/:sessionId/element/:id/value Link:http://nightwatchjs.org/api#elementIdValue </summary>
/// <param name="id" type="string" optional="false" > ID of the element to route the command to. </param>
/// <param name="value" type="string|array|none" optional="true" > Value to send to element in case of a POST </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.elements = function(using, value, callback)
{
/// <summary> See /session/:sessionId/elements Link:http://nightwatchjs.org/api#elements </summary>
/// <param name="using" type="string" optional="false" > The locator strategy to use. </param>
/// <param name="value" type="string" optional="false" > The search target. </param>
/// <param name="callback" type="function" optional="false" > Callback function to be invoked with the result when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.execute = function(body, args, callback)
{
/// <summary> See /session/:sessionId/execute Link:http://nightwatchjs.org/api#execute </summary>
/// <param name="body" type="string|function" optional="false" > The function body to be injected. </param>
/// <param name="args" type="Array" optional="false" > An array of arguments which will be passed to the function. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.executeAsync = function(script, args, callback)
{
/// <summary> See /session/:sessionId/execute_async Link:http://nightwatchjs.org/api#executeAsync </summary>
/// <param name="script" type="string|function" optional="false" > The function body to be injected. </param>
/// <param name="args" type="Array" optional="false" > An array of arguments which will be passed to the function. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.forward = function(callback)
{
/// <summary> See /session/:sessionId/back Link:http://nightwatchjs.org/api#forward </summary>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.frame = function(frameId, callback)
{
/// <summary> See /session/:sessionId/frame Link:http://nightwatchjs.org/api#frame </summary>
/// <param name="frameId" type="string|number|null" optional="true" > Identifier for the frame to change focus to. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.frameParent = function(callback)
{
/// <summary> See /session/:sessionId/frame/parent Link:http://nightwatchjs.org/api#frameParent </summary>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.getAlertText = function(callback)
{
/// <summary> See /session/:sessionId/alert_text Link:http://nightwatchjs.org/api#getAlertText </summary>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.getOrientation = function(callback)
{
/// <summary> Get the current browser orientation. Link:http://nightwatchjs.org/api#getOrientation </summary>
/// <param name="callback" type="function" optional="false" > Callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.keys = function(keysToSend, callback)
{
/// <summary> See /session/:sessionId/keys Link:http://nightwatchjs.org/api#keys </summary>
/// <param name="keysToSend" type="Array" optional="false" > The keys sequence to be sent. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.mouseButtonClick = function(button, callback)
{
/// <summary> See /session/:sessionId/click Link:http://nightwatchjs.org/api#mouseButtonClick </summary>
/// <param name="button" type="string|number" optional="false" > The mouse button </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.mouseButtonDown = function(button, callback)
{
/// <summary> See /session/:sessionId/buttondown Link:http://nightwatchjs.org/api#mouseButtonDown </summary>
/// <param name="button" type="string|number" optional="false" > The mouse button </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.mouseButtonUp = function(button, callback)
{
/// <summary> See /session/:sessionId/buttonup Link:http://nightwatchjs.org/api#mouseButtonUp </summary>
/// <param name="button" type="string|number" optional="false" > The mouse button </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.moveTo = function(element, xoffset, yoffset, callback)
{
/// <summary> See /session/:sessionId/moveto Link:http://nightwatchjs.org/api#moveTo </summary>
/// <param name="element" type="string" optional="false" > Opaque ID assigned to the element to move to. If not specified or is null, the offset is relative to current position of the mouse. </param>
/// <param name="xoffset" type="number" optional="false" > X offset to move to, relative to the top-left corner of the element. If not specified, the mouse will move to the middle of the element. </param>
/// <param name="yoffset" type="number" optional="false" > Y offset to move to, relative to the top-left corner of the element. If not specified, the mouse will move to the middle of the element. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.refresh = function(callback)
{
/// <summary> See /session/:sessionId/refresh Link:http://nightwatchjs.org/api#refresh </summary>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.screenshot = function(log_screenshot_data, callback)
{
/// <summary> See /session/:sessionId/screenshot Link:http://nightwatchjs.org/api#screenshot </summary>
/// <param name="log_screenshot_data" type="boolean" optional="false" > Whether or not the screenshot data should appear in the logs when running with --verbose </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.session = function(action, sessionId, callback)
{
/// <summary> See /session Link:http://nightwatchjs.org/api#session </summary>
/// <param name="action" type="string" optional="true" > The http verb to use, can be "get", "post" or "delete". If only the callback is passed, get is assumed as default. </param>
/// <param name="sessionId" type="string" optional="true" > The id of the session to get info about or delete. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.sessionLog = function(typeString, callback)
{
/// <summary> See /session/:sessionId/log Link:http://nightwatchjs.org/api#sessionLog </summary>
/// <param name="typeString" type="string" optional="false" > Type of log to request </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.sessionLogTypes = function(callback)
{
/// <summary> See /session/:sessionId/log/types Link:http://nightwatchjs.org/api#sessionLogTypes </summary>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.sessions = function(callback)
{
/// <summary> See /sessions Link:http://nightwatchjs.org/api#sessions </summary>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.setAlertText = function(value, callback)
{
/// <summary> See /session/:sessionId/alert_text Link:http://nightwatchjs.org/api#setAlertText </summary>
/// <param name="value" type="string" optional="false" > Keystrokes to send to the prompt() dialog </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.setContext = function(context, callback)
{
/// <summary> Sets the context. Link:http://nightwatchjs.org/api#setContext </summary>
/// <param name="context" type="string" optional="false" > context name to switch to - a string representing an available context. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.setOrientation = function(orientation, callback)
{
/// <summary> Sets the browser orientation. Link:http://nightwatchjs.org/api#setOrientation </summary>
/// <param name="orientation" type="string" optional="false" > The new browser orientation: {LANDSCAPE|PORTRAIT} </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.source = function(callback)
{
/// <summary> See /session/:sessionId/source Link:http://nightwatchjs.org/api#source </summary>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.status = function(callback)
{
/// <summary> See /status Link:http://nightwatchjs.org/api#status </summary>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.submit = function(id, callback)
{
/// <summary> See /session/:sessionId/element/:id/submit Link:http://nightwatchjs.org/api#submit </summary>
/// <param name="id" type="string" optional="false" > ID of the element to route the command to. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.timeouts = function(type, ms, callback)
{
/// <summary> See /session/:sessionId/timeouts Link:http://nightwatchjs.org/api#timeouts </summary>
/// <param name="type" type="string" optional="false" > The type of operation to set the timeout for. Valid values are: "script" for script timeouts, "implicit" for modifying the implicit wait timeout and "page load" for setting a page load timeout. </param>
/// <param name="ms" type="number" optional="false" > The amount of time, in milliseconds, that time-limited commands are permitted to run. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.timeoutsAsyncScript = function(ms, callback)
{
/// <summary> See /session/:sessionId/timeouts/async_script Link:http://nightwatchjs.org/api#timeoutsAsyncScript </summary>
/// <param name="ms" type="number" optional="false" > The amount of time, in milliseconds, that time-limited commands are permitted to run. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.timeoutsImplicitWait = function(ms, callback)
{
/// <summary> See /session/:sessionId/timeouts/implicit_wait Link:http://nightwatchjs.org/api#timeoutsImplicitWait </summary>
/// <param name="ms" type="number" optional="false" > The amount of time, in milliseconds, that time-limited commands are permitted to run. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.title = function(callback)
{
/// <summary> See /session/:sessionId/title Link:http://nightwatchjs.org/api#title </summary>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.url = function(url, callback)
{
/// <summary> See /session/:sessionId/url Link:http://nightwatchjs.org/api#url </summary>
/// <param name="url" type="string|function" optional="true" > If missing, it will return the URL of the current page as an argument to the supplied callback </param>
/// <param name="callback" type="Function" optional="true" >  </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.window = function(method, handleOrName, callback)
{
/// <summary> See /session/:sessionId/window Link:http://nightwatchjs.org/api#window </summary>
/// <param name="method" type="string" optional="false" > The HTTP method to use </param>
/// <param name="handleOrName" type="string" optional="false" > The window to change focus to. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.windowHandle = function(callback)
{
/// <summary> See /session/:sessionId/window_handle Link:http://nightwatchjs.org/api#windowHandle </summary>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.windowHandles = function(callback)
{
/// <summary> See /session/:sessionId/window_handles Link:http://nightwatchjs.org/api#windowHandles </summary>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.windowMaximize = function(handleOrName, callback)
{
/// <summary> See /session/:sessionId/window/:windowHandle/maximize Link:http://nightwatchjs.org/api#windowMaximize </summary>
/// <param name="handleOrName" type="string" optional="true" > windowHandle URL parameter; if it is "current", the currently active window will be maximized. </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.windowPosition = function(windowHandle, offsetX, offsetY, callback)
{
/// <summary> See /session/:sessionId/window/:windowHandle/position Link:http://nightwatchjs.org/api#windowPosition </summary>
/// <param name="windowHandle" type="string" optional="false" >  </param>
/// <param name="offsetX" type="number" optional="false" >  </param>
/// <param name="offsetY" type="number" optional="false" >  </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

this.windowSize = function(windowHandle, width, height, callback)
{
/// <summary> See /session/:sessionId/window/:windowHandle/size Link:http://nightwatchjs.org/api#windowSize </summary>
/// <param name="windowHandle" type="string" optional="false" >  </param>
/// <param name="width" type="number" optional="false" >  </param>
/// <param name="height" type="number" optional="false" >  </param>
/// <param name="callback" type="function" optional="true" > Optional callback function to be called when the command finishes. </param>
/// <returns type="_Browser">Browser instance</returns>
};

}
