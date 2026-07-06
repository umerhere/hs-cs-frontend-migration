const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    border: '2px dashed #e67e22',
    borderRadius: 8,
    padding: '14px 20px',
    margin: '12px 0',
    background: '#fffaf4',
    color: '#b45309',
    fontFamily: 'monospace',
    fontSize: 13,
    lineHeight: 1.5,
  },
  icon: { fontSize: 18, flexShrink: 0 },
  label: { fontWeight: 700, marginRight: 6 },
  field: {
    background: '#fde8c8',
    borderRadius: 4,
    padding: '1px 6px',
    fontSize: 12,
  },
}

/**
 * Rendered in place of any section whose data is missing from Contentstack.
 * Visible only during development / when the CMS entry or module is not yet populated.
 *
 * @param {string} [field]   – CS field name / path that is missing  (e.g. "gf_hero_v1_module")
 * @param {string} [reason]  – optional human-readable context
 */
export default function MissingContent({ field, reason }) {
  return (
    <div style={styles.wrapper} role="status" aria-label="Missing content">
      <span style={styles.icon}>⚠</span>
      <span>
        <span style={styles.label}>Missing from Contentstack</span>
        {field && <code style={styles.field}>{field}</code>}
        {reason && <span style={{ marginLeft: 6, opacity: 0.75 }}>— {reason}</span>}
      </span>
    </div>
  )
}
