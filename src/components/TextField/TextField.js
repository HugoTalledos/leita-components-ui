import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './TextField.css';

export const TextArea = ({
  label = '',
  value,
  type,
  onChange,
  id,
}) => {
  useEffect(() => {
    const input = document.getElementById(id);
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
    <div className="text__field">
      <label htmlFor={id}>
        <span>{label}</span>
        <textarea className="form-content" type={type} value={value} onChange={onChange} id={id} />
      </label>
    </div>);
};

export const TextField = ({
  label = '',
  value,
  type,
  onChange,
  id,
}) => {
  useEffect(() => {
    const input = document.getElementById(id);
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
    <div className="text__field">
      <label htmlFor={id}>
        <span>{label}</span>
        <input type={type} value={value} onChange={onChange} id={id} />
      </label>
    </div>);
};

TextField.protoType = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
