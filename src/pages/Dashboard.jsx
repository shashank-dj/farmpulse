import { AlertStrip, MetricCard, SectionHead, Tag, StatusPill, Chip, Card } from '../components/UI.jsx'

const feedSchedule = [
  { icon: '🍃', name: 'Morning — Cattle',   time: '07:00 AM', heads: 42,  progress: 100, status: 'done',    statusLabel: '✓ Done'  },
  { icon: '🐷', name: 'Afternoon — Pigs',   time: '02:00 PM', heads: 65,  progress: 50,  status: 'due',     statusLabel: '→ Due'   },
  { icon: '🐔', name: 'Evening — Poultry',  time: '06:00 PM', heads: 500, progress: 0,   status: 'pending', statusLabel: 'Pending' },
]

export default function Dashboard() {
  return (
    <div className="p-7 md:p-8">

      {/* Chips */}
      <div className="flex gap-2 flex-wrap mb-6">
        <Chip type="must">🟢 Must · Livestock Dashboard</Chip>
        <Chip type="must">🟢 Must · Stock Management</Chip>
        <Chip type="should">🔵 Should · Precision Feeding</Chip>
        <Chip type="should">🔵 Should · Disease Detection</Chip>
        <Chip type="could">🟡 Could · Vocalization AI</Chip>
      </div>

      {/* Alert */}
      <AlertStrip icon="🌡️" title="Health Alert · MUST Feature" badge="Feature 1 · Must" variant="amber">
        2 pigs flagged for early disease check. Review before evening feeding round.
      </AlertStrip>

      {/* Metrics grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <MetricCard
          eyebrow="🐄 Total Livestock"
          value="148"
          label="Animals on farm"
          change="3 added this month"
          changeDir="up"
          color="green"
          className="animate-fade-up"
        />
        <MetricCard
          eyebrow="🌾 Feed Stock"
          value="2.4t"
          label="Current inventory"
          change="Low — reorder soon"
          changeDir="down"
          color="amber"
          className="animate-fade-up-1"
        />
        <MetricCard
          eyebrow="💉 Vaccinated"
          value="94%"
          label="Of total herd"
          change="On schedule"
          changeDir="up"
          color="blue"
          className="animate-fade-up-2"
        />
        <MetricCard
          eyebrow="⚠️ Needs Attention"
          value="2"
          label="Animals flagged"
          change="Action required"
          changeDir="down"
          color="red"
          className="animate-fade-up-3"
        />

        {/* Health overview — spans 2 cols */}
        <div className="col-span-2 bg-moss rounded-[14px] px-6 py-[22px] text-white animate-fade-up-4">
          <p className="text-[10px] tracking-[0.16em] uppercase text-white/45 mb-4">Livestock Health Overview · Must Feature</p>
          <div className="flex">
            {[
              { num: '141', label: 'Healthy', color: 'text-leaf' },
              { num: '5',   label: 'Monitor', color: 'text-amber-farm' },
              { num: '2',   label: 'Critical', color: 'text-[#ff8a80]' },
            ].map((item, i) => (
              <div key={item.label} className={`flex-1 text-center relative ${i > 0 ? 'before:absolute before:left-0 before:top-[10%] before:bottom-[10%] before:w-px before:bg-white/[0.12]' : ''}`}>
                <p className={`font-display text-[38px] font-black leading-none mb-1 ${item.color}`}>{item.num}</p>
                <p className="text-[11px] text-white/50">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feeding schedule — spans 2 cols */}
        <Card className="col-span-2 animate-fade-up-5">
          <div className="p-[22px] pb-5">
            <SectionHead title="Today's Feeding Schedule">
              <Tag type="should">Should</Tag>
            </SectionHead>

            {/* Desktop table */}
            <table className="w-full border-collapse hidden sm:table">
              <thead>
                <tr>
                  {['Round', 'Time', 'Heads', 'Progress', 'Status'].map(h => (
                    <th key={h} className="text-[10px] font-medium tracking-[0.12em] uppercase text-black/38 pb-2.5 text-left border-b border-black/[0.12]">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {feedSchedule.map(row => (
                  <tr key={row.name}>
                    <td className="py-3 border-b border-black/[0.12] last:border-0">
                      <span className="text-lg mr-2">{row.icon}</span>
                      <span className="font-medium text-soil text-[13px]">{row.name}</span>
                    </td>
                    <td className="py-3 text-[12px] text-black/50 border-b border-black/[0.12]">{row.time}</td>
                    <td className="py-3 font-semibold text-[13px] border-b border-black/[0.12]">{row.heads}</td>
                    <td className="py-3 border-b border-black/[0.12]">
                      <div className="bg-parch rounded-full h-1 w-[100px]">
                        <div
                          className={`h-1 rounded-full ${row.progress === 100 ? 'bg-sage' : 'bg-amber-farm'}`}
                          style={{ width: `${row.progress}%` }}
                        />
                      </div>
                    </td>
                    <td className="py-3 border-b border-black/[0.12]">
                      <StatusPill status={row.status}>{row.statusLabel}</StatusPill>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Mobile card list */}
            <div className="sm:hidden flex flex-col divide-y divide-black/[0.08]">
              {feedSchedule.map(row => (
                <div key={row.name} className="py-3 flex items-center gap-3">
                  <span className="text-xl">{row.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-[13px] text-soil truncate">{row.name}</p>
                    <p className="text-[11px] text-black/45">{row.time} · {row.heads} heads</p>
                  </div>
                  <StatusPill status={row.status}>{row.statusLabel}</StatusPill>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
