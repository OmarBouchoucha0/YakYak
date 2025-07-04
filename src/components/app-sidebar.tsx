"use client"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/theme-button"
import { useUsername } from '@/hooks/username'

export function AppSidebar() {
    const username = useUsername()

    return (
        <Sidebar>
            <SidebarHeader className="p-4 border-b">
                <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                        <span className="text-sm text-muted-foreground">Username</span>
                        <p className="font-medium">
                            {username}
                        </p>
                    </div>
                    <ModeToggle />
                </div>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup />
                <SidebarGroup />
            </SidebarContent>

            <SidebarFooter >
            </SidebarFooter>
        </Sidebar >
    )
}
