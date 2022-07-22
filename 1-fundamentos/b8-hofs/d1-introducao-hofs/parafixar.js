const wakeUp = () => 'Acordando!';
const breakfast = () => 'Bora tomar café!';
const sleep = () => 'Partiu dormir!';

const doingThings = (action) => console.log(action());

doingThings(wakeUp);
doingThings(sleep);
 