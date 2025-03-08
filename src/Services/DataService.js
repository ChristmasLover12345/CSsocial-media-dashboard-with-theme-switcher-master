

const FetchData = async () =>{
    const response = await fetch("https://randomendpoint-apbag3huhfhuaxbz.westus-01.azurewebsites.net/SocialMedia/stats")
    const data = await response.json()
    console.log(data)
    return data

}

const SaveMode = (mode) =>{

 localStorage.setItem('Preference', JSON.stringify(mode))

}

const GetMode = () =>{
    let data = localStorage.getItem('Preference')
    if (data == null)
    {
        return "dark"
    }
    return JSON.parse(data)
    
}

export { FetchData, SaveMode, GetMode }