const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, "logs");

//Create the directroy
fs.mkdir(dirPath, (err) => {
    if (err) {
        return console.error(err);
    }
    console.log("Directory created successfully!");

});

//Create 10 files in the directory
for (let i = 0; i < array.length; i++) {
    const filePath = path.join(dirPath, `log${i}.txt`);
    const content = `This is the content of the file ${i}.txt`;
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            return console.error(err);
        }
        console.log(`File ${i}.txt created successfully!`);
    });

}
//// Step 3: Read all files after a slight delay
setTimeout(() => {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return console.error(err);
        }
        files.forEach(file => {
            const filePath = path.join(dirPath, file);
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    return console.error(err);
                }
                console.log(`Content of ${file}: ${data}`);
            });
        });
    });
},1000);