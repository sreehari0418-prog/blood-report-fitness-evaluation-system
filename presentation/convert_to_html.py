import markdown
import sys

# Read the markdown file
with open('TECHNICAL_DOCUMENTATION.md', 'r', encoding='utf-8') as f:
    md_content = f.read()

# Convert to HTML
html_content = markdown.markdown(md_content, extensions=['fenced_code', 'tables'])

# Create a styled HTML document
html_template = f"""<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Blood Report Fitness Evaluation System - Technical Documentation</title>
    <style>
        @page {{
            margin: 2cm;
            size: A4;
        }}
        body {{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            line-height: 1.6;
            max-width: 210mm;
            margin: 0 auto;
            padding: 20px;
            color: #333;
        }}
        h1 {{
            color: #2563eb;
            border-bottom: 3px solid #2563eb;
            padding-bottom: 10px;
            page-break-after: avoid;
        }}
        h2 {{
            color: #1e40af;
            margin-top: 30px;
            page-break-after: avoid;
        }}
        h3 {{
            color: #3b82f6;
            margin-top: 20px;
        }}
        code {{
            background: #f1f5f9;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
            font-size: 0.9em;
        }}
        pre {{
            background: #1e293b;
            color: #e2e8f0;
            padding: 15px;
            border-radius: 8px;
            overflow-x: auto;
            page-break-inside: avoid;
        }}
        pre code {{
            background: transparent;
            color: inherit;
            padding: 0;
        }}
        hr {{
            border: none;
            border-top: 2px solid #e5e7eb;
            margin: 30px 0;
            page-break-after: always;
        }}
        ul, ol {{
            margin-left: 20px;
        }}
        li {{
            margin: 5px 0;
        }}
        strong {{
            color: #1e40af;
        }}
        blockquote {{
            border-left: 4px solid #3b82f6;
            padding-left: 20px;
            margin: 20px 0;
            color: #64748b;
        }}
        .mermaid-note {{
            background: #fef3c7;
            border: 1px solid #fbbf24;
            padding: 15px;
            border-radius: 8px;
            margin: 20px 0;
            page-break-inside: avoid;
        }}
        @media print {{
            body {{
                padding: 0;
            }}
            h1, h2, h3 {{
                page-break-after: avoid;
            }}
            pre, blockquote, .mermaid-note {{
                page-break-inside: avoid;
            }}
        }}
    </style>
</head>
<body>
{html_content}

<div class="mermaid-note">
    <strong>📊 Note:</strong> This document contains flowcharts defined in Mermaid syntax. 
    To view the diagrams, open <code>TECHNICAL_DOCUMENTATION.md</code> on GitHub or in a Mermaid-compatible viewer.
</div>

<script>
    // Auto-print on load (optional)
    // window.onload = () => window.print();
</script>
</body>
</html>
"""

# Write HTML file
with open('TECHNICAL_DOCUMENTATION.html', 'w', encoding='utf-8') as f:
    f.write(html_template)

print("✅ HTML file created: TECHNICAL_DOCUMENTATION.html")
print("📄 Open this file in your browser and press Cmd+P to save as PDF")
