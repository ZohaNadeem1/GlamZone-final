export const SideMenuList =[
    {
        label: 'Dashboard',
        routerLink: ['/profile']
    },
    {
        label: 'Profile',
        icon: 'pi pi-fw pi-pencil',
        items: [
            {
                label: 'Edit Profile',
                icon: 'pi pi-fw pi-align-left',
                routerLink: ['edit']
            },
            {
                label: 'View Profile',
                icon: 'pi pi-fw pi-align-right',
                routerLink: ['view']
            }
        ]
    },
  {
    label: 'Parlour',
    icon: 'pi pi-fw pi-pencil',
    routerLink: [],
    items: [
        {
            label: 'Edit Parlour',
            icon: 'pi pi-fw pi-align-left',
            routerLink: ['edit/parlour']
        },
        {
            label: 'View Profile',
            icon: 'pi pi-fw pi-align-right',
            routerLink: ['view/parlour']
        }
    ]
},
{
    label: 'Services',
    icon: 'pi pi-fw pi-pencil',
    routerLink: ['services'],
    items: [
        {
            label: 'All Services',
            icon: 'pi pi-fw pi-align-left',
        },
        {
            label: 'Disbaled Services',
            icon: 'pi pi-fw pi-align-left',
            routerLink: ['edit/parlour']
        }
    ]
},
{
    label: 'Jobs',
    icon: 'pi pi-fw pi-pencil',
    routerLink: ['jobs'],
    items: [
        {
            label: 'Posted Jobs',
            icon: 'pi pi-fw pi-align-left'
        },
        {
            label: 'Closed Jobs',
            icon: 'pi pi-fw pi-align-left'
        }
    ]
}
 
];