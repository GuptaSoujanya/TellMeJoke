const joke = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why couldn't the bicycle stand up by itself? It was two tired.",
    "What do you call fake spaghetti? An impasta!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "I'm reading a book about anti-gravity. It's uplifting!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What did one ocean say to the other ocean? Nothing, they just waved.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What did one hat say to the other hat? Stay here, I'm going on ahead.",
    "What do you get when you cross a snowman and a vampire? Frostbite!"
]

const display = () => {
    let card_text = document.getElementsByClassName("card-text")[0]

    let random = Math.floor((Math.random() * 15))
    card_text.innerHTML = joke[random]
}