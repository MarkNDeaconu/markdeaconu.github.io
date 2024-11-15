import MarkdownRenderer from '../../../components/MarkdownRenderer';

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
    </div>
  );
}

