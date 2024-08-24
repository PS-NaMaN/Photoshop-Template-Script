// Define the list of names
var names = ["Lorem", "Ipsum", "John", "Doe"];

// Path to save the new files
var outputPath = "C:/Users/naman/Downloads/D2D Meetup/";

// Create the output directory if it doesn't exist
var outputFolder = new Folder(outputPath);
if (!outputFolder.exists) {
    outputFolder.create();
}

// Display the output path for confirmation
alert("Files will be saved to: " + outputFolder.fsName);

// Open the Photoshop document
var doc = app.activeDocument;

// Find the text layer by name
var nameLayer = doc.artLayers.getByName("NameLayer");

for (var i = 0; i < names.length; i++) {
    // Update the text layer with the current name
    nameLayer.textItem.contents = names[i];

    // Define the PNG save options
    var pngOptions = new PNGSaveOptions();
    pngOptions.compression = 6; // Adjust compression level if needed

    // Save the document as a PNG
    var saveFile = new File(outputPath + names[i].replace(" ", "_") + ".png"); // Replacing spaces with underscores for filenames
    doc.saveAs(saveFile, pngOptions, true, Extension.LOWERCASE);
}

alert("Process Completed!");
