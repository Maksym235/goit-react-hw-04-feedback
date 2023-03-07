import { Button, ButtonWrapper } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ onLeaveFeedback }) {
  const options = [`Good`, `Neutral`, `Bad`];
  return (
    <ButtonWrapper>
      {options.map(item => {
        return (
          <Button key={item} type="button" onClick={onLeaveFeedback}>
            {item}
          </Button>
        );
      })}
    </ButtonWrapper>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
