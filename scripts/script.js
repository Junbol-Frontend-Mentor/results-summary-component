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

    frameDiv.addEventListener('mouseout', () => {
      frameDiv.style.backgroundColor = item.bgColor; // Revert to original color
    });
  });
};

/////// ---- PSEUDO CODE -----///////////////////////
/*



*/
