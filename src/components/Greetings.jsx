const Greetings = (props) => {
  let greetings = '';
  switch (props.lang) {
    case 'en':
      greetings = 'Hello ' + props.children;
      break;
    case 'fr':
      greetings = 'Bonjour ' + props.children;
      break;
    case 'de':
      greetings = 'Hallo ' + props.children;
      break;
    case 'es':
      greetings = 'Hola ' + props.children;
      break;
    default:
      return 'error';
  }

  return <div className="greetings">{greetings}</div>;
};

export default Greetings;
