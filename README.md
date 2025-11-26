https://roadmap.sh/projects/accordion
1. Created the main HTML structure
I started by building the basic layout in index.html. Inside the main container, I added:
A page heading
A short description
An accordion wrapper
Repeated sections containing a question (div.question) and its corresponding answer (p.answer)

2. Created and linked style.css and script.js
After setting up the HTML, I created a style.css file for the interface styling and a script.js file for the accordion functionality.

3. Styled the accordion
In style.css, I styled:
The main layout structure
The accordion container
The question and answer blocks
The open and close classes to handle visibility
Additionally:
.answer elements are hidden by default
.open class displays the answer
.close class hides it

4. Implemented the accordion logic in JavaScript
Inside script.js, I began by selecting all .question elements with getElementsByClassName.
Then I:
Added a click event listener to each question
Closed all answers before opening a new one
Opened only the clicked question’s answer
This ensures that only one answer is open at a time, solving the multiple-open issue.
