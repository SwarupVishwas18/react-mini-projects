import satr from '../assets/satr.png'

// eslint-disable-next-line react/prop-types
export default function Card({pic, rating, ratingCount, country, title, rate, isOnline, count}){
    return (
        <div className="card">
            <div className="image">
                <img src={pic} height={300} width="200px" alt={title} />
            </div>
            <div className="upper">
                <span>
                    <img src={satr} alt="Star" />
                </span>
                <span className="rating">
                    {rating}
                </span>
                <span>
                    ({ratingCount})
                </span>
                <span>
                    | {country}
                </span>

            </div>
            <div className="title">
                {title}
            </div>
            <div className="downward">
            <div className="rate">
                <b>From ${rate} / </b> person
            </div>
            <div className="status">
                {isOnline ? <span>ONLINE</span> : count <= 0? <span>SOLD OUT</span>: ""}
            </div>
            </div>
        </div>
    )
}