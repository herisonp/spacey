function FeatureBox({iconURL, iconAlt, description}){
    return (
        <div className="w-52 h-fit p-0 flex flex-col justify-start items-start gap-2">
            <img
                className="w-14"
                src={iconURL}
                alt={iconAlt}
            />
            <p className="text-base text-spacegray-05">{description}</p>
        </div>
    )
}

export default FeatureBox;