function Avatar({url, className}) {
    return (
        <img
            loading="lazy"
            className={`rounded-full h-11 cursor-pointer ${className} transition duration-150 transform hover:scale-110`}
            src={url}
            alt="profile pic"
         />
    )
}

export default Avatar
