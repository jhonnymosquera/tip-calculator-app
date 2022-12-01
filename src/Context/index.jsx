import { Context } from './Context';
import iconDollar from '../../public/icon-dollar.svg';
import iconPerson from '../../public/icon-person.svg';

function ContextProvider({ children }) {
	return <Context.Provider value={{ iconDollar, iconPerson }}>{children}</Context.Provider>;
}

export default ContextProvider;
