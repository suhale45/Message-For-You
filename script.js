const messages = [
    "I know we are poles apart when it comes to showing emotions and even in terms of character.",
    "But what I’ve learned is that you never truly understood my emotions.",
    "I never wanted to express everything in words—I thought you would understand my love through my actions, through the things I did for you.",
    "But you didn’t.",
    "Later, I openly showed my emotions, yet you still couldn’t see them.",
    "I had expectations, and every time, they turned into disappointment.",
    "It’s not your fault.",
    "I still believe in Allah, and I hope that someday, He will make you realize that I’m different from others—and how I see you through my eyes.",
    "I’m sorry for everything that happened between us—the painful conversations and all.",
    "From now on, I won’t expect anything from you.",
    "Your presence in my life is enough😭😭😭"
];

let index = 0;
const messageText = document.getElementById("messageText");
const nextButton = document.getElementById("nextButton");

nextButton.addEventListener("click", function() {
    if (index < messages.length) {
        messageText.textContent = messages[index];
        index++;
    } else {
        messageText.textContent = "That's all I wanted to say.🥺";
        nextButton.style.display = "none";
    }
});