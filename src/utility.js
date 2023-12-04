import axios from "axios";

export const getData=async(url,callback)=>{
    try{
        let response= await axios.get(url)
        callback(response.data)

    }catch(err){
        console.log(err,'Hiba van')

    }
}

export const FetchData=async(url,callback,id=null)=>{
    try{
        let response= await fetch(url)
        const data= await response.json()
        if(id==null){
            callback(data)
        }else{
            const filteredData=data.filter(obj=>obj.id==id)
            callback(filteredData[0])
        }
        

    }catch(err){
        console.log(err,'Hiba van')

    }
}