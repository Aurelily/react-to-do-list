import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ darkMode, setDarkMode }) => {
  const handleOnClick = () => {
    if (!darkMode) {
      setDarkMode(true);
    } else if (darkMode) {
      setDarkMode(false);
    }
  };
  return (
    <header>
      <div>
        <FontAwesomeIcon icon="list" color="purple" />
        <h1>To Do List</h1>
      </div>
      <button onClick={handleOnClick}>
        {!darkMode ? (
          <span>Go to dark mode !</span>
        ) : (
          <span>Go to light mode !</span>
        )}
      </button>
    </header>
  );
};

export default Header;
