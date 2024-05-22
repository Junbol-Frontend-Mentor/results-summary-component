//-------DECLARING VARIABLES -------------
let myFramesContainer = document.getElementById('frames');

//------- FETCHING DATA ----------------

const fetchDataAsync = async () => {
  try {
    const response = await fetch('data.json'); // Use the correct path to your JSON file
    const parsedData = await response.json();
    createDataFrames(parsedData); // Call the function with parsed data to realease it from prison
  } catch (error) {
    console.error(error);
  }
};

fetchDataAsync();

//------- DEFINING FUNCTIONS    -------------

//----------- createDataFrames--------------

//--First try: very lost 🤪
/* const createDataFrames= () => {
  const item= parsedData.forEach() => {
    document.createElement.innerHTML = <div></div>;
  }
  createDataFrames();
};
 */

//--Second try: better but still lost
/* const createDataFrames= () => {
  const item= parsedData.forEach(item => {
    document.createElement.appendChild = <div></div>;// ❌ you don/t append a div like this 🤪
  })
  createDataFrames();
}; */

//--Third try: better but still lost
/* const createDataFrames= () => {
  const item= parsedData.forEach(item => {
    let frameDiv = document.createElement('div'); // createElement is a method and this is how you add a div
    myFramesContainer.appendChild = frameDiv ; // ❌ appendChild is also method not a variable 🤪
  })
  createDataFrames();
}; */

//--Fourth try: better but still lost
/* const createDataFrames = (placeHolder) => {//'parseData' is just aparsedDataPlaceHolder used in the parameter to receive 
 parsedDataPlaceHolder.forEach(item => {
    let frameDiv = document.createElement('div');
    myFramesContainer.appendChild(frameDiv);
    //now that the div is added, Insert here the icon...//❓not clue how to insert it
  });
}; */

//--Fifth try: better but still lost
/* const createDataFrames = (placeHolder) => {//'parseData' is just aparsedDataPlaceHolder used in the parameter to receive 
 parsedDataPlaceHolder.forEach(item => {
    let frameDiv = document.createElement('div');
    myFramesContainer.appendChild(frameDiv);
    //You need to use img. So create an img element and add it:
    let imgElement = document.createElement('img');
    myFramesContainer.appendChild(imgElement);//❌ wrong location to put this
imgElement.item.icon; //I really don't know how to access the 'icon' key in parsedData
  });
}; */

//--Sixth try: better but almost there

const createDataFrames = (parsedDataPlaceHolder) => {// I called parsedDataPlaceHolder to know that here parsedData comes here and replace the placeHolder
 parsedDataPlaceHolder.forEach((item) => {
    let frameDiv = document.createElement('div');
    frameDiv.classList.add('frame'); // Add class for styling

    myFramesContainer.appendChild(frameDiv);

    // Create an img element and set its src attribute to the icon path
    let imgElement = document.createElement('img');
    imgElement.src = item.icon; // Set src attribute to the icon path
    frameDiv.appendChild(imgElement); // Append imgElement to frameDiv

    // Create a p element and set its textContent to the score
    let scoreElement = document.createElement('p');
    scoreElement.textContent = item.score; // Set textContent to the score value only
    scoreElement.classList.add('score'); // Add a class for pseudo-element
    frameDiv.appendChild(scoreElement); // Append scoreElement to frameDiv

    // Set background color dynamically
    frameDiv.style.backgroundColor = item.bgColor; // Set background color

    // Set hover effect dynamically
    frameDiv.addEventListener('mouseover', () => {
      frameDiv.style.backgroundColor = item.bgColor.replace(/[\d\.]+\)$/, '0.3)'); // Change alpha on hover
    });

 /*    The expression /[\d\.]+\)$/ is used to find the alpha value in an HSLA color string and replace it.

  // Change the alpha value of the background color on hover
      // The regular expression /[\d\.]+\)$/ matches the alpha value in the HSLA color string
      // - [\d\.]+ matches one or more digits (\d) or a dot (\.)
      // - \) matches the closing parenthesis
      // - $ matches the end of the string
      // The replace method substitutes the matched part (the original alpha value and closing parenthesis) with '0.3)'
      // This effectively changes the alpha value to 0.3, creating a semi-transparent effect on hover


    frameDiv.addEventListener('mouseout', () => {
      frameDiv.style.backgroundColor = item.bgColor; // Revert to original color
    });
  });
};

/////// ---- PSEUDO CODE -----///////////////////////
/*



*/


/////// ---- REGULAR EXPRESSION LOGIC -----///////////////////////
/* Example Explanation:
Given an HSLA color string like hsla(252, 100%, 67%, 0.3), the regular expression [\d\.]+\)$ will match 0.3).

Replacement Logic:
The replace method is used to substitute the matched part of the string with the new alpha value.

item.bgColor.replace(/[\d\.]+\)$/, '0.3)'):
item.bgColor: The original HSLA color string.
.replace(/[\d\.]+\)$/, '0.3)'): Replaces the matched part (0.3)) with the new alpha value (0.3)).
Step-by-Step Explanation:
Original String: hsla(252, 100%, 67%, 0.3)
Regex Match: 0.3)
The regular expression [\d\.]+\)$ matches the 0.3) part of the string.
Replacement: 0.3)
The replace method substitutes 0.3) with 0.3). */