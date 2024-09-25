const Icon = ({ icon, size, addClass }) => {
    const IconComponent = icon;
    const className = 'size-[' + size + ']';
    const classNameMerge = className + ' ' + (addClass ? addClass : '')

    return (
        <IconComponent className={classNameMerge}/>
    )
}

export default Icon;