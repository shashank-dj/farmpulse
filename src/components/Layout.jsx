import { useState } from 'react'
import { Outlet, NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/dashboard', icon: '📊', label: 'Dashboard', badge: null },

  { to: '/livestock', icon: '🐄', label: 'Livestock', badge: { text: '2', color: 'bg-rust-farm' } },

  { to: '/stock', icon: '📦', label: 'Stock', badge: { text: '!', color: 'bg-amber-farm text-soil' } },

  { to: '/account', icon: '👤', label: 'Account', badge: null },
]

export default function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()

  // ✅ Improved title detection (handles nested routes)
  const pageTitle =
    navItems
      .sort((a, b) => b.to.length - a.to.length)
      .find(n => location.pathname.startsWith(n.to))
      ?.label || 'FarmPulse'

  return (
    <div className="flex min-h-screen overflow-hidden bg-cream">

      {/* Overlay (mobile) */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[200] md:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={[
          'fixed md:sticky top-0 left-0 h-screen z-[300] md:z-auto',
          'w-[220px] min-w-[220px] bg-soil flex flex-col',
          'transition-transform duration-[280ms]',
          drawerOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
        ].join(' ')}
      >
        {/* Brand */}
        <div className="px-[22px] pt-7 pb-[22px] border-b border-white/[0.08]">
          <p className="text-[9px] tracking-[0.22em] uppercase text-white/35 mb-1.5">Farm Management</p>
          <div className="font-display text-2xl font-black text-cream flex items-center gap-2 leading-none">
            <span className="w-2 h-2 rounded-full bg-sage flex-shrink-0" />
            FarmPulse
          </div>
          <p className="text-[11px] text-white/40 mt-1 font-light">Operations Dashboard</p>
        </div>

        {/* Farm Card */}
        <div className="mx-3.5 my-4 bg-white/[0.06] border border-white/10 rounded-[10px] px-3.5 py-3">
          <p className="text-[9px] tracking-[0.16em] uppercase text-white/35 mb-1">Active Farm</p>
          <p className="font-display text-[15px] font-semibold text-cream">Greenfield Estate</p>
          <p className="text-[11px] text-white/40 mt-0.5">Lombardy · 340 ha</p>
        </div>

        {/* Navigation */}
        <p className="text-[9px] tracking-[0.18em] uppercase text-white/25 px-[22px] pt-3.5 pb-1.5">Navigate</p>
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={() => setDrawerOpen(false)}
            className={({ isActive }) => [
              'flex items-center gap-2.5 px-[22px] py-2.5 text-[13px]',
              'border-l-[3px] transition-all duration-[180ms]',

              // ✅ Special highlight for NutriLoop
              isActive
                ? item.to === '/nutriloop'
                  ? 'text-cream bg-[#90caf9]/20 border-[#90caf9] font-semibold'
                  : 'text-cream bg-white/[0.07] border-sage font-medium'
                : 'text-white/50 border-transparent hover:text-cream hover:bg-white/[0.04]',
            ].join(' ')}
          >
            <span className="text-base min-w-[20px] text-center">{item.icon}</span>
            <span className="flex-1">{item.label}</span>

            {item.badge && (
              <span className={`text-[10px] font-bold px-1.5 py-px rounded-full ${item.badge.color}`}>
                {item.badge.text}
              </span>
            )}
          </NavLink>
        ))}

        {/* Priority Legend */}
        <p className="text-[9px] tracking-[0.18em] uppercase text-white/25 px-[22px] pt-5 pb-2">Feature Priority</p>
        <div className="px-3.5 pb-4 flex flex-col gap-1">
          {[
            { dot: 'bg-sage', label: 'Must — Core' },
            { dot: 'bg-[#90caf9]', label: 'Should — Important' },
            { dot: 'bg-amber-farm', label: 'Could — Nice-to-have' },
          ].map(({ dot, label }) => (
            <div key={label} className="flex items-center gap-1.5 text-[11px] text-white/40 px-2 py-1 rounded-md">
              <span className={`w-[7px] h-[7px] rounded-full ${dot}`} />
              {label}
            </div>
          ))}
        </div>

        {/* User */}
        <div className="mt-auto px-3.5 py-4 border-t border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            <div className="w-[34px] h-[34px] bg-fern rounded-full flex items-center justify-center text-base">
              👨‍🌾
            </div>
            <div>
              <p className="text-[12px] font-medium text-white/80">Marco Bianchi</p>
              <p className="text-[10px] text-white/35">Farm Owner</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">

        {/* Topbar */}
        <div className="bg-[#fdfcf8] border-b border-black/[0.12] px-4 md:px-8 h-[54px] flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2.5">
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center text-xl text-soil"
              onClick={() => setDrawerOpen(true)}
            >
              ☰
            </button>
            <h1 className="font-display text-[18px] font-semibold text-soil">{pageTitle}</h1>
            <span className="hidden md:block text-[12px] text-black/40">
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button className="w-8 h-8 flex items-center justify-center text-black/50">🔔</button>
            <button className="hidden md:flex w-8 h-8 items-center justify-center text-black/50">⚙️</button>
            <button className="hidden md:block text-[13px] px-4 py-1.5 rounded-lg bg-moss text-white">
              ＋ Add Entry
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto pb-[72px] md:pb-0">
          <Outlet />
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-soil border-t border-white/10">
        <div className="flex">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => [
                'flex-1 flex flex-col items-center py-2 relative',
                isActive ? 'text-sage' : 'text-white/40',
              ].join(' ')}
            >
              {item.badge && (
                <span className={`absolute top-0 right-[calc(50%-18px)] text-[9px] px-1 rounded-full ${item.badge.color}`}>
                  {item.badge.text}
                </span>
              )}
              <span className="text-xl">{item.icon}</span>
              <span className="text-[10px]">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>

    </div>
  )
}
