const quotes = [
    {
        num: 1,
        quote: "고귀함이야말로 왕을 만드는 것이기에 심지어 가난할 때에도 나는 왕으로 살았다.",
        english: "Even in poverty I lived like a king for I tell you that nobility is the thing that makes a king"
    },
    {
        num: 2,
        quote: "사람은 모두 실수를 한다.그러나 모든 사람은 저마다 다른 실수를 한다.",
        english: "We all make mistakes, but everyone makes different mistakes."
    },
    {
        num: 3,
        quote: "마음이 순수한 사람만이 맛있는 요리를 만들 수 있다.",
        english: "Only the pure in heart can make a good soup."
    },
    {
        num: 4,
        quote: "운명은 사람에게 인내할 용기를 주었다.",
        english: "Fate gave to man the courage of endurance."
    },
    {
        num: 5,
        quote: "비밀은 가장 친한 친구에게도 숨겨야 한다.침묵하는 법을 배워라.",
        english: "Hide your secret even from the closest friend; learn to be silent."
    },
    {
        num: 6,
        quote: "악보를 틀리게 연주하는 것은 넘어갈 수 있다.열정 없이 연주하는 것은 변명의 여지가 없다.",
        english: "To play a wrong note is insignificant; to play without passion is inexcusable!"
    },
    {
        num: 7,
        quote: "음악은 모든 지혜와 철학보다 더 높은 계시다.음악은 영혼이 살고, 생각하고, 창조하는 전기적 토양이니까.",
        english: "Music is a higher revelation than all wisdom and philosophy.Music is the electrical soil in which the spirit lives, thinks and invents."
    },
    {
        num: 8,
        quote: "음악은 영적 세계와 현실 세계의 중재자다.",
        english: "Music is the mediator between the spiritual and the sensual life."
    },
    {
        num: 9,
        quote: "음악은 인류를 이해할 수 있지만, 인간은 이해할 수 없는 상위의 지식세계로 들어가는 무형의 문이다.",
        english: "Music is the one incorporeal entrance into the higher world of knowledge which comprehends mankind but which mankind cannot comprehend."
    },
    {
        num: 10,
        quote: "내 가슴과 영혼에 있는 것이 해결책을 찾아야 한다.그것이 음악의 이유다.",
        english: "What I have in my heart and soul - must find a way out.That’s the reason for music."
    }
];

const quote = document.querySelector("#quote span:first-child");
const english = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
english.innerText = todaysQuote.english;