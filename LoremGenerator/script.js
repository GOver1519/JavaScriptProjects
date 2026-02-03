// This array stores the HTML tags that the user can choose from the dropdown menu.
const tagOptions = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "span",];
// Container holding options (not directly used, but selected)
const optionsContainer = document.querySelector(".options");

// Container where generated Lorem Ipsum text is displayed
const outputContainer = document.querySelector(".output");

// Dropdown for choosing HTML tags
const tagsSelect = document.getElementById("tags");

// Slider input for number of paragraphs
const paragraphsSlider = document.getElementById("paragraphs");

// Slider input for number of words per paragraph
const wordsSlider = document.getElementById("words");

// Element that shows the current paragraph count
const paragraphsValue = document.getElementById("paragraphsValue");

// Element that shows the current word count
const wordsValue =document.getElementById("wordsValue");

// Initializes the dropdown, attaches event listeners,and prepares the website for user interaction.
function createOptionsUI() {

    // Loop through each tag in tagOptions and create <option> elements dynamically
    tagOptions.forEach((tag) => {
        const option = document.createElement("option");

        // Value used internally by JavaScript
        option.value = tag;

        // Text visible to the user in dropdown
        option.textContent = `<${tag}>`;

        // Add option to the <select> element
        tagsSelect.appendChild(option);
    });
    // When the user moves the paragraph slider,update the displayed paragraph count.
    paragraphsSlider.addEventListener("input",updateParagraphsValue);

    // When the user moves the word slider, update the displayed word count.
    wordsSlider.addEventListener("input",updateWordsValue);

    // When the user clicks the "Generate" button, start the Lorem Ipsum generation process.
    const generateButton = document.getElementById("generate");

    generateButton.addEventListener("click",generateLoremIpsum);
}

// This function runs every time the paragraph slider value changes and updates the number shown on screen.
function updateParagraphsValue() {
    paragraphsValue.textContent = paragraphsSlider.value;
}

// This function runs every time the words slider value changes and updates the number shown on screen.
function updateWordsValue() {
    wordsValue.textContent =
        wordsSlider.value;
}

// This function collects all user inputs,sends them to the text generator,and then displays the result.
function generateLoremIpsum() {

    // Convert paragraph slider value (string) to number
    const paragraphs = parseInt(paragraphsSlider.value);

    // Get selected HTML tag from dropdown
    const tag = document.getElementById("tags").value;

    // Get whether HTML should be included or not
    const includeHtml = document.getElementById("include").value;

    // Convert word slider value (string) to number
    const wordsPerParagraph = parseInt(wordsSlider.value);

    // Generate the Lorem Ipsum text based on user choices
    const loremIpsumText = generateText(paragraphs,tag,includeHtml,wordsPerParagraph);

    // Display the generated text on the page
    displayLoremIpsum(loremIpsumText);
}

// This function builds multiple paragraphs based on the number requested by the user.
function generateText(paragraphs,tag,includeHtml,wordsPerParagraph) {

    // Placeholder text (used only for reference)
    const placeholderText =
        `Lorem ipsum dolor sit amet 
        consectetur adipiscing elit sed 
        do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.`;

    // Create an array with empty strings, one slot for each paragraph
    const loremIpsumArray = new Array(paragraphs).fill("");

    // Loop once for each paragraph
    for (let i = 0;i < paragraphs;i++) {
        // Generate words for the current paragraph
        const words = generateWords(wordsPerParagraph);

        // If HTML is included, wrap words in a tag Otherwise, store plain text
        loremIpsumArray[i] = includeHtml === "Yes"? `<${tag}>${words}</${tag}>`: words;
    }
    // Combine all paragraphs into one string separated by new lines
    return loremIpsumArray.join("\n");
}

// --------------------------------------------------
// Function to generate a specified number of words
// --------------------------------------------------
// This function returns only the number of words requested by the user.
function generateWords(numWords) {
    // Large Lorem Ipsum text used as a word source
    const loremIpsumText =
        `Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna 
        aliqua. Diam in arcu cursus euismod 
        quis viverra nibh. Nunc aliquet bibendum
        enim facilisis gravida neque convallis 
        a cras. Sagittis purus sit amet volutpat
        Consequat mauris. Duis ultricies lacus 
        sed turpis tincidunt id. Consequat interdum
        varius sit amet mattis vulputate. Enim sed
        faucibus turpis in eu. Ridiculus mus mauris
        vitae ultricies leo integer malesuada nunc vel.
        Nulla pharetra diam sit amet nisl suscipit.
        Lobortis elementum nibh tellus molestie nunc
        non blandit massa enim. Dis parturient montes
        nascetur ridiculus mus. Justo nec ultrices dui
        sapien eget. Enim tortor at auctor urna nunc.
        Dictumst quisque sagittis purus sit amet volutpat
        consequat mauris nunc.`;
    // Split the text into an array of words
    const words = loremIpsumText.split(" ");

    // If requested words are within available range,return only the required number
    if (numWords <= words.length) {
        return words.slice(0, numWords).join(" ");
    }
    // If user requests more words than available, return the entire text
    else {
        return words.join(" ");
    }
}

// --------------------------------------------------
// Display Lorem Ipsum text
// --------------------------------------------------
// This function inserts the generated text into the output container on the page.
function displayLoremIpsum(text) {
    outputContainer.innerHTML = text;
}


createOptionsUI();
