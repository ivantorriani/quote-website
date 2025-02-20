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
        <Image
          src="/meart-web.png"
          alt="Cover Image"
          width={400}
          height={400}
          />
      <h1 className={styles.typingeffect}>
        Happy {currentDate} !
      </h1>
      <h4 className={styles.slide}>
        Check out what Im reading currently:
      </h4>

      <div className={styles.booksContainer}>
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

      <div className={styles.quotetitle}>
        <h4> Here's one quote I liked today: </h4>
      </div>
      <div className = {styles.quoteContainer}>
          <p className = {styles.quotetheday}> Imagine if each day a man must try to kill the moon, he thought. The moon runs away. But imagine if a man each day should have to try to kill the sun? We were born lucky, he thought</p>
          <p className = {styles.author}>  Santiago (The Old Man), The Old Man and the Sea, Ernest Hemingway</p>
          <p className = {styles.description}> Santiago has not caught a fish in years. But he remembers that, unlike killing the moon or the sun, his goal to catch a fish is achievable. We should be grateful that most of our problems are within our control.</p>
      </div>
      <div className = {styles.slide2}>
        <p>Interested in more quotes? Check out </p> <Link href="/quote-archive"> the quote archive </Link> 
      </div>
      <div className = {styles.slide2}>
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
