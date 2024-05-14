import { render } from 'preact';
import { App } from './app/app.tsx';
import './app/styles/index.css';
import './app/styles/prisma-dracula.css';

render(<App />, document.getElementById('app')!);
