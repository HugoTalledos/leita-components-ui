import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './TextField.css';
import MDIcon from '../MDIcon/MDIcon';

export const TextArea = ({
  label = '',
  value,
  type,
  icon = '',
  disabled = false,
  onChange,
  id,
}) => {
  useEffect(() => {
    const input = document.getElementById(id);
    if (disabled) input.previousElementSibling.classList.add('top');
    if (value) input.previousElementSibling.classList.add('top');

    input.onfocus = () => {
      input.previousElementSibling.classList.add('top');
      input.previousElementSibling.classList.add('focus');
      input.parentNode.classList.add('focus');
    };

    input.onblur = () => {
      if (input.value.trim().length === 0) {
        input.previousElementSibling.classList.remove('top');
      }
      input.previousElementSibling.classList.remove('focus');
      input.parentNode.classList.remove('focus');
    };
  }, [id]);

  return (
    <div className="leita-text__field">
      <label htmlFor={id}>
        <MDIcon name={icon} className="icon" />
        <span>{label}</span>
        <textarea
          disabled={disabled}
          className="form-content"
          type={type}
          value={value}
          onChange={onChange}
          id={id}
        />
      </label>
    </div>);
};

export const TextField = ({
  label = '',
  value,
  type,
  icon = '',
  disabled = false,
  onChange,
  id,
}) => {
  useEffect(() => {
    const input = document.getElementById(id);
    if (disabled) input.previousElementSibling.classList.add('top');
    if (value) input.previousElementSibling.classList.add('top');

    input.onfocus = () => {
      input.previousElementSibling.classList.add('top');
      input.previousElementSibling.classList.add('focus');
      input.parentNode.classList.add('focus');
    };

    input.onblur = () => {
      if (input.value.trim().length === 0) {
        input.previousElementSibling.classList.remove('top');
      }
      input.previousElementSibling.classList.remove('focus');
      input.parentNode.classList.remove('focus');
    };
  }, []);

  return (
    <div className="leita-text__field">
      <label htmlFor={id}>
        <MDIcon name={icon} className="icon" />
        <span>{label}</span>
        <input disabled={disabled} type={type} value={value} onChange={onChange} id={id} />
      </label>
    </div>);
};

TextField.protoType = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

TextArea.protoType = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
