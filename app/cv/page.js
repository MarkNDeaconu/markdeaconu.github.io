export const metadata = {
    title: "Mark Deaconu - CV",
  };
  
  export default function CVPage() {
    return (
      <div
        style={{
          margin: "0 auto",
          padding: "20px",
          maxWidth: "800px",
          fontFamily: "'Roboto Mono', monospace",
          color: "#c9d1d9",
          backgroundColor: "#0d1117",
          lineHeight: "1.6",
        }}
      >
        <h2 style={{ borderBottom: "2px solid #58a6ff", paddingBottom: "5px" }}>
          Work Experience
        </h2>
        <p>
          <strong>Institute for Quantum Computing</strong> <br />
          <em>Undergraduate Researcher - Dr. Michele Mosca</em> <br />
          <span>April 2024 - Present</span>
        </p>
        <ul>
          <li>Designed a quantum compiler for multiple gatesets and frameworks</li>
          <li>
            Presented at the IQC graduate student conference on quantum compilers
          </li>
        </ul>
  
        <h2 style={{ borderBottom: "2px solid #58a6ff", paddingBottom: "5px" }}>
          Education
        </h2>
        <p>
          <strong>Queen's University</strong> <br />
          <em>BS in Computer Science and Mathematics</em> <br />
          <span>September 2021 - April 2024</span>
        </p>
        <ul>
          <li>Program GPA: 3.96</li>
          <li>Dean's Honor List (2x); Leadership roles in AI clubs</li>
        </ul>
  
        <h2 style={{ borderBottom: "2px solid #58a6ff", paddingBottom: "5px" }}>
          Skills
        </h2>
        <ul>
          <li>Programming Languages: Python, C, TensorFlow, Haskell, Prolog</li>
          <li>Tools: Next.js, LaTeX, Git, Linux</li>
        </ul>
      </div>
    );
  }
  
  