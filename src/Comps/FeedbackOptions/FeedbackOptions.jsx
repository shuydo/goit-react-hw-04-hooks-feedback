import PropTypes from "prop-types";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map((el,idx) => (
    <button key={el} type="button" onClick={onLeaveFeedback[idx]}>
      {el[0].toUpperCase() + el.slice(1)}
    </button>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.arrayOf(PropTypes.func).isRequired,
};
