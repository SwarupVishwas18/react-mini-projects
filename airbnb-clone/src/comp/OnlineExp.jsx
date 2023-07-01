import Card from './Card'

export default function OnlineExp(){

    const data = [{
        pic:"swimming.png",
        rating: "5.0",
        ratingCount: 6,
        country: "USA",
        title:"Life lessons with Katie Zaferes",
        rate: 136,
        isOnline: false,
        count: 0
    },
    {
        pic:"wedding.png",
        rating: "5.0",
        ratingCount: 60,
        country: "India",
        title:"Learn wedding photography",
        rate: 125,
        isOnline: true,
        count: 5
    },
    {
        pic:"bike.png",
        rating: "4.8",
        ratingCount: 2,
        country: "USA",
        title:"Group Mountain Biking",
        rate: 50,
        isOnline: false,
        count: 5
    }]

    const dataDiv = data.map(el => <Card key={el.title} pic={el.pic} rating={el.rating} ratingCount={el.ratingCount} country={el.country} title={el.title} rate={el.rate} isOnline={el.isOnline} count={el.count} />)

    return (
        <div className="online-exp">
        <h1>
            Online Experience
        </h1>
        <div className="sub-title">
        Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </div>
        <div className="card-arena">
            {dataDiv}
        </div>
        </div>

    )
}