// ── Alert Strip ──
export function AlertStrip({ icon, title, children, badge, variant = 'amber' }) {
  const styles = {
    amber: 'bg-amber-pale border-amber-farm/40 text-[#7a4e00]',
    red: 'bg-rust-pale border-rust-farm/30 text-[#7a1c00]',
  }
  const badgeStyles = {
    amber: 'bg-amber-farm text-soil',
    red: 'bg-rust-farm text-white',
  }
  return (
    <div className={`flex items-center gap-3 border rounded-[10px] px-[18px] py-3 mb-6 text-[13px] flex-wrap gap-y-2 ${styles[variant]}`}>
      <span className="text-lg flex-shrink-0">{icon}</span>
      <div className="flex-1 min-w-0">
        {title && <strong className="font-semibold">{title} — </strong>}
        {children}
      </div>
      {badge && (
        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${badgeStyles[variant]}`}>
          {badge}
        </span>
      )}
    </div>
  )
}

// ── Section Head ──
export function SectionHead({ title, sub, children }) {
  return (
    <div className="flex items-baseline gap-2 mb-3.5">
      <h2 className="font-display text-[17px] font-semibold text-soil">{title}</h2>
      {sub && <span className="text-[11px] text-black/40">{sub}</span>}
      {children}
    </div>
  )
}

// ── Priority Tag ──
const tagStyles = {
  must:   'bg-[#d3edd8] text-[#144d21]',
  should: 'bg-[#dce9fb] text-[#0d3f7a]',
  could:  'bg-[#fff0c0] text-[#7a4e00]',
  wont:   'bg-[#fce4ec] text-[#880e4f]',
}
export function Tag({ type = 'must', children }) {
  return (
    <span className={`inline-flex items-center text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-[0.08em] ${tagStyles[type]}`}>
      {children}
    </span>
  )
}

// ── Status Pill ──
const pillStyles = {
  done:    'bg-[#d8f3e4] text-[#145a32]',
  due:     'bg-amber-pale text-[#7a4e00]',
  pending: 'bg-[#f0f0f0] text-[#666]',
}
export function StatusPill({ status = 'pending', children }) {
  return (
    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full inline-block ${pillStyles[status]}`}>
      {children}
    </span>
  )
}

// ── Chip ──
const chipStyles = {
  must:   'bg-[#e4f2e6] text-moss border-sage',
  should: 'bg-sky-farm text-sky-dark border-[#90caf9]',
  could:  'bg-amber-pale text-[#7a4e00] border-amber-farm',
}
export function Chip({ type = 'must', children }) {
  return (
    <div className={`px-3.5 py-1.5 rounded-full text-[12px] font-medium cursor-pointer border-[1.5px] transition-all duration-150 hover:-translate-y-px hover:shadow-md ${chipStyles[type]}`}>
      {children}
    </div>
  )
}

// ── Card ──
export function Card({ children, className = '' }) {
  return (
    <div className={`bg-[#fdfcf8] border border-black/[0.12] rounded-[14px] overflow-hidden ${className}`}>
      {children}
    </div>
  )
}

// ── Metric Card ──
const metricAccents = {
  green: 'after:bg-sage',
  amber: 'after:bg-amber-farm',
  blue:  'after:bg-sky-dark',
  red:   'after:bg-rust-farm',
}
export function MetricCard({ eyebrow, value, label, change, changeDir = 'up', color = 'green', className = '' }) {
  return (
    <div className={[
      'bg-[#fdfcf8] border border-black/[0.12] rounded-[14px] p-5 relative overflow-hidden',
      'hover:shadow-[0_4px_20px_rgba(28,26,20,0.08)] transition-shadow duration-200',
      'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:content-[""]',
      metricAccents[color],
      className,
    ].join(' ')}>
      <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-black/40 mb-2.5 flex items-center gap-1.5">{eyebrow}</p>
      <p className="font-display text-[42px] font-black text-soil leading-none mb-1">{value}</p>
      <p className="text-[12px] text-black/50">{label}</p>
      {change && (
        <p className={`mt-2.5 text-[12px] font-medium flex items-center gap-1 ${changeDir === 'up' ? 'text-fern' : 'text-rust-farm'}`}>
          {changeDir === 'up' ? '▲' : '▼'} {change}
        </p>
      )}
    </div>
  )
}
