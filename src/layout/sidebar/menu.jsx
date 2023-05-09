import { Home, RefreshCcw, Users, Server,Box, Info, Check, Plus, Sunrise } from 'react-feather';

export const MENUITEMS = [
    {
        menutitle: "General",
        menucontent: "Ready to use Apps",
        Items: [
            { path: `${process.env.PUBLIC_URL}/dashboard`, icon: Home, title: 'Dashboard', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/investment`, icon: Server, title: 'Farming Plans', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/active`, icon: Check, title: 'Active Plans List', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/transactions`, icon: RefreshCcw, title: 'Transaction History', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/marketing`, icon: Sunrise, type: 'link', active: false, title: 'Marketing Tools' },
        ]
    },
    {
        menutitle: "My Team",
        Items: [
            { path: `${process.env.PUBLIC_URL}/rank`, icon: Info, title: 'Rank Info', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/team`, icon: Users, title: 'My Team', type: 'link' },
        ]
    },
    {
        menutitle: "Admin",
        Items: [
            { path: `${process.env.PUBLIC_URL}/admin/dashboard`, icon: Home, title: 'Dashboard', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/new-plan`, icon: Plus, title: 'Add New Plan', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/plans`, icon: Box, title: 'Plans List', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/users`, icon: Users, title: 'Users List', type: 'link' },
        ]
    },


]