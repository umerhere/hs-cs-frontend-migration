import './RichText.css';
interface RichTextProps { content: string; }
export default function RichText({ content }: RichTextProps) {
  return (
    <section className="richtext-section">
      <div className="page-center">
        <div className="richtext-body" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </section>
  );
}
