import Button from './button';
import {useLocation} from 'react-router-dom';
const Header = ({titleBtn, titleHeader, onShowAddTask,}) => {
  const location = useLocation();
  return (
  <div className="header">
        <h1>{titleHeader}</h1>
      {location.pathname === "/" && 
      <Button onClick={onShowAddTask} 
      titleBtn={!titleBtn ? "Add" : "Close"}/>
      }
  </div>);
};
export default Header;

