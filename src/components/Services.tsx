import { VillaCard } from "./ui/card"

export const Services = () => {
    const services = [
        {
            img: "/",
            title: "4 Bedroom villa",
            facilities: "Main Facilities",
            features: [
                "Wifi provide",
                "TV & Karaoke",
                "Kitchen",
                "Swimming Pool"
            ],
            beds: "4 bed",
            persons: "8 persons",
            price: "Rp 3.749.000 /night",
            popular: false
        },
        {
            img: "/",
            title: "Joglo house",
            facilities: "Main Facilities",
            features: [
                "Wifi provide",
                "TV & Karaoke",
                "Kitchen",
                "Swimming Pool"
            ],
            beds: "4 bed",
            persons: "4 persons",
            price: "Rp 3.749.000 /night",
            popular: false
        },
        {
            img: "/",
            title: "Kudus house",
            facilities: "Main Facilities",
            features: [
                "Wifi provide",
                "TV & Karaoke",
                "Kitchen",
            ],
            beds: "4 bed",
            persons: "4 persons",
            price: "Rp 3.999.000 /night",
            popular: false
        },
    ]

    return(
        <section id="#categorys">
            {services.map((item) => (
                <VillaCard img={item.img} title={item.title} facilities={item.facilities} features={item.facilities}/>
            ))}
        </section>
    )
}