import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types";
import style from "./styles/footer.scss";

export interface FooterOptions {
  /** Text displayed after the copyright symbol and current year. */
  copyrightText?: string;
  /** Show the copyright line. Defaults to true. */
  copyright?: boolean;
  /** Footer links, displayed on the right on desktop and centered on mobile. */
  links?: Record<string, string>;
}

export default ((opts?: FooterOptions) => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const currentYear = new Date().getFullYear();
    const links = opts?.links ?? {};
    const showCopyright = opts?.copyright !== false;
    const copyrightText = opts?.copyrightText?.trim();

    return (
      <footer class={`${displayClass ?? ""}`}>
        <div class="footer-content">
          {showCopyright ? (
            <div class="footer-left">
              <p>
                © {currentYear}
                {copyrightText ? ` ${copyrightText}` : ""}
              </p>
            </div>
          ) : null}
          <div class="footer-right">
            <ul class="footer-links">
              {Object.entries(links).map(([name, url]) => (
                <li key={url}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    );
  };

  Footer.css = style;
  return Footer;
}) satisfies QuartzComponentConstructor;
