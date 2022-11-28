import { Context } from './Context';
import iconDollar from '../../public/icon-dollar.svg';

function ContextProvider({ children }) {
	return <Context.Provider value={{ iconDollar }}>{children}</Context.Provider>;
}

export default ContextProvider;
