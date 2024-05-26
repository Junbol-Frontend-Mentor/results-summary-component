let myFramesContainer = document.getElementById('frames');

const fetchDataAsync = async () => {
  try {
    const response = await fetch('data.json'); // Ensure the path is correct
    const parsedData = await response.json();
    createDataFrames(parsedData);
  } catch (error) {
    console.error(error);
  }
};

fetchDataAsync();

const createDataFrames = (parsedDataPlaceHolder) => {
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

    frameDiv.addEventListener('mouseleave', () => {
      frameDiv.style.backgroundColor = item.bgColor; // Reset background color on mouse leave
    });
  });
};
