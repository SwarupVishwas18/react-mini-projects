import OnePiece from '../assets/OnePiece.jpg'
import star from '../assets/star.png'


export default function Card(){
    return(
        <div className="card">
            <div className="img">
                <img src={OnePiece} width="200px" alt="" />
            </div>
            <div className="upper">
                <h2>
                    One Piece
                </h2>
                <div className="other">
                    <div className="rating">
                        <div className="rating-img">
                        <img width={15} src={star} alt="rating"  />
                        </div>
                        <div className="rating">
                            9.97
                        </div>
                    </div>
                    <div className="status">
                    Publishing
                    </div>
                </div>
            </div>
        </div>
    )
}