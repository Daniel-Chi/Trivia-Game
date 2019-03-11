var q1 = ["What Pok\xe9mon debuted with the lowest Pok\xe9dex number?",
    { a: "Squirtle", corr: false }, { a: "Bulbasaur", corr: false }, { a: "Pikachu", corr: false }, { a: "Victini", corr: true },
    "Victini debuted with the number 000 in the Sinnoh Pok\xe9dex!"];
var q2 = ["Which move can hit the most times?",
    { a: "Double Slap", corr: false }, { a: "Beat Up", corr: true }, { a: "Triple Kick", corr: false }, { a: "Barrage", corr: false },
    "Beat Up can hit 6 times if you have a full party!"];
var q3 = ["Which Starter Pok\xe9mon loses a type in its final form?",
    { a: "Bulbasaur", corr: false }, { a: "Chikorita", corr: false }, { a: "Turtwig", corr: false }, { a: "Rowlett", corr: true },
    "Rowlett loses its Flying type in exchange for Ghost when Dartrix evolves into Decidueye!"];
var q4 = ["Which move attacks with two types at once?",
    { a: "Flying Press", corr: true }, { a: "Tri Attack", corr: false }, { a: "Multi-Attack", corr: false }, { a: "Nature Power", corr: false },
    "Flying Press is both Flying and Fighting type!"];
var q5 = ["What was the first Pok\xe9mon ever designed?",
    { a: "Pikachu", corr: false }, { a: "Jigglypuff", corr: false }, { a: "Nidoking", corr: false }, { a: "Rhydon", corr: true },
    "Rhydon was designed before Pikachu, which is why you see its sprites everywhere in Gen 1!"];
var q6 = ["Which move has the weakest base power?",
    { a: "Struggle Bug", corr: false }, { a: "Rapid Spin", corr: false }, { a: "Constrict", corr: true }, { a: "Poison Sting", corr: false },
    "Constrict has a pathetic base power of 10!"];
var q7 = ["Which Pok\xe9mon generation features the protagonist's father?",
    { a: "Gen 1", corr: false }, { a: "Gen 3", corr: true }, { a: "Gen 5", corr: false }, { a: "Gen 7", corr: false },
    "The player's father in Ruby/Sapphire/Emerald is Petalburg City's gym leader Norman!"];
var q8 = ["Which of these moves does NOT swap stat boosts?",
    { a: "Speed Swap", corr: true }, { a: "Guard Swap", corr: false }, { a: "Power Swap", corr: false }, { a: "Heart Swap", corr: false },
    "Speed Swap only swaps the base speed stats!"];
var q9 = ["What is the classic Professor Oak's brother's name?",
    { a: "Samuel Oak", corr: false }, { a: "Samson Oak", corr: true }, { a: "Samantha Oak", corr: false }, { a: "Salmon Oak", corr: false },
    "Samson Oak is like Professor Oak's Alolan form!"];
var q10 = ["What Pok\xe9mon is known as the Legendary Pok\xe9mon?",
    { a: "Lucario", corr: false }, { a: "Kommo-o", corr: false }, { a: "Arcanine", corr: true }, { a: "Hydreigon", corr: false },
    "Arcanine is known as the Legendary Pok\xe9mon even though it's not a Legendary Pok\xe9mon!"];
var q11 = ["Which pokemon's family has the lowest Defense stat?",
    { a: "Alakazam", corr: false }, { a: "Jinx", corr: false }, { a: "Beedrill", corr: false }, { a: "Blissey", corr: true },
    "Happiny, Chansey, and Blissey together make up the three Pok\xe9mon with the lowest Defense stats!"];
var q12 = ["Which of the following is NOT a real Z-Move?",
    { a: "Soul-Stealing 7-Star Strike", corr: false }, { a: "Call of the Night", corr: true }, { a: "Light That Burns the Sky", corr: false }, { a: "Let's Snuggle Forever", corr: false },
    "Call of the Night is a move known by Sabrina's Gengar in the Pok\xe9mon TCG!"];
var q13 = ["How many different Unown shapes are there?",
    { a: "26", corr: false }, { a: "27", corr: false }, { a: "28", corr: true }, { a: "29", corr: false },
    "There's one for question mark, one for exclamation point, and one for each letter, making 28 total!"];
var q14 = ["What's the lowest power you can get from the move Magnitude?",
    { a: "1", corr: false }, { a: "4", corr: true }, { a: "5", corr: false }, { a: "6", corr: false },
    "The range of magnitudes goes from 4 to 10!"];
var q15 = ["What type combination already exists on a Pok\xe9mon?",
    { a: "Poison/Psychic", corr: false }, { a: "Fighting/Ground", corr: false }, { a: "Bug/Dark", corr: false }, { a: "Dragon/Fairy", corr: true },
    "Altaria's Mega-Evolution is Dragon/Fairy type!"];
var q16 = ["Which Pok\xe9mon has the lowest HP stat?",
    { a: "Ghastly", corr: false }, { a: "Sunkern", corr: false }, { a: "Shedinja", corr: true }, { a: "Mime Jr.", corr: false },
    "Shedinja only has 1 HP because it comes with the Wonder Guard ability!"];
var q17 = ["Which move provides the highest stat boost to a single stat?",
    { a: "Tail Glow", corr: false }, { a: "Belly Drum", corr: true }, { a: "Acupressure", corr: false }, { a: "Shell Smash", corr: false },
    "Belly Drum gives +6 Attack boosts in exchange for half of the user's HP!"];
