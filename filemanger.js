// fileManager.js

const fs = require("fs");

const fileName = "data.txt";

// CREATE FILE
fs.writeFile(fileName, "Hello Node.js!\n", (err) => {

    if (err) {
        console.log("Error creating file:", err.message);
        return;
    }

    console.log("1. File created successfully.");

    // READ FILE
    fs.readFile(fileName, "utf8", (err, data) => {

        if (err) {
            console.log("Error reading file:", err.message);
            return;
        }

        console.log("2. File content:");
        console.log(data);

        // UPDATE FILE
        fs.appendFile(
            fileName,
            "This is updated content.\n",
            (err) => {

                if (err) {
                    console.log("Error updating file:", err.message);
                    return;
                }

                console.log("3. File updated successfully.");

                // READ UPDATED FILE
                fs.readFile(fileName, "utf8", (err, updatedData) => {

                    if (err) {
                        console.log(
                            "Error reading updated file:",
                            err.message
                        );
                        return;
                    }

                    console.log("Updated content:");
                    console.log(updatedData);

                    // DELETE FILE
                    fs.unlink(fileName, (err) => {

                        if (err) {
                            console.log(
                                "Error deleting file:",
                                err.message
                            );
                            return;
                        }

                        console.log(
                            "4. File deleted successfully."
                        );
                    });
                });
            }
        );
    });
});