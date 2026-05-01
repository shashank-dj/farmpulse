import { Tag } from '../components/UI.jsx'

const farmSettings = [
  { icon: '🏡', label: 'Farm Profile', tag: null },
  { icon: '👥', label: 'Farmer Account Management', tag: { type: 'must', label: 'Must' } },
  { icon: '📊', label: 'Reports & Analytics', tag: null },
]

const notifSettings = [
  { icon: '🔔', label: 'Notifications', badge: '3' },
]

const advancedSettings = [
  { icon: '🤖', label: 'Vocalization AI (Beta)', tag: { type: 'could', label: 'Could' } },
  { icon: '🥚', label: 'Egg Quality Monitoring', tag: { type: 'should', label: 'Should' } },
  { icon: '⚙️', label: 'Settings', tag: null },
  { icon: '🚪', label: 'Sign Out', danger: true },
]

function SettingsGroup({ label, items }) {
  return (
    <div className="bg-[#fdfcf8] border border-black/[0.12] rounded-[14px] overflow-hidden mb-4 animate-fade-up">
      <div className="text-[9px] font-semibold tracking-[0.16em] uppercase text-black/35 px-5 py-3.5 border-b border-black/[0.12] bg-parch">
        {label}
      </div>
      {items.map((item, i) => (
        <div
          key={item.label}
          className={[
            'flex items-center gap-3 px-5 py-3.5 cursor-pointer transition-colors duration-150 hover:bg-[#f8f6f0]',
            i < items.length - 1 ? 'border-b border-black/[0.12]' : '',
          ].join(' ')}
        >
          <span className="text-lg min-w-6">{item.icon}</span>
          <span className={`flex-1 text-[13px] ${item.danger ? 'text-[#ef5350]' : 'text-soil'}`}>{item.label}</span>
          {item.badge && (
            <span className="bg-[#ef5350] text-white text-[10px] font-bold px-2 py-0.5 rounded-full mr-2">
              {item.badge}
            </span>
          )}
          {item.tag && <Tag type={item.tag.type}>{item.tag.label}</Tag>}
          {!item.danger && <span className="text-black/25 text-sm ml-1">›</span>}
        </div>
      ))}
    </div>
  )
}

export default function Account() {
  return (
    <div className="p-7 md:p-8">
      {/* Profile hero */}
      <div className="bg-bark rounded-[14px] px-7 py-7 flex items-center gap-5 mb-5 relative overflow-hidden animate-fade-up">
        <div className="absolute right-7 text-[80px] opacity-[0.08] select-none">🌾</div>
        <div className="w-16 h-16 bg-fern rounded-full flex items-center justify-center text-3xl border-[3px] border-white/15 flex-shrink-0">
          👨‍🌾
        </div>
        <div>
          <p className="font-display text-[22px] font-bold text-cream">Marco Bianchi</p>
          <p className="text-[13px] text-white/50 mt-0.5">Farm Owner · Greenfield Estate, Lombardy</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <SettingsGroup label="Farm" items={farmSettings} />
          <SettingsGroup label="Notifications" items={notifSettings} />
        </div>
        <div>
          <SettingsGroup label="Advanced Features" items={advancedSettings} />
        </div>
      </div>
    </div>
  )
}
