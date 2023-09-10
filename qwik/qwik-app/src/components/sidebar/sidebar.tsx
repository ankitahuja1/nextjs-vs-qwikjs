import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Sidebar = component$(() => {

    type MenuItem = {
        id: number;
        name: string;
        icon: string;
        link: string;
      };
    
    const dashboardMenuItems: MenuItem[] = [
        { id: 1, name: 'Home', icon: '🏠', link: '/dashboard/home' },
        { id: 2, name: 'Profile', icon: '👤', link: '/dashboard/profile' },
        { id: 3, name: 'Settings', icon: '⚙️', link: '/dashboard/settings' },
        { id: 4, name: 'Messages', icon: '💌', link: '/dashboard/messages' },
        { id: 5, name: 'Help', icon: '❓', link: '/dashboard/help' },
      ];

    return( 
        <div>
        <ul>
          {dashboardMenuItems.map(item => (
            <li key={item.id}>
              <Link href={item.link}>
                <span>{item.icon}</span> {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
})