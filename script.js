const getH1 = document.getElementById('quote');
const getBtn = document.getElementById('btn');

const quotes = [
  `I would rather regret the risks that didn’t work out than the chances I didn’t take at all. —Simone Biles`,
  `Make sure your worst enemy doesn’t live between your own two ears. —Laird Hamilton`,
  `What makes something special is not just what you have to gain, but what you feel there is to lose. —Andre Agassi`,
  `Believe me, the reward is not so great without the struggle. —Wilma Rudolph`,
  `Sports serve society by providing vivid examples of excellence. —Ben Hogan`,
  `If you can’t outplay them, outwork them. —Jackie Joyner-Kersee`,
  `It is action that creates motivation. —Steve Backley`,
  `Do you know what my favorite part of the game is? The opportunity to play. —Mike Singletary`,
  `Being nervous is not something you should be ashamed of. Nervous means you care, you really want to do well. —Paula Creamer`,
  `Persistence can change failure into extraordinary achievement. —Marv Levy`,
  `You can’t put a limit on anything. The more you dream, the farther you get. – Michael Phelps`,
  `The most important thing is to try and inspire people so that they can be great in whatever they want to do.” – Kobe Bryant`,
  `Some people want it to happen, some wish it would happen, others make it happen. – Michael Jordan`,
];

const colors = [
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',
  '#80B300',
  '#809900',
  '#E6B3B3',
  '#6680B3',
  '#66991A',
  '#FF99E6',
  '#CCFF1A',
  '#FF1A66',
  '#E6331A',
  '#33FFCC',
  '#66994D',
  '#B366CC',
  '#4D8000',
  '#B33300',
  '#CC80CC',
  '#66664D',
  '#991AFF',
  '#E666FF',
  '#4DB3FF',
  '#1AB399',
  '#E666B3',
  '#33991A',
  '#CC9999',
  '#B3B31A',
  '#00E680',
  '#4D8066',
  '#809980',
  '#E6FF80',
  '#1AFF33',
  '#999933',
  '#FF3380',
  '#CCCC00',
  '#66E64D',
  '#4D80CC',
  '#9900B3',
  '#E64D66',
  '#4DB380',
  '#FF4D4D',
  '#99E6E6',
  '#6666FF',
];

getBtn.addEventListener('click', function() {
const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
const randomColors = colors[Math.floor(Math.random() * colors.length)];
getH1.innerHTML = randomQuotes;
document.body.style.backgroundColor = randomColors;
})




