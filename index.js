const app = require("./app");
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is listening at localhost on port: ${PORT}`);
});