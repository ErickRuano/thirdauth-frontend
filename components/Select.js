const Select = ({options = [], value='selected', placeholder='Select option', onChange, ...rest}) => {

  return (
    <select className="select flex-grow" onChange={onChange} defaultValue={value}>
      <option disabled="disabled">{placeholder}</option>
      
      {
        options.map((option, i) => (
          <option key={i} value={option.value}>{option.label}</option>
        ))
      }
    </select>
  );
};

export default Select
