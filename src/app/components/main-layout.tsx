import ComponentLayout from "@/app_modules/components/main_layout";

export async function MainLayout({ children }: { children: React.ReactNode }) {
    return <>
    <ComponentLayout>
        {children}
    </ComponentLayout>
    </>
    
}