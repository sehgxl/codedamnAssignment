export default function Portfolio() {
  return (
    <section className="border-2 border-blue-400 mx-44 mt-16 rounded-lg">
      <section>BG Image</section>
      <section className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <h1>Anna Cheng</h1>
          <span>Pro</span>
          <span>Lopoking for job</span>
        </div>
        <h2>Full Stack</h2>
        <h3>Location</h3>
        <div className="flex flex-row flex-wrap gap-4">
          <p>Skil 1</p>
          <p>Skill 2</p>
          <p>Skill 3</p>
        </div>

        <div className="flex flex-row justify-between">
          <div>Social Icons </div>
          <div>
            <span>Copy Icon</span>
            <button>Contact</button>
          </div>
        </div>
      </section>
      <section>Portfolio Resume</section>
    </section>
  );
}
