export default function HeroSectionInboxCard() {
    return (
        <>
            <div className='card bg-base-100 w-96 shadow-xl'>
            <div className='card-body'>
                <div className="flex space-evenly">
                    <div>
                        <h6>Inbox</h6>
                        <label>Group: Support</label>
                    </div>
                    <a className="link link-hover">View details</a>
                </div>
                <ul>
                    <p>Elemento 1</p>
                    <div className="divider"></div>
                    <p>Elemento 2</p>
                </ul>
            </div>
            </div>
        </>
    )
}