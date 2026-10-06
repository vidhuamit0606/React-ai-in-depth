import '@testing-library/jest-dom';
import { TextDecoder, TextEncoder } from 'util';

// React Router 7 needs TextEncoder, which the jsdom version bundled with CRA's Jest 27 doesn't provide
Object.assign(global, { TextEncoder, TextDecoder });
