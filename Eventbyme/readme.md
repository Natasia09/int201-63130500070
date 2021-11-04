#  :cactus: Event  :cactus:

## Ways of using web events
### :mushroom:  1.Event Handlers Properties
 have less power and options, but are easier to use 
 
“ Event handler ก็คือ Callback Function ธรรมดาๆ ที่เรากำหนดให้แต่ละ event “
### Synthetic Event
React จะมีสิ่งที่เรียกว่า Synthetic Event ซึ่งจะช่วยให้ event ในทุก Browser ทำงานได้ไม่แตกต่างกัน

:round_pushpin: เกิดEvents >> Synthetic >>Event Handlers

โดยเราจะได้รับ Synthetic Event จาก Event Handler หลังจากเกิด Event นั่นเอง
JavaScript Synthetic Event ก็คือ Object { } ธรรมดาๆ นี่เอง
ใน Synthetic Event มี key ที่ใช้บ่อยๆคือ

####  .target ใช้สำหรับอ่านค่าจาก element ที่เกิด event

####  .preventDefault() ใช้ยกเลิก default action ของ HTML

 
####   1.1 Event Handlers Properties: inline event handlers
```````
<input type="button" value="Click Me" onclick="console.log('Clicked')"/>
<input type="button" value="Click Me" onclick="showMessage()"/>
```````
####   1.2 Event Handlers Properties: event handler functions
*ควรเขียน Function แบบ Arrow Function เพื่อป้องกันปัญหา this เปลี่ยน
Example
``````````
const btn = document.getElementById("myBtn");
btn.onclick = function() { 
console.log("Clicked"); 
};
``````````
* When assigning event handlers, the event handler is considered to be 
a method of the element. 

```````````````````
const btn = document.getElementById("myBtn");
btn.onclick = function() { 
console.log(btn.id); // "myBtn"
};
```````````````````
* remove an event handler assigned by setting the value of the 
event handler property to null
```````````````````
btn.onclick = null;
```````````````````

### :mushroom:  2.Adding and removing event handlers
There are two methods to deal with the assignment and removal of 
event handlers:
* addEventListener() 
* removeEventListener().

These methods exist on all DOM nodes and accept three arguments:
1. the event name to handle
2. the event handler function
3. a Boolean value indicating whether to call the event handler during the 
capture phase (true) or during the bubble phase (false). 
Bubble phase is default.
````````````````
const btn = document.getElementById("myBtn");
btn.addEventListener("click", () => { 
console.log(btn.id);
}, false);

````````````````
#### Adding multiple event handlers
````````````````````````````````
const btn = document.getElementById("myBtn");
btn.addEventListener("click", () => { 
console.log(btn.id);
}, false);
btn.addEventListener("click", () => { 
console.log("Hello world!");
}, false);
````````````````````````````````



### :seedling: Input Events
