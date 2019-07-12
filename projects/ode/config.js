import { extendConfig } from '../../index';
const config = {
    slug: 'ode',
    title: 'Oralia Diacrónica del Español',
    metadata: [
        { id: 'country' },
        { id: 'settlement' },
        { id: 'institution' },
        { id: 'idno' },
    ],
    notes: [],
    pages: [],
    textdata: [],
};
export default extendConfig(config);
