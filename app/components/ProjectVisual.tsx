import Image from 'next/image';
import type { Project } from '../data/projects';

const neutralBlur = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSIyNSI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjI1IiBmaWxsPSIjZTVlMWRhIi8+PC9zdmc+';

type Props = {
  project: Project;
  variant?: 'cover' | 'spread' | 'system' | 'detail';
  className?: string;
  src?: string;
  alt?: string;
  eager?: boolean;
  sizes?: string;
};

export function ProjectVisual({ project, variant = 'cover', className = '', src, alt, eager = false, sizes = '(max-width: 768px) 100vw, 90vw' }: Props) {
  const style = {
    '--visual-bg': project.theme.background,
    '--visual-fg': project.theme.foreground,
    '--visual-accent': project.theme.accent,
    '--visual-secondary': project.theme.secondary,
  } as React.CSSProperties;

  const asset = src ?? project.heroImage;

  if (asset) {
    return (
      <div className={`visual real-visual real-visual--${variant} ${className}`} style={style}>
        <span className="real-visual__media">
          <Image
            src={asset}
            alt={alt ?? `${project.client}: ${project.title}`}
            fill
            sizes={sizes}
            loading={eager ? 'eager' : 'lazy'}
            fetchPriority={eager ? 'high' : 'auto'}
            placeholder="blur"
            blurDataURL={neutralBlur}
          />
        </span>
      </div>
    );
  }

  return (
    <div className={`visual visual--${variant} ${className}`} style={style} role="img" aria-label={`${project.client}: ${project.title} ${variant} concept visual`}>
      <span className="visual-no">0{project.featuredOrder}</span>
      <span className="visual-client">{project.client}</span>
      <strong className="visual-title">{project.title}</strong>
      <span className="visual-label">{project.label} / {project.year}</span>
      <div className="visual-lines"><i /><i /><i /><i /></div>
      <div className="visual-orbit"><i /></div>
      <div className="visual-panel"><span>{project.category}</span><b>{String(project.featuredOrder * 13 + 4).padStart(2, '0')}%</b></div>
    </div>
  );
}
