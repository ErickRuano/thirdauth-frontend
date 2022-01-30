const Icon = ({name, ...rest}) => {
  return (
    <span className={`material-icons ${rest.className || ''}`}>
      {name}
    </span>
  );
};

export default Icon
