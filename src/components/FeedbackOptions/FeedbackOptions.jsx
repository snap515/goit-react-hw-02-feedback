export const FeedbackOptions = ({options, onLeaveFeedback}) => {return (
    <ul>
      {options.map(optionElem => <li key={optionElem}><button name={optionElem} onClick={onLeaveFeedback}>{optionElem.charAt(0).toUpperCase() + optionElem.slice(1)}</button></li>)}
      </ul>
  )}
  
