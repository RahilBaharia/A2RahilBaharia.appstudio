//get users first name
let firstName = prompt("What is your first name?")
console.log(firstName)

//get users state
let userState = prompt("What state do you live in? (Ex: NE)")
console.log(userState)

//get users temperature
let userTemperature = prompt("What is the current outside temperature? (Ex: 55)")
console.log(userTemperature)

//Put users info in array
let array = [firstName, userState, userTemperature]
console.log(array)

//put messages into array
let messages = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."]

//swtich statment about the users state and weather
switch(true) {
case (usersState = "NE" && userTemperature < 32):
    console.log(messages[0])
     break
case (userState = "NE" && userTemperature >= 32 && userTemperature <=50):
    console.log(messages[1])
    break
case (userState = "FL" && userTemperature >= 32 && userTemperature <=50):
    console.log(messages[2])
    break
case (userState = "FL" && userTemperature >= 50 && userTemperature <=70):
    console.log(messages[3])
}