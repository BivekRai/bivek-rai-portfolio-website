const logos: Record<string, string> = {
  'ADF Foods': '/clients/adf.png',
  Coromandel: '/clients/coromandel.png',
  GHIAL: '/clients/ghial.png',
  'HDFC ERGO': '/clients/hdfc-ergo.png',
  SISASSS: '/clients/sisasss.png',
  IndiaRF: '/clients/indiarf.png',
};

export function ClientLogo({ client, className = '' }: { client: string; className?: string }) {
  const src = logos[client];

  if (!src) return <span className={className}>{client}</span>;

  return <img className={`client-logo ${className}`} src={src} alt={`${client} logo`} loading="lazy" />;
}
