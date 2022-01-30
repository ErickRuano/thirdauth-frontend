const Tabs = ({tabs = [], onTabChange, active}) => {

  return (
    <div className="flex">
      <div className="tabs">
          {tabs.map((tab, index) => {
            return (
              <a key={index} className={`tab tab-bordered no-underline ${tab.id === active ? 'tab-active' : ''}`} onClick={() => onTabChange(tab.id)}>{tab.label}</a>
            )
          }
        )}
      </div>
      <div className="flex-grow border-b-2 border-gray-800"></div>
    </div>
  );
};

export default Tabs
