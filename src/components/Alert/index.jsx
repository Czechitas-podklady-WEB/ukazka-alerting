import '../Alert/style.css';

const selectFaIcon = (type) => {
  switch (type) {
    case 'success':
      return 'fa-check-circle';
    case 'info':
      return 'fa-info-circle';
    case 'warning':
      return 'fa-exclamation-circle';
    case 'error':
      return 'fa-times-circle';
    case 'panic':
      return 'fa-exclamation-triangle';
    default:
      return 'fa-bell';
  }
}

export const Alert = ({ type, title, children }) => {
  return (
    <div className={`alert alert--${type}`}>
      <div className="alert__head">
        <i className={`alert__icon fas ${selectFaIcon(type)}`}></i>
        <span className="alert__title">{title}</span>
      </div>
      <div className="alert__body">{children}</div>
    </div>
  );
};
