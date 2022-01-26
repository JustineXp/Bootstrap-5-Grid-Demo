var cards = document.getElementsByClassName("card");

console.log(cards);

for (let i = 0; i < cards.length; i++) {
  //   console.log(cards[i]);
  cards[i].addEventListener("mouseenter", (event) => {
    console.log(event.target);
    event.target.classList.add("border-primary");
    event.target.classList.add("border-2");
  });

  cards[i].addEventListener("mouseleave", (event) => {
    console.log(event.target);
    event.target.classList.remove("border-primary");
    event.target.classList.remove("border-2");
  });
}
