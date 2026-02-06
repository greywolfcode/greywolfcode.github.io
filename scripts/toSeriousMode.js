const pattern = /[a-zA-Z0-9]/; //define searching pattern for a-z, A-Z, and 0-9
let currentString = ""; //define storage string

function getKeyPress(event)
{
    if (event.key == "Backspace") //allow user to use backspace to remove typos
    {
        currentString = currentString.slice(0, -1);
    }
    else if (event.key == "Enter")
        {
            if (currentString == "SeriousModeNow") //go to serious mode page if string is matched
            {
                location.href = './pages/seriousMode.html'; //doesn't need to go up a level becuase index.html is on the top level
            }
        }
    else if (pattern.test(event.key) && event.key.length == 1) //only want a-z, A-Z, and 0-9 to be valid inputs
    {
        currentString += event.key;
    }
}

document.addEventListener("keydown", getKeyPress) //add event listener to document