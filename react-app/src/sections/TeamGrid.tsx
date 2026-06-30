import './TeamGrid.css';
interface TeamMember { name: string; position: string; bio: string; imageSrc: string; imageAlt: string; }
interface TeamGridProps { heading?: string; description?: string; members: TeamMember[]; }
export default function TeamGrid({ heading = 'Meet the Team', description, members }: TeamGridProps) {
  return (
    <section className="team-section">
      <div className="page-center">
        <div className="team-header">
          <h2>{heading}</h2>
          {description && <div dangerouslySetInnerHTML={{ __html: description }} />}
        </div>
        <div className="team-grid">
          {members.map((m) => (
            <div key={m.name} className="team-card">
              <img src={m.imageSrc} alt={m.imageAlt} loading="lazy" />
              <div className="team-card__info">
                <h3>{m.name}</h3>
                <p className="team-card__position">{m.position}</p>
                <p className="team-card__bio">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
