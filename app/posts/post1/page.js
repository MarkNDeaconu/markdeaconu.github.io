import MarkdownRenderer from '../../../components/MarkdownRenderer';

// Metadata for this blog post
export const metadata = {
  title: "Welcome to My Blog",
  date: "November 14, 2024",
};

const blogContent = `
# Welcome to My Blog

This is a paragraph with **bold text**, _italic text_, and [a link](https://example.com).

## Code Example

Here's a Python code snippet:

\`\`\`python
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
\`\`\`

## LaTeX Example

Inline math: $E = mc^2$

Display math:

$$
\\int_a^b f(x) dx = F(b) - F(a)
$$

## Markdown Features

- Bullet points
- **Bold** and _italic_
- [Links](https://example.com)
`;

export default function BlogPost() {
  return (
    <div className="blog-post">
      <MarkdownRenderer content={blogContent} />
      {/* Add the TradingView chart at the bottom */}
      <div style={{ marginTop: '30px', border: '1px solid #444', borderRadius: '10px', overflow: 'hidden' }}>
        <iframe
          src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_abc&symbol=AAPL&interval=D&theme=dark"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      {/* Add the YouTube video below the stock chart */}
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Nt6NazoRHOY" 
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}



