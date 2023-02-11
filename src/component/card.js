const Card = ({author, cover,name,url}) => {
    return (
        <div className=" border">
            <img src={cover} alt="" />
            <div className="px-2 py-3 ">
                <p className="text-xs">Author:{author}</p>
                <b>{name}</b><br />
                <a href={url} className='text-blue-500'  rel="noreferrer"target="_blank">Read Now</a>
            </div>
        </div>
    );
}

export default Card;