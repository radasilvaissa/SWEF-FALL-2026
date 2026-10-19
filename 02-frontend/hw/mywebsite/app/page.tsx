export default function Home() {
  return (
    // at least full screen height, light stone background, dark gray text.
    <main className="min-h-screen bg-stone-100 text-stone-800">
      {/* A centered column capped at a readable width, with padding that grows on medium+ screens. */}
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* The top heading: your name, huge, extra-bold, tightly spaced, and bigger on medium+ screens. */}
        <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight text-stone-950">
          {/* Your first name. */}
          Issa
          {/* A line break so your last name sits on its own line. */}
          <br />
          {/* Your last name. */}
          Rada
        {/* Closes the heading. */}
        </h1>

        {/* A subtitle paragraph in larger, softer gray text, spaced below the name. */}
        <p className="mt-6 text-xl text-stone-600">
          {/* The subtitle text: what you study and your SWEF role. */}
          Computer science, business, and math at Northeastern. Director of SWEF at TAMID.
        {/* Closes the subtitle paragraph. */}
        </p>

        {/* The bio section: spaced below the subtitle, larger text, airy line height, gaps between paragraphs. */}
        <section className="mt-12 space-y-4 text-lg leading-relaxed">
          {/* Starts the first bio paragraph. */}
          <p>
            {/* Your degree, graduation date, and current co-op. */}
            I’m studying computer science, business administration, and math with a finance concentration, graduating December 2027. Right now I’m an Investment Data Engineer co-op at MFS Investment Management.
          {/* Closes the first bio paragraph. */}
          </p>
          {/* Starts the second bio paragraph. */}
          <p>
            {/* Your answer to "why SWEF". */}
            Why SWEF: it’s the on-ramp to TAMID’s SWE track, where members build software for real clients. I run it so that everyone who comes through can ship real code by the end of the semester.
          {/* Closes the second bio paragraph. */}
          </p>
        {/* Closes the bio section. */}
        </section>

        {/* The projects section, spaced below the bio. */}
        <section className="mt-12">
          {/* The section heading: large, bold, near-black. */}
          <h2 className="text-2xl font-bold text-stone-950">What I’m building</h2>
          {/* A bulleted-list element spaced below the heading, with gaps between items. */}
          <ul className="mt-4 space-y-4">
            {/* Starts the first project item. */}
            <li>
              {/* The project name in semibold near-black. */}
              <p className="font-semibold text-stone-950">InvestmentTracker</p>
              {/* The project description in softer gray. */}
              <p className="text-stone-600">A personal quant project.</p>
            {/* Closes the first project item. */}
            </li>
            {/* Starts the second project item. */}
            <li>
              {/* The project name in semibold near-black. */}
              <p className="font-semibold text-stone-950">Movo</p>
              {/* Starts the project description in softer gray. */}
              <p className="text-stone-600">
                {/* What Movo does and what your part is. */}
                Computer vision that tracks trucks and trailers across yard cameras. I work on the OCR and the detector fine-tuning.
              {/* Closes the project description. */}
              </p>
            {/* Closes the second project item. */}
            </li>
          {/* Closes the list. */}
          </ul>
        {/* Closes the projects section. */}
        </section>

        {/* A row of link buttons, spaced below the projects, that wraps onto a new line on narrow screens. */}
        <div className="mt-12 flex flex-wrap gap-4">
          {/* Starts the GitHub link. */}
          <a
            // Where the link goes: your GitHub profile.
            href="https://github.com/radasilvaissa"
            // A pill-shaped outlined button that fills dark with light text on hover.
            className="rounded-full border-2 border-stone-950 px-5 py-2 font-semibold text-stone-950 hover:bg-stone-950 hover:text-stone-100"
          // Ends the opening tag; the visible link text comes next.
          >
            {/* The text people click. */}
            GitHub
          {/* Closes the GitHub link. */}
          </a>
          {/* Starts the LinkedIn link. */}
          <a
            // Where the link goes: your LinkedIn profile.
            href="https://www.linkedin.com/in/issa-rada"
            // Same pill-shaped button style as the GitHub link.
            className="rounded-full border-2 border-stone-950 px-5 py-2 font-semibold text-stone-950 hover:bg-stone-950 hover:text-stone-100"
          // Ends the opening tag; the visible link text comes next.
          >
            {/* The text people click. */}
            LinkedIn
          {/* Closes the LinkedIn link. */}
          </a>
          {/* Starts the email link. */}
          <a
            // A mailto: link opens the visitor's email app addressed to you.
            href="mailto:radasilva.i@northeastern.edu"
            // Same pill-shaped button style as the other links.
            className="rounded-full border-2 border-stone-950 px-5 py-2 font-semibold text-stone-950 hover:bg-stone-950 hover:text-stone-100"
          // Ends the opening tag; the visible link text comes next.
          >
            {/* The text people click. */}
            Email
          {/* Closes the email link. */}
          </a>
        {/* Closes the links row. */}
        </div>
      {/* Closes the centered column. */}
      </div>
    {/* Closes the main element. */}
    </main>
    // Ends the returned JSX and the return statement.
  );
  // Closes the Home function.
}