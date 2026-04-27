import { Button } from "@ttcom/components";
import "@ttcom/components/style.css";

export function App() {
  return (
    <main className="demo-shell">
      <section className="demo-panel" aria-labelledby="demo-title">
        <p className="demo-kicker">Component library demo</p>
        <h1 id="demo-title">Token-driven React components</h1>
        <p className="demo-copy">
          This app consumes the workspace component package, while the component package consumes the
          generated LESS tokens package.
        </p>
        <div className="demo-actions">
          <Button>Primary action</Button>
          <Button variant="secondary">Secondary action</Button>
        </div>
      </section>
    </main>
  );
}
