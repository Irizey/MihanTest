import './link.scss'
function Link({text}) {
    return (
        <>
            <a className='link' href="#">{text}</a>
        </>
    )
}

export default Link