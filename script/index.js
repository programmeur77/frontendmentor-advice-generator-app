const adviceNumber = document.querySelector('.advice__number-content');
const adviceContent = document.querySelector('.advice-content__text');
const generateBtn = document.querySelector('.advice__generate-btn');

const generateAdvice = async () => {
  const advice = await fetch('https://api.adviceslip.com/advice');
  const adviceContent = await advice.json();

  return adviceContent;
};

const advice = await generateAdvice();

const adviceID = advice.slip.id;
const adviceTextContent = advice.slip.advice;

adviceNumber.innerText = `${adviceID}`;
adviceContent.innerText = `${adviceTextContent}`;

generateBtn.addEventListener('click', (e) => {
  e.preventDefault();

  location.reload();
});
