import { useCallback } from "react"

export const useHttp = () => {

    const request = useCallback(async(url)=>{
        try{
            const response = await fetch(url);

            const data = await response.json();
        
            return data.results.map(item => {
                return({
                    species: item.species,
                    title: item.name,
                    image: item.image,
                    link: item.url,
                    status: item.status,
                    gender: item.gender,
                    liked: false,
                    color: 'rgba(255, 255, 255, .5)',
                    id: item.id
                })
            })
        }
        catch(e){
            console.log(e)
            throw e;
        }
    })


    return {request}
}
