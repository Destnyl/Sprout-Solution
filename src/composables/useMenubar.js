import { ref } from 'vue'

const useMenubar = () => {
    const navList = ref([
        {
            title: 'My Requests',
            active: true,
            hasChildren: true,
            children: []
        },
        {
            title: 'My Team',
            active: true,
            hasChildren: true,
            children: []
        },
        {
            title: 'Company',
            active: true,
            hasChildren: true,
            children: []
        },
        {
            title: 'Administration Tools',
            active: true,
            hasChildren: true,
            children: []
        },
        {
            title: 'Maintenance',
            active: true,
            hasChildren: true,
            children: []
        }
    ])

    const isOpen = ref(false)

    const toggle = () => {
        isOpen.value = !isOpen.value
    }

    return {
        navList,
        isOpen,

        toggle
    }
}

export default useMenubar;