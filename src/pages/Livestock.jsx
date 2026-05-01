import { AlertStrip, SectionHead, Tag, StatusPill, Card } from '../components/UI.jsx'

const animals = [
  {
    icon: '🐄',
    name: 'Dairy Herd — Block A',
    meta: '42 heads · Friesian · Avg 6y',
    feature: { type: 'must', label: 'Must · Health' },
    count: 42,
    countColor: 'text-soil',
    healthDot: 'bg-sage',
    healthLabel: 'Healthy',
    healthColor: 'text-fern',
    pills: [
      { status: 'done', label: 'Vaccinated' },
      { status: 'done', label: '✓ Healthy' },
    ],
  },
  {
    icon: '🐷',
    name: 'Pig Unit — Pen 3',
    meta: '65 heads · Large White',
    feature: { type: 'should', label: 'Should · Disease' },
    count: 65,
    countColor: 'text-amber-farm',
    healthDot: 'bg-amber-farm',
    healthLabel: 'Monitor',
    healthColor: 'text-amber-farm',
    pills: [
      { status: 'due', label: '⚠ 2 Flagged' },
      { status: 'due', label: 'Feeding Due' },
    ],
  },
  {
    icon: '🐔',
    name: 'Poultry — Barn B',
    meta: '500 birds · Rhode Island Red',
    feature: { type: 'could', label: 'Could · Vocal AI' },
    count: 500,
    countColor: 'text-soil',
    healthDot: 'bg-sage',
    healthLabel: 'Healthy',
    healthColor: 'text-fern',
    pills: [
      { status: 'done', label: '✓ Healthy' },
      { status: 'done', label: 'Vaccinated' },
    ],
  },
  {
    icon: '🐑',
    name: 'Sheep Flock — Pasture C',
    meta: '41 heads · Merino',
    feature: { type: 'must', label: 'Must · Health' },
    count: 41,
    countColor: 'text-soil',
    healthDot: 'bg-sage',
    healthLabel: 'Healthy',
    healthColor: 'text-fern',
    pills: [
      { status: 'done', label: '✓ Healthy' },
    ],
  },
]

export default function Livestock() {
  return (
    <div className="p-7 md:p-8">
      <AlertStrip icon="🔬" title="Disease Detection · Should Feature" badge="Should" variant="red">
        Pig #P-22 showing respiratory symptoms. Isolate &amp; consult vet recommended.
      </AlertStrip>

      <Card>
        <div className="p-[22px]">
          <SectionHead title="All Livestock" sub="148 animals · 4 groups" />

          {/* Desktop table */}
          <table className="w-full border-collapse hidden md:table">
            <thead>
              <tr>
                {['Animal Group', 'Feature', 'Count', 'Health', 'Tags'].map(h => (
                  <th key={h} className="text-[10px] font-medium tracking-[0.12em] uppercase text-black/38 pr-4 pb-2.5 text-left border-b border-black/[0.12]">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {animals.map(a => (
                <tr key={a.name} className="hover:bg-black/[0.015]">
                  <td className="py-3.5 pr-4 border-b border-black/[0.12]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 flex items-center justify-center bg-parch rounded-lg text-xl flex-shrink-0">
                        {a.icon}
                      </div>
                      <div>
                        <p className="font-medium text-[13px] text-soil">{a.name}</p>
                        <p className="text-[11px] text-black/45">{a.meta}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 pr-4 border-b border-black/[0.12]">
                    <Tag type={a.feature.type}>{a.feature.label}</Tag>
                  </td>
                  <td className="py-3.5 pr-4 border-b border-black/[0.12]">
                    <span className={`font-display text-xl font-bold ${a.countColor}`}>{a.count}</span>
                  </td>
                  <td className="py-3.5 pr-4 border-b border-black/[0.12]">
                    <span className={`w-2 h-2 rounded-full inline-block mr-1.5 ${a.healthDot}`} />
                    <span className={`text-[12px] ${a.healthColor}`}>{a.healthLabel}</span>
                  </td>
                  <td className="py-3.5 border-b border-black/[0.12]">
                    <div className="flex gap-1.5 flex-wrap">
                      {a.pills.map(p => (
                        <StatusPill key={p.label} status={p.status}>{p.label}</StatusPill>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile card list */}
          <div className="md:hidden flex flex-col divide-y divide-black/[0.08]">
            {animals.map(a => (
              <div key={a.name} className="py-3.5 flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-parch rounded-lg text-xl flex-shrink-0">
                  {a.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-medium text-[13px] text-soil">{a.name}</p>
                    <Tag type={a.feature.type}>{a.feature.label}</Tag>
                  </div>
                  <p className="text-[11px] text-black/45 mt-0.5">{a.meta}</p>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <div className="flex items-center">
                      <span className={`w-2 h-2 rounded-full inline-block mr-1.5 ${a.healthDot}`} />
                      <span className={`text-[12px] ${a.healthColor}`}>{a.healthLabel}</span>
                    </div>
                    {a.pills.map(p => (
                      <StatusPill key={p.label} status={p.status}>{p.label}</StatusPill>
                    ))}
                  </div>
                </div>
                <span className={`font-display text-xl font-bold flex-shrink-0 ${a.countColor}`}>{a.count}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}
