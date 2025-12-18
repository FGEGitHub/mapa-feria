
import Menu from '../pages/inicio';

import NOtFound from '../pages/notfound';
const Rutas = [
 
    { path: '/', element: <Menu /> },


 
	{ path: '*', element: <NOtFound /> }


]
export default Rutas;