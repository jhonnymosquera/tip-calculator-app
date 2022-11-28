import { Link } from 'react-router-dom';
import style from './Button.module.css';

function ButtonLink({ rute = '/', value = 'Button', className = '' }) {
	return (
		<Link to={rute} className={`${style.button} ${className}`}>
			{value}
		</Link>
	);
}

export default ButtonLink;
