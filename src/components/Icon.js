const Icon = ({ icon, size, addClass }) => {
    const IconComponent = icon;
    
    return (
        <IconComponent size={size} className={addClass}/>
    )
}

export default Icon;