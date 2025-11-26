const acc = document.getElementsByClassName("question");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", (e) => {
    const answers = document.getElementsByClassName("answer");

    for (let j = 0; j < answers.length; j++) {
      answers[j].classList.remove("open");
      answers[j].classList.add("close");
    }

    const answer = e.target.nextElementSibling;

    answer.classList.remove("close");
    answer.classList.add("open");
  });
}
