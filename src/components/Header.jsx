
const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const description = reactDescriptions[genRandomInt(2)];
    return (
      <>
        <br /><br /><br /><br />
      </>
    );
  }