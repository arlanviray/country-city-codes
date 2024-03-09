import PropTypes from "prop-types";

Flag.propTypes = {
  code: PropTypes.string,
};

export default function Flag({ code }) {
  return <img src={`./flags/${code.toLowerCase()}.svg`} className="flag" />;
}
