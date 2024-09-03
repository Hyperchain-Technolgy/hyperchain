import PropTypes from "prop-types";

const PrimaryButton = ({ title }) => {
  return (
    <button className="boton-elegante">
      {title}
      <style>
        {`
          .boton-elegante {
            padding: 8px 20px;
            border: 2px solid #2c2c2c;
            background-color: #1a1a1a;
            color: #ffffff;
            cursor: pointer;
            border-radius: 30px;
            transition: all 0.4s ease;
            outline: none;
            position: relative;s
            overflow: hidden;
          }
          .boton-elegante::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(
              circle,
              rgba(255, 255, 255, 0.25) 0%,
              rgba(255, 255, 255, 0) 70%
            );
            transform: scale(0);
            transition: transform 0.5s ease;
          }
          .boton-elegante:hover::after {
            transform: scale(4);
          }
          .boton-elegante:hover {
            border-color: #666666;
            background: #292929;
          }
        `}
      </style>
    </button>
  );
};

PrimaryButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PrimaryButton;
