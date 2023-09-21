const chatBot = {value : 'Alexa'}
chatBot.value = 'Siri';
const botName = 'Alexa';
// botName ='Siri';
console.log(botName.length);
botName.toUpperCase();
botNames = ['Alexa','Siri'];
botNames[2]='Maya';
botName.indexOf('S')//0
botName.indexOf('Z');
botName.toLowerCase().startsWith('s');
let firstName = 'Olga';
let lastName = 'Scrivner';
firstName+' '+lastName`${firstName} ${lastName}`
let text = '\t      this is an input   \n'
text.trim()
let score =0;
score+=10;
score-=5;
score=-3;
Number('25');
String(25);
25..toString();
{let b1 = 3; b1;} //create a local mutable assignment only
b1;

let b2=2;
{b2=4;b2;} // global b2 is accessible in block and is mutable
b2;   // if global accessed internally still overrides it

const c1 = 3;
{const c1=2;c1} //create a local immutable

c1; 

