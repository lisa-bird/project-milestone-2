let quiz = [
    { 
        "question":"Which popular sitcom aired from 1994 to 2004 and followed the lives of six friends living in New York City?",
        "choices":["Friends", "Seinfeld", "Full House", "Saved by the Bell"],
        "correctAnswer":"Friends"
    },
  
    { 
        "question":"Which boy band was formed in 1993 and consisted of five members, including Nick Carter and Kevin Richardson?",
        "choices":["Backstreet Boys", "NSYNC", "98 Degrees", "New Kids on the Block"],
        "correctAnswer":"Backstreet Boys"
    },

    { 
        "question":"Who played the lead role of Dr. John Hammond in the 1993 science fiction adventure film, Jurassic Park?",
        "choices":["Jeff Goldblum", "Sam Neill", "Richard Attenborough", "Martin Short"],
        "correctAnswer":"Richard Attenborough"
    },

    { 
        "question":"What was the name of the popular toy that consisted of tiny, collectible characters with interchangeable body parts, which were popular in the late 90s?",
        "choices":["Furbies", "Tamagotchis", "Beanie Babies", "Polly Pockets"],
        "correctAnswer":"Polly Pockets"
    },

    { 
        "question":"Which actress played the titular character in the hit 90s TV show, Buffy the Vampire Slayer?",
        "choices":["Sarah Michelle Gellar", "Jennifer Aniston", "Shannen Doherty", "Alyssa Milano"],
        "correctAnswer":"Sarah Michelle Gellar"
    },

    { 
        "question":"What was the name of the popular video game console released by Nintendo in 1996?",
        "choices":["PlayStation", "Nintendo 64", "Sega Dreamcast", "Xbox"],
        "correctAnswer":"Nintendo 64"
    },

    { 
        "question":"Which iconic 90s sitcom featured Will Smith as a street-smart teenager who is sent to live with his wealthy aunt and uncle in their Bel Air mansion?",
        "choices":["Full House", "The Fresh Prince of Bel-Air", "Family Matters", "Boy Meets World" ],
        "correctAnswer":"The Fresh Prince of Bel-Air"
    },

    { 
        "question":"Who won the Academy Award for Best Actor in 1995 for his portrayal of Forrest Gump in the movie of the same name?",
        "choices":["Tom Cruise", "Tom Hanks", "Brad Pitt", "Leonardo DiCaprio"],
        "correctAnswer":"Tom Hanks"
    },

    { 
        "question":"What was the name of the popular TV show that followed the lives of a group of high school students in California, which aired from 1990 to 2000?",
        "choices":["Beverly Hills, 90210", " Saved by the Bell", "Dawson's Creek", "Party of Five"],
        "correctAnswer":"Beverly Hills, 90210"
    },

    { 
        "question":"Which pop diva sang the iconic song 'Baby One More Time' which became a hit in 1998?",
        "choices":[" Christina Aguilera", " Britney Spears", "Madonna", "Mariah Carey"],
        "correctAnswer":"Britney Spears"
    },
    
]

 let questionIndex = -1
 let answerElements = []

const nextQuestion = (questionIndex) => {
    const qel = document.getElementById("question")
    qel.innerHTML = quiz[questionIndex].question
    insertAnswers(questionIndex)
}

const insertAnswers = (questionIndex) => {
    const choices = quiz[questionIndex].choices;
    const correctAnswer = quiz[questionIndex].correctAnswer;
    const container = document.getElementById("contentContainer")
    const parent = document.getElementById('answer-grid');
    parent.innerHTML = ""
    answerElements = []

    for (const choice of choices) {
      const el = document.createElement('div');
      answerElements.push(el)
      el.classList.add('btn', 'btn-info', 'answer', 'mt-2', 'd-block');
      el.innerHTML = choice; 
      if (correctAnswer == choice) {el.setAttribute("data-correct", "true");}
      else {el.setAttribute("data-correct", "false"); }
      el.addEventListener("click", answerClickHandler);
      parent.appendChild(el);
    }        
    container.style.height = `calc(20em +2em*${choices.length})`
    startTimer(10)   
}

const answerClickHandler = (e) => {
    for (const el of answerElements) {
        if (el.getAttribute("data-correct") == "true") {
            el.style.backgroundColor = "#98F790 ";

            if (e.srcElement === el) {
                const feedbackElement = document.createElement("p");
                feedbackElement.innerText = "That's correct!";
                feedbackElement.style.color = "white";
                el.appendChild(feedbackElement);
            }
        } else {
            el.style.backgroundColor = "#FCAEA4";

            if (e.srcElement === el) {
                const feedbackElement = document.createElement("p");
                feedbackElement.innerText = "That's incorrect!";
                feedbackElement.style.color = "white";
                el.appendChild(feedbackElement);
            }
        }
    }
};



const timerElement = document.getElementById('timerValue')

const startTimer =  (n) => { 
    let remaining = n
    const myInterval = setInterval(
        () => {
            timerElement.innerHTML = remaining;
        
            if (remaining <= 0)
            {
                clearInterval(myInterval)
                alert('Out of time!!')
                                  
            }
            remaining -= 1
        },1000)
}

const nextQuestionHandler = () => {
    questionIndex += 1
    if (questionIndex>=quiz.length)
    {
            alert('Game Over')
    }
    nextQuestion(questionIndex)
}

const startQuizHandler = () => {
    questionIndex = -1
    nextQuestionHandler()
}



