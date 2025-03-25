// app/projects/clearsave/page.tsx

export default function ClearSavePage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        ClearSave – Fintech Savings App
      </h1>
      <p className="text-muted-foreground mb-6">
        A mobile-first savings app that helps users set financial goals and track progress in real-time.
      </p>

      <img
        src="/images/clearsave-screenshot.png"
        alt="ClearSave app UI"
        className="rounded-lg border mb-6"
      />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-foreground">My Role</h2>
        <p className="text-muted-foreground">
          I led the end-to-end UX/UI design for ClearSave — from research and wireframing to UI design and usability testing.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-foreground">Key Features</h2>
        <ul className="list-disc list-inside text-muted-foreground">
          <li>Goal-based savings tracker</li>
          <li>Secure bank linking with Plaid</li>
          <li>Custom onboarding flow based on user feedback</li>
        </ul>
      </section>

      <a
        href="https://your-clearsave-case-study-link.com"
        className="text-primary underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Full Case Study →
      </a>
    </div>
  )
}
