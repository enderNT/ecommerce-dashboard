export default function HeroSectionActivityCard() {
    return (
        <>
            <div
                className="card bg-white shadow-md w-[40vw] grid row-start-4 ml-6 text-black rounded-2xl">
                <div className="card-body">
                    <div className="flex">
                        <h3>Recent Activity</h3>
                        <a className="link link-hover">View All</a>
                    </div>
                    <ul>
                        <div className="flex">
                            <input type="radio" name="radio-2" className="radio radio-primary" defaultChecked />
                            <p>Elemento 1</p>
                            <div className="badge badge-warning gap-2">
                                Urgent
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="flex">
                            <input type="radio" name="radio-2" className="radio radio-primary" />
                            <p>Elemento 2</p>
                            <div className="badge badge-warning gap-2">
                                Urgent
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}
