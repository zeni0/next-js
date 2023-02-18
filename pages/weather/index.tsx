import Layout from "@/components/Layout"
import Link from "next/link";

const API_KEY = "51164f02177e21be83fecd5fe32bafab"
export default function Weather({ results }) {
    return(
    <Layout>
        <h1>Weather for {results.name}</h1>
        <p>Temp: {results.main.temp}</p>
        <p>Feels like: {results.main.feels_like}</p>
        <p>Temp min: {results.main.temp_min}</p>
        <p>Temp max: {results.main.temp_max}</p>
    </Layout>
    )
}

export async function getStaticProps() {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=-37.8142176&lon=144.9631608&appid=${API_KEY}&units=metric`
    const response = await fetch(URL)
    const data = await response.json()
    
    return {
        props: {
            results: data
        }
    }
}