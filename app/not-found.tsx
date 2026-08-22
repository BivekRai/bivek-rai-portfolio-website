import Link from 'next/link';
import { SiteHeader } from './components/SiteHeader';

export default function NotFound() { return <main className="not-found"><SiteHeader /><span>404</span><h1>This page seems to have moved off-grid.</h1><Link href="/">Back home →</Link></main>; }
