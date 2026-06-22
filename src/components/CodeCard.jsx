export default function CodeCard() {
  return (
    <div className="code-window">
      <div className="code-window-bar">
        <span className="code-dot code-dot-red" />
        <span className="code-dot code-dot-yellow" />
        <span className="code-dot code-dot-green" />
        <span className="code-window-tab">about-me.js</span>
      </div>
      <pre className="code-window-body">
        <code>
          <span className="tok-keyword">const</span> developer <span className="tok-punct">=</span> {"{"}
          {"\n"}  <span className="tok-key">name</span><span className="tok-punct">:</span> <span className="tok-string">"Omkar Kulkarni"</span>
          <span className="tok-punct">,</span>
          {"\n"}  <span className="tok-key">role</span><span className="tok-punct">:</span> <span className="tok-string">"Full-Stack Developer"</span>
          <span className="tok-punct">,</span>
          {"\n"}  <span className="tok-key">stack</span><span className="tok-punct">:</span> <span className="tok-punct">[</span><span className="tok-string">"React"</span><span className="tok-punct">,</span> <span className="tok-string">"Node.js"</span><span className="tok-punct">,</span> <span className="tok-string">"MongoDB"</span><span className="tok-punct">]</span>
          <span className="tok-punct">,</span>
          {"\n"}  <span className="tok-key">education</span><span className="tok-punct">:</span> <span className="tok-string">"B.Tech CSE (AI), 2025"</span>
          <span className="tok-punct">,</span>
          {"\n"}  <span className="tok-key">status</span><span className="tok-punct">:</span> <span className="tok-string">"Open to opportunities"</span>
          {"\n"}{"}"}<span className="tok-punct">;</span>
        </code>
      </pre>
    </div>
  );
}
