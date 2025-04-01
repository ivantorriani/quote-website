import styles from './page.module.css';
import BookSchema from './database/bookschema';
//import QuoteSchema from './database/quoteschema';
import Image from 'next/image';
import Link from 'next/link';


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
        <h4> Quote of the Day </h4>
      </div>
      <div className={styles.quoteContainer}>
  <video className={styles.quoteVideo} autoPlay loop muted>
    <source src="monet.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <p className={styles.quotetheday}>
    In the dark it was like summer lightning, but the nights were cool and there was not the feeling of a storm coming.
  </p>
  <p className={styles.author}>
    idk , Farewell to Arms, Ernest Hemingway
  </p>
  <p className={styles.description}>
    
  </p>
</div>
<div className={styles.slide2}>
  <p>Interested in more quotes? Check out </p> <Link href="/quote-archive"> the quote archive </Link>
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
