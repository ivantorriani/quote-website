import styles from './page.module.css';
import BookSchema from './database/bookschema';
import QuoteSchema from './database/quoteschema';
import Image from 'next/image';
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
        <h4> and some of my favorite quotes...</h4>
      </div>

      <div className='quoteContainer'>
        {QuoteSchema.map((quote, index) => (
          <div key={index} className = {styles.quote}>
            <p>{quote.quote}</p>
            <h3>{quote.author}</h3>
            <h4>{quote.book}</h4>
          </div>
        ))}
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
