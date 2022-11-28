import { useContext } from 'react';
import { Context } from './Context';

export default function useContexApp() {
	return useContext(Context);
}
