import type { Project } from '../data/projects';

type Props = { project: Project; variant?: 'cover' | 'spread' | 'system' | 'detail'; className?: string };

export function ProjectVisual({ project, variant = 'cover', className = '' }: Props) {
  const style = {
    '--visual-bg': project.theme.background,
    '--visual-fg': project.theme.foreground,
    '--visual-accent': project.theme.accent,
    '--visual-secondary': project.theme.secondary,
  } as React.CSSProperties;

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
