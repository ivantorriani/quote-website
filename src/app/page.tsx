import styles from './page.module.css';
import BookSchema from './database/bookschema';
//import QuoteSchema from './database/quoteschema';
import Image from 'next/image';
import Link from 'next/link';
import { format } from "date-fns";

console.log(format(new Date(), "yyyy-MM-dd HH:mm:ss")); // 2025-02-14 12:34:56
const currentDate = format(new Date(), "MMMM dd ");

export default function Page() {
  return (
    <main>
      <head>
        <title> Ivan Loves Quotes</title>
      </head>
      <body className={styles.body}>
      <div className={styles.header}>
  <h1 className={styles.title}>
  Hey, Im Ivan!
  </h1>
  <p className = {styles.welcomeMessage}> Welcome to my page </p>
</div>




      <div className={styles.booksContainer}>
      <h4 className={styles.slide}>
        What I am currently reading:
      </h4>
        <div className={styles.booksBar}>
          {BookSchema.map((book, index) => (
            <div key={index} className={styles.book}>
              <img src={book.image} alt={book.title} />
              <h2>{book.title}</h2>
              <p>{book.author}</p>
            </div>
          ))}
        </div>
      </div>

      <video className = {styles.bgVideo} autoPlay loop muted playsInline>
        <source src="ambience.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>




      <div className={styles.quotetitle}>
        <h4> One quote I liked today </h4>
      </div>
      <div className={styles.quoteContainer}>
  <video className={styles.quoteVideo} autoPlay loop muted>
    <source src="monet.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <p className={styles.quotetheday}>
    You did not kill the fish only to keep alive and to sell for food, he thought. You killed him for pride and because you are a fisherman. You loved him when he was alive and you loved him after.
  </p>
  <p className={styles.author}>
    Santiago (The Old Man), The Old Man and the Sea, Ernest Hemingway
  </p>
  <p className={styles.description}>
    Santiago, because he has not caught a fish in years, is called salao by the local fishermen. Out at sea, Santiago finally catches the biggest marlin the town would have ever seen and ties it to the side of his skiff. But, on the way back to the town, sharks attack the fish until only an unrecognizable carcass that no one would appreciate remains. For a while of even refusing to even look at the fish out of shame, Santiago remembers that he fished because he was a fisherman; not for praise or appreciation, but because he loved to do it. He realizes that he loved the fish because he fought for it and caught it, not for what people in town would think of it.
  </p>
</div>
<div className={styles.slide2}>
  <p>Interested in more quotes? Check out </p> <Link href="/quote-archive"> the quote archive </Link>
</div>
<div className={styles.slide2}>
  <p> Interested in more books? Check out </p> <Link href="/book-archive"> the book archive </Link>
</div>
      <Image

        src="/endpic.png"
        alt="Cover Image"
        width={100}
        height={100}
        className={styles.footer}
      />
        
      </body>
    </main>
  );
}
