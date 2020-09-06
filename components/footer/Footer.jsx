export default function Footer({ copyright = '2020' }) {
  return (
    <footer className="footer-main text-center">
      {/* <small>
          All logos, trademarks and registered trademarks are the property of
          their respective owners.
          <a href="https://github.com/dyarfi/nextjs-sequedivze">
            Source Code @ {copyright}
          </a>
        </small> */}
      <div
        className="row"
        style={{ paddingTop: '1rem', paddingBottom: '1rem' }}
      >
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <img src="/nextjs.svg" alt="Next.js" width="76" />
        </a>
        and
        <a href="https://jwt.io/">
          <img src="/jwt.svg" alt="JWT" width="84" />
        </a>
        {/* <div>
          <a href="https://github.com/dyarfi/nextjs-sequelize">
            Source Code @ {copyright}
          </a>
        </div> */}
        <span>
          All logos, trademarks and registered trademarks are the property of
          their respective owners.
        </span>
      </div>
    </footer>
  );
}
