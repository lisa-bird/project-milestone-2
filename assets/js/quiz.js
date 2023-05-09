let quiz = [
    { 
        "question":"Which popular sitcom aired from 1994 to 2004 and followed the lives of six friends living in New York City?",
        "choices":["Friends", "Seinfeld", "Full House", "Saved by the Bell"],
        "answer":"Friends"
    },
  
    { 
        "question":"Which boy band was formed in 1993 and consisted of five members, including Nick Carter and Kevin Richardson?",
        "choices":["Backstreet Boys", "NSYNC", "98 Degrees", "New Kids on the Block"],
        "answer":"Backstreet Boys"
    },

    { 
        "question":"Who played the lead role of Dr. John Hammond in the 1993 science fiction adventure film, Jurassic Park?",
        "choices":["Jeff Goldblum", "Sam Neill", "Richard Attenborough", "Martin Short"],
        "answer":"Richard Attenborough"
    },

    { 
        "question":"What was the name of the popular toy that consisted of tiny, collectible characters with interchangeable body parts, which were popular in the late 90s?",
        "choices":["Furbies", "Tamagotchis", "Beanie Babies", "Polly Pockets"],
        "answer":"Polly Pockets"
    },

    { 
        "question":"Which actress played the titular character in the hit 90s TV show, Buffy the Vampire Slayer?",
        "choices":["Sarah Michelle Gellar", "Jennifer Aniston", "Shannen Doherty", "Alyssa Milano"],
        "answer":"Sarah Michelle Gellar"
    },

    { 
        "question":"What was the name of the popular video game console released by Nintendo in 1996?",
        "choices":["PlayStation", "Nintendo 64", "Sega Dreamcast", "Xbox"],
        "answer":"Nintendo 64"
    },

    { 
        "question":"Which iconic 90s sitcom featured Will Smith as a street-smart teenager who is sent to live with his wealthy aunt and uncle in their Bel Air mansion?",
        "choices":["Full House", "The Fresh Prince of Bel-Air", "Family Matters", "Boy Meets World" ],
        "answer":"The Fresh Prince of Bel-Air"
    },

    { 
        "question":"Who won the Academy Award for Best Actor in 1995 for his portrayal of Forrest Gump in the movie of the same name?",
        "choices":["Tom Cruise", "Tom Hanks", "Brad Pitt", "Leonardo DiCaprio"],
        "answer":"Tom Hanks"
    },

    { 
        "question":"What was the name of the popular TV show that followed the lives of a group of high school students in California, which aired from 1990 to 2000?",
        "choices":["Beverly Hills, 90210", " Saved by the Bell", "Dawson's Creek", "Party of Five"],
        "answer":"Beverly Hills, 90210"
    },

    { 
        "question":"Which pop diva sang the iconic song 'Baby One More Time' which became a hit in 1998?",
        "choices":[" Christina Aguilera", " Britney Spears", "Madonna", "Mariah Carey"],
        "answer":"Britney Spears"
    },
    
]


const nextQuestion = () => {
const qel = document.getElementById("question")

qel.innerHTML = quiz[0].question
insertAnswers()
}

const insertAnswers = () => {
    for (let choice in quiz[0].choices ) {
        console.log(choice)
    let el = document.createElement('div')
    el.classList.add("btn","answer","d-block")
    //attach correct classes
    el.innerHTML=quiz[0].choices[choice]
    const parent = document.getElementById('answer-grid')
    parent.appendChild(el)
    }

}

// const insertAnswers = (questionIndex) => {
//     const choices = quiz[questionIndex].choices;
//     const parent = document.getElementById('answer-grid');
  
//     for (const choice of choices) {
//       const el = document.createElement('div');
//       el.classList.add('btn', 'answer', 'd-block');
//       el.innerHTML = choice;
//       parent.appendChild(el);
//     }
// }
// //     for (let i = 0; i < quiz.length; i++) {
//                 insertAnswers(i);
//     };
//   }

  

function timer () {
    setInterval(function() {
        date = new Date();
        let time = date.getSeconds();
        document.getElementById('timer').innerHTML = time;
        console.log(timer);
    }, 1000);
}


// const displayQuiz = document.getElementById("display");
// let time = document.querySelector(".timer");
// let quizContainer = document.getElementById("d-container");
// let nextBtn = document.getElementById("next-btn");
// let displayCont = document.getElementById("q-container")


