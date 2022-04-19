import PropTypes from 'prop-types';
import './ToggleButton.css';

export const ToggleButtonItem = ({ icon, value, active, onClick }) => (
  <button
    className={`ToggleButtonItem ${active ? 'active' : ''}`}
    onClick={(e) => onClick ? onClick({ ...e, value }) : null}
  >
    <span className={`mdi mdi-24px mdi-${icon}`} />
  </button>)

export const ToggleButton = ({
  children,
  disabled = false,
  icon = '',
  label = '',
}) => (
  <>
    <input type="checkbox" id="click" disabled={disabled} />
    <div className="buttons">
      <label htmlFor="click" className="share-btn">
        <span className={`mdi mdi-24px mdi-${icon}`} />
        <p>{label}</p>
      </label>
      { children }
    </div>
  </>);

ToggleButton.protoType = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.element)]),
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  label: PropTypes.string,
};

