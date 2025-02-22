import styles from './quote.module.css';
import QuoteSchema from '../database/quoteschema';

export default function QuoteArchive() {
  return ( 
    <main>
      <title>Quote Archive</title>
      <body>
        <div className={styles.container}>
          <div className={styles.quotebox}>
            {QuoteSchema.map((quote, index) => (
              <div
                key={index}
                className={styles.quote}
                style={{ backgroundImage: `url(${quote.portrait})` }}
              >
                <div className={styles.text}>
                  <div className={styles.titleAuthor}>
                    <h2>{quote.bookname}</h2>
                    <p>{quote.author}</p>
                  </div>
                  <p className={styles.quoteText}>{quote.quote}</p>
                  <p>{quote.analysis}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </body>
    </main>
  );
};
