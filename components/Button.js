const Button = ({name, handler, children, loading, ...rest}) => {

  return (
    <button onClick={handler} className={`btn rounded-full px-4 py-2 ${loading ? 'loading' : ''} ${rest.className}`}>
      {children}
    </button>
  );
};

export default Button