var q18 = ["Which of these moves does NOT require the user to take damage first?",
    { a: "Bide", corr: false }, { a: "Mirror Coat", corr: false }, { a: "Revenge", corr: true }, { a: "Metal Burst", corr: false },
    "Revenge has its power doubled if the user is attacked, but it still works even if it isn't attacked!"];
var q19 = ["Which of these Pok\xe9mon is ONLY Flying type?",
    { a: "Tornadus", corr: true }, { a: "Swablu", corr: false }, { a: "Oricorio", corr: false }, { a: "Noivern", corr: false },
    "Tornadus is the only Flying type Pok\xe9mon without a second type!"];
var q20 = ["Which of these moves hits first?",
    { a: "Quick Attack", corr: false }, { a: "Extremespeed", corr: false }, { a: "Fake Out", corr: true }, { a: "Sucker Punch", corr: false },
    "Fake Out will always hit before any other moves!"];
var q21 = ["Which Pok\xe9mon has the highest speed stat of any non-legendary Pok\xe9mon?",
    { a: "Ninjask", corr: true }, { a: "Accelgor", corr: false }, { a: "Electrode", corr: false }, { a: "Talonflame", corr: false },
    "Ninjask has a base speed stat of 160 on top of its Speed Boost ability!"];
var q22 = ["Which Gen 1 Pok\xe9mon could learn Waterfall before it was introduced as an HM?",
    { a: "Gyarados", corr: false }, { a: "Lapras", corr: false }, { a: "Seaking", corr: true }, { a: "Dewgong", corr: false },
    "Goldeen and Seaking could both learn Waterfall before Gen 2!"];
var q23 = ["Which of these is NOT a Water-type Pok\xe9mon?",
    { a: "Bibarel", corr: false }, { a: "Wimpod", corr: false }, { a: "Azurill", corr: true }, { a: "Skrelp", corr: false },
    "Unlike the rest of its family, Azurill is Normal-type instead of Water!"];
var q24 = ["Which move can Smeargle not Sketch?",
    { a: "Transform", corr: false }, { a: "Mimic", corr: false }, { a: "Metronome", corr: false }, { a: "Chatter", corr: true },
    "Chatter can't be copied with Sketch because of its unique sound-recording properties!"];
var q25 = ["Which Pok\xe9mon has the highest base stat total of any Pok\xe9mon excluding special forms?",
    { a: "Slaking", corr: false }, { a: "Regigigas", corr: false }, { a: "Arceus", corr: true }, { a: "Zygarde", corr: false },
    "Arceus is still the reigning champ with a whopping 120 for every stat, making 720 total!"];

let firstrun = false;
let right = 0;
let wrong = 0;

//for setting current question
let qnum = 1;
let current = [];

//setup timer
let time = 10;
let qtimer;

//function for adjusting time in html
function readtime() {
    $("#timer").text(time);
}
//function for counting down
function qtimerstart() {
    time = 10;
    readtime();
    qtimer = setInterval(function () {
        time -= 1;
        if (time < 0) {
            clearInterval(qtimer);
            showanswer("Time out. ")
            wrong += 1;
            if (qnum === 25) {
                endscreen()
            }
            else {
                qnum += 1;
                setTimeout(function () {
                    nextquestion();
                }, 5000);
            };
        }
        else { readtime(); };
    }, 1000);
};

//function for displaying answer screen
function showanswer(str) {
    $("#message").text(str + current[5]).css("display", "block");
    $("#quizbox").css("display", "none");
    $("#timealert").css("display", "none");
}

//function for reading current question
function setcurrent() {
    current = eval("q" + qnum);
}
//function for setting up question and removing other text
function addquestion(current) {
    $("#message").css("display", "none");
    $("#quizbox").css("display", "block");
    $("#question").text(current[0]);
};
//function for setting up answer choices
function addchoices(current) {
    for (i = 1; i < 5; i++) {
        $(String("#" + i)).text(current[i].a).attr("corr", current[i].corr);
    };
};
//function for setting up question timer
function addtimer() {
    $("#timealert").css("display", "block");
}
//function for end screen
function endscreen() {
    $("#timealert").css("display", "none");
    $("#quizbox").css("display", "none");
    $("#message").text("You got " + right + " questions right, and " + wrong + " questions wrong. That's " + (right / 25) * 100 + "%!").css("display", "block");
    $("#start").css("display", "block")
};

//sets up everything for MCQ
function nextquestion() {
    setcurrent();
    addquestion(current);
    addchoices(current);
    addtimer();
    qtimerstart();
};

//first time clicking start
$("#start").on("click", function () {
    if (firstrun === false) {
        $("#start").text("Try Again").css("display", "none");
        firstrun = true;
        //set first question
        nextquestion();
    }
    else {
        $("#start").css("display", "none")
        right = 0;
        wrong = 0;
        qnum = 1;
        nextquestion();
    };
});

//choosing an answer
$(".choice").on("click", function (event) {
    let userchoice = $(this).attr("corr")
    if (userchoice === "true") {
        right += 1;
        clearInterval(qtimer);
        showanswer("That's right! ")
        if (qnum === 25) {
            endscreen()
        }
        else {
            qnum += 1;
            setTimeout(function () {
                nextquestion();
            }, 5000);
        };
    }
    else {
        wrong += 1;
        clearInterval(qtimer);
        showanswer("Too bad! ")
        if (qnum === 25) {
            endscreen()
        }
        else {
            qnum += 1;
            setTimeout(function () {
                nextquestion();
            }, 5000);
        };
    };

});