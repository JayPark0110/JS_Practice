const qoutes = [{
    qoute: "No one is perfect - that’s why pencils have erasers.",
    author: "Wolfgang Riebe",
}, {
    qoute: "You’re off to great places, today is your day. Your mountain is waiting, so get on your way.",
    author: "Dr. Seuss",
}, {
    qoute: "You always pass failure on the way to success.",
    author: "Mickey Rooney",
}, {
    qoute: "Winning doesn’t always mean being first. Winning means you’re doing better than you’ve done before.",
    author: "Bonnie Blair",
}, {
    qoute: "You’re braver than you believe, and stronger than you seem, and smarter than you think.",
    author: "A.A. Mine",
}, {
    qoute: "It always seems impossible until it is done.",
    author: "Nelson Mandela",
}, {
    qoute: "Keep your face to the sunshine and you cannot see a shadow.",
    author: "Helen Keller",
}, {
    qoute: "Once you replace negative thoughts with positive ones, you’ll start having positive results.",
    author: "Willie Nelson",
}, {
    qoute: "Positive thinking will let you do everything better than negative thinking will.",
    author: "Zig Ziglar",
}, {
    qoute: "In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make a positive impact.",
    author: "Les Brown",
}]

const qoute = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = qoutes[Math.floor(Math.random() * qoutes.length)];

qoute.innerText = todaysQuote.qoute + "\n";
author.innerText = "- " + todaysQuote.author + " -";