import OnePiece from "../assets/OnePiece.jpg";
import star from "../assets/star.png";

export default function MoreInfo() {
  // give me function of retrieving date current date
  function getDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    // log it
    console.log(day, month, year);
  }
  return (
    <div className="more-info">
      <h1>Manga - One Piece</h1>
      <div className="manga-arena">
        <div className="ls">
          <div className="img">
            <img src={OnePiece} width={400} alt="" />
          </div>
          <div className="head">
            <h2>One Piece</h2>
            <div className="rating">
              <div className="rating-img">
                <img width={15} src={star} alt="rating" />
              </div>
              <div className="rating">9.97</div>
            </div>
          </div>
          <div className="sub-head">
            <div className="publishing">Status : Publishing</div>
            <div className="date">Jul 22, 1997 to ?</div>
          </div>
          <div className="sub-head">
            <div className="top-rank">Rank : 4</div>
            <div className="author">Author : Oda, Eiichiro</div>
          </div>
        </div>
        <div className="rs">
          <h2>Description</h2>
          <div className="desc">
            Gol D. Roger, a man referred to as the &quot;King of the
            Pirates&quot; is set to be executed by the World Government. But
            just before his demise, he confirms the existence of a great
            treasure, One Piece, located somewhere within the vast ocean known
            as the Grand Line. Announcing that One Piece can be claimed by
            anyone worthy enough to reach it, the King of the Pirates is
            executed and the Great Age of Pirates begins. Twenty-two years
            later, a young man by the name of Monkey D. Luffy is ready to embark
            on his own adventure, searching for One Piece and striving to become
            the new King of the Pirates. Armed with just a straw hat, a small
            boat, and an elastic body, he sets out on a fantastic journey to
            gather his own crew and a worthy ship that will take them across the
            Grand Line to claim the greatest status on the high seas. [Written
            by MAL Rewrite]
          </div>
          <h2>Background</h2>
          <div className="background">
            One Piece is the highest selling manga series of all time, with over
            500 million copies in circulation as of 2022. Volume 67 of the
            series currently holds the record for highest first print run of any
            manga (including books) of all time in Japan, with 4.05 million in
            2012. The series was a finalist for the Tezuka Osamu Cultural Prize
            three times in a row from 2000 to 2002. In 2012, it won the 41st
            Japan Cartoonists Association Award Grand Prize, alongside Kimuchi
            Yokoyama's Neko Darake. VIZ Media has published One Piece in English
            under the Shonen Jump imprint since January 2, 2003 and in 3-in-1
            omnibus editions since December 1, 2009. VIZ Media released three
            boxed sets for the manga; the first including the first 23 volumes
            released on November 5, 2013, the second including volumes 24-46
            released on November 4, 2014, and the third including volumes 47-70
            released on October 4, 2016. The series has also been published in
            numerous amounts of languages worldwide including; Korean, Malay,
            Indonesian, Chinese, Thai, Vietnamese, German, French, Italian,
            Spanish, Portuguese, Swedish, Danish, Norwegian, Finnish, Polish,
            Turkish, and Russian.
          </div>
        </div>
      </div>
    </div>
  );
}
