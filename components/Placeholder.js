
const Placeholder = ({icon='error_outline', messagge='Hola', title='Hola'}) => {
    return (
      <div className="px-10 flex flex-start items-center text-gray-600">
        <span class="material-icons text-6xl">
            {icon}
        </span>
        <div className="ml-3">
            <h1 className="text-xl font-bold noMargin">
                {title}
            </h1>
            <p className="noMargin">
                {messagge}
            </p>
        </div>
      </div>
    );
  };
  
  export{ Placeholder }; 
  