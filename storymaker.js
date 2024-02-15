// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
const noun1Btn = document.getElementById('noun1');
const choosenNoun1 = document.getElementById('choosenNoun1');
const verbBtn = document.getElementById('verb');
const choosenVerb = document.getElementById('choosenVerb');
const adjectiveBtn = document.getElementById('adjective');
const choosenAdjective = document.getElementById('choosenAdjective');
const noun2Btn = document.getElementById('noun2');
const choosenNoun2 = document.getElementById('choosenNoun2');
const settingBtn = document.getElementById('setting');
const choosenSetting = document.getElementById('choosenSetting');
const studentIdDisplay = document.getElementById('studentId');

const playbackBtn = document.getElementById('playback');
const randomBtn = document.getElementById('random');
const storyDisplay = document.getElementById('story');
const studentNameBtn = document.getElementById('studentName');

const nouns1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    choosenNoun1.textContent = nouns1[noun1Count];
    noun1Count = (noun1Count + 1) % nouns1.length;
}

function verb_on_click() {
    choosenVerb.textContent = verbs[verbCount];
    verbCount = (verbCount + 1) % verbs.length;
}

function adjective_on_click() {
    choosenAdjective.textContent = adjectives[adjectiveCount];
    adjectiveCount = (adjectiveCount + 1) % adjectives.length;
}

function noun2_on_click() {
    choosenNoun2.textContent = nouns2[noun2Count];
    noun2Count = (noun2Count + 1) % nouns2.length;
}

function setting_on_click() {
    choosenSetting.textContent = settings[settingCount];
    settingCount = (settingCount + 1) % settings.length;
}

function playback_on_click() {
    storyDisplay.textContent = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} in ${choosenSetting.textContent}`;
}

function random_on_click() {
    const randomNoun1 = nouns1[Math.floor(Math.random() * nouns1.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun2 = nouns2[Math.floor(Math.random() * nouns2.length)];
    const randomSetting = settings[Math.floor(Math.random() * settings.length)];

    storyDisplay.textContent = `${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} ${randomSetting}`;
}

function addStudentId() {
    studentIdDisplay.textContent = "Anal Krishna 200552815";
}

/* Event Listeners
-------------------------------------------------- */
noun1Btn.addEventListener('click', noun1_on_click);
verbBtn.addEventListener('click', verb_on_click);
adjectiveBtn.addEventListener('click', adjective_on_click);
noun2Btn.addEventListener('click', noun2_on_click);
settingBtn.addEventListener('click', setting_on_click);
playbackBtn.addEventListener('click', playback_on_click);
randomBtn.addEventListener('click', random_on_click);
studentNameBtn.addEventListener('click', addStudentId);
