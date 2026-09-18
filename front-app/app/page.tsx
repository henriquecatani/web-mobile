import AppItemCard from "@/app/components/app-item/AppItemCard";

export default function HomePage() {
    return (
        <>
            <section className="py-2 text-center">
                <h3>Produtos em destaque</h3>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <AppItemCard />
                        </div>
                        <div className="col">
                            <AppItemCard />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <AppItemCard />
                        </div>
                        <div className="col">
                            <AppItemCard />
                        </div>
                    </div>
                </div>
            </section>
        </> 
    )
}