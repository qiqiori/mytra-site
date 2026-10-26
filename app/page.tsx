const agentNodes = [
  { x: '19%', y: '26%', size: 'node-lg', delay: '0s' },
  { x: '72%', y: '18%', size: 'node-sm', delay: '-1.8s' },
  { x: '82%', y: '69%', size: 'node-md', delay: '-3.2s' },
  { x: '31%', y: '79%', size: 'node-sm', delay: '-4.6s' },
  { x: '54%', y: '48%', size: 'node-core', delay: '-1s' },
];

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="mytra home">
          mytra<span>.</span>
        </a>
        <p className="nav-note">Multiagent evals</p>
      </nav>

      <section className="hero" id="top">
        <div className="copy">
          <p className="eyebrow">
            <span aria-hidden="true" /> Evaluation infrastructure for agent systems
          </p>
          <h1>
            Know what your
            <br /> agents will do.
          </h1>
          <p className="lede">
            mytra turns multiagent systems into measurable experiments—run
            scenarios, trace interactions, and compare behavior across models.
          </p>
          <div className="status" aria-label="Company status">
            <span className="status-dot" aria-hidden="true" />
            <span>Building in Cambridge, MA</span>
          </div>
        </div>

        <div className="visual" aria-label="Abstract network of interacting agents">
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="crosshair" aria-hidden="true" />
          {agentNodes.map((node, index) => (
            <span
              aria-hidden="true"
              className={`agent-node ${node.size}`}
              key={`${node.x}-${node.y}`}
              style={{
                left: node.x,
                top: node.y,
                animationDelay: node.delay,
              }}
            >
              {index === 4 ? <span className="node-center" /> : null}
            </span>
          ))}
          <p className="visual-label label-top">Scenario 001</p>
          <p className="visual-label label-bottom">5 agents · 24 interactions</p>
        </div>
      </section>
    </main>
  );
}
