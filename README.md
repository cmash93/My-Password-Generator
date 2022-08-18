# My Password Generator

## What I did:  
* Here, I have built a password generator using Javascript. This was definitely the hardest assignment yet.
* I started the project by creating arrays for uppercase letters, lowercase letters, numbers, and special characters. I would later use these arrays to come up with the random password.
* Next, I began building the prompts, alerts, and confirmations that would help log user preferences - password length and what type of characters. I did set parameters so that the user would get an alert if they did not choose between 8 and 128 characters or if they did not choose at least one type of characters. 
* My next goal was to figure out what to do with what the user chose. I used "if" statements and the concat method to make new arrays for the user's character choices. Based on what they chose, a new array would be developed and all of those characters would merge into one array.
* I then created a new string variable and used the math.random equation to randomize the user choices. The new array I had created previously from the concat method would then be pushed into a new string to be returned to the text box.
* Voila! After these processes, I had a functioning password generator. 

## Live Website
Please feel free to check out a live version of my project [here](https://cmash93.github.io/My-Password-Generator/).     
## Mockup    
![til](https://github.com/cmash93/My-Password-Generator/blob/main/Assets/pw-generator.gif)