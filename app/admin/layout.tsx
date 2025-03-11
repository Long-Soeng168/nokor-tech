import { ThemeProvider } from '@/components/my-theme-provider';
import React from 'react'
import { AppSidebar } from "@/components/app-sidebar"
import { MyAreaChartStackedComponent } from "@/components/my-area-chart-stacked"
import { MyBarChartMultipleComponent } from "@/components/my-bar-chart-multiple"
import { MyLineChartInteractiveComponent } from "@/components/my-line-chart-interactive"
import { ModeToggle } from "@/components/my-mode-toggle"
import { MyPieChartComponent } from "@/components/my-pie-chart"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"


const ClientLayout = (
    {
        children
    }
        :
        {
            children: React.ReactNode;
        }
) => {
    return (
        <>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarInset>
                        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                            <div className="flex gap-4 w-full justify-between">
                                <div className="flex items-center gap-2 px-4">
                                    <SidebarTrigger className="-ml-1" />
                                    <Separator orientation="vertical" className="mr-2 h-4" />
                                    <Breadcrumb>
                                        <BreadcrumbList>
                                            <BreadcrumbItem className="hidden md:block">
                                                <BreadcrumbLink href="#">
                                                    Building Your Application
                                                </BreadcrumbLink>
                                            </BreadcrumbItem>
                                            <BreadcrumbSeparator className="hidden md:block" />
                                            <BreadcrumbItem>
                                                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                                            </BreadcrumbItem>
                                        </BreadcrumbList>
                                    </Breadcrumb>
                                </div>
                                <div className='mr-4'>
                                    <ModeToggle />
                                </div>
                            </div>
                        </header>
                        <main className="flex flex-1 flex-col gap-4 p-4 pt-0">
                            {children}
                        </main>
                    </SidebarInset>
                </SidebarProvider>
            </ThemeProvider>
        </>
    )
}

export default ClientLayout
