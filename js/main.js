const colorPicker = document.getElementById("color-picker");
const colorModeBox = document.getElementById("color-mode");
const getColorBotton = document.getElementById("getColorScheme");

//Color Body Div:
const colorBodyDiv = document.getElementById("color-div");
const colorHexValueDiv = document.getElementById("footer_wrapper");

const colorURL = "https://www.thecolorapi.com/scheme?";


const renderDiv = (data) => {
    // Now Destructuring the Valuable Information to render it on the Site:
    const { colors } = data
    let divNo = 1
    let colorStringDiv = ""
    let colorHexValueStringDiv = ""

    colors.map((color) => {
        const { hex } = color
        const colorHexValue = hex.value
        //Updating the Color Div Section
        colorStringDiv +=
            `
                <div class="color" id= "color-${divNo++}" style="background-color: ${colorHexValue};}"></div>
            `
        //Updating the Hex Value Section
        colorHexValueStringDiv +=
            `
            <div class="col" id="colorCode${divNo}">
                <p>${colorHexValue}</p>
            </div>
        `
    })

    console.log(colorHexValueStringDiv);
    colorBodyDiv.innerHTML = colorStringDiv
    colorHexValueDiv.innerHTML = colorHexValueStringDiv
}

getColorBotton.addEventListener("click", async () => {
    const query = colorPicker.value.substr(1);
    const mode = colorModeBox.value;
    const count = 5;
    const data = await fetch(colorURL + `hex=${query}&mode=${mode}&count=${count}`).then(res => res.json())

    //Rendering Color Div; 
    renderDiv(data);
})


