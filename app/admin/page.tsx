import { MyAreaChartStackedComponent } from '@/components/my-area-chart-stacked'
import { MyBarChartMultipleComponent } from '@/components/my-bar-chart-multiple'
import { MyLineChartInteractiveComponent } from '@/components/my-line-chart-interactive'
import { MyPieChartComponent } from '@/components/my-pie-chart'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="aspect-video rounded-xl bg-muted/50" ><MyAreaChartStackedComponent /></div>
                <div className="aspect-video rounded-xl bg-muted/50" ><MyBarChartMultipleComponent /></div>
                <div className="aspect-video rounded-xl bg-muted/50" ><MyPieChartComponent /></div>
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" >
                <MyLineChartInteractiveComponent />
            </div>
        </div>
    )
}

export default page
