function ChatOverviewListItem({data}) {
    // {profileImg, name, lastText}
    return (
        
        <div className="p-1">
            <div className="profile-img d-inline-block align-middle mx-2">
                <img className="img-thumbnail rounded-circle" src={data.profileImg}/>
            </div>
            <div className="content d-inline-block align-middle">
                <p className="contact-name m-0"><strong>{data.name}</strong></p>
                <p className="latest-text m-0">{data.lastText}</p>
            </div>
            <hr className=""/>
        </div>
        );
    
}

export default ChatOverviewListItem;