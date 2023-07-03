import Card from "./Card"

export default function SearchResults(){
    return (
        <div className="search-results">
            <h1>Results for One Piece</h1>
            <div className="card-arena">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}