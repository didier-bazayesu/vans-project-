import { NavLink } from "react-router-dom"

function SmartNavLink({ to, label, end = false }) {
  return (
    <NavLink
      to={to}
      end={end}
      // 1. Destructuring isActive to change the text color dynamically
      className={({ isActive }) => 
        `flex flex-col items-center transition-all duration-300 font-semibold 
        ${isActive ? "text-[#FF8C38] scale-110" : "text-gray-500 hover:text-black"}`
      }
    >
      {({ isActive }) => (
        <>
          <span>{label}</span>
          
          {/* 2. Destructuring isActive again to show/hide a professional underline dot */}
          <span 
            className={`h-1.5 w-1.5 rounded-full bg-[#FF8C38] mt-1 transition-all duration-300 
            ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
          />
        </>
      )}
    </NavLink>
  )
}