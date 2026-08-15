const logos = ['Axiom', 'Lumina', 'Verdant', 'Aether', 'Ember', 'Solace', 'Nexus', 'Crest']

export default function Clients() {
  return (
    <div id="clients">
      <p className="clients-label reveal">Trusted by forward-thinking brands</p>
      <div className="clients-row">
        {logos.map((name, i) => (
          <div key={name} className={`client-logo reveal${i > 0 ? ` reveal-delay-${Math.min(i, 5)}` : ''}`}>
            {name}
          </div>
        ))}
      </div>
    </div>
  )
}
