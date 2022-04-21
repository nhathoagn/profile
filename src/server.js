const { v4: uuidv4 } = require('uuid');
const express = require('express')
const cors = require('cors')
const app = express();
const fs = require("fs").promises

app.use(express.json())
app.use(cors());

app.post('/login', async (req, res) => {
	const {email, password} = req.body;

	let data = JSON.parse(await fs.readFile("/Users/nhathoang/Documents/React_Training/profile/profile/src/data.json"));
	let user = data["users"].find((e) => {
		return e["email"] == email && e["password"] == password;
	})
	if (user != null) {
		console.log(user)
		res.send({
			token: uuidv4(),
		});
	}
});
app.get('/', (req, res) => res.json({hello: "World"}))
app.listen(9000, () => console.log("API is running on http://localhost:9000/login"))