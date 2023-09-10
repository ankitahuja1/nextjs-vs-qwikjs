import Link from "next/link";

const Sidebar = async () => {
  const dashboardMenuItems = [
    { id: 1, name: "Home", icon: "🏠", link: "/dashboard/home" },
    { id: 2, name: "Profile", icon: "👤", link: "/dashboard/profile" },
    { id: 3, name: "Settings", icon: "⚙️", link: "/dashboard/settings" },
    { id: 4, name: "Messages", icon: "💌", link: "/dashboard/messages" },
    { id: 5, name: "Help", icon: "❓", link: "/dashboard/help" },
  ];
  return (
    <div>
      <ul>
        {dashboardMenuItems.map((item) => (
          <li key={item.id}>
            <Link href={item.link}>
              <span>{item.icon}</span> {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;