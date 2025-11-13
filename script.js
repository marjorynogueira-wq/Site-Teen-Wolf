const quizData = [
 {
 question: "1. Seu maior valor em um grupo de amigos é:",
 options: [
 { text: "Lealdade e proteção; eu sou o escudo.", scores: {
S: 3, St: 1, L: 0, D: 0 } },
 { text: "Inteligência e sarcasmo; eu sou o cérebro.",
scores: { S: 1, St: 3, L: 2, D: 0 } },
 { text: "Conexão emocional e intuição; eu sou a voz da
razão.", scores: { S: 0, St: 1, L: 3, D: 1 } },
 { text: "Força e experiência; eu sou o mentor severo.",
scores: { S: 1, St: 0, L: 0, D: 3 } }
 ]
 },
 {
 question: "2. Qual estética te atrai mais?",
 options: [
 { text: "Jaquetas de couro, capuzes e o visual de lobo
solitário.", scores: { S: 1, St: 0, L: 0, D: 3 } },
 { text: "Roupas escuras, mas práticas para fugir ou
investigar.", scores: { S: 1, St: 3, L: 1, D: 1 } },
 { text: "Estilo sofisticado, mas com um toque
misterioso/gótico.", scores: { S: 0, St: 0, L: 3, D: 1 } },
 { text: "Uniforme de Lacrosse e um visual mais
atlético/normal.", scores: { S: 3, St: 1, L: 0, D: 0 } }
 ]
 },
 {
 question: "3. Seus amigos estão em perigo. Qual é sua reação
imediata?",
 options: [
 { text: "Pular na frente, não importa o custo pessoal.",
scores: { S: 3, St: 0, L: 1, D: 2 } },
 { text: "Procurar a pista ou o ponto fraco do inimigo.
Rápido!", scores: { S: 1, St: 3, L: 1, D: 1 } },
 { text: "Você tem um pressentimento de onde o perigo está.
Você os avisa, gritando se necessário.", scores: { S: 0, St: 1, L: 3,
D: 0 } },
 { text: "Atacar com força e raiva para eliminar a ameaça
imediatamente.", scores: { S: 2, St: 0, L: 0, D: 3 } }
  },
 {
 question: "4. Qual é o seu maior medo ou desafio pessoal?",
 options: [
 { text: "Perder o controle e machucar as pessoas que amo.",
scores: { S: 3, St: 0, L: 0, D: 1 } },
 { text: "Ser inútil ou não conseguir salvar meus amigos.",
scores: { S: 1, St: 3, L: 1, D: 0 } },
 { text: "Ser rejeitado ou ignorado, não ter minha
inteligência/poder reconhecido.", scores: { S: 0, St: 1, L: 3, D: 0 }
},
 { text: "A repetição de um passado trágico ou falhar em
proteger minha família/matilha.", scores: { S: 1, St: 0, L: 1, D: 3 } }
 ]
 }
];
const resultsMap = {
 S: {
 name: "Scott McCall",
 title: "O Verdadeiro Alfa",
 description: "Você é um líder nato, movido pela moralidade e
lealdade inabalável. Seu maior poder é a capacidade de fazer a coisa
certa, não importa o quão sombria a situação. Você representa o drama
adolescente que se transforma em heroísmo puro.",
 color: "linear-gradient(135deg, #0077c9, #1c1c1c)"
 },
 St: {
 name: "Stiles Stilinski",
 title: "O Humano Estratégico",
 description: "Você é a âncora humana, o cérebro por trás das
operações. Sua inteligência, sarcasmo e ceticismo são suas armas. Seu
caminho é um misto de alívio cômico e aterrorizante profundidade
psicológica (Nogitsune). Você representa a complexidade do drama
adolescente.",
 color: "linear-gradient(135deg, #004d80, #1c1c1c)"
 },
 L: {
 name: "Lydia Martin",
 title: "A Gênio Banshee",
 description: "Você é a mente e a intuição do grupo. Você
pressente o sombrio e o perigo. Sua jornada é de autodescoberta,
  abraçando um poder que inicialmente parecia uma maldição. Você
incorpora o romance gótico moderno com sua beleza e poder letal.",
 color: "linear-gradient(135deg, #8a2be2, #1c1c1c)"
 },
 D: {
 name: "Derek Hale",
 title: "O Alfa Sombrio",
 description: "Você é o tipo forte, silencioso e sombrio. Seu
passado te moldou, mas sua lealdade é profunda. Você é o mentor severo,
focado na sobrevivência. Sua estética é a do sobrenatural sombrio e
lupino.",
 color: "linear-gradient(135deg, #36454F, #1c1c1c)"
 }
};
function renderQuiz() {
 const container = document.getElementById('quiz-container');
 if (!container) {
 console.error("Elemento #quiz-container não encontrado no
HTML.");
 return;
 }

 container.innerHTML = '';
 quizData.forEach((q, qIndex) => {
 const questionDiv = document.createElement('div');
 questionDiv.className = 'question';

 const questionP = document.createElement('p');
 questionP.textContent = `${q.question}`;
 questionDiv.appendChild(questionP);
 q.options.forEach((option, oIndex) => {
 const optionDiv = document.createElement('div');
 optionDiv.className = 'answer-option';
 const input = document.createElement('input');
 input.type = 'radio';
 input.name = `question${qIndex}`;
 input.id = `q${qIndex}o${oIndex}`;
 input.value = JSON.stringify(option.scores);
   ment.createElement('label');
 label.htmlFor = `q${qIndex}o${oIndex}`;
 label.textContent = option.text;
 optionDiv.appendChild(input);
 optionDiv.appendChild(label);
 questionDiv.appendChild(optionDiv);
 });
 container.appendChild(questionDiv);
 });
}
function checkAnswers() {
 let scores = { S: 0, St: 0, L: 0, D: 0 };
 let answeredCount = 0;
 const totalQuestions = quizData.length;
 const resultsDiv = document.getElementById('results');

 quizData.forEach((_, qIndex) => {
 const selector = `input[name="question${qIndex}"]:checked`;
 const selected = document.querySelector(selector);
 if (selected) {
 answeredCount++;
 const selectedScores = JSON.parse(selected.value);
 for (const key in scores) {
 scores[key] += selectedScores[key];
 }
 }
 });
 resultsDiv.innerHTML = '';
 if (answeredCount < totalQuestions) {
 resultsDiv.style.backgroundColor = 'var(--cor-secundaria)';
 resultsDiv.textContent = '❗ Por favor, responda a todas as
perguntas para revelar seu destino sobrenatural.';
 resultsDiv.scrollIntoView({ behavior: 'smooth' });
 return;
 }
  let topScore = -1;
 let resultKey = '';

 for (const key in scores) {
 if (scores[key] > topScore) {
 topScore = scores[key];
 resultKey = key;
 }
 }
 const result = resultsMap[resultKey];
 resultsDiv.style.backgroundColor = '#1a1a1a';
 resultsDiv.style.borderColor = 'var(--cor-principal)';
 resultsDiv.style.color = 'var(--cor-texto)';

 resultsDiv.innerHTML = `
 <h3 style="color: var(--cor-principal); font-family:
var(--fonte-gotica); font-size: 1.5em; margin-bottom: 10px;">SEU
RESULTADO É... ${result.name}!</h3>
 <p style="color: var(--cor-destaque); font-weight: bold;
margin-bottom: 15px;">"${result.title}"</p>
 <p>${result.description}</p>
 <p style="margin-top: 20px; font-size: 0.9em; color:
var(--cor-secundaria);">Pontuação final: S:${scores.S},
St:${scores.St}, L:${scores.L}, D:${scores.D}</p>
 `;
 resultsDiv.scrollIntoView({ behavior: 'smooth' });
}
document.addEventListener('DOMContentLoaded', renderQuiz);
