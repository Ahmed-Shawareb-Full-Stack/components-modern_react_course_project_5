import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles.scss";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  light,
  dark,
  outlinePrimary,
  outlineSecondary,
  outlineSuccess,
  outlineWarning,
  outlineDanger,
  outlineLight,
  outlineDark,
  roundedPill,
  roundedCircle,
  ...rest
}) => {
  const classes = classNames(rest.className, "px-3 py-1.5", {
    "btn btn-primary": primary,
    "btn btn-secondary": secondary,
    "btn btn-success": success,
    "btn btn-warning": warning,
    "btn btn-danger": danger,
    "btn btn-light": light,
    "btn btn-dark": dark,
    "rounded-pill": roundedPill,
    "btn btn-outline-primary": outlinePrimary,
    "btn btn-outline-secondary": outlineSecondary,
    "btn btn-outline-success": outlineSuccess,
    "btn btn-outline-warning": outlineWarning,
    "btn btn-outline-danger": outlineDanger,
    "btn btn-outline-light": outlineLight,
    "btn btn-outline-dark": outlineDark,
    "rounded-pill": roundedPill,
    "rounded-circle": roundedCircle,
  });
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  checkVariations: ({ primary, secondary, success, warning, danger }) => {
    const countVariations =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (countVariations > 1) {
      return new Error("only one variation is allowed");
    }
  },
};
export default Button;
