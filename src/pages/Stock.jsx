import { AlertStrip, SectionHead, Tag } from '../components/UI.jsx'

const inventory = [
  {
    icon: '🌾',
    name: 'Cattle Fodder',
    location: 'Barn A · Supplier: AgriCo',
    qty: 180,
    unit: 'kg left',
    level: 'low',
    pct: 18,
  },
  {
    icon: '🐖',
    name: 'Pig Feed Mix',
    location: 'Barn B · Supplier: FeedPro',
    qty: 420,
    unit: 'kg left',
    level: 'mid',
    pct: 55,
  },
  {
    icon: '💉',
    name: 'FMD Vaccine',
    location: 'Cold store · Expiry: Aug 2025',
    qty: 240,
    unit: 'doses',
    level: 'ok',
    pct: 80,
  },
  {
    icon: '🌱',
    name: 'Poultry Layer Feed',
    location: 'Silo 2 · Supplier: GrainMill',
    qty: '1.8',
    unit: 'tonnes',
    level: 'ok',
    pct: 90,
  },
  {
    icon: '🧴',
    name: 'Disinfectant',
    location: 'Storage room · Generic use',
    qty: 12,
    unit: 'litres',
    level: 'mid',
    pct: 40,
  },
]

const levelStyles = {
  low: { qty: 'text-rust-farm', bar: 'bg-rust-farm' },
  mid: { qty: 'text-amber-farm', bar: 'bg-amber-farm' },
  ok:  { qty: 'text-fern',      bar: 'bg-sage' },
}

export default function Stock() {
  return (
    <div className="p-7 md:p-8">
      <AlertStrip icon="🚨" title="Low Stock Alert" badge="Must · Stock" variant="red">
        Cattle fodder critically low. Reorder required within 3 days to avoid feeding gap.
      </AlertStrip>

      <SectionHead title="Inventory">
        <Tag type="must">Must Feature</Tag>
      </SectionHead>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {inventory.map((item, i) => {
          const s = levelStyles[item.level]
          return (
            <div
              key={item.name}
              className="bg-[#fdfcf8] border border-black/[0.12] rounded-[12px] p-4 hover:shadow-[0_3px_14px_rgba(28,26,20,0.07)] transition-shadow duration-[180ms] animate-fade-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">{item.icon}</span>
                <div className="text-right">
                  <p className={`font-display text-[22px] font-extrabold leading-none ${s.qty}`}>{item.qty}</p>
                  <p className="text-[10px] text-black/40 mt-0.5">{item.unit}</p>
                </div>
              </div>
              <p className="text-[13px] font-semibold text-soil mb-0.5">{item.name}</p>
              <p className="text-[11px] text-black/45 mb-2">{item.location}</p>
              <div className="bg-parch rounded-full h-[5px]">
                <div className={`h-[5px] rounded-full ${s.bar}`} style={{ width: `${item.pct}%` }} />
              </div>
            </div>
          )
        })}

        {/* Add item card */}
        <div className="bg-parch border border-dashed border-black/[0.18] rounded-[12px] p-4 flex items-center justify-center cursor-pointer min-h-[120px] hover:bg-parch/70 transition-colors group">
          <div className="text-center text-black/30 group-hover:text-black/50 transition-colors">
            <p className="text-2xl mb-1.5">＋</p>
            <p className="text-[12px] font-medium">Add stock item</p>
          </div>
        </div>
      </div>
    </div>
  )
}
